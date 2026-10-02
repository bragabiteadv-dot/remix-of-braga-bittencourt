export type InternationalLocationKind = "pais" | "cidade" | "regiao" | "condado";
export interface InternationalService {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  summary: string;
  legalContext: string;
  steps: readonly string[];
}
export interface InternationalLocation {
  id: number;
  name: string;
  slug: string;
  kind: InternationalLocationKind;
  titles: readonly string[];
}
export interface InternationalLandingPage {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  service: InternationalService;
  location: InternationalLocation;
  existingPath?: string;
}

export const INTERNATIONAL_SERVICES: readonly InternationalService[] = [
  {
    "id": "decisao-stj",
    "slug": "homologacao-decisao-judicial",
    "name": "Reconhecimento e homologação de decisão judicial estrangeira",
    "shortTitle": "Homologação de decisão judicial estrangeira perante o STJ",
    "summary": "Análise da decisão, da jurisdição de origem e dos requisitos para produção de efeitos no Brasil.",
    "legalContext": "Decisões estrangeiras que dependem de homologação pelo Superior Tribunal de Justiça exigem exame da competência da autoridade de origem, citação regular, eficácia no país de origem, tradução juramentada e ausência de ofensa à ordem pública brasileira.",
    "steps": [
      "Análise da decisão e da necessidade de homologação",
      "Preparação documental, apostilamento ou legalização",
      "Tradução juramentada e representação perante o STJ",
      "Orientação para o cumprimento posterior no Brasil"
    ]
  },
  {
    "id": "escrituras",
    "slug": "validacao-escrituras-notariais",
    "name": "Validação, eficácia e registro de escritura notarial estrangeira",
    "shortTitle": "Eficácia de escritura notarial estrangeira no Brasil",
    "summary": "Orientação sobre apostilamento, tradução, registro e uso do ato notarial estrangeiro no Brasil.",
    "legalContext": "A eficácia de uma escritura notarial estrangeira depende do conteúdo do ato e da finalidade pretendida no Brasil. A análise identifica se são necessários apostilamento ou legalização, tradução pública, registro em Títulos e Documentos ou providências perante cartórios e órgãos específicos.",
    "steps": [
      "Exame da escritura e de sua finalidade no Brasil",
      "Apostilamento ou legalização conforme o país de origem",
      "Tradução pública juramentada quando exigida",
      "Registro e apresentação ao órgão brasileiro competente"
    ]
  },
  {
    "id": "casamento-exterior",
    "slug": "registro-traslado-casamento",
    "name": "Registro, traslado e homologação de casamento celebrado no exterior",
    "shortTitle": "Registro de casamento celebrado no exterior no Brasil",
    "summary": "Regularização do casamento estrangeiro perante o registro civil brasileiro.",
    "legalContext": "O casamento celebrado no exterior pode precisar de traslado no Brasil para produzir publicidade registral e permitir atualizações do estado civil. O procedimento varia conforme a nacionalidade das partes, o registro consular prévio e a documentação emitida no local da celebração.",
    "steps": [
      "Conferência da certidão estrangeira de casamento",
      "Apostilamento ou legalização e tradução juramentada",
      "Definição do cartório competente para o traslado",
      "Acompanhamento de exigências e emissão da certidão brasileira"
    ]
  },
  {
    "id": "divorcio-direto",
    "slug": "averbacao-divorcio-consensual",
    "name": "Registro e averbação direta de divórcio consensual estrangeiro",
    "shortTitle": "Averbação direta de divórcio consensual estrangeiro",
    "summary": "Avaliação da via direta em cartório para divórcio consensual simples obtido no exterior.",
    "legalContext": "A averbação direta é reservada ao divórcio estrangeiro consensual simples, sem disposições sobre guarda, alimentos ou partilha de bens. Quando esses temas aparecem na decisão, a homologação pelo STJ pode ser necessária antes da atualização do registro civil brasileiro.",
    "steps": [
      "Verificação dos requisitos do Provimento 53 do CNJ e das normas posteriores aplicáveis",
      "Análise de guarda, alimentos e partilha na decisão",
      "Preparação da documentação estrangeira e da tradução",
      "Averbação no registro civil brasileiro competente"
    ]
  },
  {
    "id": "sentenca",
    "slug": "homologacao-sentenca-judicial",
    "name": "Validação, cumprimento e homologação de sentença judicial estrangeira",
    "shortTitle": "Homologação e cumprimento de sentença estrangeira no Brasil",
    "summary": "Estratégia para reconhecer a sentença estrangeira e, quando cabível, cumpri-la no Brasil.",
    "legalContext": "Sentenças estrangeiras podem precisar de homologação antes de serem executadas ou utilizadas no Brasil. A atuação considera o conteúdo da decisão, eventuais exceções legais, os requisitos documentais e a etapa de cumprimento perante a Justiça competente.",
    "steps": [
      "Definição entre homologação, reconhecimento e uso direto",
      "Conferência do trânsito em julgado e da citação",
      "Representação no procedimento perante o STJ",
      "Cumprimento da decisão homologada no juízo competente"
    ]
  },
  {
    "id": "transcricao-casamento",
    "slug": "transcricao-registro-casamento",
    "name": "Transcrição e registro de casamento internacional",
    "shortTitle": "Transcrição de casamento internacional no Brasil",
    "summary": "Assessoria para registrar no Brasil casamento celebrado no exterior e atualizar o estado civil.",
    "legalContext": "A transcrição organiza a prova do casamento celebrado fora do país perante o registro civil brasileiro. A documentação e o cartório competente dependem da situação dos cônjuges, do local da celebração e da existência ou não de registro consular.",
    "steps": [
      "Análise da nacionalidade e do local de celebração",
      "Conferência da certidão e do regime de bens",
      "Apostilamento ou legalização e tradução pública",
      "Traslado e atualização do estado civil no Brasil"
    ]
  }
] as const;

