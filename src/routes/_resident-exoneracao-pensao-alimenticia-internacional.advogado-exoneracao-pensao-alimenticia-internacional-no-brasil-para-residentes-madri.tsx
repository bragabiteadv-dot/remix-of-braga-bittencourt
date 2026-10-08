import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-exoneracao-pensao-alimenticia-internacional/advogado-exoneracao-pensao-alimenticia-internacional-no-brasil-para-residentes-madri")(
  residentLandingRouteOptions("/advogado-exoneracao-pensao-alimenticia-internacional-no-brasil-para-residentes-madri", pageOverrides),
);
