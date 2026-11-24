import { SITE_NAME, siteAssetUrl, siteUrl } from "@/lib/site";
import { ORG_ID, WEBSITE_ID } from "@/lib/org-schema";
import type { InternationalLandingPage } from "@/lib/international-landings";
import type { Article } from "@/lib/articles";

import headerLogo from "@/assets/logo-header-optimized.webp";
import officeBetim from "@/assets/office-betim-new.webp";
import officeBH from "@/assets/foto-escritorio-de-bh-25_11zon.webp";
import sedeBetim1 from "@/assets/sede-betim-1.webp";
import sedeBetim2 from "@/assets/sede-betim-2.webp";
import sedeBetim3 from "@/assets/sede-betim-3.webp";
import sedeBetim4 from "@/assets/sede-betim-4.webp";
import sedeBetim5 from "@/assets/sede-betim-5.webp";
import teamGabriel from "@/assets/team-carlos-gabriel.webp";
import teamJavet from "@/assets/team-carlos-javet.webp";
import teamGlaucia from "@/assets/team-glaucia.webp";
import actionMoment from "@/assets/i271_11zon.webp";
import formOffice from "@/assets/i489_11zon.webp";
import historyTree from "@/assets/history-tree.webp";

/**
 * SEO DE IMAGENS — TEXTO ALTERNATIVO, TÍTULO E DESCRIÇÃO
 * ------------------------------------------------------
 * Fonte única dos preenchimentos definidos nos documentos de otimização
 * de imagens (1 a 6). Nada aqui é visível na página:
 *   • alt        → atributo `alt` da <img> (lido pelo Google e por leitores de tela);
 *   • título     → `name` do ImageObject (JSON-LD);
 *   • descrição  → `description` do ImageObject (JSON-LD).
 *
 * O título NÃO é aplicado como atributo `title` da <img> porque o navegador
 * exibiria um balão de texto ao passar o mouse — o que alteraria o visual.
 */

export type ImageSlot =
  | "logo"
  | "hero"
  | "team-gabriel"
  | "team-javet"
  | "team-glaucia"
  | "action"
  | "gallery-1"
  | "gallery-2"
  | "gallery-3"
  | "gallery-4"
  | "gallery-5"
  | "sede-bh"
  | "sede-betim"
  | "form"
  | "footer"
  | "cover"
  | "history";

export interface ImageSeoEntry {
  slot: ImageSlot;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  description: string;
}

export interface PageImageSeo {
  /** Caminho da página dona das imagens. */
  path: string;
  entries: readonly ImageSeoEntry[];
  /** Alt de uma imagem pelo slot (string vazia quando o slot não existe na página). */
  alt: (slot: ImageSlot) => string;
  /** Alt da foto N do carrossel da sede (o carrossel repete as 5 fotos em loop). */
  galleryAlt: (index: number) => string;
  /** Slot usado como imagem principal da página. */
  primary: ImageSlot;
}

type Texts = readonly [alt: string, title: string, description: string];

const ASSETS: Readonly<Record<Exclude<ImageSlot, "cover" | "sede-bh" | "sede-betim" | "hero">, { src: string; width: number; height: number }>> = {
  logo: { src: headerLogo, width: 720, height: 240 },
  "team-gabriel": { src: teamGabriel, width: 1180, height: 1920 },
  "team-javet": { src: teamJavet, width: 1179, height: 1920 },
  "team-glaucia": { src: teamGlaucia, width: 1177, height: 1920 },
  action: { src: actionMoment, width: 1024, height: 498 },
  "gallery-1": { src: sedeBetim1, width: 1600, height: 1150 },
  "gallery-2": { src: sedeBetim2, width: 1600, height: 1150 },
  "gallery-3": { src: sedeBetim3, width: 1600, height: 1150 },
  "gallery-4": { src: sedeBetim4, width: 1600, height: 1150 },
  "gallery-5": { src: sedeBetim5, width: 1600, height: 1151 },
  form: { src: formOffice, width: 1536, height: 1024 },
  footer: { src: historyTree, width: 1254, height: 1254 },
  history: { src: historyTree, width: 1254, height: 1254 },
};
const OFFICE_BETIM = { src: officeBetim, width: 1600, height: 1186 };
const OFFICE_BH = { src: officeBH, width: 1536, height: 820 };

const GALLERY_SLOTS = ["gallery-1", "gallery-2", "gallery-3", "gallery-4", "gallery-5"] as const;

function createPageImageSeo(path: string, entries: ImageSeoEntry[], primary: ImageSlot): PageImageSeo {
  const bySlot = new Map(entries.map((entry) => [entry.slot, entry]));
  return {
    path,
    entries,
    primary,
    alt: (slot) => bySlot.get(slot)?.alt ?? "",
    galleryAlt: (index) => bySlot.get(GALLERY_SLOTS[((index % 5) + 5) % 5]!)?.alt ?? "",
  };
}

function entry(slot: ImageSlot, asset: { src: string; width?: number; height?: number }, texts: Texts): ImageSeoEntry {
  const [alt, title, description] = texts.map((text) => text.replace(/\s+/g, " ").trim());
  return { slot, src: asset.src, width: asset.width, height: asset.height, alt: alt!, title: title!, description: description! };
}

/* -------------------------------------------------------------------------- */
/* Localidades: nomes legíveis e preposições corretas (em/no/na, de/do/da)    */
/* -------------------------------------------------------------------------- */

type Gender = "o" | "a" | "os" | "as" | null;

const PLACE_GENDER: Readonly<Record<string, Gender>> = {
  Alemanha: "a", Argentina: "a", Austrália: "a", Bélgica: "a", Canadá: "o", Dinamarca: "a",
  "Emirados Árabes Unidos": "os", Eslováquia: "a", Eslovênia: "a", Espanha: "a", "Estados Unidos": "os",
  Finlândia: "a", França: "a", "Holanda / Países Baixos": "a", "Países Baixos": "os", Irlanda: "a", Itália: "a", Japão: "o",
  Luxemburgo: null, Noruega: "a", Portugal: null, "Reino Unido": "o", Suécia: "a", Suíça: "a", Brasil: "o",
  Porto: "o", Califórnia: "a", Flórida: "a", Geórgia: "a", Texas: "o", Baviera: "a", "Colúmbia Britânica": "a",
  "Vale do Silício": "o",
};