export const INTERNATIONAL_LOCATIONS: readonly InternationalLocation[] = [
  {
    "id": 1,
    "name": "Alemanha",
    "slug": "alemanha",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Alemanha perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Alemanha no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Alemanha no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Alemanha em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Alemanha no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Alemão no Brasil"
    ]
  },
  {
    "id": 2,
    "name": "Argentina",
    "slug": "argentina",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Argentina perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Argentina no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Argentina no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Argentina em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Argentina no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Argentino no Brasil"
    ]
  },
  {
    "id": 3,
    "name": "Austrália",
    "slug": "australia",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Austrália perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Austrália no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Austrália no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Austrália em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Austrália no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Australiano no Brasil"
    ]
  },
  {
    "id": 4,
    "name": "Bélgica",
    "slug": "belgica",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Bélgica perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Bélgica no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Bélgica no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Bélgica em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Bélgica no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Belga no Brasil"
    ]
  },
  {
    "id": 5,
    "name": "Brasil (Atos Internacionais e Transfronteiriços)",
    "slug": "brasil-atos-internacionais-e-transfronteiricos",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial Estrangeira com Efeitos no Brasil perante o STJ",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais Estrangeiras no Brasil",
      "Advogado para Registro, Traslado e Homologação de Certidão Consular de Casamento no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Estrangeiro em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença de Foro Internacional no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Exterior com Cidadão Brasileiro"
    ]
  },
  {
    "id": 6,
    "name": "Canadá",
    "slug": "canada",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Canadá perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Canadá no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Canadá no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Canadá em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Canadá no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Canadense no Brasil"
    ]
  },
  {
    "id": 7,
    "name": "Dinamarca",
    "slug": "dinamarca",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Dinamarca perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Dinamarca no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Dinamarca no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Dinamarca em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Dinamarca no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Dinamarquês no Brasil"
    ]
  },
  {
    "id": 8,
    "name": "Emirados Árabes Unidos (EAU)",
    "slug": "emirados-arabes-unidos-eau",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial dos Emirados Árabes Unidos perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais dos Emirados Árabes Unidos no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento nos Emirados Árabes Unidos no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual dos Emirados Árabes Unidos em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial dos Emirados Árabes Unidos no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Emiradense no Brasil"
    ]
  },
  {
    "id": 9,
    "name": "Eslováquia",
    "slug": "eslovaquia",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Eslováquia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Eslováquia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Eslováquia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Eslováquia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Eslováquia no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Eslovaco no Brasil"
    ]
  },
  {
    "id": 10,
    "name": "Eslovênia",
    "slug": "eslovenia",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Eslovênia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Eslovênia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Eslovênia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Eslovênia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Eslovênia no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Esloveno no Brasil"
    ]
  },
  {
    "id": 11,
    "name": "Espanha",
    "slug": "espanha",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Espanha perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Espanha no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Espanha no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Espanha em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Espanha no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Espanhol no Brasil"
    ]
  },
  {
    "id": 12,
    "name": "Estados Unidos (EUA)",
    "slug": "estados-unidos-eua",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial dos Estados Unidos perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais dos Estados Unidos no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento nos Estados Unidos no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual dos Estados Unidos em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial dos Estados Unidos no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Americano no Brasil"
    ]
  },
  {
    "id": 13,
    "name": "Finlândia",
    "slug": "finlandia",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Finlândia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Finlândia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Finlândia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Finlândia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Finlândia no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Finlandês no Brasil"
    ]
  },
  {
    "id": 14,
    "name": "França",
    "slug": "franca",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da França perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da França no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na França no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da França em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da França no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Francês no Brasil"
    ]
  },
  {
    "id": 15,
    "name": "Holanda / Países Baixos",
    "slug": "holanda-paises-baixos",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Holanda perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Holanda no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Holanda no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Holanda em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Holanda no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Holandês no Brasil"
    ]
  },
  {
    "id": 16,
    "name": "Irlanda",
    "slug": "irlanda",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Irlanda perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Irlanda no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Irlanda no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Irlanda em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Irlanda no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Irlandês no Brasil"
    ]
  },
  {
    "id": 17,
    "name": "Itália",
    "slug": "italia",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Itália perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Itália no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Itália no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Itália em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Itália no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Italiano no Brasil"
    ]
  },
  {
    "id": 18,
    "name": "Japão",
    "slug": "japao",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Japão perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Japão no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Japão no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Japão em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Japão no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Japonês no Brasil"
    ]
  },
  {
    "id": 19,
    "name": "Luxemburgo",
    "slug": "luxemburgo",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Luxemburgo perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Luxemburgo no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Luxemburgo no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Luxemburgo em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Luxemburgo no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Luxemburguês no Brasil"
    ]
  },
  {
    "id": 20,
    "name": "Noruega",
    "slug": "noruega",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Noruega perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Noruega no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Noruega no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Noruega em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Noruega no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Norueguês no Brasil"
    ]
  },
  {
    "id": 21,
    "name": "Portugal",
    "slug": "portugal",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Portugal perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Portugal no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Portugal no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual Português em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Portuguesa no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Português no Brasil"
    ]
  },
  {
    "id": 22,
    "name": "Reino Unido",
    "slug": "reino-unido",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Reino Unido perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Reino Unido no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Reino Unido no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Reino Unido em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Reino Unido no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Britânico no Brasil"
    ]
  },
  {
    "id": 23,
    "name": "Suécia",
    "slug": "suecia",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Suécia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Suécia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Suécia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Suécia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Suécia no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Sueco no Brasil"
    ]
  },
  {
    "id": 24,
    "name": "Suíça",
    "slug": "suica",
    "kind": "pais",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Suíça perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Suíça no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Suíça no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Suíça em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Suíça no Brasil",
      "Advogado de Transcrição e Registro de Casamento com Cidadão Suíço no Brasil"
    ]
  },
  {
    "id": 25,
    "name": "Amsterdã",
    "slug": "amsterda",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Amsterdã perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Amsterdã no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Amsterdã no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Amsterdã em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Amsterdã no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Amsterdã no Brasil"
    ]
  },
  {
    "id": 26,
    "name": "Atlanta",
    "slug": "atlanta",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Atlanta perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Atlanta no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Atlanta no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Atlanta em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Atlanta no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Atlanta no Brasil"
    ]
  },
  {
    "id": 27,
    "name": "Barcelona",
    "slug": "barcelona",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Barcelona perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Barcelona no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Barcelona no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Barcelona em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Barcelona no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Barcelona no Brasil"
    ]
  },
  {
    "id": 28,
    "name": "Basileia",
    "slug": "basileia",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Basileia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Basileia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Basileia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Basileia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Basileia no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Basileia no Brasil"
    ]
  },
  {
    "id": 29,
    "name": "Berna",
    "slug": "berna",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Berna perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Berna no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Berna no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Berna em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Berna no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Berna no Brasil"
    ]
  },
  {
    "id": 30,
    "name": "Boca Raton",
    "slug": "boca-raton",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Boca Raton perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Boca Raton no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Boca Raton no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Boca Raton em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Boca Raton no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Boca Raton no Brasil"
    ]
  },
  {
    "id": 31,
    "name": "Boston",
    "slug": "boston",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Boston perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Boston no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Boston no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Boston em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Boston no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Boston no Brasil"
    ]
  },
  {
    "id": 32,
    "name": "Brasília",
    "slug": "brasilia",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial Externa em Brasília perante o STJ",
      "Advogado para Registro e Validação de Escrituras Estrangeiras em Cartórios de Brasília",
      "Advogado para Registro e Traslado de Casamento Internacional no 1º Ofício de Brasília",
      "Advogado para Averbação Direta de Divórcio Consensual Estrangeiro em Cartório de Brasília",
      "Advogado para Validação e Cumprimento de Sentença Internacional perante Varas Cíveis de Brasília",
      "Advogado de Transcrição e Homologação de Casamento Estrangeiro em Brasília"
    ]
  },
  {
    "id": 33,
    "name": "Bruxelas",
    "slug": "bruxelas",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Bruxelas perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Bruxelas no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Bruxelas no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Bruxelas em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Bruxelas no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Bruxelas no Brasil"
    ]
  },
  {
    "id": 34,
    "name": "Cascais",
    "slug": "cascais",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Cascais perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Cascais no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Cascais no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Cascais em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Cascais no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Cascais no Brasil"
    ]
  },
  {
    "id": 35,
    "name": "Chicago",
    "slug": "chicago",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Chicago perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Chicago no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Chicago no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Chicago em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Chicago no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Chicago no Brasil"
    ]
  },
  {
    "id": 36,
    "name": "Copenhague",
    "slug": "copenhagen",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Copenhague perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Copenhague no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Copenhague no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Copenhague em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Copenhague no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Copenhague no Brasil"
    ]
  },
  {
    "id": 37,
    "name": "Dubai",
    "slug": "dubai",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Dubai perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Dubai no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Dubai no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Dubai em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Dubai no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Dubai no Brasil"
    ]
  },
  {
    "id": 38,
    "name": "Dublin",
    "slug": "dublin",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Dublin perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Dublin no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Dublin no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Dublin em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Dublin no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Dublin no Brasil"
    ]
  },
  {
    "id": 39,
    "name": "Estoril",
    "slug": "estoril",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Estoril perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Estoril no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Estoril no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Estoril em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Estoril no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Estoril no Brasil"
    ]
  },
  {
    "id": 40,
    "name": "Fort Lauderdale",
    "slug": "fort-lauderdale",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Fort Lauderdale perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Fort Lauderdale no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Fort Lauderdale no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Fort Lauderdale em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Fort Lauderdale no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Fort Lauderdale no Brasil"
    ]
  },
  {
    "id": 41,
    "name": "Frankfurt",
    "slug": "frankfurt",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Frankfurt perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Frankfurt no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Frankfurt no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Frankfurt em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Frankfurt no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Frankfurt no Brasil"
    ]
  },
  {
    "id": 42,
    "name": "Genebra",
    "slug": "genebra",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Genebra perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Genebra no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Genebra no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Genebra em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Genebra no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Genebra no Brasil"
    ]
  },
  {
    "id": 43,
    "name": "Hamamatsu",
    "slug": "hamamatsu",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Hamamatsu perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Hamamatsu no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Hamamatsu no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Hamamatsu em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Hamamatsu no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Hamamatsu no Brasil"
    ]
  },
  {
    "id": 44,
    "name": "Houston",
    "slug": "houston",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Houston perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Houston no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Houston no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Houston em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Houston no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Houston no Brasil"
    ]
  },
  {
    "id": 45,
    "name": "Las Vegas",
    "slug": "las-vegas",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Las Vegas perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Las Vegas no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Las Vegas no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Las Vegas em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Las Vegas no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Las Vegas no Brasil"
    ]
  },
  {
    "id": 46,
    "name": "Lisboa",
    "slug": "lisboa",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Lisboa perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Lisboa no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Lisboa no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Lisboa em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Lisboa no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Lisboa no Brasil"
    ]
  },
  {
    "id": 47,
    "name": "Londres",
    "slug": "londres",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Londres perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Londres no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Londres no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Londres em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Londres no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Londres no Brasil"
    ]
  },
  {
    "id": 48,
    "name": "Los Angeles",
    "slug": "los-angeles",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Los Angeles perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Los Angeles no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Los Angeles no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Los Angeles em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Los Angeles no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Los Angeles no Brasil"
    ]
  },
  {
    "id": 49,
    "name": "Madrid",
    "slug": "madrid",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Madrid perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Madrid no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Madrid no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Madrid em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Madrid no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Madrid no Brasil"
    ]
  },
  {
    "id": 50,
    "name": "Miami",
    "slug": "miami",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Miami perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Miami no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Miami no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Miami em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Miami no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Miami no Brasil"
    ]
  },
  {
    "id": 51,
    "name": "Milão",
    "slug": "milao",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Milão perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Milão no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Milão no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Milão em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Milão no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Milão no Brasil"
    ]
  },
  {
    "id": 52,
    "name": "Munique",
    "slug": "munique",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Munique perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Munique no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Munique no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Munique em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Munique no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Munique no Brasil"
    ]
  },
  {
    "id": 53,
    "name": "Nagoia",
    "slug": "nagoia",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Nagoia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Nagoia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Nagoia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Nagoia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Nagoia no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Nagoia no Brasil"
    ]
  },
  {
    "id": 54,
    "name": "Nova York (NYC)",
    "slug": "nova-york-nyc",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Nova York perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Nova York no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Nova York no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Nova York em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Nova York no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Nova York no Brasil"
    ]
  },
  {
    "id": 55,
    "name": "Orlando",
    "slug": "orlando",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Orlando perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Orlando no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Orlando no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Orlando em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Orlando no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Orlando no Brasil"
    ]
  },
  {
    "id": 56,
    "name": "Paris",
    "slug": "paris",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Paris perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Paris no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Paris no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Paris em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Paris no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Paris no Brasil"
    ]
  },
  {
    "id": 57,
    "name": "Porto",
    "slug": "porto",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Porto perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Porto no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Porto no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Porto em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Porto no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Porto no Brasil"
    ]
  },
  {
    "id": 58,
    "name": "Roma",
    "slug": "roma",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Roma perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Roma no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Roma no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Roma em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Roma no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Roma no Brasil"
    ]
  },
  {
    "id": 59,
    "name": "San Francisco",
    "slug": "san-francisco",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de San Francisco perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de San Francisco no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em San Francisco no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de San Francisco em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de San Francisco no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em San Francisco no Brasil"
    ]
  },
  {
    "id": 60,
    "name": "San Jose",
    "slug": "san-jose",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de San Jose perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de San Jose no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em San Jose no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de San Jose em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de San Jose no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em San Jose no Brasil"
    ]
  },
  {
    "id": 61,
    "name": "Seattle",
    "slug": "seattle",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Seattle perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Seattle no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Seattle no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Seattle em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Seattle no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Seattle no Brasil"
    ]
  },
  {
    "id": 62,
    "name": "Sydney",
    "slug": "sydney",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Sydney perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Sydney no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Sydney no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Sydney em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Sydney no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Sydney no Brasil"
    ]
  },
  {
    "id": 63,
    "name": "Tóquio",
    "slug": "toquio",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Tóquio perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Tóquio no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Tóquio no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Tóquio em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Tóquio no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Tóquio no Brasil"
    ]
  },
  {
    "id": 64,
    "name": "Toronto",
    "slug": "toronto",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Toronto perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Toronto no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Toronto no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Toronto em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Toronto no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Toronto no Brasil"
    ]
  },
  {
    "id": 65,
    "name": "Vancouver",
    "slug": "vancouver",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Vancouver perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Vancouver no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Vancouver no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Vancouver em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Vancouver no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Vancouver no Brasil"
    ]
  },
  {
    "id": 66,
    "name": "Zurique",
    "slug": "zurique",
    "kind": "cidade",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Zurique perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Zurique no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Zurique no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Zurique em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Zurique no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado em Zurique no Brasil"
    ]
  },
  {
    "id": 67,
    "name": "Aichi (Japão)",
    "slug": "aichi-japao",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Aichi perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Aichi no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Aichi no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Aichi em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Aichi no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado na Província de Aichi no Brasil"
    ]
  },
  {
    "id": 68,
    "name": "Baviera (Alemanha)",
    "slug": "baviera-alemanha",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Baviera perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Baviera no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Baviera no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Baviera em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Baviera no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado da Baviera no Brasil"
    ]
  },
  {
    "id": 69,
    "name": "Califórnia (EUA)",
    "slug": "california-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Califórnia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Califórnia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Califórnia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Califórnia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Califórnia no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado da Califórnia no Brasil"
    ]
  },
  {
    "id": 70,
    "name": "Colúmbia Britânica (Canadá)",
    "slug": "columbia-britanica-canada",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Colúmbia Britânica perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Colúmbia Britânica no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Colúmbia Britânica no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Colúmbia Britânica em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Colúmbia Britânica no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado na Colúmbia Britânica no Brasil"
    ]
  },
  {
    "id": 71,
    "name": "Flórida (EUA)",
    "slug": "florida-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Flórida perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Flórida no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Flórida no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Flórida em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Flórida no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado da Flórida no Brasil"
    ]
  },
  {
    "id": 72,
    "name": "Geórgia (EUA)",
    "slug": "georgia-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial da Geórgia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais da Geórgia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento na Geórgia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual da Geórgia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial da Geórgia no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado da Geórgia no Brasil"
    ]
  },
  {
    "id": 73,
    "name": "Illinois (EUA)",
    "slug": "illinois-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Illinois perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Illinois no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Illinois no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Illinois em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Illinois no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado de Illinois no Brasil"
    ]
  },
  {
    "id": 74,
    "name": "Massachusetts (EUA)",
    "slug": "massachusetts-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Massachusetts perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Massachusetts no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Massachusetts no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Massachusetts em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Massachusetts no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado de Massachusetts no Brasil"
    ]
  },
  {
    "id": 75,
    "name": "Nevada (EUA)",
    "slug": "nevada-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Nevada perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Nevada no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Nevada no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Nevada em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Nevada no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado de Nevada no Brasil"
    ]
  },
  {
    "id": 76,
    "name": "Nova Gales do Sul (Austrália)",
    "slug": "nova-gales-do-sul-australia",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Nova Gales do Sul perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Nova Gales do Sul no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Nova Gales do Sul no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Nova Gales do Sul em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Nova Gales do Sul no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado em Nova Gales do Sul no Brasil"
    ]
  },
  {
    "id": 77,
    "name": "Nova York (Estado / EUA)",
    "slug": "nova-york-estado-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Estado de Nova York perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Estado de Nova York no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Estado de Nova York no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Estado de Nova York em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Estado de Nova York no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado de Nova York no Brasil"
    ]
  },
  {
    "id": 78,
    "name": "Ontário (Canadá)",
    "slug": "ontario-canada",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Ontário perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Ontário no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Ontário no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Ontário em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Ontário no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado na Província de Ontário no Brasil"
    ]
  },
  {
    "id": 79,
    "name": "Shizuoka (Japão)",
    "slug": "shizuoka-japao",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial de Shizuoka perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais de Shizuoka no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento em Shizuoka no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual de Shizuoka em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial de Shizuoka no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado na Província de Shizuoka no Brasil"
    ]
  },
  {
    "id": 80,
    "name": "Texas (EUA)",
    "slug": "texas-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Texas perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Texas no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Texas no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Texas em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Texas no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado do Texas no Brasil"
    ]
  },
  {
    "id": 81,
    "name": "Washington (Estado / EUA)",
    "slug": "washington-estado-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Estado de Washington perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Estado de Washington no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Estado de Washington no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Estado de Washington em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Estado de Washington no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Estado de Washington no Brasil"
    ]
  },
  {
    "id": 82,
    "name": "Cantão de Basileia (Suíça)",
    "slug": "cantao-de-basileia-suica",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Cantão de Basileia perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Cantão de Basileia no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Cantão de Basileia no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Cantão de Basileia em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Cantão de Basileia no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Cantão de Basileia no Brasil"
    ]
  },
  {
    "id": 83,
    "name": "Cantão de Berna (Suíça)",
    "slug": "cantao-de-berna-suica",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Cantão de Berna perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Cantão de Berna no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Cantão de Berna no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Cantão de Berna em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Cantão de Berna no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Cantão de Berna no Brasil"
    ]
  },
  {
    "id": 84,
    "name": "Cantão de Genebra (Suíça)",
    "slug": "cantao-de-genebra-suica",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Cantão de Genebra perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Cantão de Genebra no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Cantão de Genebra no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Cantão de Genebra em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Cantão de Genebra no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Cantão de Genebra no Brasil"
    ]
  },
  {
    "id": 85,
    "name": "Cantão de Zurique (Suíça)",
    "slug": "cantao-de-zurique-suica",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Cantão de Zurique perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Cantão de Zurique no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Cantão de Zurique no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Cantão de Zurique em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Cantão de Zurique no Brasil",
      "Advogado de Transcrição e Registro de Casamento Celebrado no Cantão de Zurique no Brasil"
    ]
  },
  {
    "id": 86,
    "name": "Condado de Clark (Nevada / EUA)",
    "slug": "condado-de-clark-nevada-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Clark perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Clark no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Clark no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Clark em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Clark no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Clark no Brasil"
    ]
  },
  {
    "id": 87,
    "name": "Condado de Cook (Illinois / EUA)",
    "slug": "condado-de-cook-illinois-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Cook perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Cook no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Cook no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Cook em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Cook no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Cook no Brasil"
    ]
  },
  {
    "id": 88,
    "name": "Condado de Fulton (Geórgia / EUA)",
    "slug": "condado-de-fulton-georgia-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Fulton perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Fulton no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Fulton no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Fulton em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Fulton no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Fulton no Brasil"
    ]
  },
  {
    "id": 89,
    "name": "Condado de Harris (Texas / EUA)",
    "slug": "condado-de-harris-texas-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Harris perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Harris no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Harris no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Harris em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Harris no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Harris no Brasil"
    ]
  },
  {
    "id": 90,
    "name": "Condado de King (Washington / EUA)",
    "slug": "condado-de-king-washington-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de King perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de King no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de King no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de King em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de King no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de King no Brasil"
    ]
  },
  {
    "id": 91,
    "name": "Condado de Los Angeles (Califórnia / EUA)",
    "slug": "condado-de-los-angeles-california-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Los Angeles perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Los Angeles no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Los Angeles no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Los Angeles em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Los Angeles no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Los Angeles no Brasil"
    ]
  },
  {
    "id": 92,
    "name": "Condado de Miami-Dade (Flórida / EUA)",
    "slug": "condado-de-miami-dade-florida-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Miami-Dade perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Miami-Dade no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Miami-Dade no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Miami-Dade em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Miami-Dade no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Miami-Dade no Brasil"
    ]
  },
  {
    "id": 93,
    "name": "Condado de Orange (Flórida / EUA)",
    "slug": "condado-de-orange-florida-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Orange perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Orange no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Orange no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Orange em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Orange no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Orange no Brasil"
    ]
  },
  {
    "id": 94,
    "name": "Condado de Palm Beach (Flórida / EUA)",
    "slug": "condado-de-palm-beach-florida-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Palm Beach perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Palm Beach no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Palm Beach no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Palm Beach em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Palm Beach no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Palm Beach no Brasil"
    ]
  },
  {
    "id": 95,
    "name": "Condado de Broward (Flórida / EUA)",
    "slug": "condado-de-broward-florida-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Broward perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Broward no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Broward no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Broward em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Broward no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Broward no Brasil"
    ]
  },
  {
    "id": 96,
    "name": "Condado de Santa Clara (Califórnia / EUA)",
    "slug": "condado-de-santa-clara-california-eua",
    "kind": "condado",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Condado de Santa Clara perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Condado de Santa Clara no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Condado de Santa Clara no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Condado de Santa Clara em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Condado de Santa Clara no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Condado de Santa Clara no Brasil"
    ]
  },
  {
    "id": 97,
    "name": "Vale do Silício (Califórnia / EUA)",
    "slug": "vale-do-silicio-california-eua",
    "kind": "regiao",
    "titles": [
      "Advogado para Reconhecimento e Homologação de Decisão Judicial do Vale do Silício perante o STJ no Brasil",
      "Advogado para Validação, Eficácia e Registro de Escrituras Notariais do Vale do Silício no Brasil",
      "Advogado para Registro, Traslado e Homologação de Casamento no Vale do Silício no Brasil",
      "Advogado para Registro e Averbação Direta de Divórcio Consensual do Vale do Silício em Cartório no Brasil",
      "Advogado para Validação, Cumprimento e Homologação de Sentença Judicial do Vale do Silício no Brasil",
      "Advogado de Transcrição e Registro de Casamento Realizado no Vale do Silício no Brasil"
    ]
  }
] as const;

