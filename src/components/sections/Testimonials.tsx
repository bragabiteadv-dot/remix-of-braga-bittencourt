import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import t1 from "@/assets/testimonial-1.png.asset.json";
import t2 from "@/assets/testimonial-2.png.asset.json";
import t3 from "@/assets/testimonial-3.png.asset.json";
import t4 from "@/assets/testimonial-4.png.asset.json";
import t5 from "@/assets/testimonial-5.png.asset.json";

const testimonials = [t1, t2, t3, t4, t5];

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#c5a880] font-montserrat tracking-[0.3em] text-sm uppercase block mb-4">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-[#0b1528] mb-6">
            O QUE NOSSOS CLIENTES ESTÃO FALANDO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mx-auto"></div>
        </div>

        <div className="relative group">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <img
                      src={t.url}
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880] hover:bg-[#c5a880] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 rounded-full bg-[#c5a880]/10 border border-[#c5a880]/30 text-[#c5a880] hover:bg-[#c5a880] hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
