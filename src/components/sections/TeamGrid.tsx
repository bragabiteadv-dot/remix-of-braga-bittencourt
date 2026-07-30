import { MessageSquare } from "lucide-react";
import equipeBg from "@/assets/equipe-bg.png.asset.json";
import carlosGabriel from "@/assets/carlos-gabriel.png.asset.json";
import carlosJavet from "@/assets/carlos-javet.png.asset.json";
import glaucia from "@/assets/glaucia.png.asset.json";

export function TeamGrid() {
  const members = [
    {
      name: "Carlos Gabriel F. Braga Bitencourt",
      image: carlosGabriel.url
    },
    {
      name: "Carlos Javét Braga Bitencourt",
      image: carlosJavet.url
    },
    {
      name: "Gláucia Patrícia F. Braga Bitencourt",
      image: glaucia.url
    }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Cityscape Background Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url('${equipeBg.url}')` }}
      ></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-white text-5xl font-cinzel text-center mb-20 tracking-widest uppercase">
          Nossa Equipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {members.map((member, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="relative overflow-hidden aspect-[3/4] rounded-sm shadow-2xl mb-6 bg-white">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
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
          <a 
            href="https://wa.me/5531980260880?text=Olá! Gostaria de falar com um advogado da equipe."
            className="btn-primary w-full sm:w-auto"
          >
            FALE COM ADVOGADO
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.442.159-.171.347-.214.463-.214.116 0 .231.006.332.012.109.006.253-.041.397.306.145.348.492 1.201.535 1.288.044.087.073.189.014.305-.058.117-.087.189-.173.29-.088.101-.184.225-.264.303-.098.096-.201.2-.087.396.114.195.508.839 1.092 1.358.753.671 1.389.88 1.585.977.195.097.311.082.426-.051.116-.133.492-.572.622-.767.13-.195.26-.165.44-.099.18.065 1.142.538 1.338.636.195.098.325.145.372.226.047.081.047.468-.097.873z"/>
    </svg>
  );
}
