import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { hasOfficialDomain, siteUrl } from "@/lib/site";
import { buildLlmsTxt } from "@/lib/llms";

// Resumo essencial do site para modelos de linguagem (padrão llmstxt.org).
export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const absolute = (path: string) => (hasOfficialDomain() ? siteUrl(path) : new URL(siteUrl(path), request.url).toString());
        return new Response(await buildLlmsTxt(false, absolute), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
