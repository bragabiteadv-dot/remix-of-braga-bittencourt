import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil-para-residentes-illinois-eua")(
  residentLandingRouteOptions("/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil-para-residentes-illinois-eua", pageOverrides),
);
