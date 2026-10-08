import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-partilha-bens-inventario/advogado-partilha-bens-inventario-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-partilha-bens-inventario-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-partilha-bens-inventario-no-brasil" } }) } },
});
