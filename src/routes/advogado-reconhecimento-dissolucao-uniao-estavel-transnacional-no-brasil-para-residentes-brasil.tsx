import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/advogado-reconhecimento-dissolucao-uniao-estavel-transnacional-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-reconhecimento-dissolucao-uniao-estavel-transnacional-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-reconhecimento-dissolucao-uniao-estavel-transnacional-no-brasil" } }) } },
});
