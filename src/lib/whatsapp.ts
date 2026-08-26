import { getArticleBySlug } from "@/lib/articles";

export const WHATSAPP_PHONE = "5531980260880";

export const PAGE_LABELS: Record<string, string> = {
  "/": "HOME",
  "/perfil": "PERFIL",
  "/areas-de-atuacao": "ÁREAS DE ATUAÇÃO",
  "/duvidas": "DÚVIDAS",
  "/fale-conosco": "FALE CONOSCO",
  "/artigos": "ARTIGOS",
  "/advogado-divorcio-betim": "ADVOGADO DE DIVÓRCIO EM BETIM",
  "/advogado-familia-betim": "ADVOGADO DE FAMÍLIA EM BETIM",
  "/advogado-guarda-betim": "ADVOGADO DE GUARDA EM BETIM",
  "/advogado-pensao-alimenticia-betim": "ADVOGADO DE PENSÃO ALIMENTÍCIA EM BETIM",
  "/advogado-inventario-betim": "ADVOGADO DE INVENTÁRIO EM BETIM",
  "/advogado-curatela-betim": "ADVOGADO DE CURATELA EM BETIM",
  "/advogado-divorcio-extrajudicial-betim": "ADVOGADO DE DIVÓRCIO EXTRAJUDICIAL EM BETIM",
  "/advogado-divorcio-nova-lima": "ADVOGADO DE DIVÓRCIO EM NOVA LIMA",
  "/advogado-familia-nova-lima": "ADVOGADO DE FAMÍLIA EM NOVA LIMA",
  "/advogado-guarda-nova-lima": "ADVOGADO DE GUARDA EM NOVA LIMA",
  "/advogado-pensao-alimenticia-nova-lima": "ADVOGADO DE PENSÃO ALIMENTÍCIA EM NOVA LIMA",
  "/advogado-inventario-nova-lima": "ADVOGADO DE INVENTÁRIO EM NOVA LIMA",
  "/advogado-curatela-nova-lima": "ADVOGADO DE CURATELA EM NOVA LIMA",
  "/advogado-divorcio-extrajudicial-nova-lima": "ADVOGADO DE DIVÓRCIO EXTRAJUDICIAL EM NOVA LIMA",
  "/advogado-divorcio-bh": "ADVOGADO DE DIVÓRCIO EM BELO HORIZONTE",
  "/advogado-familia-bh": "ADVOGADO DE FAMÍLIA EM BELO HORIZONTE",
  "/advogado-guarda-bh": "ADVOGADO DE GUARDA EM BELO HORIZONTE",
  "/advogado-pensao-alimenticia-bh": "ADVOGADO DE PENSÃO ALIMENTÍCIA EM BELO HORIZONTE",
  "/advogado-inventario-bh": "ADVOGADO DE INVENTÁRIO EM BELO HORIZONTE",
  "/advogado-curatela-bh": "ADVOGADO DE CURATELA EM BELO HORIZONTE",
  "/advogado-divorcio-extrajudicial-bh": "ADVOGADO DE DIVÓRCIO EXTRAJUDICIAL EM BELO HORIZONTE",
  "/advogado-divorcio-contagem": "ADVOGADO DE DIVÓRCIO EM CONTAGEM",
  "/advogado-familia-contagem": "ADVOGADO DE FAMÍLIA EM CONTAGEM",
  "/advogado-guarda-contagem": "ADVOGADO DE GUARDA EM CONTAGEM",
  "/advogado-pensao-alimenticia-contagem": "ADVOGADO DE PENSÃO ALIMENTÍCIA EM CONTAGEM",
  "/advogado-inventario-contagem": "ADVOGADO DE INVENTÁRIO EM CONTAGEM",
  "/advogado-curatela-contagem": "ADVOGADO DE CURATELA EM CONTAGEM",
  "/advogado-divorcio-extrajudicial-contagem": "ADVOGADO DE DIVÓRCIO EXTRAJUDICIAL EM CONTAGEM",
  "/advogado-divorcio-igarape": "ADVOGADO DE DIVÓRCIO EM IGARAPÉ",
  "/advogado-familia-igarape": "ADVOGADO DE FAMÍLIA EM IGARAPÉ",
  "/advogado-guarda-igarape": "ADVOGADO DE GUARDA EM IGARAPÉ",
  "/advogado-pensao-alimenticia-igarape": "ADVOGADO DE PENSÃO ALIMENTÍCIA EM IGARAPÉ",
  "/advogado-inventario-igarape": "ADVOGADO DE INVENTÁRIO EM IGARAPÉ",
  "/advogado-curatela-igarape": "ADVOGADO DE CURATELA EM IGARAPÉ",
  "/advogado-divorcio-extrajudicial-igarape": "ADVOGADO DE DIVÓRCIO EXTRAJUDICIAL EM IGARAPÉ",
};

export function normalizePath(pathname: string) {
  return pathname !== "/" ? pathname.replace(/\/+$/, "") || "/" : "/";
}

export function whatsappMessage(pathname: string) {
  const clean = normalizePath(pathname);

  const articleMatch = clean.match(/^\/artigos\/(.+)$/);
  if (articleMatch) {
    const article = getArticleBySlug(articleMatch[1]);
    if (article) {
      return `Olá! Acessei seu artigo de ${article.title} e gostaria de falar com um especialista!`;
    }
  }

  const label = PAGE_LABELS[clean];
  if (label) {
    return `Olá! Acessei sua página ${label} e gostaria de falar com um especialista!`;
  }
  return "Olá! Acessei seu site e gostaria de falar com um especialista!";
}

export function whatsappLinkFromText(text: string) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function whatsappPageLink(pathname: string) {
  return whatsappLinkFromText(whatsappMessage(pathname));
}
