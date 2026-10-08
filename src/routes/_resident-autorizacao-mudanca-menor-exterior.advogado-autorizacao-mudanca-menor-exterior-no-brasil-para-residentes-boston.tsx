import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-autorizacao-mudanca-menor-exterior/advogado-autorizacao-mudanca-menor-exterior-no-brasil-para-residentes-boston")(
  residentLandingRouteOptions("/advogado-autorizacao-mudanca-menor-exterior-no-brasil-para-residentes-boston", pageOverrides),
);
