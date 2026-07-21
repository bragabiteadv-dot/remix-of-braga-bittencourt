import { Link } from "@tanstack/react-router";

export function LocationsSection() {
  return (
    <section className="py-24 bg-white border-t border-navy/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-navy text-4xl font-cinzel mb-8">Nossas Localidades</h2>
          <p className="text-navy/60 mb-16 max-w-2xl mx-auto font-montserrat">
            Escolha a cidade mais próxima para um atendimento especializado em sua região.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/betim"
              className="group relative h-48 flex items-center justify-center rounded-sm overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors z-10"></div>
              <img 
                src="https://bragabitencourt.com/wp-content/uploads/2026/06/betim-city.jpg" 
                alt="Betim" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="relative z-20 text-white text-3xl font-cinzel tracking-widest uppercase">Betim</span>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold-light text-xs font-bold uppercase tracking-widest border-b border-gold-light">Ver Unidade</span>
              </div>
            </Link>

            <Link 
              to="/belo-horizonte"
              className="group relative h-48 flex items-center justify-center rounded-sm overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors z-10"></div>
              <img 
                src="https://bragabitencourt.com/wp-content/uploads/2026/06/bh-city.jpg" 
                alt="Belo Horizonte" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="relative z-20 text-white text-3xl font-cinzel tracking-widest uppercase text-center px-4 leading-tight">Belo Horizonte</span>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-gold-light text-xs font-bold uppercase tracking-widest border-b border-gold-light">Ver Unidade</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
