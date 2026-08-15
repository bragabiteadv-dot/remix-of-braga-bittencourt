import { SITE_NAME, siteAssetUrl, siteUrl } from "./site";

/**
 * ESTRUTURA CENTRALIZADA E REUTILIZÁVEL DE SEO
 * --------------------------------------------
 * Use `buildSeo()` dentro do `head()` de cada rota. Ela devolve o objeto
 * { meta, links, scripts } esperado pelo TanStack Router, já contendo:
 * title, description, canonical, robots, Open Graph, Twitter e (opcional)
 * dados estruturados (Schema.org).
 *
 * Assim nenhuma rota precisa repetir lógica de SEO, e o domínio oficial
 * vem sempre de src/lib/site.ts.
 */

export interface SeoInput {
  /** Caminho da página, iniciando com "/". Ex.: "/perfil" */
  path: string;
  /** Title específico da página (usado exatamente como informado). */
  title: string;
  /** Meta description específica da página. */
  description?: string;
  /** og:type — "website" (padrão) ou "article". */
  type?: "website" | "article";
  /** Imagem para og:image / twitter:image (absoluta ou caminho do site). */
  image?: string;
  /** Conteúdo de <meta name="robots">. Padrão: "index, follow". */
  robots?: string;
  /** Atalho para páginas que não devem ser indexadas. */
  noindex?: boolean;
  /**
   * Dados estruturados Schema.org. Preparado para receber futuramente
   * LegalService, Service, BreadcrumbList, Article, FAQPage etc.
   */
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export interface SeoHead {
  meta: Array<Record<string, string>>;
  links: Array<Record<string, string>>;
  scripts?: Array<Record<string, string>>;
}

export function buildSeo(input: SeoInput): SeoHead {
  const { path, title, description, type = "website", image, robots, noindex, schema } = input;

  const url = siteUrl(path);

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "robots", content: noindex ? "noindex, nofollow" : (robots ?? "index, follow") },
    { property: "og:title", content: title },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
  ];

  if (description) {
    meta.push(
      { name: "description", content: description },
      { property: "og:description", content: description },
      { name: "twitter:description", content: description },
    );
  }

  if (image) {
    const absolute = siteAssetUrl(image);
    meta.push({ property: "og:image", content: absolute }, { name: "twitter:image", content: absolute });
  }

  const head: SeoHead = {
    meta,
    links: [{ rel: "canonical", href: url }],
  };

  if (schema) {
    const list = Array.isArray(schema) ? schema : [schema];
    head.scripts = list.map((entry) => ({
      type: "application/ld+json",
      children: JSON.stringify(entry),
    }));
  }

  return head;
}
