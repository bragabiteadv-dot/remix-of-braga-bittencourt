import { Facebook, Instagram, Mail, Home, Phone } from "lucide-react";
import { GOOGLE_URL, GoogleIcon, WHATSAPP_LINK, WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import { Link } from "@tanstack/react-router";
import logoTree from "@/assets/logo-tree-new.png";

const BETIM_MAP_URL = "https://share.google/tKyzJIwu9jMGT0P7n";
const BETIM_ADDRESS = "Av. Amazonas 1446, sala 706/707, Brasiléia - Betim";

export function Footer() {
  const socialIconClass =
    "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-light hover:text-navy hover:border-gold-light transition-all duration-300 shrink-0";

  return (
    <footer className="bg-navy text-white relative">
      <div className="container mx-auto py-8 md:py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
          <a
            href={BETIM_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:text-gold-light hover:border-gold-light/30 transition-colors"
          >
            <span className="text-gold-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="text-center">{BETIM_ADDRESS}</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:text-gold-light hover:border-gold-light/30 transition-colors"
          >
            <Phone size={16} className="text-gold-light" />
            <span>(31) 98026-0880</span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={socialIconClass}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
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

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-white/10">
          <Link to="/" className="inline-block">
            <img
              src={logoTree}
              alt="Braga Bitencourt Advogados"
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          <p className="w-full md:w-auto text-xs md:text-sm text-white/50 leading-relaxed max-w-2xl text-right">
            Braga Bitencourt Advogados - CNPJ: 10.669.099/0001-72 | Todos os direitos reservados. Design focado em privacidade, acolhimento e alta conversão.
          </p>
        </div>
      </div>
    </footer>
  );
}
