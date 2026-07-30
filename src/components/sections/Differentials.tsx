import { TreeDeciduous, ChessKnight, Globe } from "lucide-react";
import { useRevealOnScroll } from "../../hooks/use-reveal-on-scroll";

export function Differentials() {
  const { ref, isVisible } = useRevealOnScroll();
  const items = [
    {
      label: "Arquitetura sucessória e legado.",
      description: "A proteção do patrimônio exige mais do que conhecimento jurídico: exige visão estratégica e compromisso com a preservação dos legados familiares. Com tradição e excelência técnica, conduzimos cada sucessão com segurança, cuidado e planejamento.",
      icon: <TreeDeciduous className="w-12 h-12 text-navy" />,
      highlight: false
    },
    {
      label: "Escuta estratégica e rigor.",
      description: "Questões familiares demandam sensibilidade e estratégia na mesma medida. Atuamos com escuta qualificada, discrição e segurança jurídica, transformando situações complexas em soluções claras e eficientes.",
      icon: <ChessKnight className="w-12 h-12 text-navy" />,
      highlight: true
    },
    {
      label: "Vanguarda em Visual Law e Petições Interativas.",
      description: "Unimos tradição e tecnologia para oferecer uma advocacia mais moderna e eficiente. Por meio de recursos como Visual Law e Petições Interativas, tornamos a comunicação jurídica mais clara, dinâmica e persuasiva, favorecendo decisões mais rápidas e assertivas.",
      icon: <Globe className="w-12 h-12 text-navy" />,
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-[#08152C] relative overflow-hidden">
      {/* Subtle diamond pattern background (simulated) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="diamond-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-montserrat text-xs tracking-[0.3em] uppercase mb-4 block">
            Diferenciais
          </span>
          <h2 className="text-white text-5xl font-cinzel tracking-wider uppercase">
            Nossos Diferenciais
          </h2>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger ${isVisible ? 'visible' : ''}`}
        >
          {items.map((item, idx) => (
            <div 
              key={idx}
              className={`p-10 rounded-sm flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-2xl ${
                item.highlight 
                  ? "bg-[#F8D59B] text-navy border-t-4 border-[#F1BE87]" 
                  : "bg-white text-navy border-t-4 border-[#cd9575]"
              }`}
            >
              <div className="mb-8">
                {item.icon}
              </div>
              <h3 className="text-2xl font-cinzel font-bold mb-6 leading-tight">
                {item.label}
              </h3>
              <p className="font-montserrat leading-relaxed text-sm opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
