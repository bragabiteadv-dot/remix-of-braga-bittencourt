import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { hasOfficialDomain, siteUrl } from "@/lib/site";

/**
 * ROBOTS.TXT
 * ----------
 * • Todo o conteúdo público fica liberado para buscadores e assistentes de IA
 *   (SEO + GEO). As páginas mantidas fora do índice usam meta robots "noindex"
 *   e propositalmente NÃO são bloqueadas aqui: se fossem bloqueadas, o Google
 *   não conseguiria ler o noindex e poderia mantê-las indexadas.
 * • Os robôs de IA são citados nominalmente para deixar a permissão explícita.
 */

const AI_AND_SEARCH_AGENTS = [
  // Buscadores
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "Applebot",
  "DuckDuckBot",
  // Assistentes e buscadores de IA (GEO)
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "DuckAssistBot",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "cohere-ai",
  "CCBot",
] as const;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // As URLs vêm da configuração central de domínio (src/lib/site.ts).
        const absolute = (path: string) => (hasOfficialDomain() ? siteUrl(path) : new URL(path, request.url).toString());

        const body = [
          "# Braga Bitencourt Advogados — https://bragabitencourt.com",
          "# Conteúdo público liberado para buscadores e assistentes de IA.",
          "",
          ...AI_AND_SEARCH_AGENTS.map((agent) => `User-agent: ${agent}`),
          "Allow: /",
          "",
          "User-agent: *",
          "Allow: /",
          "",
          `Sitemap: ${absolute("/sitemap.xml")}`,
          "",
          "# Resumo do site para modelos de linguagem (padrão llms.txt):",
          `# ${absolute("/llms.txt")}`,
          `# ${absolute("/llms-full.txt")}`,
          "",
        ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
