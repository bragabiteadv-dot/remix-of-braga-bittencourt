import { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    caso: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.nome}. Sou de ${formData.cidade}. Gostaria de falar sobre: ${formData.caso}.`;
    const url = `https://wa.me/5531980260880?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleClear = () => {
    setFormData({ nome: "", cidade: "", caso: "" });
  };

  return (
    <section id="contato" className="py-24 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-[#0c1a32] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/5">
          
          {/* Left Column: Info & Photo */}
          <div className="lg:w-2/5 relative">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://bragabitencourt.com/wp-content/uploads/2026/06/escritorio-photo.jpg" 
                alt="Office Environment" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-12 h-full flex flex-col justify-between">
              <div>
                <span className="text-gold-light text-xs font-bold tracking-widest uppercase mb-4 block">Contato Imediato</span>
                <h2 className="text-white text-4xl md:text-5xl font-cinzel leading-tight mb-8">
                  Fale com a equipe de forma simples e direta.
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm italic">
                    <span className="w-2 h-2 rounded-full bg-gold-light"></span>
                    Resposta rápida
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm italic">
                    <span className="w-2 h-2 rounded-full bg-gold-light"></span>
                    Atendimento objetivo
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-12 border-t border-white/10">
                <div className="flex items-center gap-4 text-white/80">
                  <Phone size={20} className="text-gold-light" />
                  <span className="font-bold">(31) 98026-0880</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Mail size={20} className="text-gold-light" />
                  <span className="text-sm">bragabitencourtadv@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-3/5 p-12 lg:p-20 bg-navy/40">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-gold-dark"></span>
              <span className="text-gold-light text-xs font-bold tracking-widest uppercase">WhatsApp</span>
              <MessageSquare size={16} className="text-gold-light" />
            </div>
            
            <h3 className="text-white text-3xl font-cinzel mb-4">
              Converse para uma orientação inicial
            </h3>
            <p className="text-white/50 text-sm mb-12">Fale conosco agora.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Seu Nome</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ex: Seu nome"
                    className="w-full bg-navy/50 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/20"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Cidade / UF</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ex: sua cidade ou estado"
                    className="w-full bg-navy/50 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors placeholder:text-white/20"
                    value={formData.cidade}
                    onChange={(e) => setFormData({...formData, cidade: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-wider">Tipo do Caso</label>
                <select 
                  required
                  className="w-full bg-navy/50 border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-gold-light transition-colors appearance-none"
                  value={formData.caso}
                  onChange={(e) => setFormData({...formData, caso: e.target.value})}
                >
                  <option value="" disabled className="bg-navy">Selecione o assunto</option>
                  <option value="Divórcio" className="bg-navy">Divórcio</option>
                  <option value="Inventário" className="bg-navy">Inventário</option>
                  <option value="Guarda / Pensão" className="bg-navy">Guarda / Pensão</option>
                  <option value="Sucessão / Testamento" className="bg-navy">Sucessão / Testamento</option>
                  <option value="Direito Internacional" className="bg-navy">Direito Internacional</option>
                  <option value="Outros" className="bg-navy">Outros assuntos</option>
                </select>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                <button 
                  type="submit"
                  className="btn-primary btn-shine w-full sm:flex-grow"
                >
                  Falar com Advogado
                  <MessageSquare size={18} />
                </button>

                <button 
                  type="button"
                  onClick={handleClear}
                  className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors py-2 px-4"
                >
                  Limpar
                </button>
              </div>

              <p className="text-center text-[10px] text-white/30 uppercase tracking-[0.2em] pt-4 italic">
                Conversa rápida, clara e sem complicação.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
