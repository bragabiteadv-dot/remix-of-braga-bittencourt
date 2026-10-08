import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-registro-contratos-internacionais-rtd/advogado-registro-contratos-internacionais-rtd-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-registro-contratos-internacionais-rtd-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-registro-contratos-internacionais-rtd-no-brasil" } }) } },
});
