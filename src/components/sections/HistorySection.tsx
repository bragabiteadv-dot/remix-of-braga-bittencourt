import logoTree from "@/assets/logo-tree-new.png";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function HistorySection() {
  return (
    <section className="py-20 bg-[#08152C] text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left Side: Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src={logoTree} 
                alt="Braga Bitencourt Logo" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain brightness-110 contrast-125"
              />

            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/30 bg-navy/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-montserrat font-bold tracking-[0.2em] text-white uppercase">
                Sobre o Escritório
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white mb-6 tracking-wide leading-tight">
              A HISTÓRIA DA NOSSA ADVOCACIA
            </h2>

            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-8 mx-auto md:mx-0"></div>

            <p className="text-gray-300 font-montserrat text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
              A Braga Bitencourt Advogados é um escritório de advocacia de elite com mais de duas décadas de experiência. 
              Seu posicionamento de mercado preserva o acolhimento humano e a discrição absoluta necessários para o Direito de Família, 
              Sucessões e Internacional Privado de alto padrão, com o rigor técnico e a inovação tecnológica (Visual Law) exigidos pela advocacia internacional contemporânea.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 rounded-[5px] border border-white/20 bg-transparent text-white font-montserrat font-bold text-xs tracking-[0.15em] hover:bg-white/5 transition-colors uppercase">
                Brasil e Exterior
              </button>
              
              <WhatsAppCta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}