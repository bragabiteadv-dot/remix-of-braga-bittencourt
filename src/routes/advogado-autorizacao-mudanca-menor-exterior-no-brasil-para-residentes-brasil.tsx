import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/advogado-autorizacao-mudanca-menor-exterior-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-autorizacao-mudanca-menor-exterior-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-autorizacao-mudanca-menor-exterior-no-brasil" } }) } },
});
