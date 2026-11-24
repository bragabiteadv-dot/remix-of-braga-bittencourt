import { INTERNATIONAL_LOCATIONS, type InternationalLocation } from "@/lib/international-landings";
import { ROBOTS_INDEX, ROBOTS_NOINDEX_FOLLOW } from "@/lib/seo";

export { ROBOTS_INDEX, ROBOTS_NOINDEX_FOLLOW };

/**
 * POLÍTICA CENTRAL DE INDEXAÇÃO (SEO) — FONTE ÚNICA DE VERDADE
 * ------------------------------------------------------------
 * O site possui ~2.850 rotas programáticas (serviço × localidade). A maior
 * parte das variações de cidade, região, condado e cantão repete o mesmo
 * conteúdo da página do país, o que dilui a autoridade do domínio, consome
 * orçamento de rastreamento e é tratado pelo Google como páginas-porta
 * (doorway pages).
 *
 * Esta política NÃO apaga nenhuma página nem altera o visual: as URLs
 * continuam acessíveis para visitantes, anúncios e links. Ela apenas decide
 * o que o Google deve indexar:
 *   • indexável      → `index, follow` + canonical + sitemap;
 *   • não indexável  → `noindex, follow` (links continuam passando autoridade),
 *                      sem canonical e fora do sitemap/llms.txt.
 *
 * Para reverter ou ampliar, edite apenas as listas abaixo.
 */

/**
 * Polos com as maiores comunidades brasileiras no exterior. Além dos países,
 * apenas estas cidades permanecem indexáveis nas páginas de residentes.
 */
export const RESIDENT_HUB_LOCATION_SLUGS: ReadonlySet<string> = new Set([
  "lisboa",
  "porto",
  "londres",
  "boston",
  "miami",
  "orlando",
  "nova-york-nyc",
  "hamamatsu",
  "nagoia",
]);

/**
 * Páginas "origem do ato" (homologação, averbação, registro etc.): o que
 * importa juridicamente é o país emissor; variações de cidade/estado ficam
 * fora do índice.
 */
export const INTERNATIONAL_INDEXABLE_KINDS: ReadonlySet<InternationalLocation["kind"]> = new Set(["pais"]);

/** Exceções manuais: forçar indexação (ex.: URL com tráfego comprovado no Search Console). */
export const FORCE_INDEX_PATHS: ReadonlySet<string> = new Set<string>([]);

/** Exceções manuais: forçar noindex. */
export const FORCE_NOINDEX_PATHS: ReadonlySet<string> = new Set<string>([]);

const LOCATIONS_BY_ID = new Map(INTERNATIONAL_LOCATIONS.map((location) => [location.id, location]));

function applyOverrides(path: string, decision: boolean): boolean {
  if (FORCE_NOINDEX_PATHS.has(path)) return false;
  if (FORCE_INDEX_PATHS.has(path)) return true;
  return decision;
}

/** Página internacional por origem do ato (/advogado-[servico]-[pais]). */
export function isIndexableInternationalLanding(page: { path: string; location: InternationalLocation }): boolean {
  return applyOverrides(page.path, INTERNATIONAL_INDEXABLE_KINDS.has(page.location.kind));
}

/** Página de residentes (/advogado-[servico]-no-brasil[-para-residentes-lugar]). */
export function isIndexableResidentLanding(path: string, locationId: number | null): boolean {
  if (locationId === null) return applyOverrides(path, true); // atendimento geral no Brasil
  const location = LOCATIONS_BY_ID.get(locationId);
  if (!location) return applyOverrides(path, false);
  return applyOverrides(path, location.kind === "pais" || RESIDENT_HUB_LOCATION_SLUGS.has(location.slug));
}

/** Diretiva robots para uma decisão de indexação. */
export function robotsFor(indexable: boolean): string {
  return indexable ? ROBOTS_INDEX : ROBOTS_NOINDEX_FOLLOW;
}
