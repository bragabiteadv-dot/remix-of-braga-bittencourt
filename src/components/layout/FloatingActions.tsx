import { ArrowUp } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { WHATSAPP_PHONE, WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import { getArticleBySlug } from "@/lib/articles";

const PAGE_LABELS: Record<string, string> = {
  "/": "HOME",
  "/perfil": "PERFIL",
  "/areas-de-atuacao": "ÁREAS DE ATUAÇÃO",
  "/duvidas": "DÚVIDAS",
  "/fale-conosco": "FALE CONOSCO",
  "/artigos": "ARTIGOS",
  "/advogado-divorcio-betim": "ADVOGADO DE DIVÓRCIO EM BETIM",
  "/advogado-familia-betim": "ADVOGADO DE FAMÍLIA EM BETIM",
};

function buildMessage(pathname: string) {
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";

  const articleMatch = clean.match(/^\/artigos\/(.+)$/);
  if (articleMatch) {
    const article = getArticleBySlug(articleMatch[1]);
    if (article) {
      return `Olá! Acessei seu artigo de (${article.title}) e gostaria de falar com um especialista!`;
    }
  }

  const label = PAGE_LABELS[clean];
  if (label) {
    return `Olá! Acessei sua página (${label}) e gostaria de falar com um especialista!`;
  }
  return "Olá! Acessei seu site e gostaria de falar com um especialista!";
}

export function FloatingActions() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(buildMessage(pathname))}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-center gap-3 md:flex-row">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className="w-14 h-14 rounded-full bg-[#F5D3A3] text-navy shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
