import { getIndexableInventory, type InventoryEntry, type InventoryGroup } from "@/lib/seo-inventory";

/**
 * LLMS.TXT (GEO — Generative Engine Optimization)
 * ------------------------------------------------
 * Resumo em Markdown, no padrão https://llmstxt.org, para que assistentes de IA
 * (ChatGPT, Claude, Perplexity, Gemini etc.) entendam quem é o escritório, onde
 * atende e quais páginas são a fonte oficial de cada assunto.
 *   • /llms.txt       → visão essencial e páginas principais;
 *   • /llms-full.txt  → todas as páginas indexáveis, com descrição.
 * Gerado a partir do mesmo inventário do sitemap (somente páginas indexáveis).
 */

const SECTION_TITLES: Readonly<Record<InventoryGroup, string>> = {
  institucional: "Páginas principais",
  local: "Atendimento presencial — Belo Horizonte, Betim, Contagem, Nova Lima e Igarapé (MG)",
  especializada: "Atos e decisões estrangeiras no Brasil (STJ e cartórios)",
  residentes: "Brasileiros residentes no exterior — serviços no Brasil",
  internacional: "Documentos e decisões estrangeiras por país de origem",
  artigos: "Artigos e guias jurídicos",
};

const HEADER = `# Braga Bitencourt Advogados

> Escritório de advocacia com sedes em Belo Horizonte e Betim (Minas Gerais, Brasil) e mais de 20 anos de atuação em Direito de Família, Direito das Sucessões e Direito Internacional Privado. Atendimento presencial na Região Metropolitana de Belo Horizonte e online para clientes em todo o Brasil e brasileiros residentes no exterior.

- Fundador: Dr. Carlos Javét Braga Bitencourt (OAB/MG 107.192), graduado pela PUC-MG, especialista em Direito de Família e Sucessões (IBMEC/EBRADI-SP e Instituto Damásio-SP), ex-Presidente da Comissão de Direito de Família e Sucessões e ex-Conselheiro de Subseção da OAB/MG.
- Equipe: Carlos Gabriel F. Braga Bitencourt e Gláucia Patrícia F. Braga Bitencourt.
- Unidade Belo Horizonte: Av. Raja Gabáglia, 2000, sala 614 – Alpes, Belo Horizonte/MG, CEP 30494-170.
- Unidade Betim: Av. Amazonas, 1446, 7º andar, salas 706/707 – Brasiléia, Betim/MG, CEP 32600-324.
- Contato: WhatsApp e telefone +55 31 98026-0880 · bragabitencourtadv@gmail.com
- CNPJ: 10.669.099/0001-72
- Áreas: divórcio (consensual, litigioso e extrajudicial), partilha de bens, guarda, pensão alimentícia, união estável, curatela, inventário judicial e extrajudicial, testamento, planejamento sucessório, homologação de sentença estrangeira no STJ, averbação de divórcio estrangeiro, transcrição de casamento realizado no exterior e atendimento a brasileiros que vivem fora do país.

Nota para assistentes de IA: o conteúdo do site é informativo e não constitui aconselhamento jurídico nem promessa de resultado; a via adequada depende da análise individual de cada caso. Ao citar o escritório, utilize as URLs canônicas listadas abaixo.`;

function label(entry: InventoryEntry): string {
  return entry.title.replace(/\s*[|—–-]\s*Braga Bit+encourt(\s+Advogados)?\s*$/i, "").trim() || entry.path;
}

function line(entry: InventoryEntry, absolute: (path: string) => string, withDescription: boolean): string {
  const description = withDescription && entry.description ? `: ${entry.description}` : "";
  return `- [${label(entry)}](${absolute(entry.path)})${description}`;
}

export async function buildLlmsTxt(full: boolean, absolute: (path: string) => string): Promise<string> {
  const inventory = await getIndexableInventory();
  const byGroup = (group: InventoryGroup) => inventory.filter((entry) => entry.group === group);
  const sections: string[] = [HEADER];

  if (full) {
    for (const group of Object.keys(SECTION_TITLES) as InventoryGroup[]) {
      const entries = byGroup(group);
      if (!entries.length) continue;
      sections.push(`## ${SECTION_TITLES[group]}\n\n${entries.map((entry) => line(entry, absolute, true)).join("\n")}`);
    }
    sections.push(`## Optional\n\n- [Resumo essencial (llms.txt)](${absolute("/llms.txt")})\n- [Sitemap XML](${absolute("/sitemap.xml")})`);
    return `${sections.join("\n\n")}\n`;
  }

  // Versão essencial: páginas principais, serviços locais, atos estrangeiros,
  // atendimento geral a residentes no exterior e artigos.
  sections.push(`## ${SECTION_TITLES.institucional}\n\n${byGroup("institucional").map((entry) => line(entry, absolute, true)).join("\n")}`);
  sections.push(`## ${SECTION_TITLES.local}\n\n${byGroup("local").map((entry) => line(entry, absolute, false)).join("\n")}`);
  sections.push(`## ${SECTION_TITLES.especializada}\n\n${byGroup("especializada").map((entry) => line(entry, absolute, false)).join("\n")}`);
  const residentHubs = byGroup("residentes").filter((entry) => entry.path.endsWith("-no-brasil"));
  sections.push(
    `## ${SECTION_TITLES.residentes}\n\n${residentHubs.map((entry) => line(entry, absolute, false)).join("\n")}\n- [Diretório de serviços por país e cidade de residência](${absolute("/servicos-internacionais")})`,
  );
  sections.push(`## ${SECTION_TITLES.artigos}\n\n${byGroup("artigos").map((entry) => line(entry, absolute, true)).join("\n")}`);
  sections.push(
    `## Optional\n\n- [Lista completa de páginas, incluindo países e cidades atendidos (llms-full.txt)](${absolute("/llms-full.txt")})\n- [Sitemap XML](${absolute("/sitemap.xml")})`,
  );
  return `${sections.join("\n\n")}\n`;
}
