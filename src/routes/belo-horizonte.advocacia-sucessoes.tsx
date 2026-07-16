import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";

export const Route = createFileRoute("/belo-horizonte/advocacia-sucessoes")({
  component: BHSucessoes,
  head: () => ({
    meta: [
      { title: "Advocacia de Sucessões em BH | Braga Bitencourt Advogados" },
      { name: "description", content: "Especialista em inventários e planejamento sucessório em Belo Horizonte." },
      { property: "og:title", content: "Advocacia de Sucessões em BH | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/belo-horizonte/advocacia-sucessoes" },
    ],
    links: [{ rel: "canonical", href: "/belo-horizonte/advocacia-sucessoes" }],
  }),
});

function BHSucessoes() {
  return (
    <ServicePageTemplate 
      city="Belo Horizonte"
      serviceTitle="Advocacia de Sucessões"
      description="Excelência técnica na gestão e partilha de patrimônios na capital."
      parentHref="/belo-horizonte"
      content={`
        <p>Em Belo Horizonte, nossa equipe é referência em demandas sucessórias, oferecendo soluções que visam a paz familiar e a eficiência fiscal na transmissão de bens.</p>
        <p>Especialidades em BH:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Inventários Judiciais e Extrajudiciais:</strong> Condução técnica e ágil da partilha.</li>
          <li><strong>Planejamento Sucessório Familiar:</strong> Estruturas para proteção de legado e redução de custos.</li>
          <li><strong>Disputas de Herança:</strong> Representação qualificada em litígios sucessórios.</li>
          <li><strong>Abertura e Registro de Testamentos:</strong> Garantia do cumprimento da última vontade.</li>
        </ul>
      `}
    />
  );
}
