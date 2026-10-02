import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-decisao-judicial-italia")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-italia"),
);
