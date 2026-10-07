import { usePageAltFor } from "@/lib/page-alt";
import { useState } from "react";
import { MessageSquare, User, MapPin, Folder, ChevronDown, FileText } from "lucide-react";
import { WHATSAPP_PHONE, WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import formOffice from "@/assets/i489_11zon.webp";

export function ContactForm({
  headingLevel = "h2",
  imageAlt,
  pageTitle,
}: {
  headingLevel?: "h1" | "h2";
  imageAlt?: string;
  pageTitle?: string;
} = {}) {
  const Heading = headingLevel;
  const resolvedImageAlt = usePageAltFor("form", imageAlt ?? "Braga Bitencourt Contato");

  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    caso: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const path = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, "") : "";
    const pageNames: Record<string, string> = {
      "": "Home",
      "/perfil": "Perfil",
      "/areas-de-atuacao": "Áreas de Atuação",
      "/duvidas": "Dúvidas",
      "/fale-conosco": "Fale Conosco",
      "/artigos": "Artigos",
      "/advogado-divorcio-betim": "Advogado Divórcio Betim",
    };
    const pageName = pageTitle ?? pageNames[path] ?? (path.startsWith("/artigos/") ? "Artigos" : path || "Home");
    let text = `Olá! Acessei a página ${pageName} e gostaria de falar com um especialista.`;
    const nome = formData.nome.trim();
    const cidade = formData.cidade.trim();
    const caso = formData.caso.trim();
    const resumo = formData.mensagem.trim();
    if (nome) text += ` Meu nome é ${nome},`;
    if (cidade) text += ` sou de ${cidade},`;
    if (caso) text += ` meu caso é ${caso}.`;
    if (resumo) text += ` ${resumo}`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };


  const handleClear = () => {
    setFormData({ nome: "", cidade: "", caso: "", mensagem: "" });
  };


  return (
    <section id="contato" className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-navy rounded-sm overflow-hidden shadow-2xl flex flex-col border border-white/5">

          {/* Top: Full-width image */}
          <div className="relative w-full bg-navy">
            <img
              src={formOffice}
              alt={resolvedImageAlt}
              loading="lazy"
              decoding="async"
              width={697}
              height={587}
              className="aspect-[697/587] w-full object-cover object-center"
            />

            {/* Bottom gradient for readability and blend into form */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-gold-dark"></span>
                    <span className="text-gold-light text-xs font-bold tracking-widest uppercase">Contato Imediato</span>
                  </div>

                  <Heading className="text-white text-lg lg:text-2xl font-cinzel font-bold leading-tight">
                    Fale com a equipe de forma simples e direta.
                  </Heading>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-5 py-2 bg-black/40 border border-white/10 rounded-full text-white text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-light"></span>
                    Resposta rápida
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2 bg-black/40 border border-white/10 rounded-full text-white text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-light"></span>
                    Atendimento objetivo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Form */}
          <form onSubmit={handleSubmit} className="p-12 lg:p-20 bg-[#08152C]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Left column */}
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold-dark"></span>
                  <span className="text-gold-light text-xs font-bold tracking-widest uppercase">WhatsApp</span>
                  <MessageSquare size={16} className="text-gold-light" />
                </div>

                <h3 className="text-white text-3xl font-cinzel">
                  Converse para uma orientação inicial
                </h3>
                <p className="text-white/60 font-montserrat text-sm">Fale conosco agora.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nome Field */}
                  <div className="space-y-3">
                    <label htmlFor="contact-name" className="text-white text-xs font-bold uppercase tracking-wider block">Seu Nome</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                      <input
                        id="contact-name"
                        name="nome"
                        type="text"
                        placeholder="Ex: Seu nome"
                        className="w-full bg-[#08152C] border border-white/10 rounded-sm pl-12 pr-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/60 text-sm font-montserrat"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>
                  </div>

                  {/* Cidade Field */}
                  <div className="space-y-3">
                    <label htmlFor="contact-city" className="text-white text-xs font-bold uppercase tracking-wider block">Cidade / UF</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                      <input
                        id="contact-city"
                        name="cidade"
                        type="text"
                        placeholder="Ex: sua cidade ou estado"
                        className="w-full bg-[#08152C] border border-white/10 rounded-sm pl-12 pr-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/60 text-sm font-montserrat"
                        value={formData.cidade}
                        onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-8">
                {/* Caso Field */}
                <div className="space-y-3">
                  <label htmlFor="contact-case" className="text-white text-xs font-bold uppercase tracking-wider block">Tipo do Caso</label>
                  <div className="relative">
                    <Folder className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                    <select
                      id="contact-case"
                      name="caso"
                      className="w-full bg-[#08152C] border border-white/10 rounded-sm pl-12 pr-12 py-4 text-white focus:outline-none focus:border-gold-light transition-colors appearance-none text-sm font-montserrat"
                      value={formData.caso}
                      onChange={(e) => setFormData({...formData, caso: e.target.value})}
                    >
                      <option value="" disabled>Ex: Divórcio, inventário, homologação de sentença estrangeira...</option>
                      <option value="Divórcio" className="bg-[#08152C]">Divórcio</option>
                      <option value="Inventário" className="bg-[#08152C]">Inventário</option>
                      <option value="Guarda / Pensão" className="bg-[#08152C]">Guarda / Pensão</option>
                      <option value="Sucessão / Testamento" className="bg-[#08152C]">Sucessão / Testamento</option>
                      <option value="Direito Internacional" className="bg-[#08152C]">Direito Internacional</option>
                      <option value="Outros" className="bg-[#08152C]">Outros assuntos</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4 pointer-events-none" />
                  </div>
                </div>

                {/* Mensagem Field */}
                <div className="space-y-3">
                  <label htmlFor="contact-summary" className="text-white text-xs font-bold uppercase tracking-wider block">Resumo do caso</label>
                  <div className="relative">
                    <FileText className="absolute left-4 top-4 text-white/30 w-4 h-4" />
                    <textarea
                      id="contact-summary"
                      name="mensagem"
                      rows={5}
                      placeholder="Descreva brevemente sua situação..."
                      className="w-full bg-[#08152C] border border-white/10 rounded-sm pl-12 pr-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/60 text-sm font-montserrat resize-none"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-white/70 text-xs font-montserrat italic">
                    Conversa rápida, clara e sem complicação.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch gap-4">
                    <button
                      type="button"
                      onClick={handleClear}
                      className="px-6 py-4 bg-[#08152C] border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm sm:min-w-[100px]"
                    >
                      Limpar
                    </button>

                    <button
                      type="submit"
                      className="btn-primary flex-grow min-w-0 py-4 text-[13px] sm:text-sm"
                    >
                      <span className="min-w-0 sm:whitespace-nowrap">FALE COM ADVOGADO</span>
                      <WhatsAppIcon />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
