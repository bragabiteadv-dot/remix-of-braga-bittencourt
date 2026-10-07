import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-representacao-negocios-aquisicao-bens-no-brasil-para-residentes-washington-estado-eua")(
  residentLandingRouteOptions("/advogado-representacao-negocios-aquisicao-bens-no-brasil-para-residentes-washington-estado-eua", pageOverrides),
);
