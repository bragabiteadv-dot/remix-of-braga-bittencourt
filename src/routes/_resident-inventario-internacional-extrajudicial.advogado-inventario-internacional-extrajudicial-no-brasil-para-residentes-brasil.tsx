import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-inventario-internacional-extrajudicial/advogado-inventario-internacional-extrajudicial-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-inventario-internacional-extrajudicial-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-inventario-internacional-extrajudicial-no-brasil" } }) } },
});
