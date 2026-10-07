import { createFileRoute } from "@tanstack/react-router";
import { residentLandingRouteOptions, type ResidentPageOverrides } from "@/lib/resident-landing-route";

// Edite aqui somente esta página: title, seoTitle, description, service ou residentContent.
const pageOverrides: ResidentPageOverrides = {};

export const Route = createFileRoute("/advogado-divorcio-internacional-litigioso-no-brasil-para-residentes-bruxelas")(
  residentLandingRouteOptions("/advogado-divorcio-internacional-litigioso-no-brasil-para-residentes-bruxelas", pageOverrides),
);
