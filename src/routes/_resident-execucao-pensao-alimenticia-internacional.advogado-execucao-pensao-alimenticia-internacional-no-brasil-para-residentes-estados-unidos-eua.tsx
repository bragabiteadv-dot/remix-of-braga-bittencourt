import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-execucao-pensao-alimenticia-internacional/advogado-execucao-pensao-alimenticia-internacional-no-brasil-para-residentes-estados-unidos-eua")(
  residentLandingRouteOptions("/advogado-execucao-pensao-alimenticia-internacional-no-brasil-para-residentes-estados-unidos-eua", pageOverrides),
);
