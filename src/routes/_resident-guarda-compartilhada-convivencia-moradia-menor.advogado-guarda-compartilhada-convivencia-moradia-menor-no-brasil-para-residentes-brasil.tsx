import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-guarda-compartilhada-convivencia-moradia-menor/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil" } }) } },
});
