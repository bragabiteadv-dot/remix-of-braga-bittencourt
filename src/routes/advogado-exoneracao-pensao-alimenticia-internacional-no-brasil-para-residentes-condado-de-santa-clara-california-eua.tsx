import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-exoneracao-pensao-alimenticia-internacional-no-brasil-para-residentes-condado-de-santa-clara-california-eua")(
  residentLandingRouteOptions("/advogado-exoneracao-pensao-alimenticia-internacional-no-brasil-para-residentes-condado-de-santa-clara-california-eua", pageOverrides),
);
