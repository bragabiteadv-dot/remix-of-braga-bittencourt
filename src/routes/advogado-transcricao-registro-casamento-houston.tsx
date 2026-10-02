import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-transcricao-registro-casamento-houston")(
  internationalLandingRouteOptions("transcricao-registro-casamento-houston"),
);
