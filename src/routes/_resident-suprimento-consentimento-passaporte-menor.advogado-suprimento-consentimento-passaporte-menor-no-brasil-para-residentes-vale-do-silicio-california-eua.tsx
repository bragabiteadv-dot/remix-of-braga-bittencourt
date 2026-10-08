import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-suprimento-consentimento-passaporte-menor/advogado-suprimento-consentimento-passaporte-menor-no-brasil-para-residentes-vale-do-silicio-california-eua")(
  residentLandingRouteOptions("/advogado-suprimento-consentimento-passaporte-menor-no-brasil-para-residentes-vale-do-silicio-california-eua", pageOverrides),
);
