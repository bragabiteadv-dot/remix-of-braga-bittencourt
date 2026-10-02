import { createFileRoute } from "@tanstack/react-router";
import { internationalLandingRouteOptions } from "@/lib/international-landing-route";

export const Route = createFileRoute("/advogado-averbacao-divorcio-consensual-dublin")(
  internationalLandingRouteOptions("averbacao-divorcio-consensual-dublin"),
);
