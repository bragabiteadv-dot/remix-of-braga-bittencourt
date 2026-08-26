import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES } from "@/lib/articles";
import { hasOfficialDomain, siteUrl } from "@/lib/site";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // O domínio oficial vem de src/lib/site.ts. Enquanto ele não estiver
        // configurado, usamos o host da requisição apenas para manter o
        // sitemap válido (URLs absolutas são obrigatórias no protocolo).
        const origin = hasOfficialDomain() ? "" : new URL(request.url).origin;
        const loc = (path: string) => (hasOfficialDomain() ? siteUrl(path) : `${origin}${siteUrl(path)}`);

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/perfil", changefreq: "monthly", priority: "0.8" },
          { path: "/areas-de-atuacao", changefreq: "monthly", priority: "0.8" },
          { path: "/duvidas", changefreq: "weekly", priority: "0.8" },
          { path: "/fale-conosco", changefreq: "monthly", priority: "0.8" },
          { path: "/artigos", changefreq: "weekly", priority: "0.7" },
          { path: "/advogado-divorcio-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-familia-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-pensao-alimenticia-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-inventario-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-curatela-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-extrajudicial-betim", changefreq: "monthly", priority: "0.9" },
          ...ARTICLES.map((a) => ({
            path: `/artigos/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${loc(e.path)}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
