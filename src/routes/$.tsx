import { createFileRoute, notFound } from "@tanstack/react-router";
import { buildSeoHead } from "@/components/SeoHead";
import { NotFoundView } from "@/components/layout/NotFoundView";

export const Route = createFileRoute("/$")({
  beforeLoad: () => {
    throw notFound();
  },
  head: () =>
    buildSeoHead({
      canonicalUrl: "/404",
      city: "Brasil",
      service: "Página não encontrada",
      title: "Página não encontrada | Braga Bitencourt Advogados",
      description: "A página que você procura não foi encontrada.",
      noindex: true,
    }),
  notFoundComponent: NotFoundView,
  component: NotFoundView,
});
