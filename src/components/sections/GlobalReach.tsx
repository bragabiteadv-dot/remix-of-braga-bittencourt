import { DeferredGlobe } from './DeferredGlobe';

export const GlobalReach = () => {
  return (
    <section className="bg-[#08152C] py-20 overflow-hidden px-10 md:px-20 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-montserrat">
            ATUAÇÃO GLOBAL COM EXCELÊNCIA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white leading-tight mb-6">
            SEU CASO É CONDUZIDO<br />
            COM ESTRATÉGIA, CLAREZA E ACOMPANHAMENTO.
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-montserrat max-w-md leading-relaxed">
            Onde você estiver, nossa estrutura jurídica atua com padrão elevado.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-40 bg-white/10 mx-8"></div>

        {/* Right Content - Map */}
        <div className="flex-1 flex justify-center items-center relative">
          <DeferredGlobe />
        </div>
      </div>
    </section>
  );
};
