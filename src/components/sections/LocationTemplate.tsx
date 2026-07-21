import { Link } from "@tanstack/react-router";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      to={href as any}
      className="block bg-[#0c1a32] p-10 rounded-2xl border border-white/5 hover:border-gold-dark/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="text-gold-light mb-8">
        {icon}
      </div>
      <h3 className="text-white text-2xl font-montserrat font-bold mb-6 leading-tight">{title}</h3>
      <p className="text-white/70 text-base leading-relaxed font-montserrat">
        {description}
      </p>
    </Link>
  );
}

export function LocationTemplate({ 
  city, 
  address, 
  mapLink, 
  services 
}: { 
  city: string, 
  address: string, 
  mapLink: string,
  services: ServiceCardProps[]
}) {
  return (
    <div className="pt-24 pb-24">
      <section className="bg-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://bragabitencourt.com/wp-content/uploads/2026/06/cityscape-bg.jpg')" }}></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-white text-5xl md:text-7xl font-cinzel mb-8 uppercase tracking-widest">{city}</h1>
          <p className="text-gold-light text-xl font-montserrat max-w-2xl mx-auto mb-12 italic">
            Atendimento jurídico especializado com foco em resultados e segurança para sua família e patrimônio.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href={mapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-gold-light transition-colors font-montserrat"
            >
              <MapPinIcon />
              <span>{address}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold-dark text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Áreas de Atuação</span>
            <h2 className="text-white text-4xl md:text-5xl font-cinzel mb-8">O que fazemos por você em {city}</h2>
            <div className="w-32 h-px bg-white/30 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
