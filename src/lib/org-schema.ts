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

/** @ids estáveis das unidades físicas (relacionadas à entidade principal). */
export const UNIT_BH_ID = `${siteUrl("/")}#unidade-belo-horizonte`;
export const UNIT_BETIM_ID = `${siteUrl("/")}#unidade-betim`;

const ADDRESS_BH = {
  "@type": "PostalAddress",
  streetAddress: "Av. Raja Gabaglia, 2000, sala 614, Bloco 1",
  addressLocality: "Belo Horizonte",
  addressRegion: "MG",
  postalCode: "30350-540",
  addressCountry: "BR",
} as const;

const ADDRESS_BETIM = {
  "@type": "PostalAddress",
  streetAddress: "Av. Amazonas, 1446, salas 706/707",
  addressLocality: "Betim",
  addressRegion: "MG",
  postalCode: "32600-325",
  addressCountry: "BR",
} as const;

/**
 * Unidades físicas do escritório — não são organizações independentes:
 * cada unidade referencia a entidade institucional via parentOrganization.
 */
export function unitSchemas(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": UNIT_BH_ID,
      name: SITE_NAME,
      url: siteUrl("/"),
      telephone: "+5531980260880",
      email: "bragabitencourtadv@gmail.com",
      address: ADDRESS_BH,
      areaServed: { "@type": "City", name: "Belo Horizonte" },
      parentOrganization: ORG_REF,
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "@id": UNIT_BETIM_ID,
      name: SITE_NAME,
      url: siteUrl("/"),
      telephone: "+5531980260880",
      email: "bragabitencourtadv@gmail.com",
      address: ADDRESS_BETIM,
      areaServed: { "@type": "City", name: "Betim" },
      parentOrganization: ORG_REF,
    },
  ];
}

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
    address: [ADDRESS_BH, ADDRESS_BETIM],
    areaServed: [
      { "@type": "City", name: "Belo Horizonte" },
      { "@type": "City", name: "Betim" },
    ],
    knowsAbout: [
      "Direito de Família",
      "Direito das Sucessões",
      "Direito Internacional Privado",
    ],
    department: [{ "@id": UNIT_BH_ID }, { "@id": UNIT_BETIM_ID }],
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
