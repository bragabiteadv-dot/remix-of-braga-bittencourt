import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, relative } from "node:path";

// Keep exact route IDs without importing every route back into its own types.
export function updateFileRouteRegistry(root = process.cwd()) {
  const directory = resolve(root, "src/routes");
  const files = readdirSync(directory, { recursive: true }).map(String)
    .filter((file) => /\.(tsx?|jsx?)$/.test(file) && !file.includes("__root"));
  const routePaths = new Set<string>();
  const entries = files.flatMap((file) => {
    const source = readFileSync(resolve(directory, file), "utf8");
    const match = source.match(/createFileRoute\(["']([^"']+)["']\)/);
    if (!match) return [];
    const id = match[1];
    const parts = id.split("/").filter(Boolean);
    const visible = parts.filter((part) => !part.startsWith("_"));
    const fullPath = "/" + visible.join("/") + (id.endsWith("/") && visible.length ? "/" : "");
    const path = parts.at(-1)?.startsWith("_") ? "" : fullPath;
    routePaths.add(fullPath);
    return [`    ${JSON.stringify(id)}: { id: ${JSON.stringify(id)}; path: ${JSON.stringify(path)}; fullPath: ${JSON.stringify(fullPath)}; preLoaderRoute: AnyRoute; parentRoute: typeof RootRoute }`];
  }).sort();
  const content = `// Generated from individual route files by scripts/file-route-registry.ts.\nimport type { AnyRoute } from "@tanstack/react-router";\nimport type { Route as RootRoute } from "./routes/__root";\ndeclare module "@tanstack/react-router" {\n  interface FileRoutesByPath {\n${entries.join("\n")}\n  }\n}\n`;
  const output = resolve(root, "src/file-route-registry.d.ts");
  if (!existsSync(output) || readFileSync(output, "utf8") !== content) writeFileSync(output, content);
  updateResidentMissingRoutes(root, routePaths);
}

// Catalogue combinations without a route file must never be linked (they would 404).
// Regenerated with the registry, so links reappear automatically once a page is created.
function updateResidentMissingRoutes(root: string, routePaths: ReadonlySet<string>) {
  const catalogueFile = resolve(root, "src/data/resident-catalogue.json");
  if (!existsSync(catalogueFile)) return;
  const catalogue = JSON.parse(readFileSync(catalogueFile, "utf8")) as Array<{ path: string; target: string }>;
  const missing = catalogue
    .filter((entry) => entry.path === entry.target && !routePaths.has(entry.path))
    .map((entry) => entry.path)
    .sort();
  const content = `${JSON.stringify(missing, null, 2)}\n`;
  const output = resolve(root, "src/data/resident-missing-routes.json");
  if (!existsSync(output) || readFileSync(output, "utf8") !== content) writeFileSync(output, content);
}

export function fileRouteRegistryPlugin() {
  return {
    name: "file-route-registry",
    configureServer(server: { watcher: { on: (event: string, callback: (file: string) => void) => void } }) {
      let timer: ReturnType<typeof setTimeout> | undefined;
      const refresh = (file: string) => {
        if (!relative(resolve("src/routes"), file).startsWith("..")) {
          clearTimeout(timer);
          timer = setTimeout(() => updateFileRouteRegistry(), 100);
        }
      };
      for (const event of ["add", "change", "unlink"]) server.watcher.on(event, refresh);
    },
  };
}