import { lazy, Suspense, useEffect, useRef, useState } from 'react';

const RotatingEarth = lazy(() => import('@/components/ui/wireframe-dotted-globe'));

export const GlobalReach = () => {
  const globeRegionRef = useRef<HTMLDivElement | null>(null);
  const [loadGlobe, setLoadGlobe] = useState(false);

  useEffect(() => {
    const globeRegion = globeRegionRef.current;
    if (!globeRegion) return;
    if (typeof IntersectionObserver === 'undefined') {
      setLoadGlobe(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setLoadGlobe(true);
        observer.disconnect();
      },
      { rootMargin: '300px' },
    );
    observer.observe(globeRegion);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#08152C] py-20 overflow-hidden px-10 md:px-20 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <span className="text-gold-light text-xs font-bold uppercase tracking-[0.2em] mb-4 block font-montserrat">
            ATUAÇÃO GLOBAL COM EXCELÊNCIA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white leading-tight mb-6">
            SEU CASO É CONDUZIDO<br />
            COM ESTRATÉGIA, CLAREZA E ACOMPANHAMENTO.
          </h2>
          <p className="text-white/70 text-sm md:text-base font-montserrat max-w-md leading-relaxed">
            Onde você estiver, nossa estrutura jurídica atua com padrão elevado.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-40 bg-white/10 mx-8"></div>

        {/* Right Content - Map */}
        <div ref={globeRegionRef} className="flex-1 flex min-h-[320px] w-full justify-center items-center relative md:min-h-[500px]">
          {loadGlobe ? (
            <Suspense fallback={null}>
              <RotatingEarth width={600} height={600} />
            </Suspense>
          ) : null}
        </div>
      </div>
    </section>
  );
};
