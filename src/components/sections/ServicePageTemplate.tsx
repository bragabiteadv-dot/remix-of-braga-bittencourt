import { ContactForm } from "../components/sections/ContactForm";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function ServicePageTemplate({ 
  city, 
  serviceTitle, 
  description, 
  content,
  parentHref
}: { 
  city: string, 
  serviceTitle: string, 
  description: string,
  content: string,
  parentHref: string
}) {
  return (
    <div className="pt-24 pb-24">
      <section className="bg-navy py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to={parentHref as any}
            className="inline-flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-widest mb-8 hover:gap-4 transition-all"
          >
            <ArrowLeft size={14} /> Voltar para {city}
          </Link>
          <h1 className="text-white text-4xl md:text-6xl font-cinzel mb-6 leading-tight max-w-4xl">
            {serviceTitle} em {city}
          </h1>
          <p className="text-white/60 text-lg font-montserrat max-w-2xl font-light">
            {description}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="prose prose-navy max-w-none">
              <div className="text-navy/80 font-montserrat leading-relaxed space-y-6" dangerouslySetInnerHTML={{ __html: content }}>
              </div>
            </div>
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="p-1 bg-gold-gradient rounded-sm shadow-2xl">
                <div className="bg-navy p-8 md:p-12 rounded-sm text-center">
                  <h3 className="text-white text-2xl font-cinzel mb-4">Inicie sua Consulta</h3>
                  <p className="text-white/50 text-sm mb-8 font-montserrat">
                    Nossa equipe em {city} está à disposição para analisar seu caso com total sigilo.
                  </p>
                  <a 
                    href="https://wa.me/5531980260880"
                    className="inline-block w-full bg-gold-gradient text-navy font-bold py-4 rounded-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
                  >
                    Falar agora no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
}
