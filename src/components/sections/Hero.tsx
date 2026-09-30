import { MessageSquare } from "lucide-react";
import { HeroVideoBackground } from "./HeroVideoBackground";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

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
      <HeroVideoBackground />
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-[1]"></div>

      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-forwards">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-[55%] flex flex-col items-start pt-10">
            <h1 className="text-white text-[36px] md:text-[44px] lg:text-[53px] font-cinzel leading-[1.1] mb-12 max-w-[700px]">
              ADVOCACIA<br />
              ESPECIALIZADA EM DIREITO DE FAMÍLIA,<br />
              SUCESSÕES E<br />
              INTERNACIONAL<br />
              PRIVADO.
            </h1>

            <div className="space-y-6 text-white text-sm md:text-base font-montserrat mb-14 max-w-[600px] leading-relaxed">
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

            <WhatsAppCta className="w-full sm:w-auto" />
          </div>

          {/* Right Column: Floating Panel Card */}
          <div className="lg:w-[45%] w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] glass-card rounded-[2rem] p-8 lg:p-10 shadow-2xl relative">
              {/* Shine effect on card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <div className="flex flex-col items-center mb-10">
              <div className="inline-block px-6 py-2 border border-white/20 rounded-full mb-8">
                  <span className="text-white text-sm font-bold">Sobre Nosso Trabalho</span>
                </div>
                <p className="text-white text-center text-sm md:text-base font-montserrat leading-relaxed px-4">
                  Advocacia de excelência focada em segurança jurídica, visão prática e soluções objetivas com total clareza desde o primeiro contato.
                </p>
              </div>

              {/* Bento Grid Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col items-start min-h-[220px] transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                    <h2 className="text-white text-[28px] md:text-[32px] font-bold font-montserrat mb-3 leading-tight">{feature.title}</h2>
                    
                    <div className="mb-4">
                      <p className="text-gold-light text-[10px] font-bold tracking-widest uppercase mb-0.5">{feature.subtitle}</p>
                      {feature.subtitle2 && (
                        <p className="text-gold-light text-[10px] font-bold tracking-widest uppercase">{feature.subtitle2}</p>
                      )}
                    </div>

                    <div className="space-y-0.5 mt-auto">
                      {feature.lines.map((line, lIdx) => (
                        <p key={lIdx} className="text-white text-[11px] font-medium leading-tight">{line}</p>
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


