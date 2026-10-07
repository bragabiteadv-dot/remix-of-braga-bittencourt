import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-registro-contratos-internacionais-rtd-no-brasil-para-residentes-boca-raton")(
  residentLandingRouteOptions("/advogado-registro-contratos-internacionais-rtd-no-brasil-para-residentes-boca-raton", pageOverrides),
);
