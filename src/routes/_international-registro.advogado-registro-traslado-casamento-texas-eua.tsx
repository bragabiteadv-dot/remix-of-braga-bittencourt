import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-registro/advogado-registro-traslado-casamento-texas-eua")(
  internationalLandingRouteOptions("registro-traslado-casamento-texas-eua"),
);
