import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildSeoHead } from "@/components/SeoHead";
import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { NotFoundView } from "@/components/layout/NotFoundView";
import { getInternationalLandingBySlug } from "@/lib/international-landings";
import { OG_IMAGE } from "@/lib/site-og";

/**
 * Rota catch-all: apenas garante metadados corretos (noindex) para URLs
 * inexistentes. O conteúdo visual é exatamente o mesmo da página 404 atual.
 */
export const Route = createFileRoute("/$")({
  component: GeneratedInternationalLanding,
  loader: ({ params }) => {
    const path = params._splat ?? "";
    const slug = path.startsWith("advogado-") ? path.slice("advogado-".length) : "";
    const page = slug ? getInternationalLandingBySlug(slug) : undefined;
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    const page = loaderData?.page;
    if (!page) {
      return buildSeoHead({
        canonicalUrl: "/404",
        city: "Brasil",
        service: "Página não encontrada",
        title: "Página não encontrada | Braga Bitencourt Advogados",
        description: "A página que você procura não foi encontrada.",
        noindex: true,
      });
    }
    return buildSeoHead({
      canonicalUrl: page.path,
      city: page.location.name,
      service: page.service.name,
      title: `${page.title} | Braga Bitencourt Advogados`,
      description: page.description,
      image: OG_IMAGE,
      areaServed: page.location.name,
      breadcrumbName: page.title,
      extraSchema: [{
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.service.name,
        areaServed: page.location.name,
        serviceType: page.service.name,
      }],
    });
  },
});

function GeneratedInternationalLanding() {
  const { page } = Route.useLoaderData();
  return <InternationalLegalLanding page={page} />;
}
