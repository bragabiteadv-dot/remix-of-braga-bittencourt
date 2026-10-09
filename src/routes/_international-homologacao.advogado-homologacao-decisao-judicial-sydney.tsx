import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-homologacao/advogado-homologacao-decisao-judicial-sydney")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-sydney"),
);