/** "Condado de Clark (Nevada / EUA)" → "Condado de Clark, Nevada, EUA". */
export function readablePlace(name: string): string {
  const match = name.match(/^(.*?) \((.*)\)$/);
  if (!match) return name;
  const [, outer, inner] = match as unknown as [string, string, string];
  if (outer.startsWith("Brasil")) return "Brasil";
  const parts = inner.split(" / ").map((part) => part.trim());
  if (parts.length === 1 && /^[A-Z]{2,4}$/.test(parts[0]!)) return outer;
  if (parts[0] === "Estado") return [`Estado de ${outer}`, ...parts.slice(1)].join(", ");
  return [outer, ...parts].join(", ");
}

function genderOf(place: string): Gender {
  const head = place.split(",")[0]!.trim();
  if (head in PLACE_GENDER) return PLACE_GENDER[head]!;
  if (/^(Condado|Cantão|Estado) de /.test(head)) return "o";
  return null;
}

const CONTRACT = {
  em: { o: "no", a: "na", os: "nos", as: "nas" },
  de: { o: "do", a: "da", os: "dos", as: "das" },
} as const;

function prep(preposition: "em" | "de", place: string): string {
  const gender = genderOf(place);
  return gender ? `${CONTRACT[preposition][gender]} ${place}` : `${preposition} ${place}`;
}

function locationName(page: InternationalLandingPage): string {
  return readablePlace(page.location.name);
}

/* -------------------------------------------------------------------------- */
/* Doc 2 — LPs de residentes no exterior                                      */
/* -------------------------------------------------------------------------- */

function residentArea(serviceId: string): string {
  if (/inventario|sucess|partilha-bens-inventario/.test(serviceId)) return "Direito das Sucessões";
  if (/contratos|negocios|direito-internacional/.test(serviceId)) return "Direito Internacional Privado";
  return "Direito de Família";
}

function residentTexts(page: InternationalLandingPage): Record<string, Texts> {
  const general = page.location.id === 0 || /-no-brasil$/.test(page.path);
  const place = general ? "" : locationName(page);
  const S = page.service.shortTitle;
  const R = general ? "" : ` para residentes ${prep("em", place)}`;
  const C = general ? "clientes no Brasil e no exterior" : `clientes residentes ${prep("em", place)}`;
  const A = residentArea(page.service.id);
  const SB = `${S} no Brasil`;
  return {
    logo: [`Braga Bitencourt Advocacia Especializada em ${SB}${R}`, `Braga Bitencourt — Advogado Especialista em ${SB}${R}`, `Logotipo oficial do escritório Braga Bitencourt, especializado em ${A} no Brasil, com mais de 20 anos de experiência na proteção patrimonial e resolução de demandas familiares com sigilo e excelência.`],
    hero: [`Sede do escritório Braga Bitencourt Advogados, especialista em ${SB}${R}`, `Braga Bitencourt Advogados — Estrutura para atendimento em ${SB}${R}`, `Ambiente interno e sala de reuniões privativa da sede do escritório Braga Bitencourt Advogados no Brasil, estrutura dedicada ao atendimento jurídico sigiloso e estratégico em ${A} para ${C}.`],
    "team-gabriel": [`Carlos Gabriel F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt, advocacia especializada em ${SB}${R}`, `Carlos Gabriel F. Braga Bitencourt — Equipe Braga Bitencourt | ${SB}${R}`, `Retrato institucional de Carlos Gabriel F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt, banca com atuação dedicada a demandas de ${SB} para ${C}, com suporte estratégico, confidencialidade e excelência no atendimento.`],
    "team-javet": [`Dr. Carlos Javét Braga Bitencourt, advogado fundador sênior do escritório Braga Bitencourt Advogados, especialista em ${SB}${R}`, `Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192) — Advogado Fundador Especialista em ${SB}${R}`, `Retrato institucional do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador e advogado sênior da Braga Bitencourt Advogados com mais de 20 anos de experiência, pós-graduado em Direito de Família e Sucessões pelo IBMEC/EBRADI-SP e Damásio-SP, ex-Presidente de Comissão da OAB/MG, especialista em ${SB} para ${C}.`],
    "team-glaucia": [`Gláucia Patrícia F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, atuação em ${SB}${R}`, `Gláucia Patrícia F. Braga Bitencourt — Equipe Braga Bitencourt Advogados | ${SB}${R}`, `Retrato institucional de Gláucia Patrícia F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com mais de 20 anos de tradição dedicada a demandas de ${SB} para ${C}, com atendimento sigiloso, acolhimento e excelência operacional.`],
    action: [`Consultoria, orientação e representação jurídica especializada em ${SB}${R} pelo escritório Braga Bitencourt Advogados`, `Orientação, Assistência e Representação Jurídica em ${SB}${R}`, `Atendimento jurídico personalizado de alto padrão, simbolizando a confiança, discrição e segurança na consultoria, orientação e representação jurídica especializada em ${SB} para ${C}, conduzida pelo escritório Braga Bitencourt Advogados com mais de duas décadas de experiência e excelência técnica.`],
    "gallery-1": [`Gabinete do advogado Dr. Carlos Javét Braga Bitencourt, especialista sênior em ${SB}${R}, no escritório Braga Bitencourt Advogados`, `Gabinete Dr. Carlos Javét Braga Bitencourt — Especialista sênior em ${SB}${R}`, `Gabinete privativo do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado sênior fundador especialista em ${SB}, equipado para atendimento pessoal, personalizado, sigiloso e videoconferências internacionais com ${C}.`],
    "gallery-2": [`Sala de reuniões privativa e de alto padrão do escritório Braga Bitencourt Advogados, especialista em ${SB}${R}`, `Sala de Reuniões Privativa — Braga Bitencourt Advogados | ${SB}${R}`, `Ambiente reservado e sofisticado da sala de reuniões do escritório Braga Bitencourt Advogados, projetado para conferências sigilosas, alinhamento estratégico e atendimento de alto padrão em ${SB} para ${C}.`],
    "gallery-3": [`Espaço de atendimento individual e digital no gabinete do Dr. Carlos Javét Braga Bitencourt, advogado sênior especialista em ${SB}${R}`, `Atendimento Personalizado — Dr. Carlos Javét Braga Bitencourt | ${SB}${R}`, `Vista interna da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, estruturada para consultoria jurídica reservada, análise documental e reuniões online de alta precisão em ${SB} para ${C}.`],
    "gallery-4": [`Estrutura integrada dos gabinetes e sala de reuniões do escritório Braga Bitencourt Advogados, liderado pelo Dr. Carlos Javét Braga Bitencourt, especialista sênior em ${SB}${R}`, `Estrutura Física — Braga Bitencourt Advogados | ${SB}${R}`, `Visão panorâmica das salas privativas e da estrutura de atendimento do escritório Braga Bitencourt Advogados, ambiente dedicado à condução estratégica e sigilosa de demandas de ${SB} para ${C}.`],
    "gallery-5": [`Sala de atendimento do Dr. Carlos Javét Braga Bitencourt, especialista em ${SB}${R} — Braga Bitencourt Advogados`, `Sala Privativa do Dr. Carlos Javét Braga Bitencourt | ${SB}${R}`, `Ambiente interno da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, advogado com mais de 20 anos de experiência e especialista em ${SB}, projetado para consultas jurídicas personalizadas, análise documental e condução estratégica de casos para ${C}.`],
    "sede-bh": [`Sede do escritório Braga Bitencourt Advogados em Belo Horizonte (Av. Raja Gabáglia, 2000), especialista em ${SB} com atendimento presencial e online à distância${R}`, `Braga Bitencourt Advogados — Sede Belo Horizonte/MG | Atendimento Presencial e Online em ${SB}${R}`, `Fachada do edifício empresarial onde está localizada a sede do escritório Braga Bitencourt Advogados na Av. Raja Gabáglia, 2000, bairro Alpes, Belo Horizonte/MG, estrutura física de alto padrão no Brasil com suporte digital integrado e atendimento online à distância em ${S} para ${C}.`],
    "sede-betim": [`Sede do escritório Braga Bitencourt Advogados em Betim/MG (Av. Amazonas, 1446), atuação especializada em ${SB} com atendimento online à distância${R}`, `Braga Bitencourt Advogados — Sede Betim/MG | Atendimento Presencial e Online em ${SB}${R}`, `Ambiente interno e estrutura jurídica da sede do escritório Braga Bitencourt Advogados na Av. Amazonas, 1446, bairro Brasiléia, Betim/MG, unidade equipada para consultas presenciais e atendimento jurídico online à distância com sigilo e agilidade em demandas de ${SB} para ${C}.`],
    form: [`Atendimento jurídico online e contato imediato com o escritório Braga Bitencourt Advogados, especialista em ${SB}${R}`, `Braga Bitencourt Advogados | Consulta em ${SB}${R}`, `Ambiente executivo equipado para atendimento jurídico digital ágil, objetivo e sigiloso do escritório Braga Bitencourt Advogados, canal de contato direto para análise inicial e agendamento de consulta em ${SB} para ${C}.`],
    footer: [`Emblema oficial do escritório Braga Bitencourt Advogados, advocacia especializada em ${SB}${R}`, `Braga Bitencourt Advogados — Símbolo Institucional | Especialista em ${SB}${R}`, `Símbolo institucional dourado (árvore) da identidade visual do escritório Braga Bitencourt Advogados no rodapé da página, representando solidez, legado familiar e tradição jurídica de mais de 20 anos na condução sigilosa de demandas de ${SB} para ${C}.`],
  };
}

