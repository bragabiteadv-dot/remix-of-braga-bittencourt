import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-suprimento-judicial-autorizacao-viagem-internacional-menor/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil-para-residentes-estoril")(
  residentLandingRouteOptions("/advogado-suprimento-judicial-autorizacao-viagem-internacional-menor-no-brasil-para-residentes-estoril", pageOverrides),
);
