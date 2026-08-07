import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, MapPin, MessageSquare, Facebook, Instagram, Mail, Menu, X } from "lucide-react";
import { WhatsAppCta, WHATSAPP_LINK } from "@/components/ui/whatsapp-cta";

const GOOGLE_URL =
  "https://www.google.com/search?q=Braga+Bitencourt+Advogados.&rlz=1C1GCEA_enBR1196BR1197&oq=Braga+Bitencourt+Advogados.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIHCAQQABjvBTIHCAUQABjvBTIHCAYQABjvBTIKCAcQABiiBBiJBdIBBzE3MGowajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8";

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
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Phone size={14} className="text-gold-light" />
              <span>(31) 98026-0880</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gold-light transition-colors">
              <MessageSquare size={14} /> WhatsApp
            </a>
            <a href="mailto:bragabitencourtadv@gmail.com" className="flex items-center gap-1 hover:text-gold-light transition-colors">
              <Mail size={14} /> Email
            </a>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/20">
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-gold-light transition-colors"><Facebook size={14} /></a>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" title="Google" className="hover:text-gold-light transition-colors"><GoogleIcon /></a>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-gold-light transition-colors"><Instagram size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-navy sticky top-0 z-50 py-4 border-b border-white/5 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://bragabitencourt.com/wp-content/uploads/2026/06/Camada-2-1024x300.png" 
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
            <WhatsAppCta className="hidden sm:inline-flex !px-6 !py-3 !text-xs" />

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

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 01-2.4 3.64v3.02h3.86c2.26-2.09 3.56-5.17 3.56-8.9z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.02c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.13A11.99 11.99 0 0012 24z" />
      <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 010-4.54V6.6H1.29a11.99 11.99 0 000 10.8l3.98-3.13z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.69 1.29 6.6l3.98 3.13C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}
