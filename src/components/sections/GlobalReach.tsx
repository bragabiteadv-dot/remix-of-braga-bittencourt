import React from 'react';
import { GlobePulse } from '@/components/ui/cobe-globe-pulse';

export const GlobalReach = () => {
  return (
    <section className="bg-[#050b16] py-20 overflow-hidden px-10 md:px-20 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <span className="text-[#c5a880] text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-montserrat">
            ATUAÇÃO GLOBAL COM EXCELÊNCIA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white leading-tight mb-6">
            SEU CASO É CONDUZIDO<br />
            COM ESTRATÉGIA, CLAREZA<br />
            E ACOMPANHAMENTO.
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-montserrat max-w-md leading-relaxed">
            Onde você estiver, nossa estrutura jurídica atua com padrão elevado.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-40 bg-white/10 mx-8"></div>

        {/* Right Content - Map */}
        <div className="flex-1 flex justify-center items-center relative">
          <GlobePulse
            className="w-full"
            markers={[
              { id: 'pulse-1', location: [-19.92, -43.94], delay: 0 },
              { id: 'pulse-2', location: [38.72, -9.14], delay: 0.4 },
              { id: 'pulse-3', location: [40.71, -74.01], delay: 0.8 },
              { id: 'pulse-4', location: [51.51, -0.13], delay: 1.2 },
              { id: 'pulse-5', location: [35.68, 139.65], delay: 1.6 },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
