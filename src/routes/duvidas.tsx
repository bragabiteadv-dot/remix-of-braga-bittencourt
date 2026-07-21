import { createFileRoute } from "@tanstack/react-router";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/duvidas")({
  component: Duvidas,
  head: () => ({
    meta: [
      { title: "Dúvidas Frequentes | Braga Bitencourt Advogados" },
      { name: "description", content: "Perguntas e respostas sobre Direito de Família, Inventários e Divórcios." },
      { property: "og:title", content: "Dúvidas Frequentes | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/duvidas" },
    ],
    links: [{ rel: "canonical", href: "/duvidas" }],
  }),
});

function Duvidas() {
  const faqs = [
    {
      q: "Como funciona o processo de inventário?",
      a: "O inventário é o procedimento para levantamento de bens, dívidas e direitos de uma pessoa falecida, para posterior partilha entre os herdeiros. Pode ser feito de forma judicial ou extrajudicial (em cartório), dependendo da existência de testamento ou herdeiros incapazes."
    },
    {
      q: "Qual a diferença entre divórcio consensual e litigioso?",
      a: "No consensual, ambas as partes concordam com os termos da separação (partilha, guarda, pensão). No litigioso, há divergência, e o juiz decidirá os pontos de conflito após a instrução do processo."
    },
    {
      q: "O que é planejamento sucessório?",
      a: "É um conjunto de estratégias jurídicas para organizar a transferência do patrimônio ainda em vida, visando reduzir custos tributários (ITCD), evitar conflitos familiares e garantir a continuidade de negócios."
    },
    {
      q: "Como funciona a homologação de sentença estrangeira?",
      a: "Decisões proferidas por tribunais estrangeiros (como divórcios realizados no exterior) precisam ser homologadas pelo Superior Tribunal de Justiça (STJ) para terem validade jurídica no Brasil."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#fcfbf8]">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-navy text-5xl font-cinzel text-center mb-16">Dúvidas Frequentes</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>

        <div className="mt-20 p-10 bg-navy rounded-sm text-center shadow-2xl">
          <h3 className="text-white text-2xl font-cinzel mb-6">Ainda tem perguntas?</h3>
          <p className="text-white/60 mb-8 font-montserrat">Nossa equipe está pronta para oferecer uma orientação inicial personalizada.</p>
          <a 
            href="/fale-conosco"
            className="inline-block bg-gold-gradient text-navy font-bold px-10 py-4 rounded-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Falar com Advogado
          </a>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-navy/10 rounded-sm bg-white overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-navy font-bold font-montserrat pr-8">{question}</span>
        {isOpen ? <Minus size={20} className="text-gold-dark" /> : <Plus size={20} className="text-gold-dark" />}
      </button>
      {isOpen && (
        <div className="p-6 pt-0 text-navy/70 text-sm leading-relaxed font-montserrat border-t border-navy/5 bg-navy/[0.02]">
          {answer}
        </div>
      )}
    </div>
  );
}
