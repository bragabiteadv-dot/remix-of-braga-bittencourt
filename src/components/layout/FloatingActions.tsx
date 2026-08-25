import { ArrowUp } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import { whatsappPageLink } from "@/lib/whatsapp";

export function FloatingActions() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const href = whatsappPageLink(pathname);

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
