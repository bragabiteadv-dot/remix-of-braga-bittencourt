import { Mail, Phone, MapPin, Check } from "lucide-react";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";

export function FounderCard() {
  const credentials = [
    "Fundador da Braga Bitencourt Advogados",
    "Especializado em Direito de Família e Sucessões pelo IBMEC/EBRADI-SP.",
    "Especialista em Direito de Família e Sucessões pelo Instituto Damásio-SP.",
    "Graduado pela PUC-MG.",
    "Pesquisador em Planejamento Sucessório.",
    "Especializado em Direito Constitucional pela Universidade Estácio de Sá.",
    "Especializado em Direito Civil e Processual Civil pelo Instiuto Praetorium/LFG.",
    "Ex-Conselheiro de Subseção de Seccional da OAB/MG 2019-2021.",
    "Ex-Presidente da Comissão de Direito de Família e Sucessões.",
    "Atuação junto à Defensoria pública de BH no ano de 2003, com designação para oficiar nas varas de Família, Sucessões e Registros Públicos.",
    "Especialista em Contabilidade Pública pelo CADE/BH.",
    "Mestre na aplicação de Visual Law e Interactive Petitions."
  ];

  return (
    <section id="perfil" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-12">
          
          {/* Office Info Card */}
          <div className="w-full max-w-[320px] bg-[#FCD7A8] p-8 relative shadow-lg h-full self-stretch">
            {/* Background pattern overlay (sutil texture) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#283650 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#283650] text-white rounded flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              
              <h3 className="text-2xl font-cinzel text-[#283650] mb-4">Escritórios</h3>
              
              <div className="space-y-4 text-[#283650] text-sm mb-8">
                <p className="leading-relaxed font-medium">
                  Avenida Amazonas, 1446, salas 706/707, Brasileia, Betim - MG
                </p>
                <p className="leading-relaxed font-medium">
                  Av. Raja Gabaglia, 2000, sala 614, Bloco 1 - Alpes, Belo Horizonte - MG
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#283650]/20 mb-8 border-t border-dashed border-[#283650]/40"></div>

              <div className="space-y-6 w-full text-left">
                <a href="mailto:bragabitencourtadv@gmail.com" className="flex items-center gap-3 text-[#283650] hover:opacity-80 transition-opacity">
                  <Mail size={20} className="shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest opacity-60">Email</span>
                    <span className="font-bold text-xs truncate block">bragabitencourtadv@gmail.com</span>
                  </div>
                </a>
                
                <a href="https://wa.link/i03d4k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#283650] hover:opacity-80 transition-opacity">
                  <WhatsAppIcon className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest opacity-60">Whatsapp</span>
                    <span className="font-bold text-sm">(31) 98026-0880</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div classname="w-full max-w-[320px] self-stretch">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
              <img 
                src="https://bragabitencourt.com/wp-content/uploads/2026/05/Foto-2_3_11zon-scaled.webp" 
                alt="Dr. Carlos Javét Bitencourt" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Founder Details */}
          <div className="flex-1 max-w-[500px]">
            <span className="text-navy/60 text-xs tracking-[0.2em] uppercase mb-4 block font-montserrat">Sobre o fundador:</span>
            <h2 className="text-navy text-4xl font-cinzel mb-4 leading-tight uppercase">
              Dr. Carlos Javét Bitencourt
            </h2>
            <span className="text-navy/40 font-bold text-xs uppercase tracking-widest mb-8 block">OAB 107 192 MG</span>

            <ul className="space-y-2.5">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-navy/90 text-[13px] font-montserrat leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <WhatsAppCta />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.448-1.271.607-1.442.159-.171.347-.214.463-.214.116 0 .231.006.332.012.109.006.253-.041.397.306.145.348.492 1.201.535 1.288.044.087.073.189.014.305-.058.117-.087.189-.173.29-.088.101-.184.225-.264.303-.098.096-.201.2-.087.396.114.195.508.839 1.092 1.358.753.671 1.389.88 1.585.977.195.097.311.082.426-.051.116-.133.492-.572.622-.767.13-.195.26-.165.44-.099.18.065 1.142.538 1.338.636.195.098.325.145.372.226.047.081.047.468-.097.873z"/>
    </svg>
  );
}