import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-sequestro-internacional-criancas/advogado-sequestro-internacional-criancas-no-brasil-para-residentes-shizuoka-japao")({
  beforeLoad: () => { throw redirect({ href: "/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-shizuoka-japao", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-shizuoka-japao" } }) } },
});
