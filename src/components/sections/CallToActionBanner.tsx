import banner from "@/assets/i309_11zon.webp";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export const CallToActionBanner = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-cinzel mb-10 max-w-4xl mx-auto leading-relaxed uppercase tracking-wider">
          ESTÁ ENFRENTANDO ALGUMA DESSAS SITUAÇÕES? CONVERSE AGORA MESMO COM UM DE NOSSOS ADVOGADOS ESPECIALISTAS!
        </h2>

        <div className="flex justify-center">
          <WhatsAppCta />
        </div>
      </div>
    </section>
  );
};
