import { SITE_NAME, siteAssetUrl, siteUrl } from "./site";
import logoTreeAsset from "@/assets/logo-tree-new.png.asset.json";

/**
 * ENTIDADE INSTITUCIONAL ÚNICA (JSON-LD)
 * --------------------------------------
 * Fonte única de verdade para o Schema institucional do escritório.
 * Todas as demais entidades (WebSite, Article, LegalService da landing)
 * referenciam esta entidade por @id — sem duplicar informações.
 *
 * Somente dados já existentes no projeto são utilizados. Nada visual.
 */

/** @id estável da entidade institucional (independe do domínio final). */
export const ORG_ID = `${siteUrl("/")}#organizacao`;

/** @id estável do WebSite. */
export const WEBSITE_ID = `${siteUrl("/")}#website`;

export const ORG_REF = { "@id": ORG_ID } as const;

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORG_ID,
    name: SITE_NAME,
    description:
      "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais.",
    url: siteUrl("/"),
    logo: siteAssetUrl(logoTreeAsset.url),
    image: siteAssetUrl(logoTreeAsset.url),
    telephone: "+5531980260880",
    email: "bragabitencourtadv@gmail.com",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Av. Raja Gabaglia, 2000, sala 614, Bloco 1",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        postalCode: "30350-540",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Av. Amazonas, 1446, salas 706/707",
        addressLocality: "Betim",
        addressRegion: "MG",
        postalCode: "32600-325",
        addressCountry: "BR",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Belo Horizonte" },
      { "@type": "City", name: "Betim" },
    ],
    knowsAbout: [
      "Direito de Família",
      "Direito das Sucessões",
      "Direito Internacional Privado",
    ],
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: siteUrl("/"),
    inLanguage: "pt-BR",
    publisher: ORG_REF,
  };
}
