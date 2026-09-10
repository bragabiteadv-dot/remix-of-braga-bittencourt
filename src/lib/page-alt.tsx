import { createContext, useContext, type ReactNode } from "react";

/**
 * Fornece um texto alternativo (alt) padrão para todas as imagens de uma página.
 * Usado nas landing pages de cidades, onde o alt de cada imagem deve ser o
 * título da página. Não renderiza nada visível — é apenas semântica para o Google.
 */
type PageAltContextValue = {
  alt: string;
  service?: string;
  city?: string;
};

const PageAltContext = createContext<PageAltContextValue | null>(null);

export function PageAltProvider({
  alt,
  service,
  city,
  children,
}: {
  alt: string;
  service?: string;
  city?: string;
  children: ReactNode;
}) {
  return (
    <PageAltContext.Provider value={{ alt, service, city }}>{children}</PageAltContext.Provider>
  );
}

/** Retorna o alt da página quando definido; caso contrário, o fallback informado. */
export function usePageAlt(fallback: string) {
  const ctx = useContext(PageAltContext);
  return ctx?.alt ?? fallback;
}

export type PageAltKind =
  | "office"
  | "logo"
  | "team-javet"
  | "team-gabriel"
  | "team-glaucia"
  | "action"
  | "form";

/** Alt específico por tipo de imagem, otimizado para busca por imagens. */
export function usePageAltFor(kind: PageAltKind, fallback: string) {
  const ctx = useContext(PageAltContext);
  if (!ctx) return fallback;
  const { alt, service } = ctx;
  if (!service) return alt ?? fallback;
  switch (kind) {
    case "office":
      return `Escritório de ${service}`;
    case "logo":
      return `Braga Bitencourt ${alt}`;
    case "team-javet":
      return `Dr. Javét ${alt}`;
    case "team-gabriel":
      return `${service} Braga Bitencourt Advogados`;
    case "team-glaucia":
      return alt;
    case "action":
      return alt;
    case "form":
      return `Fale com advogado de ${service}`;
  }
}
