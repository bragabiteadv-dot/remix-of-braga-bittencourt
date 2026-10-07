import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil" } }) } },
});
