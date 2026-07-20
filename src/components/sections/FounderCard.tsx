import { Mail, Phone, MapPin, Check } from "lucide-react";

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
    <section id="perfil" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Office Info */}
          <div className="space-y-12">
            <div className="bg-[#fcfbf8] p-10 rounded-sm border-l-8 border-gold-dark shadow-xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-navy text-white rounded-lg flex items-center justify-center">
                  <MapPin size={32} />
                </div>
                <h3 className="text-3xl font-cinzel text-navy">Escritórios</h3>
              </div>
              
              <div className="space-y-6 text-navy/70 mb-10 pb-10 border-b border-navy/10">
                <p className="leading-relaxed font-medium">
                  Avenida Amazonas, 1446, salas 706/707, Brasileia, Betim - MG
                </p>
                <p className="leading-relaxed font-medium">
                  Av. Raja Gabaglia, 2000, sala 614, Bloco 1 - Alpes, Belo Horizonte - MG
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:bragabitencourtadv@gmail.com" className="flex items-center gap-4 hover:text-gold-dark transition-colors">
                  <Mail className="text-navy" size={24} />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-navy/40 mb-1">Email</span>
                    <span className="font-bold">bragabitencourtadv@gmail.com</span>
                  </div>
                </a>
                
                <a href="tel:31980260880" className="flex items-center gap-4 hover:text-gold-dark transition-colors">
                  <Phone className="text-navy" size={24} />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-navy/40 mb-1">Whatsapp</span>
                    <span className="font-bold text-xl">(31) 98026-0880</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden shadow-2xl h-[400px]">
              <img 
                src="https://bragabitencourt.com/wp-content/uploads/2026/05/Foto-2_3_11zon-scaled.webp" 
                alt="Founder at Desk" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Founder Details */}
          <div>
            <span className="text-navy/40 text-sm tracking-[0.3em] uppercase mb-4 block">Sobre o fundador:</span>
            <span className="text-gold-dark font-bold text-xs uppercase tracking-widest mb-2 block">OAB 107 192 MG</span>
            <h2 className="text- navy text-5xl md:text-6xl font-cinzel mb-12 leading-tight">
              Dr. Carlos Javét Bitencourt
            </h2>

            <ul className="space-y-4">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 flex-shrink-0">
                    <Check size={18} className="text-navy opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-navy/80 text-sm md:text-base font-montserrat leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-16">
              <a 
                href="https://wa.me/5531980260880?text=Olá! Acessei a página perfil do escritório e gostaria de falar com um especialista."
                className="btn-primary w-full md:w-auto"
              >
                Falar com especialista
                <WhatsAppIcon />
              </a>

            </div>
          </div>

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
