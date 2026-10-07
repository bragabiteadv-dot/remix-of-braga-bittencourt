import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil-para-residentes-condado-de-king-washington-eua")(
  residentLandingRouteOptions("/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil-para-residentes-condado-de-king-washington-eua", pageOverrides),
);
