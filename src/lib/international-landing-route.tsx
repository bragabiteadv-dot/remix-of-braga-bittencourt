import { buildSeoHead } from "@/components/SeoHead";
import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { getRequiredInternationalLandingBySlug } from "@/lib/international-landings";
import { OG_IMAGE } from "@/lib/site-og";

export function internationalLandingRouteOptions(slug: string) {
  const page = getRequiredInternationalLandingBySlug(slug);

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
        extraSchema: [
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.service.name,
            areaServed: page.location.name,
            serviceType: page.service.name,
          },
        ],
      }),
    component: () => <InternationalLegalLanding page={page} />,
  };
}
