import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { hasOfficialDomain, siteAssetUrl, siteUrl } from "@/lib/site";
import { getIndexableInventory, type InventoryGroup } from "@/lib/seo-inventory";

/**
 * SITEMAP XML
 * -----------
 * Lista somente páginas indexáveis e existentes (src/lib/seo-inventory.ts),
 * já filtradas pela política de indexação (src/lib/indexing-policy.ts).
 * Inclui a extensão de imagens do Google para associar cada foto à sua
 * página de referência.
 */

const PRIORITY: Readonly<Record<InventoryGroup, string>> = {
  institucional: "0.8",
  local: "0.9",
  especializada: "0.9",
  residentes: "0.7",
  internacional: "0.7",
  artigos: "0.6",
};

const CHANGEFREQ: Readonly<Record<InventoryGroup, string>> = {
  institucional: "monthly",
  local: "monthly",
  especializada: "monthly",
  residentes: "monthly",
  internacional: "monthly",
  artigos: "monthly",
};

function xmlEscape(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // O domínio oficial vem de src/lib/site.ts. Enquanto ele não estiver
        // configurado, usamos o host da requisição apenas para manter o
        // sitemap válido (URLs absolutas são obrigatórias no protocolo).
        const origin = hasOfficialDomain() ? "" : new URL(request.url).origin;
        const absolute = (url: string) => (hasOfficialDomain() || /^https?:\/\//i.test(url) ? url : `${origin}${url}`);
        const loc = (path: string) => absolute(siteUrl(path));

        const inventory = await getIndexableInventory();

        const urls = inventory.map((entry) =>
          [
            `  <url>`,
            `    <loc>${xmlEscape(loc(entry.path))}</loc>`,
            `    <changefreq>${entry.path === "/" ? "weekly" : CHANGEFREQ[entry.group]}</changefreq>`,
            `    <priority>${entry.path === "/" ? "1.0" : PRIORITY[entry.group]}</priority>`,
            ...(entry.images ?? []).map((src) => `    <image:image><image:loc>${xmlEscape(absolute(siteAssetUrl(src)))}</image:loc></image:image>`),
            `  </url>`,
          ].join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
