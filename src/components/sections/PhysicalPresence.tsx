import { Phone } from "lucide-react";
import officeBHAsset from "@/assets/office-bh-new.jpg.asset.json";
import officeBetimAsset from "@/assets/office-betim-new.jpg.asset.json";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function PhysicalPresence() {
  const offices = [
    {
      city: "Belo Horizonte",
      address: "Braga Bitencourt Advogados BH, Av. Raja Gabáglia, 2000 - Alpes, Belo Horizonte - MG, 30494-170",
      description: "Atendimento presencial em Belo Horizonte e acompanhamento com a mesma organização, discrição e clareza que orientam toda a experiência do escritório.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.395729780517!2d-43.9575916!3d-19.9575916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU3JzI3LjMiUyA0M8KwNTcnMjcuMyJX!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
      image: officeBHAsset.url,
      whatsapp: "https://wa.me/5531999999999"
    },
    {
      city: "Betim",
      address: "Braga Bitencourt Advogados Betim, Av. Amazonas, 1446 - 7º andar - salas 706/707 - Brasiléia, Betim - MG, 32600-324",
      description: "Atendimento com discrição, clareza e direção estratégica desde o primeiro contato.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.123456789!2d-44.2!3d-19.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU3JzI3LjMiUyA0NMKwMTInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
      image: officeBetimAsset.url,
      whatsapp: "https://wa.me/5531999999999"
    }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background radial gradient similar to image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-navy-light)_0%,_var(--color-navy)_100%)] opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-cinzel leading-tight uppercase tracking-wider">
            Presença física e atendimento jurídico<br />especializado de alto padrão
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {offices.map((office, idx) => (
            <div key={idx} className="space-y-8">
              {/* Map Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl h-80 relative">
                <iframe 
                  src={office.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${office.city}`}
                ></iframe>
              </div>

              {/* Info Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-6 flex-grow">
                  <p className="text-[#c89269] font-montserrat font-semibold text-base leading-relaxed">
                    {office.address}
                  </p>
                  
                  <WhatsAppCta className="w-full" />

                  <p className="text-navy/60 font-montserrat text-sm leading-relaxed">
                    {office.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
