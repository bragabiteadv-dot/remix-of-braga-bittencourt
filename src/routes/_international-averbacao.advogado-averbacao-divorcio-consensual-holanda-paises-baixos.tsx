import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-averbacao/advogado-averbacao-divorcio-consensual-holanda-paises-baixos")(
  internationalLandingRouteOptions("averbacao-divorcio-consensual-holanda-paises-baixos"),
);
