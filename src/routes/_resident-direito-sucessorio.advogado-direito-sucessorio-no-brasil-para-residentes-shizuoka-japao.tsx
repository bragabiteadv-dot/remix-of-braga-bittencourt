import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-direito-sucessorio/advogado-direito-sucessorio-no-brasil-para-residentes-shizuoka-japao")(
  residentLandingRouteOptions("/advogado-direito-sucessorio-no-brasil-para-residentes-shizuoka-japao", pageOverrides),
);
