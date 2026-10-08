import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-guarda-compartilhada-convivencia-moradia-menor/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil-para-residentes-texas-eua")(
  residentLandingRouteOptions("/advogado-guarda-compartilhada-convivencia-moradia-menor-no-brasil-para-residentes-texas-eua", pageOverrides),
);
