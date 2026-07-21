export type Category = "Família" | "Sucessões" | "Internacional" | "Patrimônio" | "Empresarial";

export interface ArticleSection {
  id: string;
  title: string;
  content: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: Category;
  image: string;
  intro: string[];
  sections: ArticleSection[];
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const build = (
  id: string,
  title: string,
  category: Category,
  date: string,
  readingTime: string,
  image: string,
  excerpt: string,
  intro: string[],
  sections: Omit<ArticleSection, "id">[],
): Article => ({
  id,
  slug: slug(title),
  title,
  category,
  date,
  readingTime,
  image,
  excerpt,
  intro,
  sections: sections.map((s) => ({ ...s, id: slug(s.title) })),
});

export const ARTICLES: Article[] = [
  build(
    "1",
    "Divórcio consensual: como agilizar o processo e proteger o patrimônio da família",
    "Família",
    "19 de Março de 2026",
    "9 min de leitura",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop",
    "O divórcio consensual é uma alternativa mais rápida e menos desgastante para casais que desejam encerrar o vínculo conjugal.",
    [
      "O divórcio consensual é a via mais rápida, econômica e menos desgastante para encerrar formalmente o casamento no Brasil. Quando há acordo entre as partes sobre patrimônio, guarda dos filhos e pensão, o processo pode se resolver em poucas semanas.",
      "Neste guia, explicamos passo a passo como funciona, quando é possível fazer em cartório, quais documentos são exigidos e como proteger o patrimônio familiar durante a divisão.",
    ],
    [
      {
        title: "O que é o divórcio consensual",
        content: [
          "Divórcio consensual é aquele em que ambos os cônjuges concordam com o fim do casamento e com todas as questões relacionadas: partilha de bens, guarda dos filhos, pensão alimentícia e alteração de nome.",
          "Diferente do divórcio litigioso, não há disputa judicial: as partes apenas formalizam o que já foi combinado.",
        ],
      },
      {
        title: "Divórcio em cartório: quando é possível",
        content: [
          "É possível fazer o divórcio em cartório (extrajudicial) quando o casal não tem filhos menores ou incapazes e há acordo integral sobre a partilha.",
          "Havendo filhos menores, o divórcio deve tramitar em juízo, mesmo que consensual, para que o Ministério Público verifique os interesses da criança.",
        ],
      },
      {
        title: "Documentos necessários",
        content: [
          "Documentos pessoais dos cônjuges, certidão de casamento atualizada, pacto antenupcial (se houver), certidão de nascimento dos filhos e comprovantes dos bens a partilhar.",
          "É indispensável a presença de advogado — comum aos dois cônjuges ou um para cada parte.",
        ],
      },
      {
        title: "Como proteger o patrimônio da família",
        content: [
          "Uma partilha bem planejada evita disputas futuras e reduz impactos tributários. Avalie regime de bens, dívidas comuns, bens no exterior e reservas de meação.",
          "Uma assessoria jurídica especializada pode identificar oportunidades legítimas de blindagem patrimonial e planejamento sucessório dentro do próprio acordo de divórcio.",
        ],
      },
    ],
  ),
  build(
    "2",
    "Inventário extrajudicial: quando é possível e quais documentos você vai precisar",
    "Sucessões",
    "19 de Março de 2026",
    "8 min de leitura",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop",
    "O inventário extrajudicial permite dividir o patrimônio deixado pelo falecido em cartório, de forma mais ágil.",
    [
      "O inventário extrajudicial é a forma mais rápida de partilhar bens após o falecimento, feita diretamente em cartório de notas.",
      "Quando os requisitos legais são atendidos, o processo pode ser concluído em semanas — em vez dos meses ou anos que um inventário judicial exige.",
    ],
    [
      {
        title: "Quando é possível o inventário extrajudicial",
        content: [
          "É cabível quando todos os herdeiros são maiores e capazes, há consenso sobre a partilha e não existe testamento (ou o testamento já foi cumprido judicialmente).",
        ],
      },
      {
        title: "Documentos necessários",
        content: [
          "Certidão de óbito, documentos dos herdeiros, certidões negativas de tributos, escrituras e matrículas dos imóveis, extratos bancários e declaração de ITCMD.",
        ],
      },
      {
        title: "Custos e prazos",
        content: [
          "Além dos honorários advocatícios, incidem taxas de cartório e o ITCMD estadual. Em geral, o inventário extrajudicial se conclui entre 30 e 90 dias.",
        ],
      },
    ],
  ),
  build(
    "3",
    "Guarda compartilhada: direitos, deveres e como o juiz decide o melhor interesse da criança",
    "Família",
    "19 de Março de 2026",
    "10 min de leitura",
    "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1600&h=900&fit=crop",
    "Entenda como funciona a guarda compartilhada, quais são os direitos e deveres de cada genitor e como o juiz decide.",
    [
      "A guarda compartilhada é a regra no ordenamento jurídico brasileiro. Ela pressupõe a corresponsabilidade dos pais na criação, educação e decisões importantes da vida dos filhos.",
    ],
    [
      {
        title: "O que é guarda compartilhada",
        content: [
          "Guarda compartilhada não significa dividir o tempo em partes iguais, e sim compartilhar decisões e responsabilidades sobre a vida da criança.",
        ],
      },
      {
        title: "Como o juiz decide",
        content: [
          "O critério central é o melhor interesse da criança. O juiz avalia rotina, vínculos, condições de moradia e capacidade de diálogo entre os pais.",
        ],
      },
      {
        title: "Direitos e deveres dos pais",
        content: [
          "Ambos participam de decisões sobre escola, saúde e viagens. As despesas são divididas conforme a capacidade financeira de cada um.",
        ],
      },
    ],
  ),
  build(
    "4",
    "Planejamento sucessório: como blindar o patrimônio e evitar conflitos entre herdeiros",
    "Patrimônio",
    "06 de Março de 2026",
    "12 min de leitura",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop",
    "O planejamento sucessório organiza a transmissão de bens em vida, reduzindo custos e conflitos.",
    [
      "Planejar a sucessão é um ato de cuidado com a família. Um bom planejamento reduz a carga tributária, evita disputas entre herdeiros e assegura que a vontade do titular seja respeitada.",
    ],
    [
      {
        title: "Instrumentos disponíveis",
        content: [
          "Doações com reserva de usufruto, holding familiar, testamento, seguros de vida e previdência privada são alguns dos instrumentos combinados em um bom plano.",
        ],
      },
      {
        title: "Vantagens tributárias",
        content: [
          "Um planejamento adequado pode reduzir significativamente a incidência do ITCMD e antecipar decisões que evitariam conflitos e custos processuais.",
        ],
      },
      {
        title: "Quando começar",
        content: [
          "Quanto antes, melhor. Estruturas patrimoniais mais complexas exigem tempo para amadurecer e produzir efeitos plenos.",
        ],
      },
    ],
  ),
  build(
    "5",
    "Casamento no exterior: como reconhecer e registrar sua união no Brasil",
    "Internacional",
    "06 de Março de 2026",
    "7 min de leitura",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop",
    "Casais que se casam fora do país precisam seguir procedimentos específicos para reconhecer a união no Brasil.",
    [
      "Um casamento válido no exterior só produz efeitos plenos no Brasil após o registro no cartório competente.",
    ],
    [
      {
        title: "Documentos exigidos",
        content: [
          "Certidão de casamento estrangeira apostilada, tradução juramentada, documentos pessoais e comprovante de residência.",
        ],
      },
      {
        title: "Onde registrar",
        content: [
          "Se um dos cônjuges reside no Brasil, o registro é feito no 1º Ofício do domicílio. Se residem no exterior, no consulado brasileiro do local.",
        ],
      },
    ],
  ),
  build(
    "6",
    "Herança no exterior: como brasileiros podem receber bens deixados fora do país",
    "Internacional",
    "06 de Março de 2026",
    "9 min de leitura",
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&h=900&fit=crop",
    "Receber uma herança no exterior envolve regras específicas de direito internacional privado.",
    [
      "Herdar bens localizados fora do Brasil exige o cumprimento das regras do país onde os bens estão situados e a correta declaração no Brasil.",
    ],
    [
      {
        title: "Lei aplicável",
        content: [
          "Cada país tem regras próprias sobre sucessão. Em geral, imóveis seguem a lei do local; bens móveis, a lei do domicílio do falecido.",
        ],
      },
      {
        title: "Tributação no Brasil",
        content: [
          "A herança recebida no exterior deve ser declarada à Receita Federal, e pode haver incidência de ITCMD, conforme o estado.",
        ],
      },
    ],
  ),
  build(
    "7",
    "Pensão alimentícia: como funciona o cálculo, revisão e cobrança judicial em 2026",
    "Família",
    "06 de Março de 2026",
    "11 min de leitura",
    "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1600&h=900&fit=crop",
    "Entenda como funciona o cálculo, a revisão e a cobrança judicial da pensão alimentícia em 2026.",
    [
      "A pensão alimentícia é um dos temas que mais geram dúvidas no Direito de Família. Isso acontece porque muitas pessoas ainda acreditam que existe um valor fixo por lei, que o pagamento sempre termina aos 18 anos ou que qualquer atraso pode ser resolvido da mesma forma.",
      "Na prática, cada caso exige análise cuidadosa. O cálculo depende das necessidades de quem recebe e das possibilidades de quem paga, a revisão depende de mudança real na situação financeira ou familiar, e a cobrança judicial segue regras próprias.",
    ],
    [
      {
        title: "O que é pensão alimentícia e quem pode ter direito",
        content: [
          "A pensão alimentícia é o valor pago periodicamente para garantir alimentação, moradia, saúde, educação, vestuário e lazer de quem não pode se sustentar sozinho.",
          "Podem receber pensão filhos menores, filhos maiores em situação específica (como estudantes universitários), ex-cônjuges em determinadas condições e, em casos excepcionais, pais e outros parentes.",
        ],
      },
      {
        title: "Quem pode pedir pensão alimentícia",
        content: [
          "Qualquer pessoa que dependa financeiramente de outra e comprove necessidade pode pleitear pensão. O pedido é feito por meio de ação judicial, com apoio de advogado.",
        ],
      },
      {
        title: "Existe valor fixo para pensão alimentícia?",
        content: [
          "Não. A lei brasileira não fixa um valor único: a pensão é definida caso a caso, aplicando o binômio necessidade x possibilidade.",
        ],
      },
      {
        title: "Como funciona o cálculo da pensão alimentícia",
        content: [
          "O juiz analisa as necessidades reais do alimentando e a capacidade financeira do alimentante. Considera-se renda formal, informal, patrimônio e responsabilidades do pagador.",
        ],
      },
      {
        title: "Pensão fixada em percentual da renda",
        content: [
          "É comum a fixação em percentual do salário líquido do alimentante (frequentemente entre 20% e 30%), ajustado automaticamente conforme a variação da renda.",
        ],
      },
      {
        title: "Pensão fixada em valor determinado",
        content: [
          "Quando o alimentante é autônomo ou tem renda variável, o juiz pode fixar valor determinado, corrigido periodicamente por índice oficial.",
        ],
      },
      {
        title: "Revisão e cobrança judicial",
        content: [
          "A pensão pode ser revista se houver mudança relevante na situação de qualquer das partes. O atraso permite cobrança judicial, penhora e até prisão civil do devedor.",
        ],
      },
    ],
  ),
  build(
    "8",
    "Holding familiar: vale a pena para proteger o patrimônio e reduzir tributos?",
    "Empresarial",
    "06 de Março de 2026",
    "10 min de leitura",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&h=900&fit=crop",
    "A holding familiar organiza bens, reduz carga tributária e facilita a sucessão.",
    [
      "A holding familiar é uma sociedade constituída para concentrar o patrimônio da família, facilitando gestão, planejamento tributário e sucessão.",
    ],
    [
      {
        title: "Como funciona",
        content: [
          "Os bens são integralizados ao capital social da holding, e os herdeiros recebem quotas — que podem ser doadas com reserva de usufruto.",
        ],
      },
      {
        title: "Vantagens",
        content: [
          "Redução de custos sucessórios, proteção patrimonial, governança familiar e organização tributária.",
        ],
      },
      {
        title: "Cuidados",
        content: [
          "A holding precisa ter propósito real e substância. Estruturas artificiais podem ser desconsideradas pela Receita.",
        ],
      },
    ],
  ),
  build(
    "9",
    "União estável: como comprovar, registrar e converter em casamento com segurança jurídica",
    "Família",
    "06 de Março de 2026",
    "8 min de leitura",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop",
    "A união estável é reconhecida pela lei brasileira e gera direitos e deveres semelhantes ao casamento.",
    [
      "Formalizar a união estável dá segurança jurídica ao casal e evita disputas futuras sobre patrimônio, previdência e sucessão.",
    ],
    [
      {
        title: "Como comprovar",
        content: [
          "Convivência pública, contínua e duradoura, com objetivo de constituir família. Pode ser demonstrada por documentos, testemunhas e provas materiais.",
        ],
      },
      {
        title: "Escritura pública",
        content: [
          "A forma mais segura é a escritura declaratória em cartório, que pode definir o regime de bens aplicável.",
        ],
      },
      {
        title: "Conversão em casamento",
        content: [
          "A conversão é simples e pode ser feita em cartório, preservando a data original de início da convivência para fins de meação e sucessão.",
        ],
      },
    ],
  ),
];

export const getArticleById = (id: string) => ARTICLES.find((a) => a.id === id);
