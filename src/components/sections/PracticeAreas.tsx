import { User, FileText, Globe } from "lucide-react";
import { useRevealOnScroll } from "../../hooks/use-reveal-on-scroll";

const practiceAreas = [
  {
    icon: <User className="w-8 h-8 text-[#F8D59B]" />,
    title: "Direito de Família",
    description: "Divórcio consensual ou litigioso · Partilha de bens · Guarda e regulamentação de visitas · Pensão alimentícia · Pacto antenupcial · Tutela e Curatela · Medidas Protetivas",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#F8D59B]" />,
    title: "Direito das Sucessões",
    description: "Inventário judicial e extrajudicial · Testamentos · Planejamento sucessório · Holdings familiares · Doação e transferência de bens em vida",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#F8D59B]" />,
    title: "Privado Internacional",
    description: "Homologação de sentenças estrangeiras · Autorização de viagem para menores · Divórcios e guardas com partes no exterior · Transcrições e averbações",
  },
];

export const PracticeAreas = () => {
  const { ref, isVisible } = useRevealOnScroll();
  return (
    <section className="py-24 bg-[#050b16] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(12,26,50,0.8)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#F8D59B] text-sm tracking-[0.3em] font-montserrat uppercase block mb-4">
            Áreas de Atuação
          </span>
          <h2 className="text-4xl md:text-5xl text-white font-cinzel mb-6">
            Nossas Áreas de Atuação
          </h2>
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto"></div>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto reveal-stagger ${isVisible ? 'visible' : ''}`}
        >
          {practiceAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-[#0c1a32]/40 backdrop-blur-md border border-white/5 rounded-xl p-10 hover:border-[#F8D59B]/30 transition-all duration-500 group shadow-2xl"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {area.icon}
              </div>
              
              <h3 className="text-2xl text-white font-cinzel mb-6 group-hover:text-[#F8D59B] transition-colors">
                {area.title}
              </h3>
              
              <p className="text-white/60 font-montserrat text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
