import { SITE_NAME, siteAssetUrl, siteUrl } from "./site";
import logoTree from "@/assets/logo-tree-new.webp";
import founderPortrait from "@/assets/team-carlos-javet.webp";

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

/** @id estável do advogado fundador (dados já exibidos no Perfil do site). */
export const FOUNDER_ID = `${siteUrl("/")}#carlos-javet-braga-bitencourt`;

/** Perfis oficiais do escritório (mesmos links do rodapé). */
const SAME_AS = [
  "https://www.facebook.com/bragabitencourtadv/",
  "https://www.instagram.com/bragabitencourtadv/",
] as const;

const BH_MAP = "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.954955,-43.9595168,1022m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6be0a87eba137:0x5b7a5c4dbe44fd0b!8m2!3d-19.954955!4d-43.9595168!16s%2Fg%2F1x6q2_2p";
const BETIM_MAP = "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.9699976,-44.2045052,1021m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6c35df7797b19:0xf77bb0f67fe9276a!8m2!3d-19.9699976!4d-44.2045052!16s%2Fg%2F11n0pqcqww";

const KNOWS_ABOUT = [
  "Direito de Família",
  "Direito das Sucessões",
  "Direito Internacional Privado",
  "Divórcio consensual e litigioso",
  "Divórcio extrajudicial",
  "Inventário judicial e extrajudicial",
  "Partilha de bens",
  "Guarda compartilhada",
  "Pensão alimentícia",
  "Curatela",
  "União estável",
  "Planejamento sucessório",
  "Homologação de sentença estrangeira no STJ",
  "Averbação de divórcio estrangeiro",
  "Transcrição de casamento realizado no exterior",
  "Atendimento jurídico a brasileiros residentes no exterior",
] as const;

const ADDRESS_BH = {
  "@type": "PostalAddress",
  streetAddress: "Av. Raja Gabaglia, 2000, sala 614, Bloco 1",
  addressLocality: "Belo Horizonte",
  addressRegion: "MG",
  postalCode: "30494-170",
  addressCountry: "BR",
} as const;

const ADDRESS_BETIM = {
  "@type": "PostalAddress",
  streetAddress: "Av. Amazonas, 1446, salas 706/707",
  addressLocality: "Betim",
  addressRegion: "MG",
  postalCode: "32600-324",
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
      geo: { "@type": "GeoCoordinates", latitude: -19.954955, longitude: -43.9595168 },
      hasMap: BH_MAP,
      areaServed: [
        { "@type": "City", name: "Belo Horizonte" },
        { "@type": "City", name: "Nova Lima" },
      ],
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
      geo: { "@type": "GeoCoordinates", latitude: -19.9699976, longitude: -44.2045052 },
      hasMap: BETIM_MAP,
      areaServed: [
        { "@type": "City", name: "Betim" },
        { "@type": "City", name: "Contagem" },
        { "@type": "City", name: "Igarapé" },
      ],
      parentOrganization: ORG_REF,
    },
  ];
}

/**
 * Advogado fundador — somente informações já publicadas no Perfil/Home
 * (FounderCard). Reforça autoria e autoridade (E-E-A-T) para Google e IAs.
 */
export function founderSchema(): Record<string, unknown> {
  const oabMg = { "@type": "Organization", name: "Ordem dos Advogados do Brasil — Seção Minas Gerais (OAB/MG)" };
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Carlos Javét Braga Bitencourt",
    honorificPrefix: "Dr.",
    jobTitle: "Advogado fundador",
    url: siteUrl("/perfil"),
    image: siteAssetUrl(founderPortrait),
    worksFor: ORG_REF,
    alumniOf: { "@type": "CollegeOrUniversity", name: "PUC Minas" },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Registro profissional", name: "OAB/MG 107.192", recognizedBy: oabMg },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Especialização", name: "Direito de Família e Sucessões", recognizedBy: { "@type": "Organization", name: "IBMEC/EBRADI-SP" } },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "Especialização", name: "Direito de Família e Sucessões", recognizedBy: { "@type": "Organization", name: "Instituto Damásio-SP" } },
    ],
    knowsAbout: ["Direito de Família", "Direito das Sucessões", "Planejamento Sucessório", "Direito Internacional Privado", "Visual Law"],
  };
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
    logo: siteAssetUrl(logoTree),
    image: siteAssetUrl(logoTree),
    telephone: "+5531980260880",
    email: "bragabitencourtadv@gmail.com",
    address: [ADDRESS_BH, ADDRESS_BETIM],
    areaServed: [
      { "@type": "City", name: "Belo Horizonte" },
      { "@type": "City", name: "Betim" },
      { "@type": "Country", name: "Brasil" },
    ],
    knowsAbout: [...KNOWS_ABOUT],
    founder: { "@id": FOUNDER_ID },
    sameAs: [...SAME_AS],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+5531980260880",
      email: "bragabitencourtadv@gmail.com",
      availableLanguage: ["pt-BR"],
      areaServed: "BR",
    },
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
