import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-decisao-judicial-amsterda")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-amsterda"),
);
