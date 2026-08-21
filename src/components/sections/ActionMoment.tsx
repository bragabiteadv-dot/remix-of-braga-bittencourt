import actionMoment from "@/assets/action-moment-new.jpg";

export const ActionMoment = () => {
  return (
    <section className="py-20 bg-[#08152C] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Left Column - Content */}
          <div className="w-full md:w-2/5 max-w-xl text-center md:text-left">
            <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              O MOMENTO CERTO DE AGIR É <br /> AGORA.
            </h2>
            
            <div className="w-40 h-px bg-white/30 mb-8 mx-auto md:mx-0" />
            
            <p className="text-gray-300 text-lg leading-relaxed font-montserrat">
              Questões de família e herança não resolvidas tendem a se complicar com o tempo. 
              Quanto antes você busca orientação especializada, mais opções e mais controle você tem sobre o desfecho.
            </p>
          </div>

          {/* Right Column - Image with Frame */}
          <div className="w-full md:w-3/5 flex justify-center items-center">
            <div className="relative w-full max-w-2xl mx-5 my-5 md:mx-8 md:my-8">
              {/* Decorative offset frames behind the photo */}
              <div
                className="absolute pointer-events-none z-[1] -top-5 -left-5 right-5 bottom-5 md:-top-8 md:-left-8 md:right-8 md:bottom-8 border-2 md:border-[3px] border-white"
                aria-hidden="true"
              />
              <div
                className="absolute pointer-events-none z-[1] top-5 left-5 -right-5 -bottom-5 md:top-8 md:left-8 md:-right-8 md:-bottom-8 border-2 md:border-[3px] border-white"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative z-[3] overflow-hidden shadow-2xl">
                <img
                  src={actionMoment}
                  alt="Aperto de mãos profissional entre advogada e cliente"
                  width={383}
                  height={186}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};
