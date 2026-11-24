import { useMemo } from "react";
import { useMatches } from "@tanstack/react-router";
import { articleImageSeo, type PageImageSeo } from "@/lib/image-seo";
import type { Article } from "@/lib/articles";

/**
 * Header e Footer globais ficam fora da árvore de cada rota. Este hook lê o
 * artigo carregado pela rota /artigos/$slug para que logotipo e emblema do
 * rodapé recebam o texto alternativo específico do artigo (doc 5).
 * Em qualquer outra página retorna `undefined` e o alt institucional é mantido.
 */
export function useCurrentArticleImageSeo(): PageImageSeo | undefined {
  const article = useMatches({
    select: (matches) => {
      const match = matches.find((item) => item.routeId === "/artigos/$slug");
      return (match?.loaderData as { article?: Article } | undefined)?.article;
    },
  });
  return useMemo(() => (article ? articleImageSeo(article) : undefined), [article]);
}
