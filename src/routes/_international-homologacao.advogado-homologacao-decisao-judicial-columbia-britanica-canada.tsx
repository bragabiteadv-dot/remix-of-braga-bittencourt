import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-homologacao/advogado-homologacao-decisao-judicial-columbia-britanica-canada")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-columbia-britanica-canada"),
);
