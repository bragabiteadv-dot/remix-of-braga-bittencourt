import catalogue from "@/data/resident-catalogue.json";
import serviceData from "@/data/resident-services.json";
import { INTERNATIONAL_LOCATIONS, type InternationalLandingPage, type InternationalService } from "@/lib/international-landings";

export const RESIDENT_CATALOGUE = catalogue;
export const RESIDENT_SERVICES: readonly InternationalService[] = serviceData;
const services = new Map(serviceData.map((service) => [service.id, service]));
const entries = new Map(catalogue.map((entry) => [entry.path, entry]));

// Country association is independent of document origin and of the client's nationality.
const countryByCity: Readonly<Record<number, string>> = {
  25: "Países Baixos", 26: "Estados Unidos", 27: "Espanha", 28: "Suíça", 29: "Suíça", 30: "Estados Unidos", 31: "Estados Unidos", 32: "Brasil", 33: "Bélgica", 34: "Portugal", 35: "Estados Unidos", 36: "Dinamarca", 37: "Emirados Árabes Unidos", 38: "Irlanda", 39: "Portugal", 40: "Estados Unidos", 41: "Alemanha", 42: "Suíça", 43: "Japão", 44: "Estados Unidos", 45: "Estados Unidos", 46: "Portugal", 47: "Reino Unido", 48: "Estados Unidos", 49: "Espanha", 50: "Estados Unidos", 51: "Itália", 52: "Alemanha", 53: "Japão", 54: "Estados Unidos", 55: "Estados Unidos", 56: "França", 57: "Portugal", 58: "Itália", 59: "Estados Unidos", 60: "Estados Unidos", 61: "Estados Unidos", 62: "Austrália", 63: "Japão", 64: "Canadá", 65: "Canadá", 66: "Suíça",
};
const countryGuidance: Readonly<Record<string, string>> = {
  Alemanha: "Documentos alemães podem utilizar termos e registros diferentes dos brasileiros. Conferimos o órgão emissor, dados de estado civil e finalidade no Brasil antes de orientar tradução do alemão e autenticação. Um divórcio ou regime patrimonial alemão não deve ser equiparado ao brasileiro sem análise.",
  Argentina: "Para atos argentinos, distinguimos a autoridade emissora e a finalidade no Brasil; o espanhol exige análise de tradução para o procedimento pretendido. A proximidade e os acordos de cooperação não dispensam universalmente todas as formalidades nem definem sozinhos o foro competente.",
  Bélgica: "Na Bélgica, documentos podem estar em francês, neerlandês ou alemão e ser emitidos por órgãos diferentes. Identificamos idioma, autoridade e conteúdo antes de indicar tradução e autenticação para uso no Brasil, sem confundir residência belga com origem de todos os atos familiares.",
  Dinamarca: "Documentos dinamarqueses de casamento, família ou patrimônio precisam ser examinados pela natureza e autoridade emissora. Uma certidão internacional ou versão em inglês não dispensa automaticamente tradução ou formalidade brasileira; avaliamos sua finalidade e aceitação no procedimento concreto.",
  Eslováquia: "Conferimos nomes, sinais diacríticos, datas e autoridade dos documentos eslovacos para evitar divergência com registros brasileiros. Tradução e autenticação dependem da finalidade; documentos expedidos em outro país devem seguir sua origem, ainda que seu titular resida na Eslováquia.",
  Eslovênia: "Documentos eslovenos não são documentos eslovacos: país, idioma e autoridade devem ser corretamente identificados. A conferência dos registros e da tradução evita confusão entre ordenamentos; residência eslovena não confere efeitos brasileiros automáticos a atos familiares ou sucessórios.",
  Espanha: "Na Espanha, verificamos o órgão emissor e o idioma real, inclusive se há documentos em língua regional. União estável, regime patrimonial e decisões parentais não são equiparados aos institutos brasileiros apenas pela tradução do nome; o procedimento exige examinar conteúdo e efeitos.",
  Finlândia: "Atos finlandeses podem apresentar documentos em finlandês ou sueco, com versões em outros idiomas. Conferimos os dados pessoais, a autoridade e o texto efetivamente utilizado no Brasil antes de orientar tradução e autenticação, considerando a finalidade do registro ou processo.",
  França: "Em documentos franceses, distinguimos certidão, ato notarial e decisão judicial, além de nomes e registros brasileiros correspondentes. O idioma francês e a forma do instrumento exigem análise documental; uma relação civil reconhecida na França não é automaticamente um instituto idêntico no Brasil.",
  Irlanda: "A República da Irlanda e a Irlanda do Norte possuem autoridades e sistemas distintos. Identificamos o país efetivo de origem do ato, e não apenas o idioma inglês, antes de orientar formalidades ou cooperação. Residência irlandesa e emissão britânica de documento não devem ser confundidas.",
  Itália: "Documentos italianos podem envolver registros municipais, atos notariais e decisões judiciais distintos. Conferimos nomes, filiação e eventuais diferenças de grafia com os registros brasileiros; cidadania italiana e residência na Itália não determinam por si sós a lei sucessória ou familiar aplicável.",
  Luxemburgo: "Documentos relacionados a Luxemburgo podem utilizar francês, alemão ou luxemburguês. Identificamos idioma, órgão e conteúdo do ato antes de definir tradução ou autenticação para o Brasil. Residência e nacionalidade são informações distintas e serão verificadas separadamente.",
  Noruega: "Para documentos noruegueses, conferimos o órgão emissor, a forma do ato e o idioma efetivamente apresentado. Modelos digitais ou versões em inglês demandam análise de autenticidade e aceitação pela autoridade brasileira, sem presumir que toda cópia eletrônica substitua o documento exigido.",
  Suécia: "Documentos suecos devem ser avaliados pela autoridade e pela finalidade, inclusive extratos de registros e versões em inglês. A tradução do nome de um documento não define seus efeitos no Brasil; examinamos conteúdo, dados familiares e exigências do órgão que receberá o instrumento.",
  Portugal: "Documentos portugueses devem ser identificados pela autoridade que os expediu; o idioma português não dispensa por si só a autenticação exigida. Documentos de outros países pertencentes a residentes em Portugal serão examinados pela origem efetiva. Uma procuração consular brasileira, quando cabível, tem requisitos próprios.",
  "Estados Unidos": "Nos Estados Unidos, estado e autoridade emissora importam: registros, atos notariais e decisões não seguem uma única regra nacional. Conferimos a autoridade responsável pela autenticação e o conteúdo do instrumento; residência americana não significa que todos os documentos sejam americanos.",
  Canadá: "No Canadá, identificar a província, o idioma e a autoridade emissora é essencial. Atos em inglês e francês demandam análise de tradução conforme sua finalidade no Brasil. A autenticação deve seguir a autoridade competente para o documento, sem presumir que qualquer notário possa emitir a apostila.",
  Suíça: "Na Suíça, o cantão, a autoridade emissora e o idioma do documento são relevantes. O mesmo nome geográfico pode designar cidade ou cantão; identificamos o órgão correto antes de orientar autenticação ou uso no Brasil. Atos alemães, franceses ou italianos têm requisitos linguísticos próprios.",
  Japão: "Documentos japoneses podem utilizar escrita, calendários e registros familiares diferentes dos brasileiros. Conferimos nomes, datas, filiação e a natureza do registro, além de tradução e autenticação quando exigidas. A residência no Japão não altera automaticamente o regime jurídico de bens ou relações familiares no Brasil.",
  "Emirados Árabes Unidos": "Para documentos relacionados aos Emirados Árabes Unidos, verificamos idioma, natureza do ato e cadeia de autenticação aplicável na data de uso. Não presumimos aplicação da apostila ou de convenções de família sem conferir a relação entre os países e o caso concreto.",
  "Países Baixos": "Países Baixos é o nome do país; Holanda designa parte de seu território. Para o uso de documentos no Brasil, conferimos município, autoridade emissora e idioma real, evitando confundir registro neerlandês com certidão brasileira ou presumir efeitos automáticos.",
  "Reino Unido": "Inglaterra e País de Gales, Escócia e Irlanda do Norte possuem sistemas jurídicos com diferenças. Identificamos onde o ato foi produzido, sua forma e o objetivo no Brasil; um documento em inglês não demonstra sozinho sua jurisdição nem validade para a providência pretendida.",
  Austrália: "Na Austrália, conferimos o estado ou território e a natureza do documento antes de definir autenticação e uso no Brasil. Distância e diferença de horário exigem planejamento de assinaturas e envio de originais; não significam prazo processual especial ou dispensa de prova.",
  Brasil: "Mesmo com residência no Brasil, origem estrangeira de documentos, patrimônio no exterior ou familiares fora podem exigir análise transfronteiriça. Atendimento digital não dispensa presença pessoal ou apresentação de originais quando a autoridade competente os exigir.",
};

