import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-direito-internacional/advogado-direito-internacional-no-brasil-para-residentes-paises-baixos")(
  residentLandingRouteOptions("/advogado-direito-internacional-no-brasil-para-residentes-paises-baixos", pageOverrides),
);
