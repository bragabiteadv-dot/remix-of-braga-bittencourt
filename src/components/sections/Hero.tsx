import { MessageSquare } from "lucide-react";

export function Hero() {
  const features = [
    {
      title: "+ 20 anos",
      subtitle: "EXPERIENCIA & BAGAGEM TÉCNICA",
      lines: [
        "Duas décadas de especialização e",
        "liderança institucional em",
        "família, sucessões e",
        "internacional privado."
      ]
    },
    {
      title: "Fale Direto",
      subtitle: "ATENDIMENTO IMEDIATO",
      lines: [
        "Contato direto como",
        "advogado do caso,",
        "assegurando",
        "confidencialidade e",
        "confiança."
      ]
    },
    {
      title: "Sedes físicas",
      subtitle: "-BELO HORIZONTE",
      subtitle2: "-BETIM",
      lines: [
        "Estruturas de",
        "excelência para",
        "consultas",
        "presenciais ou",
        "suporte digital",
        "integrado."
      ]
    },
    {
      title: "Raio Global",
      subtitle: "BRASIL E EXTERIOR",
      lines: [
        "Suporte jurídico",
        "especializado com",
        "ampla atuação no",
        "Brasil e no exterior."
      ]
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-[#08152C] pt-32 pb-20 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-[55%] flex flex-col items-start pt-10">
            <div className="inline-block px-5 py-2 border border-white/20 rounded-full mb-10">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Advogado de Família</span>
            </div>

            <h1 className="text-white text-[44px] md:text-[60px] lg:text-[68px] font-cinzel leading-[1.1] mb-12 max-w-[700px]">
              ADVOCACIA<br />
              ESPECIALIZADA EM DIREITO DE FAMÍLIA,<br />
              SUCESSÕES E<br />
              INTERNACIONAL<br />
              PRIVADO.
            </h1>

            <div className="space-y-6 text-white/80 text-sm md:text-base font-montserrat mb-14 max-w-[600px] leading-relaxed">
              <p>
                -Direito de Família: Divórcios, Partilhas, Guardas, Pensão Alimentícia e Proteção de Vulneráveis (Tutela/Curatela).
              </p>
              <p>
                -Direito Sucessório: Inventários judiciais e extrajudiciais, Testamentos e Planejamentos Sucessórios.
              </p>
              <p>
                -Direito Internacional Privado: Homologação de Sentença Estrangeira, Divórcios Transfronteiriços, Guarda, Alimentos e Assessoria em Aquisições Imobiliárias.
              </p>
            </div>

            <a 
              href="https://wa.me/5531980260880?text=Olá! Acessei o site e gostaria de falar com um advogado."
              className="btn-primary w-full sm:w-auto"
            >
              FALE COM ADVOGADO
              <WhatsAppIcon />
            </a>
          </div>

          {/* Right Column: Floating Panel Card */}
          <div className="lg:w-[45%] w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] glass-card rounded-[2rem] p-8 lg:p-10 shadow-2xl relative">
              {/* Shine effect on card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <div className="flex flex-col items-center mb-10">
                <div className="inline-block px-6 py-2 border border-white/20 rounded-full mb-8">
                  <span className="text-white text-sm font-bold opacity-70">Sobre Nosso Trabalho</span>
                </div>
                <p className="text-white/70 text-center text-sm md:text-base font-montserrat leading-relaxed px-4">
                  Advocacia de excelência focada em segurança jurídica, visão prática e soluções objetivas com total clareza desde o primeiro contato.
                </p>
              </div>

              {/* Bento Grid Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col items-start min-h-[220px] transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                    <h3 className="text-white text-[28px] md:text-[32px] font-bold font-montserrat mb-3 leading-tight">{feature.title}</h3>
                    
                    <div className="mb-4">
                      <p className="text-gold-light text-[10px] font-bold tracking-widest uppercase mb-0.5">{feature.subtitle}</p>
                      {feature.subtitle2 && (
                        <p className="text-gold-light text-[10px] font-bold tracking-widest uppercase">{feature.subtitle2}</p>
                      )}
                    </div>

                    <div className="space-y-0.5 mt-auto">
                      {feature.lines.map((line, lIdx) => (
                        <p key={lIdx} className="text-white/50 text-[11px] font-medium leading-tight">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.442.159-.171.347-.214.463-.214.116 0 .231.006.332.012.109.006.253-.041.397.306.145.348.492 1.201.535 1.288.044.087.073.189.014.305-.058.117-.087.189-.173.29-.088.101-.184.225-.264.303-.098.096-.201.2-.087.396.114.195.508.839 1.092 1.358.753.671 1.389.88 1.585.977.195.097.311.082.426-.051.116-.133.492-.572.622-.767.13-.195.26-.165.44-.099.18.065 1.142.538 1.338.636.195.098.325.145.372.226.047.081.047.468-.097.873z"/>
    </svg>
  );
}

