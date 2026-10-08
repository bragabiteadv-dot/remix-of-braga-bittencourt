import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-partilha-bens-divorcio/advogado-partilha-bens-divorcio-no-brasil-para-residentes-argentina")(
  residentLandingRouteOptions("/advogado-partilha-bens-divorcio-no-brasil-para-residentes-argentina", pageOverrides),
);
