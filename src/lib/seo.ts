import { SITE_NAME, normalizeSitePath, siteAssetUrl, siteUrl } from "./site";
import { fitDescription, fitTitle } from "./seo-text";

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

/**
 * Diretiva padrão das páginas indexáveis. `max-image-preview:large` autoriza o
 * Google a exibir as fotos em tamanho grande (Imagens/Discover), evitando
 * miniaturas pequenas e borradas; snippets e vídeos sem limite de tamanho.
 */
export const ROBOTS_INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

/** Página mantida no ar para visitantes, mas fora do índice (links continuam sendo seguidos). */
export const ROBOTS_NOINDEX_FOLLOW = "noindex, follow";

export function buildSeo(input: SeoInput): SeoHead {
  const { path, title, description, type = "website", image, robots, noindex, schema } = input;

  // Canonical e og:url sempre usam apenas o caminho real da página. Assim,
  // UTMs, outros parâmetros de busca e hashes nunca entram nos sinais de SEO.
  const url = siteUrl(normalizeSitePath(path));

  // <title> e meta description no tamanho que o Google exibe sem cortar;
  // og:/twitter: mantêm a versão completa (redes sociais e assistentes de IA).
  const searchTitle = fitTitle(title, normalizeSitePath(path));
  const searchDescription = description ? fitDescription(description) : undefined;

  const meta: Array<Record<string, string>> = [
    { title: searchTitle },
    { name: "robots", content: noindex ? "noindex, nofollow" : (robots ?? ROBOTS_INDEX) },
    { property: "og:title", content: title },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
  ];

  if (description && searchDescription) {
    meta.push(
      { name: "description", content: searchDescription },
      { property: "og:description", content: description },
      { name: "twitter:description", content: description },
    );
  }

  if (image) {
    const absolute = siteAssetUrl(image);
    meta.push({ property: "og:image", content: absolute }, { name: "twitter:image", content: absolute });
  }

  // Páginas noindex (404 / artigo inexistente) não recebem canonical:
  // evita canonical apontando para URL inexistente.
  const isNoindex = noindex || (robots ?? "").includes("noindex");

  const head: SeoHead = {
    meta,
    links: isNoindex ? [] : [{ rel: "canonical", href: url }],
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
