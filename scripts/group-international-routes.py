"""Group existing international routes without changing URLs or page options."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ROUTES = ROOT / "src/routes"


def group_routes():
    moved = 0
    for route in sorted(ROUTES.glob("*.tsx")):
        content = route.read_text()
        if "internationalLandingRouteOptions" not in content or route.name.startswith("_international-"):
            continue
        match = re.search(r'internationalLandingRouteOptions\("([^"]+)"', content)
        path_match = re.search(r'createFileRoute\("(/[^"]+)"\)', content)
        if not match or not path_match:
            raise ValueError(f"Unrecognized international route: {route}")
        group = "_international-" + match[1].split("-")[0]
        layout = ROUTES / f"{group}.tsx"
        if not layout.exists():
            layout.write_text('import { createFileRoute, Outlet } from "@tanstack/react-router";\n\n'
                              f'export const Route = createFileRoute("/{group}")({{ component: Outlet }});\n')
        route.write_text(content.replace(path_match[0], f'createFileRoute("/{group}{path_match[1]}")', 1))
        route.rename(ROUTES / f"{group}.{route.name}")
        moved += 1
    print(f"Grouped {moved} international routes; public URLs unchanged.")


if __name__ == "__main__":
    group_routes()