import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";

export const Route = createFileRoute("/betim/advocacia-familia")({
  component: BetimFamilia,
  head: () => ({
    meta: [
      { title: "Advocacia de Família em Betim | Braga Bitencourt Advogados" },
      { name: "description", content: "Especialista em divórcios, guarda e pensão alimentícia em Betim." },
      { property: "og:title", content: "Advocacia de Família em Betim | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/betim/advocacia-familia" },
    ],
    links: [{ rel: "canonical", href: "/betim/advocacia-familia" }],
  }),
});

function BetimFamilia() {
  return (
    <ServicePageTemplate 
      city="Betim"
      serviceTitle="Advocacia de Família"
      description="Atendimento estratégico para resolução de conflitos familiares e patrimoniais."
      parentHref="/betim"
      content={`
        <p>O Direito de Família exige não apenas conhecimento técnico profundo, mas também sensibilidade e uma abordagem estratégica para proteger os interesses de todos os envolvidos, especialmente em questões que impactam o futuro dos filhos e a estabilidade patrimonial.</p>
        <p>Nossa atuação em Betim contempla:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Divórcio Judicial e Extrajudicial:</strong> Resolução ágil e segura da dissolução matrimonial.</li>
          <li><strong>Pensão Alimentícia:</strong> Fixação, revisão e execução de alimentos.</li>
          <li><strong>Guarda e Regulamentação de Visitas:</strong> Foco no melhor interesse da criança e do adolescente.</li>
          <li><strong>Reconhecimento e Dissolução de União Estável:</strong> Proteção de direitos convivenciais.</li>
          <li><strong>Interdição e Curatela:</strong> Suporte jurídico para proteção de incapazes.</li>
        </ul>
      `}
    />
  );
}
