import { buildSeoHead } from "@/components/SeoHead";
import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { getRequiredInternationalLandingBySlug } from "@/lib/international-landings";
import { isIndexableInternationalLanding, robotsFor } from "@/lib/indexing-policy";
import { landingImageSeo } from "@/lib/image-seo";
import { ORG_REF } from "@/lib/org-schema";
import { OG_IMAGE } from "@/lib/site-og";

export function internationalLandingRouteOptions(slug: string) {
  const page = getRequiredInternationalLandingBySlug(slug);
  // Política central de indexação (src/lib/indexing-policy.ts): somente o país
  // de origem do ato permanece no índice; cidades/estados/condados seguem no ar.
  const indexable = isIndexableInternationalLanding(page);

  return {
    head: () =>
      buildSeoHead({
        canonicalUrl: page.path,
        city: page.location.name,
        service: page.service.name,
        title: page.seoTitle,
        description: page.description,
        image: OG_IMAGE,
        areaServed: page.location.name,
        breadcrumbName: page.title,
        robots: robotsFor(indexable),
        images: landingImageSeo(page),
        extraSchema: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.service.name,
            areaServed: page.location.name,
            serviceType: page.service.name,
            provider: ORG_REF,
          },
        ],
      }),
    component: () => <InternationalLegalLanding page={page} />,
  };
}