/* -------------------------------------------------------------------------- */
/* Doc 3 — LPs internacionais por país de origem do ato                       */
/* -------------------------------------------------------------------------- */

const INTERNATIONAL_SERVICE_LABELS: Readonly<Record<string, string>> = {
  "decisao-stj": "Homologação de decisão judicial estrangeira",
  escrituras: "Validação de escritura notarial estrangeira",
  "casamento-exterior": "Registro de casamento estrangeiro",
  "divorcio-direto": "Averbação de divórcio estrangeiro",
  sentenca: "Homologação de sentença estrangeira",
  "transcricao-casamento": "Transcrição de casamento estrangeiro",
};

function internationalTexts(page: InternationalLandingPage): Record<string, Texts> {
  const S = INTERNATIONAL_SERVICE_LABELS[page.service.id] ?? page.service.shortTitle;
  const de = prep("de", locationName(page));
  const originario = /estrangeira$/.test(S) ? "originária" : "originário";
  const P = `${S} ${originario} ${de} no Brasil`;
  const PT = `${S} proveniente ${de} no Brasil`;
  return {
    logo: [`Braga Bitencourt Advocacia Especializada em ${P}`, `Braga Bitencourt — Advogado Especialista em ${PT}`, `Logotipo oficial do escritório Braga Bitencourt, especializado em Direito Internacional Privado e ${P}, com mais de 20 anos de experiência na validação de atos estrangeiros, proteção patrimonial e resolução de demandas familiares com sigilo e excelência.`],
    hero: [`Sede do escritório Braga Bitencourt Advogados, especialista em ${P}`, `Braga Bitencourt Advogados — Estrutura para atendimento em ${PT}`, `Ambiente interno e sala de reuniões privativa da sede do escritório Braga Bitencourt Advogados no Brasil, estrutura dedicada ao atendimento jurídico sigiloso e estratégico em ${S} e regularização de atos jurídicos originários ${de}.`],
    "team-gabriel": [`Carlos Gabriel F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt, advocacia especializada em ${P}`, `Carlos Gabriel F. Braga Bitencourt — Equipe Braga Bitencourt | ${PT}`, `Retrato institucional de Carlos Gabriel F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt, banca com atuação dedicada a demandas de ${S} e validação no Brasil de documentos e decisões originárias ${de}, com suporte estratégico, confidencialidade e excelência no atendimento.`],
    "team-javet": [`Dr. Carlos Javét Braga Bitencourt, advogado fundador sênior do escritório Braga Bitencourt Advogados, especialista em ${P}`, `Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192) — Advogado Fundador Especialista em ${PT}`, `Retrato institucional do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador e advogado sênior da Braga Bitencourt Advogados com mais de 20 anos de experiência, pós-graduado em Direito de Família e Sucessões pelo IBMEC/EBRADI-SP e Damásio-SP, ex-Presidente de Comissão da OAB/MG, especialista em ${S} e eficácia jurídica no Brasil de atos originários ${de}.`],
    "team-glaucia": [`Gláucia Patrícia F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, atuação em ${P}`, `Gláucia Patrícia F. Braga Bitencourt — Equipe Braga Bitencourt Advogados | ${PT}`, `Retrato institucional de Gláucia Patrícia F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com mais de 20 anos de tradição dedicada a demandas de ${S} no Brasil envolvendo atos e documentos originários ${de}, com atendimento sigiloso, acolhimento e excelência operacional.`],
    action: [`Consultoria, orientação e representação jurídica especializada em ${P} pelo escritório Braga Bitencourt Advogados`, `Orientação, Assistência e Representação Jurídica em ${PT}`, `Atendimento jurídico personalizado de alto padrão, simbolizando a confiança, discrição e segurança na consultoria, orientação e representação jurídica especializada em ${S} no Brasil para atos e sentenças originárias ${de}, conduzida pelo escritório Braga Bitencourt Advogados com mais de duas décadas de experiência e excelência técnica.`],
    "gallery-1": [`Gabinete do advogado Dr. Carlos Javét Braga Bitencourt, especialista sênior em ${P}, no escritório Braga Bitencourt Advogados`, `Gabinete Dr. Carlos Javét Braga Bitencourt — Especialista sênior em ${PT}`, `Gabinete privativo do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado sênior fundador especialista em ${S} no Brasil, equipado para atendimento pessoal, personalizado, sigiloso e videoconferências internacionais sobre atos jurídicos originários ${de}.`],
    "gallery-2": [`Sala de reuniões privativa e de alto padrão do escritório Braga Bitencourt Advogados, especialista em ${P}`, `Sala de Reuniões Privativa — Braga Bitencourt Advogados | ${PT}`, `Ambiente reservado e sofisticado da sala de reuniões do escritório Braga Bitencourt Advogados, projetado para conferências sigilosas, alinhamento estratégico e atendimento de alto padrão em ${S} e validação de documentos originários ${de} no Brasil.`],
    "gallery-3": [`Espaço de atendimento individual e digital no gabinete do Dr. Carlos Javét Braga Bitencourt, advogado sênior especialista em ${P}`, `Atendimento Personalizado — Dr. Carlos Javét Braga Bitencourt | ${PT}`, `Vista interna da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, estruturada para consultoria jurídica reservada, análise documental estrangeira e reuniões online de alta precisão em ${P}.`],
    "gallery-4": [`Estrutura integrada dos gabinetes e sala de reuniões do escritório Braga Bitencourt Advogados, liderado pelo Dr. Carlos Javét Braga Bitencourt, especialista sênior em ${P}`, `Estrutura Física — Braga Bitencourt Advogados | ${PT}`, `Visão panorâmica das salas privativas e da estrutura de atendimento do escritório Braga Bitencourt Advogados, ambiente dedicado à condução estratégica e sigilosa de demandas de ${S} e regularização de atos originários ${de} no Brasil.`],
    "gallery-5": [`Sala de atendimento do Dr. Carlos Javét Braga Bitencourt, especialista em ${P} — Braga Bitencourt Advogados`, `Sala Privativa do Dr. Carlos Javét Braga Bitencourt | ${PT}`, `Ambiente interno da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, advogado com mais de 20 anos de experiência e especialista em ${S} no Brasil, projetado para consultas jurídicas personalizadas, análise de títulos e decisões originárias ${de} e condução estratégica de casos.`],
    "sede-bh": [`Sede do escritório Braga Bitencourt Advogados em Belo Horizonte (Av. Raja Gabáglia, 2000), especialista em ${P} com atendimento presencial e online à distância`, `Braga Bitencourt Advogados — Sede Belo Horizonte/MG | Atendimento Presencial e Online em ${PT}`, `Fachada do edifício empresarial onde está localizada a sede do escritório Braga Bitencourt Advogados na Av. Raja Gabáglia, 2000, bairro Alpes, Belo Horizonte/MG, estrutura física de alto padrão no Brasil com suporte digital integrado e atendimento online à distância em ${S} para atos originários ${de}.`],
    "sede-betim": [`Sede do escritório Braga Bitencourt Advogados em Betim/MG (Av. Amazonas, 1446), atuação especializada em ${P} com atendimento online à distância`, `Braga Bitencourt Advogados — Sede Betim/MG | Atendimento Presencial e Online em ${PT}`, `Ambiente interno e estrutura jurídica da sede do escritório Braga Bitencourt Advogados na Av. Amazonas, 1446, bairro Brasiléia, Betim/MG, unidade equipada para consultas presenciais e atendimento jurídico online à distância com sigilo e agilidade em demandas de ${S} no Brasil envolvendo documentos e decisões originárias ${de}.`],
    form: [`Atendimento jurídico online e contato imediato com o escritório Braga Bitencourt Advogados, especialista em ${P}`, `Braga Bitencourt Advogados | Consulta em ${PT}`, `Ambiente executivo equipado para atendimento jurídico digital ágil, objetivo e sigiloso do escritório Braga Bitencourt Advogados, canal de contato direto para análise inicial e agendamento de consulta em ${S} no Brasil para atos originários ${de}.`],
    footer: [`Emblema oficial do escritório Braga Bitencourt Advogados, advocacia especializada em ${P}`, `Braga Bitencourt Advogados — Símbolo Institucional | Especialista em ${PT}`, `Símbolo institucional dourado (árvore) da identidade visual do escritório Braga Bitencourt Advogados no rodapé da página, representando solidez, legado familiar e tradição jurídica de mais de 20 anos na condução sigilosa de demandas de ${S} e validação de atos originários ${de} no Brasil.`],
  };
}

