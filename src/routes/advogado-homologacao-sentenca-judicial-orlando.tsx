import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-orlando")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-orlando"),
);
