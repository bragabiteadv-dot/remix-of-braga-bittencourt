import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-registro-traslado-casamento-zurique")(
  internationalLandingRouteOptions("registro-traslado-casamento-zurique"),
);
