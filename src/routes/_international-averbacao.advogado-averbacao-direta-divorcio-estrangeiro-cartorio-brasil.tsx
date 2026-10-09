import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-averbacao/advogado-averbacao-direta-divorcio-estrangeiro-cartorio-brasil")(
  internationalLandingRouteOptions("averbacao-divorcio-consensual-brasil-atos-internacionais-e-transfronteiricos"),
);
