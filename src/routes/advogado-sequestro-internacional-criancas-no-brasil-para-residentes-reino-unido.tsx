import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/advogado-sequestro-internacional-criancas-no-brasil-para-residentes-reino-unido")({
  beforeLoad: () => { throw redirect({ href: "/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-reino-unido", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-reino-unido" } }) } },
});
