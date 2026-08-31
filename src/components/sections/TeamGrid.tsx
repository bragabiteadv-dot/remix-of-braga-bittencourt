import { usePageAltFor } from "@/lib/page-alt";
import equipeBg from "@/assets/equipe-bg.jpg";
import carlosGabriel from "@/assets/gabriel-2.jpg";
import carlosJavet from "@/assets/carlos-javet-2.jpg";
import glaucia from "@/assets/glaucia-2.jpg";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function TeamGrid() {
  const javetAlt = usePageAltFor("team-javet", "Carlos Javét Braga Bitencourt");
  const firmAlt = usePageAltFor("team-firm", "");
  const members = [
    {
      name: "Carlos Javét Braga Bitencourt",
      alt: javetAlt,
      image: carlosJavet,
      // primeiro no mobile, centro no desktop
      order: "order-1 md:order-2"
    },
    {
      name: "Carlos Gabriel F. Braga Bitencourt",
      alt: firmAlt || "Carlos Gabriel Ferreira Braga Bitencourt",
      image: carlosGabriel,
      order: "order-2 md:order-1"
    },
    {
      name: "Gláucia Patrícia F. Braga Bitencourt",
      alt: firmAlt || "Gláucia Patrícia Ferreira Braga Bitencourt",
      image: glaucia,
      order: "order-3 md:order-3"
    }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Cityscape Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url('${equipeBg}')` }}
      ></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-white text-5xl font-cinzel text-center mb-20 tracking-widest uppercase">
          Nossa Equipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {members.map((member, idx) => (
            <div key={idx} className={`flex flex-col group ${member.order}`}>
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm shadow-2xl mb-6 bg-white">
                <img 
                  src={member.image} 
                  alt={member.alt} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-xl text-center">
                <h3 className="text-navy text-xl font-bold font-montserrat">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center">
          <WhatsAppCta className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

