import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildSeoHead } from "@/components/SeoHead";
import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { getInternationalLandingBySlug } from "@/lib/international-landings";
import { OG_IMAGE } from "@/lib/site-og";

export const Route = createFileRoute("/advogado-{$slug}")({
  loader: ({ params }) => {
    const page = getInternationalLandingBySlug(params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData, params }) => {
    const page = loaderData?.page;
    if (!page) {
      return buildSeoHead({
        canonicalUrl: `/advogado-${params.slug}`,
        city: "Brasil",
        service: "Serviço jurídico internacional",
        title: "Página não encontrada | Braga Bitencourt Advogados",
        description: "A página jurídica solicitada não está disponível.",
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
  component: InternationalLandingRoute,
});

function InternationalLandingRoute() {
  const { page } = Route.useLoaderData();
  return <InternationalLegalLanding page={page} />;
}