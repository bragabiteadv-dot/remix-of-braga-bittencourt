import { InternationalLegalLanding } from "@/components/landing/InternationalLegalLanding";
import { buildSeoHead } from "@/components/SeoHead";
import { getResidentLanding } from "@/lib/resident-landings";

export function residentLandingRouteOptions(path: string) {
  const page = getResidentLanding(path);
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