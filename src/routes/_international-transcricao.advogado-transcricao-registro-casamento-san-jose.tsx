import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-transcricao/advogado-transcricao-registro-casamento-san-jose")(
  internationalLandingRouteOptions("transcricao-registro-casamento-san-jose"),
);
