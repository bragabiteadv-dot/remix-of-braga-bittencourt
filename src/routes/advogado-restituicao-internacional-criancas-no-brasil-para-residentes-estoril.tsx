import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-estoril")(
  residentLandingRouteOptions("/advogado-restituicao-internacional-criancas-no-brasil-para-residentes-estoril", pageOverrides),
);
