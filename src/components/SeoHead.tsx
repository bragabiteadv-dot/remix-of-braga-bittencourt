import { SITE_NAME, siteUrl } from "@/lib/site";
import { buildSeo, type SeoHead, type SeoInput } from "@/lib/seo";
import { ORG_ID, ORG_REF } from "@/lib/org-schema";

/**
 * SEO LOCAL — COMPONENTE GLOBAL DE SEO PARA BUSCAS LOCAIS
 * -------------------------------------------------------
 * Este módulo centraliza a geração de metadados para páginas de serviço
 * jurídico em cidades específicas (Local SEO).
 *
 * Como o projeto usa TanStack Start, o SEO real é injetado pelo `head()`
 * de cada rota. O `<SeoHead>` aqui é um componente lógico/documentacional
 * que não renderiza elementos visuais; a função `buildSeoHead()` deve ser
 * usada dentro de `head()` para devolver `{ meta, links, scripts }`.
 *
 * Exemplo de uso numa rota:
 *
 *   import { buildSeoHead } from "@/components/SeoHead";
 *
 *   export const Route = createFileRoute("/advogado-divorcio-betim")({
 *     head: () => buildSeoHead({
 *       title: "Advogado de Divórcio em Betim | Braga Bitencourt",
 *       description: "Assessoria especializada em divórcio em Betim...",
 *       canonicalUrl: "/advogado-divorcio-betim",
 *       city: "Betim",
 *       service: "Divórcio",
 *     }),
 *     component: Page,
 *   });
 */

export interface SeoHeadProps {
  /** Title completo da página. Se omitido, será gerado a partir de city/service. */
  title?: string;
  /** Meta description da página. */
  description?: string;
  /** Caminho canônico da página (inicia com "/"). Ex.: "/advogado-divorcio-betim" */
  canonicalUrl: string;
  /** Cidade atendida para Local SEO. Ex.: "Betim" */
  city: string;
  /** Serviço jurídico prestado. Ex.: "Divórcio" */
  service: string;
  /** Imagem para og:image / twitter:image (absoluta ou caminho do site). */
  image?: string;
  /** Forçar noindex. Padrão: false. */
  noindex?: boolean;
}

/** Gera descrição padrão quando nenhuma é fornecida. */
function defaultDescription(service: string, city: string): string {
  return `Advogado especialista em ${service} em ${city}. Atendimento humanizado, sigilo e estratégia jurídica para proteger seus direitos. Fale com um advogado.`;
}

/** Gera title padrão quando nenhum é fornecido. */
function defaultTitle(service: string, city: string): string {
  return `${service} em ${city} — ${SITE_NAME}`;
}

/** Schema.org LegalService dinâmico para Local SEO. */
function localLegalServiceSchema(props: {
  title: string;
  description: string;
  canonicalUrl: string;
  city: string;
  service: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: props.title,
    description: props.description,
    url: siteUrl(props.canonicalUrl),
    telephone: "+5531980260880",
    email: "bragabitencourtadv@gmail.com",
    areaServed: { "@type": "City", name: props.city },
    serviceType: props.service,
    inLanguage: "pt-BR",
    parentOrganization: ORG_REF,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": siteUrl(props.canonicalUrl),
    },
  };
}

/**
 * Função principal: devolve o objeto de head do TanStack Router
 * ({ meta, links, scripts }) já com title, description, canonical,
 * Open Graph, Twitter e JSON-LD LegalService para Local SEO.
 */
export function buildSeoHead(props: SeoHeadProps): SeoHead {
  const title = props.title ?? defaultTitle(props.service, props.city);
  const description =
    props.description ?? defaultDescription(props.service, props.city);

  const schema = localLegalServiceSchema({
    title,
    description,
    canonicalUrl: props.canonicalUrl,
    city: props.city,
    service: props.service,
  });

  return buildSeo({
    path: props.canonicalUrl,
    title,
    description,
    type: "website",
    image: props.image,
    noindex: props.noindex,
    schema,
  });
}

/**
 * Componente lógico/documentacional. Não renderiza nada visível.
 *
 * No TanStack Start o SEO é gerido pelo `head()` da rota, portanto este
 * componente não altera o DOM diretamente. Ele existe para manter a
 * interface declarativa esperada em SPAs e pode ser usado em rotas
 * client-only quando necessário — mas o recomendado é `buildSeoHead()`.
 */
export function SeoHead(props: SeoHeadProps): null {
  // Em SPAs puras (fora do TanStack Start), aqui seria usado o react-helmet-async.
  // Neste projeto, prefira `buildSeoHead()` dentro do `head()` da rota.
  void props;
  return null;
}
