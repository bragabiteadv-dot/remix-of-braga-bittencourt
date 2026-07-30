import { Check } from "lucide-react";

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
      {/* Background Decorative Lines (similar to the image) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.1" />
          <path d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="white" strokeWidth="0.1" />
        </svg>
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
              
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-xl md:text-2xl text-[#F8D59B] font-cinzel whitespace-nowrap">
                  {service.title}
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
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
          <a
            href="https://wa.me/5531991443422"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            FALE COM ADVOGADO
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 68.9 27.1 106.1 27.1h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.4-14.7-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.6 9.1 31.7 11.7 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
