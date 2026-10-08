import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-direito-familia/advogado-direito-familia-no-brasil-para-residentes-los-angeles")(
  residentLandingRouteOptions("/advogado-direito-familia-no-brasil-para-residentes-los-angeles", pageOverrides),
);
