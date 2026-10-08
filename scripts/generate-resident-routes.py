"""Register approved URLs explicitly; never overwrite manual edits to a route."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def generate(pilot=False):
    catalogue = json.loads((ROOT / "src/data/resident-catalogue.json").read_text())
    if pilot:
        catalogue = [entry for entry in catalogue if entry["serviceId"] == "inventario-internacional-extrajudicial" and entry["locationId"] in [None, 21, 46, 69, 86, 97]]
    created = 0
    for entry in catalogue:
        path, target = entry["path"], entry["target"]
        group = "_resident-" + entry["serviceId"]
        route = ROOT / "src/routes" / (group + "." + path[1:] + ".tsx")
        original = ROOT / "src/routes" / (path[1:] + ".tsx")
        layout = ROOT / "src/routes" / (group + ".tsx")
        if not layout.exists():
            layout.write_text(f'''import {{ createFileRoute, Outlet }} from "@tanstack/react-router";

export const Route = createFileRoute("/{group}")({{ component: Outlet }});
''')
        if route.exists() or original.exists():
            continue
        if path == target:
            content = f'''import {{ createFileRoute }} from "@tanstack/react-router";
import {{ residentLandingRouteOptions, type ResidentPageOverrides }} from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {{}};

export const Route = createFileRoute("/{group}{path}")(
  residentLandingRouteOptions("{path}", pageOverrides),
);
'''
        else:
            content = f'''import {{ createFileRoute, redirect }} from "@tanstack/react-router";
import type {{}} from "@tanstack/react-start";

export const Route = createFileRoute("/{group}{path}")({{
  beforeLoad: () => {{ throw redirect({{ href: "{target}", statusCode: 301 }}); }},
  server: {{ handlers: {{ GET: () => new Response(null, {{ status: 301, headers: {{ Location: "{target}" }} }}) }} }},
}});
'''
        route.write_text(content)
        created += 1
    print(f"Registered {created} URLs; {len(catalogue)} total approved entries.")


if __name__ == "__main__":
    import sys
    generate(pilot="--pilot" in sys.argv)