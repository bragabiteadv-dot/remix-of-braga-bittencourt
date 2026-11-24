import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { buildSeoHead } from "@/components/SeoHead";
import { getResidentEntry, getResidentLanding } from "@/lib/resident-landings";
import type { InternationalLandingPage } from "@/lib/international-landings";
import { isIndexableResidentLanding, robotsFor } from "@/lib/indexing-policy";
import { landingImageSeo } from "@/lib/image-seo";
import { OG_IMAGE } from "@/lib/site-og";

// A selected route can override copy without changing any other landing page.
export type ResidentPageOverrides = Partial<Pick<InternationalLandingPage, "title" | "seoTitle" | "description">> & {
  residentContent?: Partial<NonNullable<InternationalLandingPage["residentContent"]>>;
  service?: Partial<InternationalLandingPage["service"]>;
};

export function residentLandingRouteOptions(path: string, overrides: ResidentPageOverrides = {}) {
  const original = getResidentLanding(path);
  const page: InternationalLandingPage = {
    ...original, ...overrides,
    service: { ...original.service, ...overrides.service },
    residentContent: original.residentContent ? { ...original.residentContent, ...overrides.residentContent } : undefined,
  };
  // Política central de indexação (src/lib/indexing-policy.ts): a página continua
  // acessível, mas só países, polos da comunidade brasileira e o atendimento
  // geral no Brasil permanecem no índice do Google.
  const indexable = isIndexableResidentLanding(path, getResidentEntry(path)?.locationId ?? null);
  return {
    head: () =>
      buildSeoHead({
        canonicalUrl: page.path, title: page.seoTitle, description: page.description,
        city: page.location.name, service: page.service.name,
        areaServed: ["Brasil", page.location.name].filter((name, i, arr) => arr.indexOf(name) === i).join("; "),
        breadcrumbName: page.title,
        image: OG_IMAGE,
        robots: robotsFor(indexable),
        images: landingImageSeo(page),
      }),
    component: () => <InternationalLegalLanding page={page} />,
  };
}
