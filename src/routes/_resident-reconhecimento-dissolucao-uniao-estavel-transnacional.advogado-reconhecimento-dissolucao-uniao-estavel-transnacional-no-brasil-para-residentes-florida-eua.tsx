import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/_resident-reconhecimento-dissolucao-uniao-estavel-transnacional/advogado-reconhecimento-dissolucao-uniao-estavel-transnacional-no-brasil-para-residentes-florida-eua")(
  residentLandingRouteOptions("/advogado-reconhecimento-dissolucao-uniao-estavel-transnacional-no-brasil-para-residentes-florida-eua", pageOverrides),
);
