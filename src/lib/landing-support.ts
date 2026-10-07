import legacy from "@/data/legacy-landing-support.json";
import { INTERNATIONAL_LANDING_PAGES, type InternationalLandingPage } from "@/lib/international-landings";

export interface LandingSupport {
  documents: readonly string[];
  related: readonly { path: string; title: string }[];
}

export function getLegacyLandingSupport(path: string): LandingSupport {
  const data = legacy as Record<string, LandingSupport>;
  const entry = data[path];
  if (!entry) throw new Error(`Seção contextual não cadastrada: ${path}`);
  return entry;
}

export function getInternationalLandingSupport(page: InternationalLandingPage): LandingSupport {
  if (page.residentContent) return page.residentContent;
  const documentsByService: Record<string, readonly string[]> = {
    "decisao-stj": ["Decisão judicial integral e prova de sua eficácia no país de origem.", "Documentos sobre citação e participação das partes e identificação dos efeitos pretendidos no Brasil."],
    sentenca: ["Sentença integral, prova de eficácia e documentos relativos à citação das partes.", "Certidões brasileiras afetadas e informação sobre guarda, alimentos ou patrimônio, quando pertinentes."],
    escrituras: ["Escritura notarial completa, identificação das partes e indicação da finalidade no Brasil.", "Documentos dos bens ou direitos envolvidos e exigências do órgão destinatário; registro não garante todos os efeitos do ato."],
    "casamento-exterior": ["Certidão estrangeira de casamento e documentos de identificação dos cônjuges.", "Registro consular, quando existente, e certidões brasileiras para conferir nomes, estado civil e competência registral."],
    "transcricao-casamento": ["Certidão estrangeira de casamento e registro consular, quando existente.", "Identificação dos cônjuges e registros brasileiros correspondentes; avaliar o procedimento de traslado ou transcrição aplicável."],
    "divorcio-direto": ["Decisão estrangeira de divórcio e prova de sua eficácia, além da certidão brasileira de casamento.", "Conferir se o divórcio é consensual simples; disposições sobre guarda, alimentos ou partilha podem exigir outra via."],
  };
  return {
    documents: [
      ...(documentsByService[page.service.id] ?? page.service.steps.slice(0, 2)),
      `Para atos relacionados a ${page.location.name}, identificar o país e a autoridade de emissão; cidade, região ou condado não definem sozinhos a competência brasileira.`,
      "Procuração e originais quando exigidos; tradução, apostila ou legalização dependem da origem, finalidade, tratados e dispensas aplicáveis.",
    ],
    related: INTERNATIONAL_LANDING_PAGES.filter((candidate) => candidate.location.id === page.location.id && candidate.path !== page.path)
      .map((candidate) => ({ path: candidate.path, title: `${candidate.service.shortTitle} — ${candidate.location.name}` })),
  };
}