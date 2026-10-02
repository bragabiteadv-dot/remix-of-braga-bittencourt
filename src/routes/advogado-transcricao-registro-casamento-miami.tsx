import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-transcricao-registro-casamento-miami")(
  internationalLandingRouteOptions("transcricao-registro-casamento-miami"),
);
