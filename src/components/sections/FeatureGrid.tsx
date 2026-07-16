import { Clock, MessageSquare, MapPin, Globe } from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-gold-light" />,
      title: "+ 20 anos",
      subtitle: "EXPERIENCIA & BAGAGEM TÉCNICA",
      description: "Duas décadas de especialização e liderança institucional em família, sucessões e internacional privado."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-gold-light" />,
      title: "Fale Direto",
      subtitle: "ATENDIMENTO IMEDIATO",
      description: "Contato direto como advogado do caso, assegurando confidencialidade e confiança."
    },
    {
      icon: <MapPin className="w-12 h-12 text-gold-light" />,
      title: "Sedes físicas",
      subtitle: "BELO HORIZONTE & BETIM",
      description: "Estruturas de excelência para consultas presenciais ou suporte digital integrado."
    },
    {
      icon: <Globe className="w-12 h-12 text-gold-light" />,
      title: "Raio Global",
      subtitle: "BRASIL E EXTERIOR",
      description: "Suporte jurídico especializado com ampla atuação no Brasil e no exterior."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-navy text-4xl font-cinzel mb-6">Sobre Nosso Trabalho</h2>
          <p className="text-navy/70 text-lg max-w-3xl mx-auto font-montserrat italic">
            Advocacia de excelência focada em segurança jurídica, visão prática e soluções objetivas com total clareza desde o primeiro contato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-4 rounded-full bg-navy/5 group-hover:bg-gold-gradient group-hover:text-navy transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-navy text-3xl font-cinzel mb-2">{feature.title}</h3>
              <h4 className="text-gold-dark text-sm font-bold tracking-[0.2em] mb-4 uppercase">{feature.subtitle}</h4>
              <p className="text-navy/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