/** Imagens das landing pages internacionais (doc 3) e de residentes (doc 2). */
export function landingImageSeo(page: InternationalLandingPage): PageImageSeo {
  const texts = page.residentContent ? residentTexts(page) : internationalTexts(page);
  return buildLandingSet(page.path, texts, OFFICE_BETIM, ["sede-bh", "sede-betim"]);
}

/* -------------------------------------------------------------------------- */
/* Doc 4 — LPs locais (comarcas) e especializadas Brasil/STJ                  */
/* -------------------------------------------------------------------------- */

const BH_UNIT_CITIES = new Set(["Belo Horizonte", "Nova Lima"]);

function localTexts(service: string, city: string): Record<string, Texts> {
  const X = `${service} em ${city}`;
  const bh = BH_UNIT_CITIES.has(city);
  const unitAddress = bh ? "Av. Raja Gabáglia, 2000 – Belo Horizonte/MG" : "Av. Amazonas, 1446 – Betim/MG";
  const unitCity = bh ? "Belo Horizonte/MG" : "Betim/MG";
  const sede: Texts = [
    `Sede do escritório Braga Bitencourt Advogados (${unitAddress}), especialista em ${X} com atendimento presencial`,
    `Braga Bitencourt Advogados — Unidade Presencial | ${X}`,
    `Estrutura física de alto padrão do escritório Braga Bitencourt Advogados (${unitCity}), unidade equipada para consultas presenciais com fácil acesso para clientes de ${city} e região metropolitana em demandas de ${service}, com sigilo e direção estratégica desde o primeiro contato.`,
  ];
  return {
    logo: [`Braga Bitencourt Advocacia Especializada em ${X}`, `Braga Bitencourt — Advogado Especialista em ${X}`, `Logotipo oficial do escritório Braga Bitencourt Advogados, especializado em Direito de Família e Sucessões, com atendimento presencial e atuação de excelência em ${X} e região metropolitana, reunindo mais de 20 anos de experiência e rigor técnico.`],
    hero: [`Sede do escritório Braga Bitencourt Advogados para atendimento presencial em ${X}`, `Braga Bitencourt Advogados — Estrutura para atendimento presencial em ${X}`, `Ambiente interno e sala de reuniões privativa da sede do escritório Braga Bitencourt Advogados, estrutura física dedicada ao atendimento jurídico presencial e sigiloso em ${service} para clientes de ${city} e região.`],
    "team-gabriel": [`Carlos Gabriel F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, advocacia especializada em ${X}`, `Carlos Gabriel F. Braga Bitencourt — Equipe Braga Bitencourt | ${X}`, `Retrato institucional de Carlos Gabriel F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com atuação presencial dedicada a demandas de ${X}, com suporte estratégico, confidencialidade e excelência no atendimento.`],
    "team-javet": [`Dr. Carlos Javét Braga Bitencourt, advogado fundador do escritório Braga Bitencourt Advogados, especialista em ${X}`, `Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192) — Advogado Fundador Especialista em ${X}`, `Retrato institucional do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador da Braga Bitencourt Advogados com mais de 20 anos de experiência, pós-graduado em Direito de Família e Sucessões pelo IBMEC/EBRADI-SP e Damásio-SP, ex-Presidente de Comissão da OAB/MG, especialista em ${X}.`],
    "team-glaucia": [`Gláucia Patrícia F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, atuação em ${X}`, `Gláucia Patrícia F. Braga Bitencourt — Equipe Braga Bitencourt Advogados | ${X}`, `Retrato institucional de Gláucia Patrícia F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com mais de 20 anos de tradição dedicada a demandas de ${X}, com atendimento sigiloso, acolhimento e excelência operacional.`],
    action: [`Consultoria, orientação e representação jurídica presencial em ${X} pelo escritório Braga Bitencourt Advogados`, `Orientação, Assistência e Representação Jurídica em ${X}`, `Atendimento jurídico personalizado de alto padrão, simbolizando a confiança, discrição e segurança na consultoria, orientação e representação jurídica especializada em ${X}, conduzida pelo escritório Braga Bitencourt Advogados com mais de duas décadas de experiência.`],
    "gallery-1": [`Gabinete do advogado Dr. Carlos Javét Braga Bitencourt, especialista em ${X}, no escritório Braga Bitencourt Advogados`, `Gabinete Dr. Carlos Javét Braga Bitencourt — Especialista em ${X}`, `Gabinete privativo do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador especialista em ${X}, equipado para atendimento presencial pessoal, personalizado e sigiloso.`],
    "gallery-2": [`Sala de reuniões privativa e de alto padrão do escritório Braga Bitencourt Advogados, especialista em ${X}`, `Sala de Reuniões Privativa — Braga Bitencourt Advogados | ${X}`, `Ambiente reservado e sofisticado da sala de reuniões do escritório Braga Bitencourt Advogados, projetado para conferências presenciais sigilosas, alinhamento estratégico e atendimento de alto padrão em ${X}.`],
    "gallery-3": [`Espaço de atendimento individual no gabinete do Dr. Carlos Javét Braga Bitencourt, advogado especialista em ${X}`, `Atendimento Personalizado — Dr. Carlos Javét Braga Bitencourt | ${X}`, `Vista interna da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, estruturada para consultoria jurídica presencial reservada, análise documental e reuniões de alta precisão em ${X}.`],
    "gallery-4": [`Estrutura integrada dos gabinetes e sala de reuniões do escritório Braga Bitencourt Advogados, liderado pelo Dr. Carlos Javét Braga Bitencourt, especialista em ${X}`, `Estrutura Física — Braga Bitencourt Advogados | ${X}`, `Visão panorâmica das salas privativas e da estrutura de atendimento presencial do escritório Braga Bitencourt Advogados, ambiente dedicado à condução estratégica e sigilosa de demandas de ${X}.`],
    "gallery-5": [`Sala de atendimento do Dr. Carlos Javét Braga Bitencourt, especialista em ${X} — Braga Bitencourt Advogados`, `Sala Privativa do Dr. Carlos Javét Braga Bitencourt | ${X}`, `Ambiente interno da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, advogado com mais de 20 anos de experiência e especialista em ${X}, projetado para consultas jurídicas presenciais personalizadas e condução estratégica de casos.`],
    "sede-bh": sede,
    "sede-betim": sede,
    form: [`Agendamento de consulta presencial e contato imediato com o escritório Braga Bitencourt Advogados, especialista em ${X}`, `Contato Imediato — Braga Bitencourt Advogados | Consulta Presencial em ${X}`, `Ambiente executivo equipado para atendimento jurídico ágil, objetivo e sigiloso do escritório Braga Bitencourt Advogados, canal de contato direto para análise inicial e agendamento de consulta presencial em ${X}.`],
    footer: [`Emblema oficial do escritório Braga Bitencourt Advogados, advocacia especializada em ${X}`, `Braga Bitencourt Advogados — Símbolo Institucional | Especialista em ${X}`, `Símbolo institucional dourado (árvore) da identidade visual do escritório Braga Bitencourt Advogados no rodapé da página, representando solidez, legado familiar e tradição jurídica de mais de 20 anos na condução sigilosa de demandas de ${X}.`],
  };
}

