import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/_international-registro/advogado-registro-traslado-casamento-hamamatsu")(
  internationalLandingRouteOptions("registro-traslado-casamento-hamamatsu"),
);
