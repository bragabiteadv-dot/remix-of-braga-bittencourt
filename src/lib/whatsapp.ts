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
