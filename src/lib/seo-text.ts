/**
 * TÍTULO E DESCRIÇÃO EXIBIDOS NO GOOGLE (<title> e meta description)
 * --------------------------------------------------------------------
 * O Google corta títulos acima de ~60 caracteres e descrições acima de
 * ~160 com "…". Estas funções ajustam SOMENTE a tag <title> e a meta
 * description. H1, textos da página, og:title e og:description (redes
 * sociais e assistentes de IA) continuam com a versão completa.
 *
 * Regras de título: remove o sufixo da marca quando ele estoura o limite
 * (o Google já exibe o nome do site acima do título), retira explicações
 * entre parênteses, normaliza títulos em CAIXA ALTA e encurta nomes de
 * serviço muito longos. Páginas especializadas têm título escrito à mão.
 */

export const TITLE_MAX = 60;
export const DESCRIPTION_MAX = 160;

/** Títulos escritos à mão para páginas cujo nome do serviço é longo demais. */
const TITLE_OVERRIDES: Readonly<Record<string, string>> = {
  "/advogado-averbacao-direta-divorcio-portugues-cartorio-brasil": "Averbação de Divórcio Português em Cartório no Brasil",
  "/advogado-cumprimento-contestacao-cartas-rogatorias-stj-brasilia": "Advogado para Cartas Rogatórias no STJ em Brasília",
  "/advogado-cumprimento-contestacao-cartas-rogatorias-stj-brasilia-portugal": "Advogado para Cartas Rogatórias de Portugal no STJ",
  "/advogado-homologacao-decisao-curatela-interdicao-stj-brasilia": "Homologação de Curatela Estrangeira no STJ | Advogado",
  "/advogado-homologacao-decisao-curatela-interdicao-stj-brasilia-portugal": "Homologação de Curatela Portuguesa no STJ | Advogado",
  "/advogado-homologacao-decisao-judicial-estrangeira-stj-brasil": "Advogado de Homologação de Decisão Estrangeira no STJ",
  "/advogado-homologacao-decisao-judicial-portuguesa-stj-brasil": "Advogado de Homologação de Decisão Portuguesa no STJ",
  "/advogado-homologacao-sentenca-estrangeira-divorcio-guarda-brasil": "Homologação de Divórcio e Guarda Estrangeiros no Brasil",
  "/advogado-homologacao-sentenca-estrangeira-paternidade-filiacao-brasil": "Homologação de Sentença Estrangeira de Paternidade",
  "/advogado-homologacao-sentenca-portuguesa-paternidade-filiacao-brasil": "Homologação de Sentença Portuguesa de Paternidade",
  "/advogado-reconhecimento-homologacao-sentenca-estrangeira-stj-brasilia": "Homologação de Sentença Estrangeira no STJ (Exequatur)",
  "/advogado-reconhecimento-homologacao-sentenca-portuguesa-stj-brasilia": "Homologação de Sentença Portuguesa no STJ (Exequatur)",
  "/advogado-registro-validacao-escrituras-notariais-estrangeiras-brasil": "Registro de Escrituras Notariais Estrangeiras no Brasil",
  "/advogado-registro-validacao-escrituras-notariais-portuguesas-brasil": "Registro de Escrituras Notariais Portuguesas no Brasil",
  "/advogado-traslado-transcricao-certidao-casamento-estrangeiro-brasil": "Advogado: Transcrição de Casamento Estrangeiro no Brasil",
  "/advogado-traslado-transcricao-certidao-casamento-portugues-brasil": "Advogado: Transcrição de Casamento Português no Brasil",
  "/advogado-validacao-homologacao-sentenca-estrangeira": "Advogado: Homologação de Sentença Estrangeira no Brasil",
  "/advogado-validacao-homologacao-sentenca-portuguesa-brasil": "Advogado: Homologação de Sentença Portuguesa no Brasil",
  "/artigos/suprimento-de-consentimento-dos-pais-para-emissao-de-passaporte-o-que-fazer-quan": "Suprimento de Consentimento para Passaporte de Menor",
};

