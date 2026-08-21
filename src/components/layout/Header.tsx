import { Link } from "@tanstack/react-router";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";
import headerLogo from "@/assets/header-logo.png";

export function Header() {
  return (
    <header className="w-full bg-navy sticky top-0 z-50 border-b border-white/5 shadow-xl">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img
            src={headerLogo}
            alt="Braga Bitencourt Logo"
            width={280}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        <WhatsAppCta className="shrink-0 !whitespace-nowrap !px-4 sm:!px-6 !py-3 sm:!py-4 !text-[11px] sm:!text-sm !gap-2" />
      </div>
    </header>
  );
}
