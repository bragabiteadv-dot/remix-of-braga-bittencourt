import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES } from "@/lib/articles";
import { GENERATED_INTERNATIONAL_PATHS } from "@/lib/international-landings";
import { RESIDENT_INDEXABLE_PATHS } from "@/lib/resident-landings";
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
          { path: "/advogado-divorcio-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-familia-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-pensao-alimenticia-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-inventario-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-curatela-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-extrajudicial-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-familia-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-pensao-alimenticia-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-inventario-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-curatela-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-extrajudicial-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-familia-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-pensao-alimenticia-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-inventario-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-curatela-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-extrajudicial-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-familia-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-pensao-alimenticia-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-fixacao-pensao-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-exoneracao-pensao-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-revisao-pensao-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-execucao-pensao-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-validacao-homologacao-sentenca-estrangeira", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-decisao-judicial-estrangeira-stj-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-homologacao-sentenca-estrangeira-stj-brasilia", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-sentenca-estrangeira-divorcio-guarda-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-sentenca-estrangeira-paternidade-filiacao-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-decisao-curatela-interdicao-stj-brasilia", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-cumprimento-contestacao-cartas-rogatorias-stj-brasilia", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-averbacao-direta-divorcio-estrangeiro-cartorio-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-traslado-transcricao-certidao-casamento-estrangeiro-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-registro-validacao-escrituras-notariais-estrangeiras-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-sentenca-portuguesa-paternidade-filiacao-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-decisao-curatela-interdicao-stj-brasilia-portugal", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-cumprimento-contestacao-cartas-rogatorias-stj-brasilia-portugal", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-averbacao-direta-divorcio-portugues-cartorio-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-traslado-transcricao-certidao-casamento-portugues-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-registro-validacao-escrituras-notariais-portuguesas-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-validacao-homologacao-sentenca-portuguesa-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-homologacao-decisao-judicial-portuguesa-stj-brasil", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-homologacao-sentenca-portuguesa-stj-brasilia", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-fixacao-pensao-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-exoneracao-pensao-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-revisao-pensao-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-execucao-pensao-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-fixacao-pensao-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-exoneracao-pensao-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-revisao-pensao-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-execucao-pensao-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-fixacao-pensao-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-exoneracao-pensao-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-revisao-pensao-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-execucao-pensao-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-dissolucao-uniao-estavel-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-dissolucao-uniao-estavel-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-dissolucao-uniao-estavel-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-dissolucao-uniao-estavel-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-dissolucao-uniao-estavel-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-fixacao-pensao-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-exoneracao-pensao-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-revisao-pensao-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-execucao-pensao-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-inventario-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-curatela-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-divorcio-extrajudicial-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-contrato-namoro-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-contrato-namoro-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-contrato-namoro-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-contrato-namoro-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-contrato-namoro-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-investigacao-negatoria-paternidade-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-investigacao-negatoria-paternidade-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-investigacao-negatoria-paternidade-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-investigacao-negatoria-paternidade-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-reconhecimento-investigacao-negatoria-paternidade-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-compartilhada-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-compartilhada-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-compartilhada-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-compartilhada-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-guarda-compartilhada-nova-lima", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-mudanca-regime-bens-casamento-betim", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-mudanca-regime-bens-casamento-bh", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-mudanca-regime-bens-casamento-contagem", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-mudanca-regime-bens-casamento-igarape", changefreq: "monthly", priority: "0.9" },
          { path: "/advogado-mudanca-regime-bens-casamento-nova-lima", changefreq: "monthly", priority: "0.9" },
          ...GENERATED_INTERNATIONAL_PATHS.map((path) => ({
            path,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...ARTICLES.map((a) => ({
            path: `/artigos/${a.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...RESIDENT_INDEXABLE_PATHS.map((path) => ({ path, changefreq: "monthly" as const, priority: "0.7" })),
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
