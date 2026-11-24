import { createContext, useContext, type ReactNode } from "react";
import type { ImageSlot, PageImageSeo } from "@/lib/image-seo";

/**
 * Fornece um texto alternativo (alt) padrão para todas as imagens de uma página.
 * Usado nas landing pages de cidades, onde o alt de cada imagem deve ser o
 * título da página. Não renderiza nada visível — é apenas semântica para o Google.
 *
 * Quando `images` é informado (src/lib/image-seo.ts), cada imagem recebe o alt
 * específico definido nos documentos de otimização de imagens.
 */
type PageAltContextValue = {
  alt: string;
  service?: string;
  city?: string;
  images?: PageImageSeo;
};

const PageAltContext = createContext<PageAltContextValue | null>(null);

export function PageAltProvider({
  alt,
  service,
  city,
  images,
  children,
}: {
  alt: string;
  service?: string;
  city?: string;
  images?: PageImageSeo;
  children: ReactNode;
}) {
  return (
    <PageAltContext.Provider value={{ alt, service, city, images }}>{children}</PageAltContext.Provider>
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

const IMAGE_SLOT_BY_KIND: Readonly<Record<PageAltKind, ImageSlot>> = {
  office: "hero",
  logo: "logo",
  "team-javet": "team-javet",
  "team-gabriel": "team-gabriel",
  "team-glaucia": "team-glaucia",
  action: "action",
  form: "form",
};

/** Alt específico por tipo de imagem, otimizado para busca por imagens. */
export function usePageAltFor(kind: PageAltKind, fallback: string) {
  const ctx = useContext(PageAltContext);
  if (!ctx) return fallback;
  const fromImages = ctx.images?.alt(IMAGE_SLOT_BY_KIND[kind]);
  if (fromImages) return fromImages;
  const { alt, service, city } = ctx;
  if (!service) return alt ?? fallback;
  switch (kind) {
    case "office":
      return `Escritório de ${service}`;
    case "logo":
      return `Braga Bitencourt ${alt}`;
    case "team-javet":
      return alt;
    case "team-gabriel":
      return `Braga Bitencourt Advocacia de ${service}${city ? ` ${city}` : ""}`;
    case "team-glaucia":
      return `Braga Bitencourt Advocacia de ${service}${city ? ` ${city}` : ""}`;
    case "action":
      return `O compromisso do ${alt}`;
    case "form":
      return `Fale com ${alt}.`;
  }
}
