import { createContext, useContext, type ReactNode } from "react";

/**
 * Fornece um texto alternativo (alt) padrão para todas as imagens de uma página.
 * Usado nas landing pages de cidades, onde o alt de cada imagem deve ser o
 * título da página. Não renderiza nada visível — é apenas semântica para o Google.
 */
const PageAltContext = createContext<string | null>(null);

export function PageAltProvider({ alt, children }: { alt: string; children: ReactNode }) {
  return <PageAltContext.Provider value={alt}>{children}</PageAltContext.Provider>;
}

/** Retorna o alt da página quando definido; caso contrário, o fallback informado. */
export function usePageAlt(fallback: string) {
  const pageAlt = useContext(PageAltContext);
  return pageAlt ?? fallback;
}
