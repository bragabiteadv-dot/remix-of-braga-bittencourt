import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-validacao-escrituras-notariais-madrid")(
  internationalLandingRouteOptions("validacao-escrituras-notariais-madrid"),
);
