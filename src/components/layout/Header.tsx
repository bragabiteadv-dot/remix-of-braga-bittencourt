import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";
import headerLogo from "@/assets/header-logo.png";
import { cn } from "@/lib/utils";


const navLinks = [
  { to: "/", label: "Home" },
  { to: "/perfil", label: "Perfil" },
  { to: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { to: "/duvidas", label: "Dúvidas" },
  { to: "/fale-conosco", label: "Fale Conosco" },
  { to: "/artigos", label: "Artigos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full flex flex-col">


      {/* Placeholder keeps layout stable when nav is fixed */}
      {scrolled && <div className="h-[72px]" aria-hidden="true" />}

      {/* Main Nav */}
      <nav
        className={cn(
          "bg-navy z-50 py-4 border-b border-white/5 shadow-xl transition-all duration-300",
          scrolled ? "fixed top-0 left-0 right-0" : "sticky top-0"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={headerLogo} 
              alt="Braga Bitencourt Advogados especializados em Direito de Família, Sucessões e Internacional Privado." 
              className="h-10 md:h-12 w-auto object-contain"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase">Home</Link>
            <Link to="/perfil" className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase">Perfil</Link>
            <Link to="/areas-de-atuacao" className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase">Áreas de Atuação</Link>
            <Link to="/duvidas" className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase">Dúvidas</Link>
            <Link to="/fale-conosco" className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase">Fale Conosco</Link>
            <Link to="/artigos" className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase">Artigos</Link>
          </div>

          <div className="flex items-center gap-3">
            <WhatsAppCta className="hidden sm:inline-flex shrink-0 !whitespace-nowrap !px-5 !py-3 !text-[11px] !gap-2" />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="lg:hidden shrink-0 text-white p-2 -mr-2 hover:text-gold-light transition-colors"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden border-t border-white/10 mt-4">
            <div className="container mx-auto flex flex-col py-4">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-white text-sm font-semibold tracking-wider hover:text-gold-light transition-colors uppercase py-3 border-b border-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <WhatsAppCta className="mt-5 w-full" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

