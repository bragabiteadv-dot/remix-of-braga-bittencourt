import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-inventario-internacional-extrajudicial/advogado-inventario-internacional-extrajudicial-no-brasil-para-residentes-chicago")(
  residentLandingRouteOptions("/advogado-inventario-internacional-extrajudicial-no-brasil-para-residentes-chicago", pageOverrides),
);
