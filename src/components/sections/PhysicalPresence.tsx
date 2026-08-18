import { Phone } from "lucide-react";
import officeBH from "@/assets/office-bh-new.jpg";
import officeBetim from "@/assets/office-betim-new.jpg";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function PhysicalPresence() {
  const offices = [
    {
      city: "Belo Horizonte",
      address: "Braga Bitencourt Advogados BH, Av. Raja Gabáglia, 2000 - Alpes, Belo Horizonte - MG, 30494-170",
      description: "Atendimento presencial em Belo Horizonte e acompanhamento com a mesma organização, discrição e clareza que orientam toda a experiência do escritório.",
      mapUrl: "https://maps.google.com/maps?q=Av.%20Raja%20Gab%C3%A1glia%2C%202000%20-%20Alpes%2C%20Belo%20Horizonte%20-%20MG%2C%2030494-170&z=17&hl=pt-BR&output=embed",
      link: "https://share.google/UiahnNRC0AVfB7xZP",
      image: officeBH,
      whatsapp: "https://wa.link/i03d4k"
    },
    {
      city: "Betim",
      address: "Braga Bitencourt Advogados Betim, Av. Amazonas, 1446 - 7º andar - salas 706/707 - Brasiléia, Betim - MG, 32600-324",
      description: "Atendimento com discrição, clareza e direção estratégica desde o primeiro contato.",
      mapUrl: "https://maps.google.com/maps?q=Av.%20Amazonas%2C%201446%20-%20Brasileia%2C%20Betim%20-%20MG%2C%2032600-324&z=17&hl=pt-BR&output=embed",
      link: "https://share.google/tKyzJIwu9jMGT0P7n",
      image: officeBetim,
      whatsapp: "https://wa.link/i03d4k"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-6xl mx-auto">
          {offices.map((office, idx) => (
            <div key={idx} className="flex flex-col gap-10 md:gap-8">
              {/* Map Card */}
              <a
                href={office.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl overflow-hidden shadow-2xl h-80 relative hover:opacity-95 transition-opacity"
              >
                <iframe 
                  src={office.mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, pointerEvents: "none" }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${office.city}`}
                ></iframe>
              </a>

              {/* Info Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={office.image} 
                    alt={office.city} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-6 flex-grow">
                  <a
                    href={office.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#c89269] font-montserrat font-semibold text-base leading-relaxed hover:underline"
                  >
                    {office.address}
                  </a>
                  
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
