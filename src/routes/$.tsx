import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { NotFoundView } from "@/components/layout/NotFoundView";

/**
 * Rota catch-all: apenas garante metadados corretos (noindex) para URLs
 * inexistentes. O conteúdo visual é exatamente o mesmo da página 404 atual.
 */
export const Route = createFileRoute("/$")({
  component: NotFoundView,
  head: () =>
    buildSeo({
      path: "/404",
      title: "Página não encontrada | Braga Bitencourt Advogados",
      description:
        "A página que você procura não foi encontrada. Acesse a página inicial da Braga Bitencourt Advogados para continuar navegando.",
      noindex: true,
    }),
});