const EXISTING_PATHS = new Map<string, string>([["5:3", "/advogado-averbacao-direta-divorcio-estrangeiro-cartorio-brasil"]]);

function locationContext(location: InternationalLocation): string {
  switch (location.kind) {
    case "pais": return `O atendimento relacionado a ${location.name} considera a origem do documento, as regras de autenticação internacional aplicáveis e a providência necessária perante autoridades brasileiras.`;
    case "cidade": return `Para atos e decisões provenientes de ${location.name}, a análise identifica a autoridade emissora, a forma correta de autenticação e o procedimento adequado para produzir efeitos no Brasil.`;
    case "condado": return `Documentos emitidos no ${location.name} exigem identificação precisa da autoridade e do estado correspondente, além da conferência da apostila ou legalização antes do uso no Brasil.`;
    case "regiao": return `A documentação proveniente de ${location.name} é examinada conforme a autoridade regional competente, o país de origem e os requisitos brasileiros de reconhecimento, registro ou cumprimento.`;
  }
}

const SEO_SERVICE_TITLES: Readonly<Record<string, string>> = {
  "decisao-stj": "Homologação de decisão no STJ",
  escrituras: "Validação de escritura estrangeira",
  "casamento-exterior": "Registro de casamento estrangeiro",
  "divorcio-direto": "Averbação de divórcio estrangeiro",
  sentenca: "Homologação de sentença estrangeira",
  "transcricao-casamento": "Transcrição de casamento estrangeiro",
};

