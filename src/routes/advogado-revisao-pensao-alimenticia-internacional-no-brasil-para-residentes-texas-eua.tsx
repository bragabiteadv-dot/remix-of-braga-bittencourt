import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-revisao-pensao-alimenticia-internacional-no-brasil-para-residentes-texas-eua")(
  residentLandingRouteOptions("/advogado-revisao-pensao-alimenticia-internacional-no-brasil-para-residentes-texas-eua", pageOverrides),
);
