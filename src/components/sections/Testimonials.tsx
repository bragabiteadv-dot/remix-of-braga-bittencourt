import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Gomes",
    rating: 5,
    date: "10 meses atrás",
    text: "Gostaria de recomendar o trabalho do Dr. Braga Bitencourt, profissional altamente competente, ético e dedicado. Em todas as situações em que precisei, demonstrou profundo conhecimento jurídico, clareza nas orientações e total comprometimento com os resultados. Sem dúvida, é uma excelente referência na área.",
  },
  {
    name: "José Carlos Matos",
    rating: 5,
    date: "3 meses atrás",
    text: "Eu gostaria de deixar registrado meu agradecimento ao Dr Javet e todo o escritório. Em momentos difíceis é inestimável o valor de se poder confiar em alguém como ele, sempre muito preciso e atencioso, competente e de confiança! Responde rapidamente qualquer dúvida. Fez os inventários de meus pais, muito rápido e preciso em cada orientação! Profissional e pessoa de confiança. Indico sem a mínima dúvida!",
  },
  {
    name: "Bella sendo bella",
    rating: 5,
    date: "8 meses atrás",
    text: "Gostaria de deixar meu agradecimento ao Dr. Braga pelo excelente trabalho realizado. Ele foi sempre muito atencioso, esteve disponível em todos os momentos para esclarecer nossas dúvidas, seja por ligação ou mensagem, e nos acompanhou de perto durante todo o processo. Eu e meu marido Fabio, estamos mais do que agradecidos e super indicamos o trabalho dele. Profissional dedicado, humano e comprometido com seus clientes. 🙏✨",
  },
  {
    name: "Kátia Carvalho",
    rating: 5,
    date: "2 meses atrás",
    text: "Excelente profissional!! Advogado competente, com vasta experiência e conhecimento altíssimo!! Educado, preciso no que defende... atencioso com o cliente e envolvido na causa.",
  },
  {
    name: "Bruna Leite",
    rating: 5,
    date: "3 meses atrás",
    text: "Excelente advogado, com postura firme e estratégica em casos de Família e Sucessões. Atendimento claro, objetivo e muito profissional. Recomendo o Dr. Javet sem ressalvas!!",
  },
];

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
    <section className="py-24 bg-[#050b16] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid-testimonials" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid-testimonials)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-montserrat tracking-[0.3em] text-sm uppercase block mb-4">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-white mb-6">
            O QUE NOSSOS CLIENTES ESTÃO FALANDO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto"></div>
        </div>

        <div className="relative group">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="h-full bg-[#0c1a32]/40 backdrop-blur-md border border-white/10 p-8 rounded-xl flex flex-col transition-all duration-300 hover:bg-[#0c1a32]/60 hover:border-gold-500/30 group/card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-cinzel text-xl border border-gold-500/30">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-white font-montserrat font-bold text-lg leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{testimonial.date}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>

                    <p className="text-gray-300 font-montserrat leading-relaxed flex-grow italic">
                      "{testimonial.text}"
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-gold-500/60 text-xs font-montserrat tracking-widest uppercase">
                      <div className="h-px flex-grow bg-gold-500/20"></div>
                      <span>Avaliação Verificada</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 backdrop-blur-sm"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/20 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};