function specializedTexts(path: string, rawService: string): Record<string, Texts> {
  const stj = /-stj-/.test(path);
  const S = rawService.replace(/\s+(no|perante o) STJ$/i, "");
  const X = `${S} ${stj ? "no STJ em Brasília" : "no Brasil"}`;
  const XP = `${S} ${stj ? "perante o STJ em Brasília" : "em todo o Brasil"}`;
  const XE = `${S} ${stj ? "no STJ em Brasília" : "em todo o Brasil"}`;
  return {
    logo: [`Braga Bitencourt Advocacia Especializada em ${X} com atendimento online`, `Braga Bitencourt — Advogado Especialista em ${X}`, `Logotipo oficial do escritório Braga Bitencourt Advogados, especializado em Direito Internacional Privado, Família e Sucessões, com atuação digital e representação online em ${XP} e mais de 20 anos de experiência.`],
    hero: [`Sede operacional do escritório Braga Bitencourt Advogados para atendimento jurídico online em ${X}`, `Braga Bitencourt Advogados — Estrutura Digital para ${X}`, `Ambiente interno e sala de reuniões privativa da sede operacional do escritório Braga Bitencourt Advogados em Minas Gerais, infraestrutura tecnológica dedicada ao atendimento jurídico online à distância e condução estratégica de processos de ${XE}.`],
    "team-gabriel": [`Carlos Gabriel F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, advocacia com atendimento online em ${X}`, `Carlos Gabriel F. Braga Bitencourt — Equipe Braga Bitencourt | ${X}`, `Retrato institucional de Carlos Gabriel F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com atuação digital dedicada a demandas de ${X}, com suporte estratégico, confidencialidade e excelência no atendimento à distância.`],
    "team-javet": [`Dr. Carlos Javét Braga Bitencourt, advogado fundador do escritório Braga Bitencourt Advogados, especialista com atendimento online em ${X}`, `Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192) — Advogado Fundador Especialista em ${X}`, `Retrato institucional do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador da Braga Bitencourt Advogados com mais de 20 anos de experiência, pós-graduado em Direito de Família e Sucessões pelo IBMEC/EBRADI-SP e Damásio-SP, ex-Presidente de Comissão da OAB/MG, especialista em ${XP} com atendimento online.`],
    "team-glaucia": [`Gláucia Patrícia F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, atuação online em ${X}`, `Gláucia Patrícia F. Braga Bitencourt — Equipe Braga Bitencourt Advogados | ${X}`, `Retrato institucional de Gláucia Patrícia F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com mais de 20 anos de tradição dedicada a demandas de ${X}, com atendimento online sigiloso, acolhimento e excelência operacional.`],
    action: [`Consultoria, orientação e representação jurídica online em ${X} pelo escritório Braga Bitencourt Advogados`, `Orientação, Assistência e Representação Jurídica Online em ${X}`, `Atendimento jurídico digital personalizado de alto padrão, simbolizando a confiança, discrição e segurança na consultoria, orientação e representação jurídica online em ${XP}, conduzida pelo escritório Braga Bitencourt Advogados com mais de duas décadas de experiência.`],
    "gallery-1": [`Gabinete do advogado Dr. Carlos Javét Braga Bitencourt, especialista em ${X} com atendimento online, no escritório Braga Bitencourt Advogados`, `Gabinete Dr. Carlos Javét Braga Bitencourt — Atendimento Online em ${X}`, `Gabinete privativo do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador especialista em ${X}, equipado para videoconferências sigilosas e peticionamento eletrônico nacional.`],
    "gallery-2": [`Sala de reuniões privativa e conectada do escritório Braga Bitencourt Advogados, especialista em ${X} com atendimento online`, `Sala de Reuniões Privativa — Braga Bitencourt Advogados | Atendimento Online em ${X}`, `Ambiente reservado e sofisticado da sala de reuniões do escritório Braga Bitencourt Advogados, projetado para conferências online sigilosas, alinhamento estratégico e atendimento digital de alto padrão em ${X}.`],
    "gallery-3": [`Espaço de atendimento digital no gabinete do Dr. Carlos Javét Braga Bitencourt, advogado especialista em ${X}`, `Atendimento Online Personalizado — Dr. Carlos Javét Braga Bitencourt | ${X}`, `Vista interna da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, estruturada para consultoria jurídica online reservada, análise documental digital e acompanhamento processual eletrônico em ${X}.`],
    "gallery-4": [`Estrutura integrada dos gabinetes e sala de reuniões do escritório Braga Bitencourt Advogados, liderado pelo Dr. Carlos Javét Braga Bitencourt, especialista em ${X}`, `Estrutura Operacional — Braga Bitencourt Advogados | Atendimento Online em ${X}`, `Visão panorâmica das salas privativas e da estrutura de operação digital do escritório Braga Bitencourt Advogados, ambiente dedicado à condução estratégica e sigilosa de demandas online de ${X}.`],
    "gallery-5": [`Sala de atendimento online do Dr. Carlos Javét Braga Bitencourt, especialista em ${X} — Braga Bitencourt Advogados`, `Sala Privativa do Dr. Carlos Javét Braga Bitencourt | Atendimento Digital em ${X}`, `Ambiente interno da sala de atendimento do Dr. Carlos Javét Braga Bitencourt, advogado com mais de 20 anos de experiência e especialista em ${X}, projetado para consultas jurídicas online personalizadas e condução de processos eletrônicos em âmbito nacional.`],
    "sede-bh": [`Sede do escritório Braga Bitencourt Advogados em Belo Horizonte (Av. Raja Gabáglia, 2000), base operacional para atendimento online em ${X}`, `Braga Bitencourt Advogados — Sede Belo Horizonte/MG | Atendimento Online em ${X}`, `Fachada do edifício empresarial onde está localizada a sede do escritório Braga Bitencourt Advogados na Av. Raja Gabáglia, 2000, bairro Alpes, Belo Horizonte/MG, estrutura física de alto padrão que serve de base operacional para atendimento 100% online à distância e representação eletrônica em ${XP}.`],
    "sede-betim": [`Sede do escritório Braga Bitencourt Advogados em Betim/MG (Av. Amazonas, 1446), base operacional para atendimento online em ${X}`, `Braga Bitencourt Advogados — Sede Betim/MG | Atendimento Online em ${X}`, `Ambiente interno e estrutura jurídica da sede do escritório Braga Bitencourt Advogados na Av. Amazonas, 1446, bairro Brasiléia, Betim/MG, unidade equipada com tecnologia para consultas digitais, acompanhamento processual eletrônico e atendimento online à distância com sigilo em demandas de ${X}.`],
    form: [`Atendimento jurídico online e contato imediato com o escritório Braga Bitencourt Advogados, especialista em ${X}`, `Contato Imediato — Braga Bitencourt Advogados | Consulta Online em ${X}`, `Ambiente executivo equipado para atendimento jurídico digital ágil, objetivo e sigiloso do escritório Braga Bitencourt Advogados, canal de contato direto para análise inicial e agendamento de consulta online em ${X}.`],
    footer: [`Emblema oficial do escritório Braga Bitencourt Advogados, advocacia especializada com atendimento online em ${X}`, `Braga Bitencourt Advogados — Símbolo Institucional | Especialista em ${X}`, `Símbolo institucional dourado (árvore) da identidade visual do escritório Braga Bitencourt Advogados no rodapé da página, representando solidez, legado familiar e tradição jurídica de mais de 20 anos na condução online e sigilosa de demandas de ${X}.`],
  };
}

