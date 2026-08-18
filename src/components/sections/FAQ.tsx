import React, { useState } from 'react';
import { Plus, Phone } from 'lucide-react';
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";
import escritorioImg from "@/assets/escritorio-braga-bitencourt.jpg";

const faqData = [
  {
    category: "Direito de Família",
    items: [
      {
        id: "01",
        question: "Posso escolher se pretendo me divorciar na justiça ou em cartório?",
        answer: "Depende. Via judicial é possível que todo tipo de divórcio seja realizado, em cartórios, contudo, há restrições. Em cartórios somente é possível a realização de divórcios onde não se discuta direito de menores e incapazes, a exemplo de alimentos para filhos, guarda e regime de convivência."
      },
      {
        id: "02",
        question: "Posso alternar meu regime de casamento?",
        answer: "Sim, exceto que não tenha se casado pelo regime da separação obrigatória de bens (maiores de 70 anos). Conforme art. 1639 do Código Civil, a modificação do regime de bens demanda: i) pedido formulado por ambos os cônjuges; ii) autorização judicial; iii) indicação de motivo relevante; iv) inexistência de prejuízo de terceiros e dos próprios cônjuges."
      },
      {
        id: "03",
        question: "Posso parar de pagar pensão assim que meu filho estabelecer a maioridade (18 anos)?",
        answer: "Não, a maioridade civil dos filhos não faz cessar automaticamente o pensionamento. É preciso ajuizar ação exoneratória de pensão alimentícia para que, por Sentença judicial, o juiz determine que cessem os pagamentos."
      },
      {
        id: "04",
        question: "Como e quando posso pedir revisão da pensão alimentícia?",
        answer: "A revisão de pensão alimentícia deve ser solicitada judicialmente por uma ação revisional de alimentos, mediante pedido justificado que demonstre que houve mudança na conjuntura financeira de quem paga ou na necessidade de quem a recebe."
      },
      {
        id: "05",
        question: "Quem pode requerer a curatela de alguém?",
        answer: "A curatela pode ser requerida por familiares próximos da pessoa incapaz, como cônjuge, pais, irmãos ou filhos. Quando não há familiares disponíveis ou há conflitos de interesses, o Ministério Público também pode atuar no sentido de requerer um curador."
      },
      {
        id: "06",
        question: "Quais são os deveres do curador em relação ao patrimônio do curatelado?",
        answer: "O curador é o gestor do curatelado, devendo geri-lo de forma responsável, protegê-lo e mantê-lo. Também é responsável pela gestão das finanças. A venda de bens do curatelado somente ocorrerá mediante ordem judicial."
      }
    ]
  },
  {
    category: "Direito Internacional Privado",
    items: [
      {
        id: "07",
        question: "Que sentença/decisão estrangeira pode ser homologada no Brasil?",
        answer: "A decisão precisa ter sido proferida por autoridade competente (juiz ou notário); as partes devem ter sido citadas ou legalmente ocorrido revelia; deve ser acompanhada por tradução oficial; e não pode conter ofensa à soberania nacional."
      },
      {
        id: "08",
        question: "Qual a documentação necessária para homologar decisões estrangeiras?",
        answer: "Inteiro teor da Decisão devidamente apostilada e traduzida por tradutor juramentado no Brasil; Procuração para advogado brasileiro; Cópia digitalizada de Identidade, CPF e Passaporte; Carta de anuência; Certidão de casamento (para divórcio)."
      },
      {
        id: "09",
        question: "Sentenças de guarda de filhos podem ser homologadas no Brasil?",
        answer: "Sim, o procedimento judicial homologatório de Sentenças de guarda de filhos é exatamente o mesmo aplicado às Sentenças de divórcio."
      },
      {
        id: "10",
        question: "Onde tramitam as homologações de Sentenças Estrangeiras?",
        answer: "As ações de homologações de Sentença estrangeira tramitam exclusivamente no STJ – Superior Tribunal de Justiça, localizado em Brasília."
      },
      {
        id: "11",
        question: "O que preciso para que meu casamento no exterior gere efeitos no Brasil?",
        answer: "Casamentos feitos em consulado brasileiro ou autoridades estrangeiras precisam ser transcritos cartorariamente no 1º Ofício de Registro Civil da região de sua última moradia no Brasil."
      },
      {
        id: "12",
        question: "É possível adquirir um imóvel ou patrimônio sem estar presente no Brasil?",
        answer: "Sim. Para isso, é necessário outorgar uma Procuração Pública (feita em Consulado Brasileiro ou em notário estrangeiro com Apostila de Haia e tradução juramentada), nomeando um representante de confiança no Brasil com poderes específicos."
      }
    ]
  },
  {
    category: "Direito Sucessório (Inventários)",
    items: [
      {
        id: "13",
        question: "Posso escolher fazer o inventário via judicial ou cartório?",
        answer: "Depende. Na justiça é possível fazer qualquer tipo de inventário. Contudo, em cartórios, somente é permitido quando todos os herdeiros são capazes (maiores de idade), estão de acordo com os termos da partilha e não existe testamento deixado pelo falecido."
      },
      {
        id: "14",
        question: "É possível fazer inventário em cartório sem advogado?",
        answer: "Não. Tanto no inventário judicial quanto no extrajudicial (cartório), a presença do advogado é obrigatória por lei. O advogado é quem direciona a partilha, garante o cumprimento das exigências e protege os direitos dos herdeiros."
      },
      {
        id: "15",
        question: "Há alguma tributação a ser paga no inventário?",
        answer: "Sim. Ao realizar o inventário, é obrigatório o recolhimento do ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) em favor do Estado. A alíquota varia conforme o valor dos bens transmitidos."
      },
      {
        id: "16",
        question: "Os bens recebidos via inventário geram Imposto de Renda?",
        answer: "Não. A herança em si é isenta de Imposto de Renda para quem a recebe. No entanto, os bens devem ser declarados no IR do herdeiro no ano seguinte à conclusão do inventário."
      },
      {
        id: "17",
        question: "É possível vender um imóvel ainda em inventário?",
        answer: "Sim. É possível realizar a venda de imóveis no curso do inventário, desde que haja concordância dos herdeiros e uma autorização específica do juiz (alvará judicial), geralmente motivada pela necessidade de pagar impostos ou dívidas do próprio espólio."
      }
    ]
  }
];

