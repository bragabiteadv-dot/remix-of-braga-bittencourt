import { useState } from "react";
import { MessageSquare, Phone, User, MapPin, Folder, ChevronDown, FileText } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-cta";
import formOfficeAsset from "@/assets/form-office.png.asset.json";



export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    caso: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.nome}. Sou de ${formData.cidade}. Gostaria de falar sobre: ${formData.caso}.`;
    const url = `https://wa.link/i03d4k`;
    void text;
    window.open(url, "_blank");
  };

  const handleClear = () => {
    setFormData({ nome: "", cidade: "", caso: "" });
  };

  return (
    <section id="contato" className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto bg-navy rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          
          {/* Left Column: Info & Photo */}
          <div className="lg:w-[45%] relative min-h-[500px]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Office Environment" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 p-12 lg:p-16 h-full flex flex-col justify-end">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-gold-dark"></span>
                  <span className="text-gold-light text-xs font-bold tracking-widest uppercase">Contato Imediato</span>
                </div>
                
                <h2 className="text-white text-4xl lg:text-5xl font-cinzel leading-tight">
                  Fale com a equipe de forma simples e direta.
                </h2>
                
                <div className="flex flex-wrap gap-4 pt-4">
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

          {/* Right Column: Form */}
          <div className="lg:w-[55%] p-12 lg:p-20 bg-[#08152C]">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gold-dark"></span>
              <span className="text-gold-light text-xs font-bold tracking-widest uppercase">WhatsApp</span>
              <MessageSquare size={16} className="text-gold-light" />
            </div>
            
            <h3 className="text-white text-3xl font-cinzel mb-4">
              Converse para uma orientação inicial
            </h3>
            <p className="text-white/60 font-montserrat text-sm mb-12">Fale conosco agora.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome Field */}
                <div className="space-y-3">
                  <label className="text-white text-xs font-bold uppercase tracking-wider block">Seu Nome</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: Seu nome"
                      className="w-full bg-[#08152C] border border-white/10 rounded-sm pl-12 pr-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/20 text-sm font-montserrat"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    />
                  </div>
                </div>

                {/* Cidade Field */}
                <div className="space-y-3">
                  <label className="text-white text-xs font-bold uppercase tracking-wider block">Cidade / UF</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                    <input 
                      type="text" 
                      required
                      placeholder="Ex: sua cidade ou estado"
                      className="w-full bg-[#08152C] border border-white/10 rounded-sm pl-12 pr-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/20 text-sm font-montserrat"
                      value={formData.cidade}
                      onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Caso Field */}
              <div className="space-y-3">
                <label className="text-white text-xs font-bold uppercase tracking-wider block">Tipo do Caso</label>
                <div className="relative">
                  <Folder className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-4 h-4" />
                  <select 
                    required
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

              <div className="space-y-6">
                <p className="text-white/40 text-xs font-montserrat italic">
                  Conversa rápida, clara e sem complicação.
                </p>

                <div className="flex items-stretch gap-4">
                  <button 
                    type="button"
                    onClick={handleClear}
                    className="px-6 py-4 bg-[#08152C] border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm min-w-[100px]"
                  >
                    Limpar
                  </button>
                  
                  <button 
                    type="submit"
                    className="btn-primary flex-grow py-4 text-sm"
                  >
                    FALE COM ADVOGADO
                    <WhatsAppIcon />
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
