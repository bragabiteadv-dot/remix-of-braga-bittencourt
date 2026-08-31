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

export type PageAltKind = "office" | "team-javet" | "team-firm" | "action" | "form";

/** Alt específico por tipo de imagem, otimizado para busca local (serviço + cidade). */
export function usePageAltFor(kind: PageAltKind, fallback: string) {
  const ctx = useContext(PageAltContext);
  if (!ctx) return fallback;
  const { service, city } = ctx;
  if (!service || !city) return ctx.alt ?? fallback;
  switch (kind) {
    case "office":
      return `Escritório especialista em ${service} em ${city}`;
    case "team-javet":
      return `Dr. Javét, especialista em ${service} em ${city}`;
    case "team-firm":
      return `Braga Bitencourt Advogados especialistas em ${service} em ${city}`;
    case "action":
      return `Advogados especialistas em ${service} em ${city}`;
    case "form":
      return `Fale com advogado de ${service} em ${city}`;
  }
}