export const FAQ = ({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" } = {}) => {
  const Heading = headingLevel;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const filteredData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <section className="bg-[#f8fafc] py-16 px-10 md:px-20 lg:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-[13px] font-medium text-gray-500 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#c5a880] rounded-full"></span>
            Respostas rápidas e claras, sem enrolação
          </div>

          <Heading className="text-4xl font-bold text-[#08152C] mb-4 font-cinzel">Dúvidas Frequentes</Heading>
          <p className="text-[#5a6475] mb-8 leading-relaxed font-montserrat">
            Clique em uma pergunta para ver a resposta. Se quiser, pesquise por palavras-chave (ex: "negado", "documentos", "prazo").
          </p>

          <div className="flex gap-4 mb-10">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Pesquisar nas perguntas..."
                className="w-full pl-5 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#c5a880] focus:ring-2 focus:ring-[#c5a880]/20 outline-none transition-all shadow-sm font-montserrat text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-8 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-[#08152C] font-semibold transition-all shadow-sm"
            >
              Limpar
            </button>
          </div>

          <div className="space-y-12">
            {filteredData.map((category) => (
              <div key={category.category}>
                <h3 className="text-[#c5a880] text-lg font-bold uppercase tracking-wider mb-6 border-l-4 border-[#c5a880] pl-4 font-montserrat">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div 
                      key={item.id}
                      className={`bg-white border rounded-xl transition-all duration-300 shadow-sm overflow-hidden ${
                        activeId === item.id ? 'border-[#c5a880]/50 ring-1 ring-[#c5a880]/20' : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                      }`}
                    >
                      <button 
                        className="w-full px-6 py-5 flex justify-between items-center text-left cursor-pointer"
                        onClick={() => toggleAccordion(item.id)}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[#c5a880] text-[13px] font-extrabold border border-[#c5a880]/30 px-2 py-1 rounded-lg bg-[#f5eedf] font-montserrat">
                            {item.id}
                          </span>
                          <span className="font-semibold text-sm lg:text-base text-[#08152C] font-montserrat leading-tight">
                            {item.question}
                          </span>
                        </div>
                        <Plus 
                          className={`w-6 h-6 text-[#c5a880] transition-transform duration-300 ${activeId === item.id ? 'rotate-45' : ''}`}
                        />
                      </button>
                      
                      <div 
                        className={`transition-all duration-400 ease-in-out ${
                          activeId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                      >
                        <div className="px-6 pb-6 text-sm lg:text-[14px] text-[#5a6475] leading-relaxed font-montserrat">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center lg:text-left">
            <WhatsAppCta />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[340px]">
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden sticky top-24 shadow-xl">
            <img 
              src={escritorioImg} 
              alt="Escritório Braga Bitencourt" 
              loading="lazy"
              decoding="async"
              className="w-full h-[200px] object-cover"
            />

            
            <div className="p-8 text-center">
              <h4 className="text-xl font-bold text-[#08152C] mb-4 font-montserrat leading-tight">
                Quer uma orientação rápida?
              </h4>
              <p className="text-sm text-[#5a6475] mb-8 leading-relaxed font-montserrat">
                Se a sua dúvida não estiver aqui, você pode chamar diretamente no WhatsApp e receber um direcionamento inicial com nossa equipe.
              </p>
              
              <WhatsAppCta className="w-full" />
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
};
