import { Facebook, Instagram, Mail, ArrowUp } from "lucide-react";
import { GOOGLE_URL, GoogleIcon, WHATSAPP_LINK, WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import { Link } from "@tanstack/react-router";

const GOOGLE_SEARCH_URL = "https://www.google.com/search?q=braga+bittencourt+adovagos&rlz=1C1GCEA_enBR1196BR1197&oq=braga+bittencourt+adovagos&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQg1MDc2ajBqOagCBrACAfEFWe6JCqrJDgQ&sourceid=chrome&source=chrome.ob&ie=UTF-8";


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <Link to="/">
            <img 
              src="https://bragabitencourt.com/wp-content/uploads/2026/06/LOGO-2-1.png" 
              alt="Braga Bitencourt Logo" 
              className="h-20 w-auto mb-8"
            />
          </Link>
          <div className="flex gap-4 mb-8">
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-light hover:text-navy transition-all"><Facebook size={18} /></a>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-light hover:text-navy transition-all"><GoogleIcon size={18} /></a>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-light hover:text-navy transition-all"><Instagram size={18} /></a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-light hover:text-navy transition-all"><WhatsAppIcon className="w-[18px] h-[18px]" /></a>

            <a href="mailto:bragabitencourtadv@gmail.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold-light hover:text-navy transition-all"><Mail size={18} /></a>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16">
          <a 
            href={GOOGLE_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 p-8 rounded-lg border border-white/10 block hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center text-navy">
                <MapPinIcon />
              </div>
              <h3 className="text-xl font-cinzel">Onde estamos:</h3>
            </div>
            <div className="space-y-4 text-sm text-white/70">
              <p>
                <strong className="text-white block mb-1">-Escritório 1:</strong>
                Av. Raja Gabaglia, 2000 – sala 614 – Alpes, BH -MG.
              </p>
              <p>
                <strong className="text-white block mb-1">-Escritório 2:</strong>
                Av. Amazonas, 1446- sala 706/707-Brasiléia, Betim – MG
              </p>
            </div>
          </a>


          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 p-8 rounded-lg border border-white/10 block hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center text-navy">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-cinzel">Whatsapp</h3>
            </div>
            <div className="text-2xl font-bold text-gold-light">
              (31) 98026-0880
            </div>
          </a>


          <div className="bg-white/5 p-8 rounded-lg border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center text-navy">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-cinzel">Email</h3>
            </div>
            <div className="text-sm text-white/70 break-all">
              bragabitencourtadv@gmail.com
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-[10px] uppercase tracking-widest opacity-30">
          All rights reserved © {new Date().getFullYear()} Braga Bitencourt Advogados
        </div>
      </div>
    </footer>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
