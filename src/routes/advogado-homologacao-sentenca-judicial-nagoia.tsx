import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-nagoia")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-nagoia"),
);
