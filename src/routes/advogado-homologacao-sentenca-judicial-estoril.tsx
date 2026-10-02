import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-estoril")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-estoril"),
);