/**
 * Imagens das 98 LPs locais e especializadas (doc 4).
 * Subtipo A (comarcas): uma foto de unidade — BH para Belo Horizonte e Nova Lima;
 * Betim para Betim, Contagem e Igarapé. Subtipo B (Brasil/STJ): as duas sedes.
 */
export function localLandingImageSeo({ path, service, city }: { path: string; service: string; city: string }): PageImageSeo {
  const specialized = city === "Brasil" || city === "Brasília";
  if (specialized) return buildLandingSet(path, specializedTexts(path, service), OFFICE_BETIM, ["sede-bh", "sede-betim"]);
  const bh = BH_UNIT_CITIES.has(city);
  return buildLandingSet(path, localTexts(service, city), bh ? OFFICE_BH : OFFICE_BETIM, [bh ? "sede-bh" : "sede-betim"]);
}

function buildLandingSet(
  path: string,
  texts: Record<string, Texts>,
  hero: { src: string; width: number; height: number },
  units: readonly ("sede-bh" | "sede-betim")[],
): PageImageSeo {
  const t = (slot: string) => texts[slot]!;
  const entries: ImageSeoEntry[] = [
    entry("logo", ASSETS.logo, t("logo")),
    entry("hero", hero, t("hero")),
    entry("team-javet", ASSETS["team-javet"], t("team-javet")),
    entry("team-gabriel", ASSETS["team-gabriel"], t("team-gabriel")),
    entry("team-glaucia", ASSETS["team-glaucia"], t("team-glaucia")),
    entry("action", ASSETS.action, t("action")),
    ...GALLERY_SLOTS.map((slot) => entry(slot, ASSETS[slot], t(slot))),
    ...units.map((unit) => entry(unit, unit === "sede-bh" ? OFFICE_BH : OFFICE_BETIM, t(unit))),
    entry("form", ASSETS.form, t("form")),
    entry("footer", ASSETS.footer, t("footer")),
  ];
  return createPageImageSeo(path, entries, "hero");
}

