import { siteUrl } from "@/lib/site";

/**
 * FAQPage (JSON-LD) a partir das perguntas JÁ exibidas na página.
 * Não acrescenta texto visível: apenas descreve, para Google e assistentes
 * de IA, as perguntas e respostas que o visitante já vê.
 */
export function faqPageSchema(items: readonly { question: string; answer: string }[], path: string): Record<string, unknown> {
  const url = siteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    inLanguage: "pt-BR",
    isPartOf: { "@id": url },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
