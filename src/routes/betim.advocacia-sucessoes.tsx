import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";

export const Route = createFileRoute("/betim/advocacia-sucessoes")({
  component: BetimSucessoes,
  head: () => ({
    meta: [
      { title: "Advocacia de Sucessões em Betim | Braga Bitencourt Advogados" },
      { name: "description", content: "Especialista em inventários, testamentos e planejamento sucessório em Betim." },
      { property: "og:title", content: "Advocacia de Sucessões em Betim | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/betim/advocacia-sucessoes" },
    ],
    links: [{ rel: "canonical", href: "/betim/advocacia-sucessoes" }],
  }),
});

function BetimSucessoes() {
  return (
    <ServicePageTemplate 
      city="Betim"
      serviceTitle="Advocacia de Sucessões"
      description="Segurança jurídica na transferência e preservação do patrimônio familiar."
      parentHref="/betim"
      content={`
        <p>A gestão da sucessão patrimonial é um passo fundamental para evitar conflitos familiares e garantir que a vontade do falecido seja respeitada, minimizando custos tributários e burocráticos.</p>
        <p>Nossos serviços em Betim incluem:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Inventário Judicial e Extrajudicial:</strong> Procedimento para levantamento e partilha de bens.</li>
          <li><strong>Planejamento Sucessório:</strong> Estratégias para organização da herança em vida.</li>
          <li><strong>Testamentos:</strong> Elaboração e registro de disposições de última vontade.</li>
          <li><strong>Doações e Antecipação de Legítima:</strong> Gestão patrimonial preventiva.</li>
          <li><strong>Holding Familiar:</strong> Estruturação jurídica para proteção e gestão de bens.</li>
        </ul>
      `}
    />
  );
}
