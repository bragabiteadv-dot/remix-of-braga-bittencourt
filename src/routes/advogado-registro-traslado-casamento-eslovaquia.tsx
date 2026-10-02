import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-registro-traslado-casamento-eslovaquia")(
  internationalLandingRouteOptions("registro-traslado-casamento-eslovaquia"),
);
