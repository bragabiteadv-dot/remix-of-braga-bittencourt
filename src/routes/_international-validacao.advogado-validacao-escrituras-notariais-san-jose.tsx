import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-validacao/advogado-validacao-escrituras-notariais-san-jose")(
  internationalLandingRouteOptions("validacao-escrituras-notariais-san-jose"),
);
