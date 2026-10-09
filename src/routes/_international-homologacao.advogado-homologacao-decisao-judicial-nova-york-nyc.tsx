import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-homologacao/advogado-homologacao-decisao-judicial-nova-york-nyc")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-nova-york-nyc"),
);
