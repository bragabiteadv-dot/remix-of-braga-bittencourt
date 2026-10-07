import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-partilha-bens-inventario-no-brasil-para-residentes-condado-de-cook-illinois-eua")(
  residentLandingRouteOptions("/advogado-partilha-bens-inventario-no-brasil-para-residentes-condado-de-cook-illinois-eua", pageOverrides),
);