/* -------------------------------------------------------------------------- */
/* Doc 5 — Artigos técnicos e doutrinários                                    */
/* -------------------------------------------------------------------------- */

/** Tema jurídico de cada artigo (base: títulos e textos alternativos já aprovados). */
const ARTICLE_TOPICS: Readonly<Record<string, string>> = {
  "1": "Divórcio e União Estável",
  "2": "Inventário",
  "3": "Guarda Compartilhada",
  "4": "Partilha de Bens ou Divisão de Bens",
  "5": "Alienação Parental",
  "6": "Homologação de Sentenças Estrangeiras no Brasil",
  "7": "Homologação de Divórcio Estrangeiro no Brasil",
  "8": "Divórcio Extrajudicial no Brasil",
  "9": "Dissolução de União Estável no Brasil",
  "10": "Inventário Extrajudicial",
  "11": "Mudança de Regime de Bens no Casamento",
  "12": "Testamento",
  "13": "Apostila de Haia e Apostilamento de Documentos",
  "14": "Aquisição de Imóveis e Bens no Brasil por Residentes no Exterior",
  "15": "Transcrição de Casamento Estrangeiro no Brasil",
  "16": "Investigação de Paternidade",
  "17": "Medida Protetiva e a Proteção da Família",
  "18": "Entendimento sobre Guarda Compartilhada",
  "19": "Autorização de Viagem Internacional para Menores",
  "20": "Suprimento de Consentimento dos Pais para Emissão de Passaporte",
  "21": "Pensão Alimentícia: Segurança e Equilíbrio",
  "22": "Tipos de Regime de Bens de Casamento no Brasil",
  "23": "Inventário Judicial",
  "24": "Curatela",
  "25": "Personalização do Regime de Bens de Casamento",
  "26": "Direito de Convivência",
  "27": "Mudança de Domicílio de Menor (Nacional ou Internacional)",
  "28": "Pacto Antenupcial",
  "29": "As Duas Consequências para Quem Não Paga Pensão Alimentícia",
  "30": "Divórcio Judicial",
  "31": "Execução de Pensão Alimentícia",
  "32": "Exoneração de Pensão Alimentícia",
  "33": "Valor da Pensão Alimentícia",
};

const ARTICLE_CATEGORY: Readonly<Record<string, string>> = {
  Família: "Direito de Família",
  Sucessões: "Direito das Sucessões",
  Internacional: "Direito Internacional Privado",
};

export function articleTopic(article: Pick<Article, "id" | "title">): string {
  return ARTICLE_TOPICS[article.id] ?? article.title.replace(/\s+/g, " ").trim();
}

export function articleImageSeo(article: Pick<Article, "id" | "slug" | "title" | "category" | "image">): PageImageSeo {
  const T = articleTopic(article);
  const Cat = ARTICLE_CATEGORY[article.category] ?? "Direito de Família";
  const entries: ImageSeoEntry[] = [
    entry("logo", ASSETS.logo, [
      `Braga Bitencourt Advogados — Artigo jurídico e guia especializado sobre ${T} em ${Cat}`,
      `Braga Bitencourt Advogados — Publicação Técnica sobre ${T} | ${Cat}`,
      `Logotipo oficial do escritório Braga Bitencourt Advogados, banca especializada em Direito de Família, Sucessões e Direito Internacional Privado com mais de 20 anos de experiência, autora do estudo técnico e guia prático sobre ${T}.`,
    ]),
    ...(article.image
      ? [entry("cover", { src: article.image, width: 900, height: 900 }, [
          `Ilustração editorial do artigo sobre ${T} — Guia prático de ${Cat} pelo escritório Braga Bitencourt Advogados`,
          `${T} | Análise Jurídica e Guia Prático — Braga Bitencourt Advogados`,
          `Imagem principal de destaque do artigo técnico sobre ${T}, publicado pelo escritório Braga Bitencourt Advogados na área de ${Cat}. Material informativo e doutrinário elaborado com rigor técnico, clareza e segurança jurídica para orientar famílias, herdeiros e clientes no Brasil e no exterior.`,
        ])]
      : []),
    entry("history", ASSETS.history, [
      `Emblema institucional do escritório Braga Bitencourt Advogados, advocacia especializada em ${Cat} e autora do artigo sobre ${T}`,
      `Braga Bitencourt Advogados — Tradição e Excelência em ${Cat} | Artigo sobre ${T}`,
      `Símbolo institucional dourado (árvore) da identidade visual do escritório Braga Bitencourt Advogados na seção "A História da Nossa Advocacia", representando mais de duas décadas de experiência, discrição absoluta, rigor técnico e inovação tecnológica em Visual Law aplicados à área de ${Cat} e aos temas abordados no artigo sobre ${T}, com atendimento no Brasil e no exterior.`,
    ]),
    entry("footer", ASSETS.footer, [
      `Emblema oficial do escritório Braga Bitencourt Advogados, advocacia especializada em ${Cat} — Artigo sobre ${T}`,
      `Braga Bitencourt Advogados — Símbolo Institucional | Publicação sobre ${T}`,
      `Símbolo institucional dourado (árvore) da identidade visual do escritório Braga Bitencourt Advogados no rodapé dos artigos técnicos e doutrinários, representando solidez, legado familiar e mais de 20 anos de tradição jurídica na área de ${Cat}, encerrando o guia prático sobre ${T}.`,
    ]),
  ];
  return createPageImageSeo(`/artigos/${article.slug}`, entries, article.image ? "cover" : "logo");
}

