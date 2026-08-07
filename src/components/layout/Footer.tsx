import { Facebook, Instagram, Mail, ArrowUp, Phone, MapPin, Home } from "lucide-react";
import { GOOGLE_URL, GoogleIcon, WHATSAPP_LINK, WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import { Link } from "@tanstack/react-router";
import logoTreeAsset from "@/assets/logo-tree-new.png.asset.json";

const GOOGLE_SEARCH_URL = "https://www.google.com/search?q=braga+bittencourt+adovagos&rlz=1C1GCEA_enBR1196BR1197&oq=braga+bittencourt+adovagos&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQg1MDc2ajBqOagCBrACAfEFWe6JCqrJDgQ&sourceid=chrome&source=chrome.ob&ie=UTF-8";
const BETIM_MAP_URL = "https://share.google/tKyzJIwu9jMGT0P7n";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIconClass =
    "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-light hover:text-navy hover:border-gold-light transition-all duration-300";

  return (
    <footer className="bg-navy text-white relative">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left pills */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={BETIM_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <MapPin size={16} className="text-gold-light shrink-0" />
                <span>Av. Amazonas 1446, sala 706/707, Brasiléia - Betim</span>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <Phone size={16} className="text-gold-light shrink-0" />
                <span>(31) 98026-0880</span>
              </a>
            </div>

            {/* Right buttons */}
            <div className="flex items-center gap-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:bragabitencourtadv@gmail.com"
                className={socialIconClass}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <Link
                to="/"
                className={socialIconClass}
                aria-label="Home"
              >
                <Home size={18} />
              </Link>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Google"
              >
                <GoogleIcon size={18} />
              </a>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="shrink-0">
            <img
              src={logoTreeAsset.url}
              alt="Braga Bitencourt Logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-white/90 font-medium">
              Braga Bitencourt Advogados - CNPJ: 10.669.099/0001-72
            </p>
            <p className="text-xs text-white/50">
              Todos os direitos reservados. Design focado em privacidade, acolhimento e alta conversão.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gold-gradient text-navy shadow-lg shadow-gold/20 flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </footer>
  );
}
