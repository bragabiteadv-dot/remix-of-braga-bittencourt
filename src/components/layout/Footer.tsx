import { Facebook, Instagram, Mail, MapPin, ArrowUp } from "lucide-react";
import { GOOGLE_URL, GoogleIcon, useWhatsAppLink, WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import { Link } from "@tanstack/react-router";
import logoTree from "@/assets/logo-tree-new.png";

const GOOGLE_SEARCH_URL = "https://www.google.com/search?q=braga+bitencourt+advogados&sca_esv=2a198a1a37cb003b&sxsrf=APpeQnsR8Tt6QgTAPka-SZLMKbxa20PWYA%3A1787660257813&source=hp&ei=4YeNaon_Luyg5OUP1IfQkQs&iflsig=ABILxe8AAAAAao2V8RXPNXu1Cvrn8IWs6s_aPzPos1iM&oq=braga&gs_lp=Egdnd3Mtd2l6IgVicmFnYSoCCAAyBBAjGCcyBBAjGCcyBBAjGCcyEBAAGIAEGIoFGEMYsQMYgwEyCBAuGLEDGIAEMgoQABiABBiKBRhDMg4QABiABBiKBRixAxiDATINEC4YFBiHAhixAxiABDIKEC4YgAQYigUYQzINEC4YgAQYFBiHAhixA0jDD1AAWI8GcAB4AJABAJgBiQKgAfMIqgEFMC4xLjS4AQHIAQD4AQGYAgWgAqAJwgIIEC4YgAQYsQPCAgsQLhiDARixAxiABMICCxAuGIAEGLEDGIMBwgIKEC4YQxiABBiKBcICBRAAGIAEwgIIEAAYgAQYsQOYAwCSBwUwLjEuNKAHs0-yBwUwLjEuNLgHoAnCBwUyLTQuMcgHIIAIAQ&sclient=gws-wiz";
const BH_MAP_URL = "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.954955,-43.9595168,1022m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6be0a87eba137:0x5b7a5c4dbe44fd0b!8m2!3d-19.954955!4d-43.9595168!16s%2Fg%2F1x6q2_2p?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D";
const BETIM_MAP_URL = "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.9699976,-44.2045052,1021m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6c35df7797b19:0xf77bb0f67fe9276a!8m2!3d-19.9699976!4d-44.2045052!16s%2Fg%2F11n0pqcqww?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D";
const GOOGLE_SEARCH_URL_BH = "https://www.google.com/search?q=braga+bitencourt+advogados+bh";
const GOOGLE_SEARCH_URL_BETIM = "https://www.google.com/search?q=braga+bitencourt+advogados+betim";

export function Footer() {
  const waLink = useWhatsAppLink();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIconClass =
    "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-light hover:text-navy hover:border-gold-light transition-all duration-300";

  return (
    <footer className="bg-navy text-white relative">
      <div className="container mx-auto py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="inline-block">
            <img
              src={logoTree}
              alt="Braga Bitencourt Advogados"
              width={385}
              height={385}
              loading="lazy"
              decoding="async"
              className="h-20 w-auto object-contain"
            />

          </Link>
        </div>

        {/* Social icons */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <a
            href="https://www.facebook.com/bragabitencourtadv/"
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
            aria-label="Busca Google"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/bragabitencourtadv/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconClass}
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={waLink}
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
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex flex-col items-center justify-center gap-1 mx-auto mb-12 text-xs tracking-[0.2em] text-white/70 hover:text-gold-light transition-colors"
          aria-label="Voltar ao topo"
        >
          <span>VOLTAR AO TOPO</span>
          <ArrowUp size={14} />
        </button>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {/* Onde estamos */}
          <a
            href={GOOGLE_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-light/20 flex items-center justify-center text-gold-light">
                <MapPin size={20} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">
                ONDE ESTAMOS:
              </span>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <p className="font-semibold text-white/90 mb-0.5">-Escritório 1:</p>
                <p>Av. Raja Gabáglia, 2000 - sala 614 - Alpes, BH - MG.</p>
              </div>
              <div>
                <p className="font-semibold text-white/90 mb-0.5">-Escritório 2:</p>
                <p>Av. Amazonas, 1446 - sala 706/707 - Brasiléia, Betim - MG.</p>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-light/20 flex items-center justify-center text-gold-light">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">
                WHATSAPP
              </span>
            </div>
            <p className="text-xl font-bold text-gold-light">
              (31) 98026-0880
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:bragabitencourtadv@gmail.com"
            className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-light/20 flex items-center justify-center text-gold-light">
                <Mail size={20} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-white/90">
                EMAIL
              </span>
            </div>
            <p className="text-sm text-white/70 break-all">
              bragabitencourtadv@gmail.com
            </p>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-white/40 tracking-wider">
            ALL RIGHTS RESERVED © 2026 BRAGA BITENCOURT ADVOGADOS
          </p>
        </div>
      </div>
    </footer>
  );
}
