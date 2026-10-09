import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-validacao/advogado-validacao-escrituras-notariais-berna")(
  internationalLandingRouteOptions("validacao-escrituras-notariais-berna"),
);
