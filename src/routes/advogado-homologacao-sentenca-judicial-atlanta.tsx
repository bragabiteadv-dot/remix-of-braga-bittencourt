import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-atlanta")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-atlanta"),
);
