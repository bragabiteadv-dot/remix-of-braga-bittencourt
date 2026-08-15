import { createFileRoute } from "@tanstack/react-router";
import { setResponseStatus } from "@tanstack/react-start/server";
import { buildSeo } from "@/lib/seo";
import { NotFoundView } from "@/components/layout/NotFoundView";

/**
 * Rota catch-all: apenas garante metadados corretos (noindex) para URLs
 * inexistentes. O conteúdo visual é exatamente o mesmo da página 404 atual.
 */
export const Route = createFileRoute("/$")({
  component: NotFoundView,
  // Garante status HTTP 404 (em vez de 200) para URLs inexistentes.
  // O visual permanece exatamente o mesmo: notFoundComponent da raiz
  // renderiza a mesma NotFoundView.
  loader: () => {
    // Status HTTP 404 real para URLs inexistentes, mantendo os metadados
    // (noindex) e o mesmo visual da página 404 já existente.
    setResponseStatus(404);
  },
  head: () =>
    buildSeo({
      path: "/404",
      title: "Página não encontrada | Braga Bitencourt Advogados",
      description:
        "A página que você procura não foi encontrada. Acesse a página inicial da Braga Bitencourt Advogados para continuar navegando.",
      noindex: true,
    }),
});
