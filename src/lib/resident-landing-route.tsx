import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { buildSeoHead } from "@/components/SeoHead";
import { getResidentLanding } from "@/lib/resident-landings";
import type { InternationalLandingPage } from "@/lib/international-landings";

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
  return {
    head: () => {
      const head = buildSeoHead({
        canonicalUrl: page.path, title: page.seoTitle, description: page.description,
        city: page.location.name, service: page.service.name,
        areaServed: ["Brasil", page.location.name].filter((name, i, arr) => arr.indexOf(name) === i).join("; "),
        breadcrumbName: page.title,
      });
      // Bundled office photographs have no meaningful absolute URL; omit social images rather than invent one.
      return { ...head, meta: head.meta.filter((meta) => meta.property !== "og:image" && meta.name !== "twitter:image") };
    },
    component: () => <InternationalLegalLanding page={page} />,
  };
}