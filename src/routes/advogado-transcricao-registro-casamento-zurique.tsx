import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-transcricao-registro-casamento-zurique")(
  internationalLandingRouteOptions("transcricao-registro-casamento-zurique"),
);
