import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/advogado-sequestro-internacional-criancas-no-brasil-para-residentes-basileia")({
  beforeLoad: () => { throw redirect({ href: "/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-basileia", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-basileia" } }) } },
});
