import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-planejamento-sucessorio-internacional-no-brasil-para-residentes-condado-de-clark-nevada-eua")(
  residentLandingRouteOptions("/advogado-planejamento-sucessorio-internacional-no-brasil-para-residentes-condado-de-clark-nevada-eua", pageOverrides),
);
