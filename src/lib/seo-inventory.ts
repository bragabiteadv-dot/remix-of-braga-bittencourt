import catalogue from "@/data/resident-catalogue.json";
import { ARTICLES } from "@/lib/articles";
import { articleSeoDescription, articleSeoTitle } from "@/lib/article-seo";
import { GENERATED_INTERNATIONAL_PATHS } from "@/lib/international-landings";
import { normalizeSitePath } from "@/lib/site";

import officeBetim from "@/assets/office-betim-new.webp";
import officeBH from "@/assets/foto-escritorio-de-bh-25_11zon.webp";
import sedeBetim1 from "@/assets/sede-betim-1.webp";
import sedeBetim2 from "@/assets/sede-betim-2.webp";
import sedeBetim3 from "@/assets/sede-betim-3.webp";
import sedeBetim4 from "@/assets/sede-betim-4.webp";
import sedeBetim5 from "@/assets/sede-betim-5.webp";
import actionMoment from "@/assets/i271_11zon.webp";
import formOffice from "@/assets/i489_11zon.webp";
import teamGabriel from "@/assets/team-carlos-gabriel.webp";
import teamJavet from "@/assets/team-carlos-javet.webp";
import teamGlaucia from "@/assets/team-glaucia.webp";
import founderOffice from "@/assets/foto-fundador-nova.webp";

/**
 * INVENTÁRIO DE PÁGINAS INDEXÁVEIS (sitemap.xml, llms.txt, llms-full.txt)
 * ----------------------------------------------------------------------
 * Derivado das próprias rotas registradas: cada página entra somente se
 * existir de fato, declarar `head()` e NÃO estiver marcada como `noindex`.
 * Assim o sitemap acompanha automaticamente a política de indexação
 * (src/lib/indexing-policy.ts) e nunca lista URLs inexistentes (404).
 */

export type InventoryGroup = "institucional" | "local" | "especializada" | "residentes" | "internacional" | "artigos";

export interface InventoryEntry {
  path: string;
  title: string;
  description: string;
  group: InventoryGroup;
  /** Imagens que esta página deve representar no Google Imagens (sitemap de imagens). */
  images?: readonly string[];
}

const INSTITUTIONAL_ORDER = ["/", "/perfil", "/areas-de-atuacao", "/servicos-internacionais", "/duvidas", "/fale-conosco", "/artigos"];
const LOCAL_SUFFIX = /-(betim|bh|contagem|igarape|nova-lima)$/;
const RESIDENT_PATHS = new Set(catalogue.filter((entry) => entry.path === entry.target).map((entry) => entry.path));
const INTERNATIONAL_PATHS = new Set(GENERATED_INTERNATIONAL_PATHS);

/**
 * Páginas de referência de cada foto compartilhada. As mesmas fotos aparecem
 * em centenas de páginas; o sitemap de imagens indica ao Google qual página
 * deve representar cada foto (ex.: fotos da sede de Betim → Família em Betim).
 */
const IMAGE_ANCHORS: Readonly<Record<string, readonly string[]>> = {
  "/advogado-familia-betim": [officeBetim, sedeBetim1, sedeBetim2, sedeBetim3, sedeBetim4, sedeBetim5, actionMoment, formOffice],
  "/advogado-familia-bh": [officeBH],
  "/perfil": [teamJavet, teamGabriel, teamGlaucia, founderOffice],
};

function classify(path: string): InventoryGroup {
  if (RESIDENT_PATHS.has(path)) return "residentes";
  if (INTERNATIONAL_PATHS.has(path)) return "internacional";
  if (path.startsWith("/advogado-")) return LOCAL_SUFFIX.test(path) ? "local" : "especializada";
  return "institucional";
}

type HeadResult = { meta?: Array<Record<string, string> | undefined> } | undefined;
type RouteLike = { fullPath?: string; options?: { head?: (ctx: unknown) => HeadResult | Promise<HeadResult> } };

async function buildInventory(): Promise<InventoryEntry[]> {
  const { getRouter } = await import("@/router");
  const router = getRouter() as unknown as { routesById: Record<string, RouteLike> };
  const byPath = new Map<string, InventoryEntry>();

  for (const [id, route] of Object.entries(router.routesById)) {
    if (id === "__root__") continue;
    const rawPath = route.fullPath;
    const head = route.options?.head;
    if (!rawPath || typeof head !== "function" || rawPath.includes("$") || rawPath.includes(".")) continue;
    const path = normalizeSitePath(rawPath);
    let result: HeadResult;
    try {
      result = await head({ params: {}, loaderData: undefined, matches: [], match: undefined });
    } catch {
      continue;
    }
    const meta = (result?.meta ?? []).filter((item): item is Record<string, string> => Boolean(item));
    const robots = meta.find((item) => item.name === "robots")?.content ?? "";
    if (/noindex/i.test(robots)) continue;
    const title = meta.find((item) => "title" in item)?.title ?? path;
    const description = meta.find((item) => item.name === "description")?.content ?? "";
    byPath.set(path, { path, title, description, group: classify(path), images: IMAGE_ANCHORS[path] });
  }

  for (const article of ARTICLES) {
    const path = `/artigos/${article.slug}`;
    byPath.set(path, {
      path,
      title: articleSeoTitle(article),
      description: articleSeoDescription(article),
      group: "artigos",
      images: article.image ? [article.image] : undefined,
    });
  }

  const rank = (entry: InventoryEntry) => {
    const institutional = INSTITUTIONAL_ORDER.indexOf(entry.path);
    return institutional >= 0 ? institutional : INSTITUTIONAL_ORDER.length;
  };
  const groupOrder: InventoryGroup[] = ["institucional", "local", "especializada", "residentes", "internacional", "artigos"];
  return [...byPath.values()].sort(
    (a, b) => groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group) || rank(a) - rank(b) || a.path.localeCompare(b.path, "pt-BR"),
  );
}

let inventory: Promise<InventoryEntry[]> | undefined;

/** Lista (em cache por instância do servidor) de todas as páginas indexáveis. */
export function getIndexableInventory(): Promise<InventoryEntry[]> {
  inventory ??= buildInventory().catch((error) => {
    inventory = undefined;
    throw error;
  });
  return inventory;
}
