import { Check } from "lucide-react";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";
import waves from "@/assets/i488_11zon.webp";

const services = [
  {
    category: "FAMÍLIA",
    title: "DIREITO DE FAMÍLIA",
    items: [
      "Divórcio e Dissolução de União Estável.",
      "Partilha de bens.",
      "Pactos antenupciais",
      "Planejamento patrimonial para casamentos.",
      "Guarda de menores, regulamentação de convivência/visitas.",
      "Pensão Alimentícia.",
      "Investigação e negatória de paternidade.",
      "Tutela e Curatela.",
      "Acompanhamento em Medidas Protetivas.",
    ],
  },
  {
    category: "SUCESSÕES",
    title: "DIREITO DAS SUCESSÕES",
    items: [
      "Inventário Judicial e Extrajudicial/Cartório.",
      "Testamentos.",
      "Anulação/ Impugnação de testamentos.",
      "Planejamento Sucessório / holding familiar.",
      "Doações e transferência de bens em vida.",
    ],
  },
  {
    category: "INTERNACIONAL",
    title: "DIREITO INTERNACIONAL PRIVADO",
    items: [
      "Homologações de Sentença/Decisões Estrangeiras em Direito de Família e Sucessões.",
      "Homologação de escrituras e atos notariais/cartórios estrangeiros.",
      "Assistência documental em transcrições de casamentos estrangeiros, registros e averbações.",
      "Autorização judicial para emissão de passaporte de criança e adolescente.",
      "Autorização judicial para viagem internacional de criança e adolescente.",
      "Ações de Divórcio, guarda, alimentos e regime de convivência consensuais com um dos genitores residindo no exterior.",
      "Ações de Divórcio, guarda, alimentos e regime de convivência, litigiosos, quando o nosso contratante se encontra em território estrangeiro e a outra parte em território nacional.",
      "Autorização judicial para moradia de criança no exterior com um dos genitores.",
      "Assistência em aquisições patrimoniais no Estado brasileiro.",
    ],
  },
];

export const ServiceListing = () => {
  return (
    <section className="py-20 bg-[#08152C] relative overflow-hidden">
      {/* Wave PNG Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between py-20 pointer-events-none z-[1] opacity-50">
        <img
          src={waves}
          alt=""
          width={1536}
          height={385}
          loading="lazy"
          decoding="async"
          className="aspect-[1536/385] w-full object-cover"
          aria-hidden="true"
        />
        <img
          src={waves}
          alt=""
          width={1536}
          height={385}
          loading="lazy"
          decoding="async"
          className="aspect-[1536/385] w-full object-cover"
          aria-hidden="true"
        />
        <img
          src={waves}
          alt=""
          width={1536}
          height={385}
          loading="lazy"
          decoding="async"
          className="aspect-[1536/385] w-full object-cover"
          aria-hidden="true"
        />

      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl text-white text-center mb-16 font-cinzel">
          Veja nossos serviços
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#08152C]/80 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 shadow-2xl"
            >
              <div className="inline-block px-4 py-1 border border-white/30 rounded-full text-xs text-white/80 mb-6 font-montserrat tracking-widest">
                {service.category}
              </div>
              
              <div className="flex items-center gap-4 mb-8 min-w-0">
                <h3 className="text-base sm:text-lg md:text-2xl text-[#F8D59B] font-cinzel leading-snug md:whitespace-nowrap">
                  {service.title}
                </h3>
                <div className="hidden md:block h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              <ul className="grid grid-cols-1 gap-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 group">
                    <Check className="w-5 h-5 text-[#F8D59B] shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base font-montserrat leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <WhatsAppCta />
        </div>
      </div>
    </section>
  );
};
