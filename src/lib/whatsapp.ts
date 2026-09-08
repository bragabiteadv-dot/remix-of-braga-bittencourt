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
  "/advogado-fixacao-pensao-betim": "ADVOGADO DE FIXAÇÃO DE PENSÃO EM BETIM",
  "/advogado-exoneracao-pensao-betim": "ADVOGADO DE EXONERAÇÃO DE PENSÃO EM BETIM",
  "/advogado-revisao-pensao-betim": "ADVOGADO DE REVISÃO DE PENSÃO EM BETIM",
  "/advogado-execucao-pensao-betim": "ADVOGADO DE EXECUÇÃO DE PENSÃO EM BETIM",
  "/advogado-fixacao-pensao-bh": "ADVOGADO DE FIXAÇÃO DE PENSÃO EM BELO HORIZONTE",
  "/advogado-exoneracao-pensao-bh": "ADVOGADO DE EXONERAÇÃO DE PENSÃO EM BELO HORIZONTE",
  "/advogado-revisao-pensao-bh": "ADVOGADO DE REVISÃO DE PENSÃO EM BELO HORIZONTE",
  "/advogado-execucao-pensao-bh": "ADVOGADO DE EXECUÇÃO DE PENSÃO EM BELO HORIZONTE",
  "/advogado-fixacao-pensao-contagem": "ADVOGADO DE FIXAÇÃO DE PENSÃO EM CONTAGEM",
  "/advogado-exoneracao-pensao-contagem": "ADVOGADO DE EXONERAÇÃO DE PENSÃO EM CONTAGEM",
  "/advogado-revisao-pensao-contagem": "ADVOGADO DE REVISÃO DE PENSÃO EM CONTAGEM",
  "/advogado-execucao-pensao-contagem": "ADVOGADO DE EXECUÇÃO DE PENSÃO EM CONTAGEM",
  "/advogado-fixacao-pensao-nova-lima": "ADVOGADO DE FIXAÇÃO DE PENSÃO EM NOVA LIMA",
  "/advogado-exoneracao-pensao-nova-lima": "ADVOGADO DE EXONERAÇÃO DE PENSÃO EM NOVA LIMA",
  "/advogado-revisao-pensao-nova-lima": "ADVOGADO DE REVISÃO DE PENSÃO EM NOVA LIMA",
  "/advogado-execucao-pensao-nova-lima": "ADVOGADO DE EXECUÇÃO DE PENSÃO EM NOVA LIMA",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-nova-lima": "ADVOGADO DE RECONHECIMENTO E DISSOLUÇÃO DE UNIÃO ESTÁVEL EM NOVA LIMA",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-bh": "ADVOGADO DE RECONHECIMENTO E DISSOLUÇÃO DE UNIÃO ESTÁVEL EM BELO HORIZONTE",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-betim": "ADVOGADO DE RECONHECIMENTO E DISSOLUÇÃO DE UNIÃO ESTÁVEL EM BETIM",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-contagem": "ADVOGADO DE RECONHECIMENTO E DISSOLUÇÃO DE UNIÃO ESTÁVEL EM CONTAGEM",
  "/advogado-reconhecimento-dissolucao-uniao-estavel-igarape": "ADVOGADO DE RECONHECIMENTO E DISSOLUÇÃO DE UNIÃO ESTÁVEL EM IGARAPÉ",
  "/advogado-fixacao-pensao-igarape": "ADVOGADO DE FIXAÇÃO DE PENSÃO EM IGARAPÉ",
  "/advogado-exoneracao-pensao-igarape": "ADVOGADO DE EXONERAÇÃO DE PENSÃO EM IGARAPÉ",
  "/advogado-revisao-pensao-igarape": "ADVOGADO DE REVISÃO DE PENSÃO EM IGARAPÉ",
  "/advogado-execucao-pensao-igarape": "ADVOGADO DE EXECUÇÃO DE PENSÃO EM IGARAPÉ",
  "/advogado-contrato-namoro-betim": "ADVOGADO DE CONTRATO DE NAMORO EM BETIM",
  "/advogado-contrato-namoro-bh": "ADVOGADO DE CONTRATO DE NAMORO EM BELO HORIZONTE",
  "/advogado-contrato-namoro-contagem": "ADVOGADO DE CONTRATO DE NAMORO EM CONTAGEM",
  "/advogado-contrato-namoro-igarape": "ADVOGADO DE CONTRATO DE NAMORO EM IGARAPÉ",
  "/advogado-contrato-namoro-nova-lima": "ADVOGADO DE CONTRATO DE NAMORO EM NOVA LIMA",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-betim": "ADVOGADO DE RECONHECIMENTO, INVESTIGAÇÃO E NEGATÓRIA DE PATERNIDADE EM BETIM",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-bh": "ADVOGADO DE RECONHECIMENTO, INVESTIGAÇÃO E NEGATÓRIA DE PATERNIDADE EM BELO HORIZONTE",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-contagem": "ADVOGADO DE RECONHECIMENTO, INVESTIGAÇÃO E NEGATÓRIA DE PATERNIDADE EM CONTAGEM",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-igarape": "ADVOGADO DE RECONHECIMENTO, INVESTIGAÇÃO E NEGATÓRIA DE PATERNIDADE EM IGARAPÉ",
  "/advogado-reconhecimento-investigacao-negatoria-paternidade-nova-lima": "ADVOGADO DE RECONHECIMENTO, INVESTIGAÇÃO E NEGATÓRIA DE PATERNIDADE EM NOVA LIMA",
  "/advogado-guarda-compartilhada-betim": "ADVOGADO DE GUARDA COMPARTILHADA EM BETIM",
  "/advogado-guarda-compartilhada-bh": "ADVOGADO DE GUARDA COMPARTILHADA EM BELO HORIZONTE",
  "/advogado-guarda-compartilhada-contagem": "ADVOGADO DE GUARDA COMPARTILHADA EM CONTAGEM",
  "/advogado-guarda-compartilhada-igarape": "ADVOGADO DE GUARDA COMPARTILHADA EM IGARAPÉ",
  "/advogado-guarda-compartilhada-nova-lima": "ADVOGADO DE GUARDA COMPARTILHADA EM NOVA LIMA",
  "/advogado-mudanca-regime-bens-casamento-betim": "ADVOGADO DE MUDANÇA DE REGIME DE BENS DE CASAMENTO EM BETIM",
  "/advogado-mudanca-regime-bens-casamento-bh": "ADVOGADO DE MUDANÇA DE REGIME DE BENS DE CASAMENTO EM BELO HORIZONTE",
  "/advogado-mudanca-regime-bens-casamento-contagem": "ADVOGADO DE MUDANÇA DE REGIME DE BENS DE CASAMENTO EM CONTAGEM",
  "/advogado-mudanca-regime-bens-casamento-igarape": "ADVOGADO DE MUDANÇA DE REGIME DE BENS DE CASAMENTO EM IGARAPÉ",
  "/advogado-mudanca-regime-bens-casamento-nova-lima": "ADVOGADO DE MUDANÇA DE REGIME DE BENS DE CASAMENTO EM NOVA LIMA",
  "/advogado-validacao-homologacao-sentenca-estrangeira": "ADVOGADO DE VALIDAÇÃO E HOMOLOGAÇÃO DE SENTENÇA ESTRANGEIRA NO BRASIL",
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
