/**
 * CONFIGURAÇÃO CENTRAL DO DOMÍNIO OFICIAL DO SITE
 * -----------------------------------------------
 * Este é o ÚNICO local onde o domínio oficial deve ser definido.
 *
 * Enquanto o site estiver hospedado temporariamente no domínio do Lovable,
 * mantenha SITE_DOMAIN como string vazia (""). Com o valor vazio, canonical,
 * og:url, sitemap e robots.txt usam caminhos relativos — que são resolvidos
 * pelo domínio em que o site está sendo servido no momento.
 *
 * Quando o domínio definitivo (Hostinger) estiver ativo, basta preencher
 * SITE_DOMAIN abaixo, sem barra final. Exemplo:
 *
 *   export const SITE_DOMAIN = "https://bragabitencourt.com";
 *
 * Todas as URLs canônicas, sitemap, Open Graph e Twitter passam a usar
 * automaticamente o domínio oficial.
 */
export const SITE_DOMAIN = "https://bragabitencourt.com";

/** Nome do site usado em og:site_name e sufixos de título. */
export const SITE_NAME = "Braga Bitencourt Advogados";

/** Idioma do documento HTML. */
export const SITE_LOCALE = "pt-BR";

/** Existe domínio oficial configurado? */
export const hasOfficialDomain = () => SITE_DOMAIN.trim().length > 0;

/**
 * Constrói uma URL do site a partir de um caminho.
 * Sem domínio oficial configurado, retorna o caminho relativo.
 */
export function siteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const clean = normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized;
  if (!hasOfficialDomain()) return clean;
  return `${SITE_DOMAIN.replace(/\/+$/, "")}${clean === "/" ? "/" : clean}`;
}

/** Garante URL absoluta para imagens sociais quando possível. */
export function siteAssetUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) return url;
  return siteUrl(url);
}
