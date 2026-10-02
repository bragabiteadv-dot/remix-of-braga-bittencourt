import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-registro-traslado-casamento-luxemburgo")(
  internationalLandingRouteOptions("registro-traslado-casamento-luxemburgo"),
);
