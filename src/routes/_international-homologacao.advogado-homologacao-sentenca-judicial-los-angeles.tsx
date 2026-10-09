import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-homologacao/advogado-homologacao-sentenca-judicial-los-angeles")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-los-angeles"),
);
