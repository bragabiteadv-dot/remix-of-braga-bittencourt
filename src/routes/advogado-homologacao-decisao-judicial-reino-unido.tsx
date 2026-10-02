import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-decisao-judicial-reino-unido")(
  internationalLandingRouteOptions("homologacao-decisao-judicial-reino-unido"),
);