function seoLocationName(location: InternationalLocation): string {
  if (location.id === 5) return "Brasil";
  return location.name.replace(/ \([^)]*\)/g, "");
}

function buildLandingSeoTitle(service: InternationalService, location: InternationalLocation): string {
  const base = `${SEO_SERVICE_TITLES[service.id]} — ${seoLocationName(location)}`;
  const branded = `${base} | Braga Bitencourt`;
  return branded.length <= 70 ? branded : base;
}

export const INTERNATIONAL_LANDING_PAGES: readonly InternationalLandingPage[] = INTERNATIONAL_LOCATIONS.flatMap((location) =>
  INTERNATIONAL_SERVICES.map((service, serviceIndex) => {
    const existingPath = EXISTING_PATHS.get(`${location.id}:${serviceIndex}`);
    const slug = `${service.slug}-${location.slug}`;
    const isOriginalAverbacaoPage = location.id === 5 && service.id === "divorcio-direto";
    const title = isOriginalAverbacaoPage
      ? "Advogado para Averbação Direta de Divórcio Estrangeiro em Cartório no Brasil"
      : location.titles[serviceIndex];
    return {
      slug,
      path: existingPath ?? `/advogado-${slug}`,
      title,
      seoTitle: isOriginalAverbacaoPage
        ? "Averbação de Divórcio Estrangeiro em Cartório | Braga Bitencourt"
        : buildLandingSeoTitle(service, location),
      description: isOriginalAverbacaoPage
        ? "Advogado para Averbação Direta de Divórcio Estrangeiro em Cartório no Brasil. Divórcio consensual simples pelo Provimento 53 do CNJ, sem processo no STJ."
        : `${service.summary} Assessoria para documentos relacionados a ${location.name}, com atendimento no Brasil e online.`,
      service,
      location,
      existingPath,
    };
  }),
);

const LANDING_BY_SLUG = new Map(INTERNATIONAL_LANDING_PAGES.map((page) => [page.slug, page]));

export function getInternationalLandingBySlug(slug: string): InternationalLandingPage | undefined {
  return LANDING_BY_SLUG.get(slug);
}

export function getRequiredInternationalLandingBySlug(slug: string): InternationalLandingPage {
  const page = getInternationalLandingBySlug(slug);
  if (!page) throw new Error(`Página internacional não cadastrada: ${slug}`);
  return page;
}

export function getLocationContext(location: InternationalLocation): string {
  return locationContext(location);
}

export const GENERATED_INTERNATIONAL_PATHS = INTERNATIONAL_LANDING_PAGES.filter((page) => !page.existingPath).map((page) => page.path);
