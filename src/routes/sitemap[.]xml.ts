import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/perfil", changefreq: "monthly", priority: "0.8" },
          { path: "/areas-de-atuacao", changefreq: "monthly", priority: "0.8" },
          { path: "/duvidas", changefreq: "weekly", priority: "0.8" },
          { path: "/fale-conosco", changefreq: "monthly", priority: "0.8" },
          { path: "/artigos", changefreq: "weekly", priority: "0.7" },
          { path: "/betim", changefreq: "monthly", priority: "0.9" },
          { path: "/betim/advocacia-familia", changefreq: "monthly", priority: "0.9" },
          { path: "/betim/advocacia-sucessoes", changefreq: "monthly", priority: "0.9" },
          { path: "/betim/advocacia-internacional", changefreq: "monthly", priority: "0.9" },
          { path: "/belo-horizonte", changefreq: "monthly", priority: "0.9" },
          { path: "/belo-horizonte/advocacia-familia", changefreq: "monthly", priority: "0.9" },
          { path: "/belo-horizonte/advocacia-sucessoes", changefreq: "monthly", priority: "0.9" },
          { path: "/belo-horizonte/advocacia-internacional", changefreq: "monthly", priority: "0.9" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
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