/** Nomes de serviço encurtados (aplicados só quando o título passa do limite). */
const SHORTER_PHRASES: ReadonlyArray<readonly [RegExp, string]> = [
  [/Reconhecimento, Investigação e Negatória de Paternidade/g, "Investigação de Paternidade"],
  [/Reconhecimento e Dissolução de União Estável/g, "União Estável"],
  [/Mudança de Regime de Bens de Casamento/g, "Mudança de Regime de Bens"],
  [/Emirados Árabes Unidos/g, "Emirados Árabes"],
  [/Holanda \/ Países Baixos/g, "Holanda"],
  [/Registro de contratos internacionais no RTD/g, "Contratos internacionais no RTD"],
];

const BRAND_SUFFIX = /\s*[|—–-]\s*Braga Bit+encourt(\s+Advogados)?\s*$/i;
const SHORT_BRAND = " | Braga Bitencourt";

function normalizeCase(text: string): string {
  const letters = text.replace(/[^A-Za-zÀ-ÿ]/g, "");
  if (letters.length < 6 || letters !== letters.toLocaleUpperCase("pt-BR")) return text;
  const lower = text.toLocaleLowerCase("pt-BR");
  return lower.charAt(0).toLocaleUpperCase("pt-BR") + lower.slice(1);
}

/** Título para a tag <title>: o mais completo possível dentro de ~60 caracteres. */
export function fitTitle(title: string, path?: string): string {
  const override = path ? TITLE_OVERRIDES[path] : undefined;
  if (override) return override;
  const brand = title.match(BRAND_SUFFIX)?.[0] ?? "";
  let core = normalizeCase(title.slice(0, title.length - brand.length).trim());
  if (`${core}${brand}`.length <= TITLE_MAX) return `${core}${brand}`;

  const fits = (text: string) => text.length <= TITLE_MAX;
  const withBrand = (text: string) => `${text}${SHORT_BRAND}`;

  if (fits(withBrand(core))) return withBrand(core);
  if (fits(core)) return core;

  core = core.replace(/\s*\([^)]*\)/g, "").replace(/\s{2,}/g, " ").trim();
  if (fits(core)) return core;

  for (const [pattern, replacement] of SHORTER_PHRASES) core = core.replace(pattern, replacement);
  if (fits(withBrand(core))) return withBrand(core);
  return core;
}

const TRAILING_WORDS = /\s+(a|o|as|os|de|da|do|das|dos|e|em|no|na|nos|nas|para|por|com|que|ao|à|às|aos|se)$/i;

function trimEnd(text: string): string {
  let current = text.replace(/[\s,;:–—-]+$/, "");
  let previous = "";
  while (current !== previous) {
    previous = current;
    current = current.replace(TRAILING_WORDS, "").replace(/[\s,;:–—-]+$/, "");
  }
  return current;
}

/** Meta description dentro de ~160 caracteres, terminando em frase ou item completo. */
export function fitDescription(description: string): string {
  const text = description.replace(/\s+/g, " ").trim();
  if (text.length <= DESCRIPTION_MAX) return text;
  const limit = DESCRIPTION_MAX - 3;
  const sentences = text.match(/[^.!?]+[.!?]+(\s|$)/g)?.map((sentence) => sentence.trim()) ?? [text];

  let result = "";
  for (const sentence of sentences) {
    const candidate = result ? `${result} ${sentence}` : sentence;
    if (candidate.length <= limit) {
      result = candidate;
      continue;
    }
    // Completa com itens inteiros (separados por vírgula) da frase seguinte.
    const clauses = sentence.replace(/[.!?]+$/, "").split(/,\s+/);
    let partial = "";
    for (const clause of clauses) {
      const next = partial ? `${partial}, ${clause}` : clause;
      const full = result ? `${result} ${next}.` : `${next}.`;
      if (full.length > limit) break;
      partial = next;
    }
    if (partial) result = result ? `${result} ${trimEnd(partial)}.` : `${trimEnd(partial)}.`;
    break;
  }
  if (result.length >= 70) return result;

  // Frase única muito longa: corta na última palavra inteira.
  const cut = text.slice(0, limit);
  return `${trimEnd(cut.slice(0, cut.lastIndexOf(" ")))}…`;
}