/* -------------------------------------------------------------------------- */
/* Doc 6 — Páginas institucionais                                             */
/* -------------------------------------------------------------------------- */

const INSTITUTIONAL_AREA = "Direito de Família, Sucessões e Direito Internacional Privado";

/** Retratos da seção Nossa Equipe nas páginas institucionais (Home, Perfil, Áreas de atuação). */
export function institutionalTeamImageSeo(path: string): PageImageSeo {
  const entries: ImageSeoEntry[] = [
    entry("team-javet", ASSETS["team-javet"], [
      `Dr. Carlos Javét Braga Bitencourt, advogado fundador do escritório Braga Bitencourt Advogados, especialista em ${INSTITUTIONAL_AREA}`,
      "Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192) — Advogado Fundador | Direito de Família, Sucessões e Internacional Privado",
      "Retrato institucional do Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), advogado fundador da Braga Bitencourt Advogados com mais de 20 anos de experiência, pós-graduado em Direito de Família e Sucessões pelo IBMEC/EBRADI-SP e Damásio-SP, ex-Presidente de Comissão da OAB/MG, com atuação em Direito de Família, Direito das Sucessões, planejamento patrimonial e Direito Internacional Privado no Brasil e no exterior.",
    ]),
    entry("team-gabriel", ASSETS["team-gabriel"], [
      `Carlos Gabriel F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, advocacia especializada em ${INSTITUTIONAL_AREA}`,
      "Carlos Gabriel F. Braga Bitencourt — Equipe Braga Bitencourt Advogados | Direito de Família, Sucessões e Internacional Privado",
      "Retrato institucional de Carlos Gabriel F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com mais de 20 anos de atuação dedicada a demandas de Direito de Família, Direito das Sucessões, planejamento patrimonial e Direito Internacional Privado no Brasil e no exterior, com suporte estratégico, confidencialidade e excelência no atendimento.",
    ]),
    entry("team-glaucia", ASSETS["team-glaucia"], [
      `Gláucia Patrícia F. Braga Bitencourt, integrante da equipe do escritório Braga Bitencourt Advogados, atuação em ${INSTITUTIONAL_AREA}`,
      "Gláucia Patrícia F. Braga Bitencourt — Equipe Braga Bitencourt Advogados | Direito de Família, Sucessões e Internacional Privado",
      "Retrato institucional de Gláucia Patrícia F. Braga Bitencourt, membro da equipe do escritório Braga Bitencourt Advogados, banca com mais de 20 anos de tradição dedicada a demandas de Direito de Família, Direito das Sucessões, planejamento patrimonial e Direito Internacional Privado no Brasil e no exterior, com atendimento sigiloso, acolhimento e excelência operacional.",
    ]),
  ];
  return createPageImageSeo(path, entries, "team-javet");
}

/** Alts institucionais padrão (usados quando a página não define um conjunto próprio). */
export const INSTITUTIONAL_TEAM_ALTS = {
  javet: institutionalTeamImageSeo("/").alt("team-javet"),
  gabriel: institutionalTeamImageSeo("/").alt("team-gabriel"),
  glaucia: institutionalTeamImageSeo("/").alt("team-glaucia"),
} as const;

/* -------------------------------------------------------------------------- */
/* JSON-LD: WebPage + ImageObject (título e descrição de cada imagem)         */
/* -------------------------------------------------------------------------- */

const ORG_CREDIT = { "@type": "Organization", name: SITE_NAME, url: siteUrl("/") } as const;

/**
 * Gera o nó WebPage da página com todas as imagens como ImageObject.
 * `@id` do WebPage = URL canônica, o mesmo usado em mainEntityOfPage do
 * LegalService/Article, para que o Google una as entidades.
 */
export function pageImagesSchema(set: PageImageSeo, page: { name?: string; description?: string } = {}): Record<string, unknown> {
  const url = siteUrl(set.path);
  const seen = new Set<string>();
  const images = set.entries
    .filter((item) => {
      const key = `${item.slot}|${item.src}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((item) => {
      const absolute = siteAssetUrl(item.src);
      return {
        "@type": "ImageObject",
        "@id": `${url}#imagem-${item.slot}`,
        contentUrl: absolute,
        url: absolute,
        name: item.title,
        caption: item.alt,
        description: item.description,
        ...(item.width && item.height ? { width: item.width, height: item.height } : {}),
        inLanguage: "pt-BR",
        isPartOf: { "@id": url },
        creditText: SITE_NAME,
        creator: ORG_CREDIT,
        copyrightHolder: ORG_CREDIT,
        copyrightNotice: `© ${SITE_NAME}`,
        ...(item.slot === set.primary ? { representativeOfPage: true } : {}),
      };
    });
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url,
    url,
    ...(page.name ? { name: page.name } : {}),
    ...(page.description ? { description: page.description } : {}),
    inLanguage: "pt-BR",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    ...(images.some((image) => image["@id"] === `${url}#imagem-${set.primary}`)
      ? { primaryImageOfPage: { "@id": `${url}#imagem-${set.primary}` } }
      : {}),
    image: images,
  };
}
