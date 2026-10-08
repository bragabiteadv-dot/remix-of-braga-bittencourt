import { createFileRoute, redirect } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/_resident-suprimento-consentimento-passaporte-menor/advogado-suprimento-consentimento-passaporte-menor-no-brasil-para-residentes-brasil")({
  beforeLoad: () => { throw redirect({ href: "/advogado-suprimento-consentimento-passaporte-menor-no-brasil", statusCode: 301 }); },
  server: { handlers: { GET: () => new Response(null, { status: 301, headers: { Location: "/advogado-suprimento-consentimento-passaporte-menor-no-brasil" } }) } },
});
