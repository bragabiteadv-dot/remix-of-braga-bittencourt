import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-decisao-judicial-belgica")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-belgica"),
);