function countryFor(id: number | null, name: string): string {
  if (id === null) return "Brasil";
  const city = countryByCity[id];
  if (city) return city;
  if (name.includes("EUA")) return "Estados Unidos";
  const parenthetical = name.match(/\(([^)]+)\)/)?.[1];
  return parenthetical ?? name;
}

function localityGuidance(id: number | null, name: string, country: string): string {
  const original = INTERNATIONAL_LOCATIONS.find((location) => location.id === id);
  let boundary = "";
  if (original?.kind === "condado") boundary = `Em ${name}, identificamos também o estado e o órgão responsável. O condado não substitui a jurisdição estadual nem determina o foro brasileiro.`;
  else if (id === 97) boundary = "O Vale do Silício é uma região geográfica e econômica, não uma autoridade judicial ou um cartório. É preciso identificar o município, o condado e a autoridade efetivamente envolvidos.";
  else if (original?.kind === "regiao") boundary = `Para residentes em ${name}, distinguimos estado, província ou cantão e autoridade emissora; a unidade regional não define sozinha a lei aplicável ao caso brasileiro.`;
  else if (id === 28) boundary = "Em Basileia, distinguimos a cidade dos cantões Basileia-Cidade e Basileia-Campo conforme o órgão e o documento envolvidos.";
  else if (original?.kind === "cidade") boundary = `Residir em ${name}, no contexto de ${country}, não significa que o casamento, o patrimônio ou a decisão judicial se originem nessa cidade.`;
  const national = countryGuidance[country] ?? `Em casos relacionados a ${country}, identificamos a autoridade, o idioma e a origem efetiva de cada documento. A autenticação, eventual tradução e uso no Brasil dependem da finalidade e das regras aplicáveis; não se presume reconhecimento automático de atos estrangeiros.`;
  if (id === 82) boundary = "A expressão Cantão de Basileia exige precisar se o ato ou a residência corresponde a Basileia-Cidade ou Basileia-Campo; não tratamos ambos como uma única autoridade.";
  return `${boundary} ${national}`.trim();
}

