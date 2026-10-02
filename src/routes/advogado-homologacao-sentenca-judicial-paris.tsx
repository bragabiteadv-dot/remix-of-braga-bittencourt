import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-paris")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-paris"),
);
