import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-pensao-alimenticia-internacional/advogado-pensao-alimenticia-internacional-no-brasil-para-residentes-alemanha")(
  residentLandingRouteOptions("/advogado-pensao-alimenticia-internacional-no-brasil-para-residentes-alemanha", pageOverrides),
);
