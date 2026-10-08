import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-curatela/advogado-curatela-no-brasil-para-residentes-fort-lauderdale")(
  residentLandingRouteOptions("/advogado-curatela-no-brasil-para-residentes-fort-lauderdale", pageOverrides),
);
