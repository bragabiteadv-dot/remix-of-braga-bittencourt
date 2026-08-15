import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { hasOfficialDomain, siteUrl } from "@/lib/site";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // A URL do sitemap vem da configuração central de domínio (src/lib/site.ts).
        const body = ["User-agent: *", "Allow: /", "", `Sitemap: ${hasOfficialDomain() ? siteUrl("/sitemap.xml") : new URL("/sitemap.xml", request.url).toString()}`, ""].join("\n");

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
