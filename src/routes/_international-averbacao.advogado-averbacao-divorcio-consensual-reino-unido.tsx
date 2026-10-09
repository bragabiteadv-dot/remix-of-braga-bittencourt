import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-averbacao/advogado-averbacao-divorcio-consensual-reino-unido")(
  internationalLandingRouteOptions("averbacao-divorcio-consensual-reino-unido"),
);