const relatedGroups: Readonly<Record<string, readonly string[]>> = {
  sucessoes: ["inventario-internacional-extrajudicial", "inventario-internacional-judicial", "partilha-bens-inventario", "planejamento-sucessorio-internacional"],
  familia: ["divorcio-internacional-litigioso", "reconhecimento-dissolucao-uniao-estavel-transnacional", "guarda-compartilhada-convivencia-moradia-menor", "pensao-alimenticia-internacional"],
  alimentos: ["pensao-alimenticia-internacional", "execucao-pensao-alimenticia-internacional", "revisao-pensao-alimenticia-internacional", "exoneracao-pensao-alimenticia-internacional"],
  menores: ["guarda-compartilhada-convivencia-moradia-menor", "suprimento-judicial-autorizacao-viagem-internacional-menor", "autorizacao-mudanca-menor-exterior", "suprimento-consentimento-passaporte-menor", "restituicao-internacional-criancas"],
  negocios: ["registro-contratos-internacionais-rtd", "representacao-negocios-aquisicao-bens", "direito-internacional"],
};

export function getResidentEntry(path: string) { return entries.get(path); }
export function getResidentLanding(path: string): InternationalLandingPage {
  const entry = entries.get(path);
  if (!entry || entry.target !== path) throw new Error(`Página canônica de residentes não cadastrada: ${path}`);
  const service = services.get(entry.serviceId);
  if (!service) throw new Error(`Serviço não cadastrado: ${entry.serviceId}`);
  const original = INTERNATIONAL_LOCATIONS.find((location) => location.id === entry.locationId);
  const location = { id: entry.locationId ?? 0, name: entry.locationId === null ? "Brasil" : entry.locationName, slug: original?.slug ?? "brasil", kind: original?.kind ?? "pais" as const, titles: [] };
  const country = countryFor(entry.locationId, location.name);
  const localGuidance = localityGuidance(entry.locationId, location.name, country);
  const group = entry.serviceId.includes("pensao") ? "alimentos" : /inventario|sucess|partilha-bens-inventario/.test(entry.serviceId) ? "sucessoes" : /menor|guarda|criancas/.test(entry.serviceId) ? "menores" : /contratos|negocios|direito-internacional/.test(entry.serviceId) ? "negocios" : "familia";
  const related = (relatedGroups[group] ?? []).filter((id) => id !== entry.serviceId).map((id) => {
    const sibling = catalogue.find((row) => row.serviceId === id && row.locationId === entry.locationId && row.target === row.path);
    return sibling ? { path: sibling.path, title: services.get(id)?.shortTitle ?? sibling.title } : undefined;
  }).filter((item): item is { path: string; title: string } => item !== undefined);
  if (entry.locationId !== null) related.push({ path: `/advogado-${entry.serviceId}-no-brasil`, title: `${service.shortTitle} — atendimento geral no Brasil` });
  return {
    path, slug: path.slice("/advogado-".length), title: entry.title, seoTitle: entry.seoTitle, service, location,
    description: `${service.shortTitle} no Brasil${entry.locationId === null ? "" : ` para residentes em ${location.name}`}. Análise individual, orientação jurídica e atendimento online Braga Bitencourt.`,
    residentContent: {
      subtitle: `${service.shortTitle}: orientação sobre direitos, documentos e a via adequada no Brasil.`,
      locationContext: entry.locationId === null ? "Atendemos casos no Brasil, inclusive com vínculos no exterior, mediante análise individual de competência, documentos e interesses envolvidos." : `O atendimento a residentes em ${location.name} pode começar à distância. Conferimos residência atual, origem dos atos e poderes de representação separadamente; etapas presenciais ou documentos originais serão solicitados se exigidos.`,
      localGuidance, related,
      documents: [service.steps[0] ?? service.summary, service.steps[1] ?? service.legalContext, "Identificação das partes e prova dos fatos relevantes, conforme o serviço e a situação concreta.", "Procuração com poderes adequados; tradução, apostila ou legalização somente quando exigidas, considerando tratados, atos consulares e dispensas aplicáveis."],
      situations: [
        { title: service.shortTitle, text: service.summary },
        { title: "Qual via é adequada para o seu caso?", text: service.legalContext },
        { title: service.steps[0] ?? "Análise inicial", text: service.steps[1] ?? service.summary },
        { title: service.steps[2] ?? "Providências necessárias", text: service.steps[3] ?? service.legalContext },
        { title: entry.locationId === null ? "Há vínculos com mais de um país?" : `Você reside em ${location.name}?`, text: localGuidance },
        { title: "Precisa de acompanhamento no Brasil?", text: "Organizamos atendimento digital e representação quando cabíveis. Competência, prazos, custos e necessidade de comparecimento dependem do caso; não há promessa de resultado ou de procedimento integralmente online." },
      ],
    },
  };
}

export const RESIDENT_INDEXABLE_PATHS = catalogue.filter((entry) => entry.path === entry.target).map((entry) => entry.path);