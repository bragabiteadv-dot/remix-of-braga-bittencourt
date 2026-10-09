import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-averbacao/advogado-averbacao-divorcio-consensual-eslovaquia")(
  internationalLandingRouteOptions("averbacao-divorcio-consensual-eslovaquia"),
);
