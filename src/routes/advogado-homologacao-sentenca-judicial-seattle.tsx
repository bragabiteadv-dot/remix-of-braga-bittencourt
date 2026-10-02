import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-seattle")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-seattle"),
);
