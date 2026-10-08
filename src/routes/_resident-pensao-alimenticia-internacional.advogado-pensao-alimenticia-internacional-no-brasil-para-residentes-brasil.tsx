import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-pensao-alimenticia-internacional/advogado-pensao-alimenticia-internacional-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-pensao-alimenticia-internacional-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-pensao-alimenticia-internacional-no-brasil" } }) } },
});
