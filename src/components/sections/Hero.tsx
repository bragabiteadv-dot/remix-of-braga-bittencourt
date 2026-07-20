import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://bragabitencourt.com/wp-content/uploads/2026/06/Foto-Site-Hero-scaled.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-navy/70 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-cinzel leading-tight mb-8 drop-shadow-lg">
            Advocacia Especializada em Família, Sucessões e Demandas Internacionais privadas
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-montserrat leading-relaxed mb-6 max-w-2xl">
            Atuação estratégica em divórcios, inventários, planejamento sucessório, guarda de filhos, pensão alimentícia, testamentos, homologação de sentenças estrangeiras e demais questões familiares e patrimoniais.
          </p>
          <p className="text-white/80 text-lg md:text-xl font-montserrat leading-relaxed mb-12 max-w-2xl font-medium italic">
            Soluções jurídicas seguras, personalizadas e conduzidas com discrição, técnica e agilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/5531980260880?text=Olá! Acessei a página perfil do escritório e gostaria de falar com um especialista."
              className="btn-primary w-full sm:w-auto"

            >
              Falar com especialista
              <WhatsAppIcon />
            </a>

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
