import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-registro-traslado-casamento-san-francisco")(
  internationalLandingRouteOptions("registro-traslado-casamento-san-francisco"),
);
