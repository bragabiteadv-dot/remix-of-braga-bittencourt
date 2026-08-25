import officeBH from "@/assets/office-bh-new.jpg";
import officeBetim from "@/assets/office-betim-new.jpg";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function PhysicalPresence() {
  const offices = [
    {
      city: "Belo Horizonte",
      title: "Braga Bitencourt Advogados BH",
      address: "Av. Raja Gabáglia, 2000 - Alpes, Belo Horizonte - MG, 30494-170",
      description: "Atendimento presencial em Belo Horizonte e acompanhamento com a mesma organização, discrição e clareza que orientam toda a experiência do escritório.",
      mapUrl: "https://maps.google.com/maps?q=-19.954955,-43.9595168&z=17&hl=pt-BR&output=embed",
      link: "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.954955,-43.9595168,1022m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6be0a87eba137:0x5b7a5c4dbe44fd0b!8m2!3d-19.954955!4d-43.9595168!16s%2Fg%2F1x6q2_2p?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
      image: officeBH,
      whatsapp: "https://wa.link/i03d4k"
    },
    {
      city: "Betim",
      title: "Braga Bitencourt Advogados Betim",
      address: "Av. Amazonas, 1446 - 7º andar - salas 706/707 - Brasiléia, Betim - MG, 32600-324",
      description: "Atendimento com discrição, clareza e direção estratégica desde o primeiro contato.",
      mapUrl: "https://maps.google.com/maps?q=-19.9699976,-44.2045052&z=17&hl=pt-BR&output=embed",
      link: "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.9699976,-44.2045052,1021m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6c35df7797b19:0xf77bb0f67fe9276a!8m2!3d-19.9699976!4d-44.2045052!16s%2Fg%2F11n0pqcqww?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-6xl mx-auto items-stretch">
          {offices.map((office, idx) => (
            <div key={idx} className="flex flex-col gap-10 md:gap-8 h-full">
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col flex-grow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={office.image}
                    alt={office.city}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 space-y-6 flex-grow flex flex-col">
                  <a
                    href={office.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[#c89269] font-montserrat font-semibold text-base leading-relaxed hover:underline"
                  >
                    <span className="block">{office.title}</span>
                    <span className="block">{office.address}</span>
                  </a>

                  <WhatsAppCta className="w-full" />

                  <p className="text-navy/60 font-montserrat text-sm leading-relaxed mt-auto">
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
