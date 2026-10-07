import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-inventario-internacional-judicial-no-brasil-para-residentes-barcelona")(
  residentLandingRouteOptions("/advogado-inventario-internacional-judicial-no-brasil-para-residentes-barcelona", pageOverrides),
);
