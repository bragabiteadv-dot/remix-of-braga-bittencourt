import logoTreeAsset from "@/assets/logo-tree-new.png.asset.json";

export function HistorySection() {
  return (
    <section className="py-20 bg-[#050b16] text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left Side: Logo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img 
                src={logoTreeAsset.url} 
                alt="Braga Bitencourt Logo" 
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
              
              <a 
                href="https://wa.me/5531999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span className="flex items-center">
                  <svg className="mr-2 w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  FALAR COM ADVOGADO
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}