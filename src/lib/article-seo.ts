import type { Article } from "./articles";
import { ARTICLES } from "./articles";
import { siteAssetUrl, siteUrl } from "./site";
import { ORG_REF } from "./org-schema";

/**
 * SEO TÉCNICO DOS ARTIGOS
 * -----------------------
 * Este módulo gera apenas metadados de <head> e JSON-LD.
 * Nenhum conteúdo visível (título, texto, imagem, slug, URL) é alterado.
 */

const BRAND = "Braga Bitencourt"; // grafia oficial da marca (mesmo em slugs antigos)

/** Reduz tecnicamente títulos longos mantendo o assunto principal. */
const TRAILING_STOPWORDS = /\s+(a|o|as|os|de|da|do|das|dos|e|em|no|na|nos|nas|para|por|com|que|seu|sua|um|uma|ao|à|às|aos|se|the)$/i;

function trimTrailing(text: string): string {
  let t = text.replace(/[.\s,;:–—-]+$/, "");
  let prev = "";
  while (t !== prev) {
    prev = t;
    t = t.replace(TRAILING_STOPWORDS, "").replace(/[.\s,;:–—-]+$/, "");
  }
  return t;
}

function shortenTitle(raw: string, max = 60): string {
  let t = raw.trim().replace(/\s+/g, " ").replace(/[.\s]+$/, "");

  // Remove menções à marca no fim do título (evita repetição com o sufixo).
  t = t.replace(/[,\-–—:]?\s*(com a|pela|do escritório)?\s*Braga Bit+encourt(\s+Advogados)?\.?$/i, "").replace(/[.\s,–—-]+$/, "");

  if (t.length <= max) return t;

  // Mantém a parte principal antes de ":" / "–" / "." quando suficiente.
  const primary = trimTrailing(t.split(/[:–—]|\.\s/)[0]?.trim() ?? t);
  if (primary.length >= 20 && primary.length <= max) return primary;

  const base = primary.length >= 20 ? primary : t;
  if (base.length <= max) return base;

  const cut = base.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return trimTrailing(lastSpace > 20 ? cut.slice(0, lastSpace) : cut);
}

/** Title SEO único por artigo. */
export function articleSeoTitle(article: Article): string {
  const short = shortenTitle(article.title);
  const duplicates = ARTICLES.filter((a) => shortenTitle(a.title).toLowerCase() === short.toLowerCase());
  // Desambiguação técnica caso dois artigos gerem o mesmo título curto.
  const suffix =
    duplicates.length > 1 && duplicates[0]?.id !== article.id ? ` (${article.category})` : "";
  return `${short}${suffix} | ${BRAND}`;
}

/** Meta description derivada do excerpt/conteúdo já existente. */
export function articleSeoDescription(article: Article, max = 158): string {
  const source =
    (article.excerpt?.trim().length ?? 0) > 80
      ? article.excerpt
      : [article.excerpt, article.body?.[0], article.body?.[1]]
          .filter((v): v is string => Boolean(v && v.trim().length > 40))
          .sort((a, b) => b.length - a.length)[0] ?? article.excerpt;
  let text = (source ?? "").replace(/\s+/g, " ").replace(/\s*\.{3,}\s*$/, "").trim();
  if (text.length > max) {
    const cut = text.slice(0, max);
    const lastStop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("; "));
    text = lastStop > 90 ? cut.slice(0, lastStop + 1) : `${cut.slice(0, cut.lastIndexOf(" "))}…`;
  }
  return text;
}

const MONTHS: Record<string, string> = {
  janeiro: "01", fevereiro: "02", março: "03", marco: "03", abril: "04", maio: "05", junho: "06",
  julho: "07", agosto: "08", setembro: "09", outubro: "10", novembro: "11", dezembro: "12",
};

/** Converte a data já existente ("Março de 2026") em ISO parcial ("2026-03"). Sem inventar dia. */
export function articleIsoDate(date?: string): string | undefined {
  if (!date) return undefined;
  const m = date.toLowerCase().match(/([a-zç]+)\s+de\s+(\d{4})/);
  if (m && MONTHS[m[1]!]) return `${m[2]}-${MONTHS[m[1]!]}`;
  const year = date.match(/\b(\d{4})\b/);
  return year ? year[1] : undefined;
}

/** JSON-LD: Article + BreadcrumbList, somente com dados já existentes no projeto. */
export function articleSchemas(article: Article) {
  const url = siteUrl(`/artigos/${article.slug}`);
  const published = articleIsoDate(article.date);

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: articleSeoDescription(article),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.category,
    inLanguage: "pt-BR",
    author: ORG_REF,
    publisher: ORG_REF,
  };

  if (article.image) articleSchema.image = siteAssetUrl(article.image);
  if (published) {
    articleSchema.datePublished = published;
    articleSchema.dateModified = published;
  }

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Artigos", item: siteUrl("/artigos") },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return [articleSchema, breadcrumb];
}
