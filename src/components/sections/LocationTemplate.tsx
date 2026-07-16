import { Shield, Users, Globe, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <div className="bg-white p-10 rounded-sm shadow-xl border-t-4 border-gold-dark hover:translate-y-[-5px] transition-all duration-300 group">
      <div className="w-16 h-16 bg-navy/5 rounded-lg flex items-center justify-center text-navy mb-8 group-hover:bg-gold-gradient transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-cinzel text-navy mb-6 leading-tight">{title}</h3>
      <p className="text-navy/60 text-sm leading-relaxed mb-8 font-montserrat">
        {description}
      </p>
      <Link 
        to={href as any}
        className="inline-flex items-center gap-2 text-gold-dark font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
      >
        Saiba Mais <ArrowRight size={14} />
      </Link>
    </div>
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
        <div className="container mx-auto px-4 relative z-10 text-center">
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

      <section className="py-24 bg-[#fcfbf8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-navy text-3xl font-cinzel mb-4">Nossos Serviços em {city}</h2>
            <div className="w-24 h-1 bg-gold-dark mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
