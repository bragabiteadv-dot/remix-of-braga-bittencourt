import { usePageAltFor } from "@/lib/page-alt";
import equipeBg from "@/assets/cidade-equipe-7.webp";
import carlosGabriel from "@/assets/team-carlos-gabriel-800.webp";
import carlosJavet from "@/assets/team-carlos-javet-800.webp";
import glaucia from "@/assets/team-glaucia-800.webp";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function TeamGrid() {
  const javetAlt = usePageAltFor(
    "team-javet",
    "Carlos Javét Braga Bitencourt Braga Bitencourt Advogados, Família, Sucessões e Internacional Privado",
  );
  const gabrielAlt = usePageAltFor(
    "team-gabriel",
    "Carlos Gabriel F. Braga Bitencourt Braga Bitencourt Advogados, Família, Sucessões e Internacional Privado",
  );
  const glauciaAlt = usePageAltFor(
    "team-glaucia",
    "Gláucia Patrícia F. Braga Bitencourt Braga Bitencourt Advogados, Família, Sucessões e Internacional Privado",
  );
  const members = [
    {
      name: "Carlos Javét Braga Bitencourt",
      alt: javetAlt,
      image: carlosJavet,
      width: 800,
      height: 1303,
      // primeiro no mobile, centro no desktop
      order: "order-1 md:order-2"
    },
    {
      name: "Carlos Gabriel F. Braga Bitencourt",
      alt: gabrielAlt,
      image: carlosGabriel,
      width: 800,
      height: 1302,
      order: "order-2 md:order-1"
    },
    {
      name: "Gláucia Patrícia F. Braga Bitencourt",
      alt: glauciaAlt,
      image: glaucia,
      width: 800,
      height: 1305,
      order: "order-3 md:order-3"
    }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Cityscape background with diagonal navy mask */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${equipeBg}')` }}
      ></div>
      <div
        className="absolute inset-0 z-0 bg-navy/20 bg-gradient-to-br from-navy/95 via-navy/55 to-navy/15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto relative z-10">
        <h2 className="text-white text-5xl font-cinzel text-center mb-20 tracking-widest uppercase">
          Nossa Equipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {members.map((member, idx) => (
            <div key={idx} className={`flex flex-col group ${member.order}`}>
              <div className="relative overflow-hidden aspect-[1179/1920] rounded-sm shadow-2xl mb-6 bg-navy">
                <img 
                  src={member.image} 
                  alt={member.alt} 
                  width={member.width}
                  height={member.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-center"
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

