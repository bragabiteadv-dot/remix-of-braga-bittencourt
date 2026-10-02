import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-homologacao-sentenca-judicial-brasil-atos-internacionais-e-transfronteiricos")(
  internationalLandingRouteOptions("homologacao-sentenca-judicial-brasil-atos-internacionais-e-transfronteiricos"),
);
