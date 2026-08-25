import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, MessageSquare, Facebook, Instagram, Mail, Menu, X } from "lucide-react";
import { WhatsAppCta, useWhatsAppLink, GOOGLE_URL, GoogleIcon } from "@/components/ui/whatsapp-cta";
import headerLogo from "@/assets/header-logo.png";


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
  const waLink = useWhatsAppLink();

  return (
    <header className="w-full flex flex-col">
      {/* Top Bar */}
      <div className="bg-navy text-white/80 py-2 border-b border-white/10 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <a href="https://maps.google.com/?q=place_id:ChIJN6Hrhwq-pgARC_1Evk1cels" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <MapPin size={14} className="text-gold-light" />
              <span>Av. Raja Gabáglia, 2000 - BH</span>
            </a>
            <a href="https://maps.google.com/?q=place_id:ChIJGXt5913DpgARaifpf_awe_c" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <MapPin size={14} className="text-gold-light" />
              <span>Av. Amazonas, 1446 - Betim</span>
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Phone size={14} className="text-gold-light" />
              <span>(31) 98026-0880</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold-light transition-colors">
              <MessageSquare size={14} /> WhatsApp
            </a>
            <a href="mailto:bragabitencourtadv@gmail.com" className="flex items-center gap-1 hover:text-gold-light transition-colors">
              <Mail size={14} /> Email
            </a>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/20">
              <a href="https://www.facebook.com/bragabitencourtadv/" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-gold-light transition-colors"><Facebook size={14} /></a>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" title="Google" className="hover:text-gold-light transition-colors"><GoogleIcon /></a>
              <a href="https://www.instagram.com/bragabitencourtadv/" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-gold-light transition-colors"><Instagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-navy sticky top-0 z-50 py-4 border-b border-white/5 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={headerLogo} 
              alt="Braga Bitencourt Logo" 
              className="h-10 md:h-12 w-auto object-contain"
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

