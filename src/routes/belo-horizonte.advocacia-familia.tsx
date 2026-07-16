import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";

export const Route = createFileRoute("/belo-horizonte/advocacia-familia")({
  component: BHFamilia,
  head: () => ({
    meta: [
      { title: "Advocacia de Família em BH | Braga Bitencourt Advogados" },
      { name: "description", content: "Especialista em divórcios complexos e demandas familiares em Belo Horizonte." },
      { property: "og:title", content: "Advocacia de Família em BH | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/belo-horizonte/advocacia-familia" },
    ],
    links: [{ rel: "canonical", href: "/belo-horizonte/advocacia-familia" }],
  }),
});

function BHFamilia() {
  return (
    <ServicePageTemplate 
      city="Belo Horizonte"
      serviceTitle="Advocacia de Família"
      description="Atuação dedicada em demandas familiares de alta complexidade na capital mineira."
      parentHref="/belo-horizonte"
      content={`
        <p>A Braga Bitencourt oferece em Belo Horizonte um atendimento diferenciado para casos de Direito de Família, combinando discrição absoluta com uma técnica jurídica apurada para proteção do núcleo familiar.</p>
        <p>Nossos pilares de atuação em BH:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Divórcio de Alta Complexidade:</strong> Gestão de grandes partilhas e conflitos societários no divórcio.</li>
          <li><strong>Pensão Alimentícia e Ações de Alimentos:</strong> Foco no equilíbrio do binômio necessidade-possibilidade.</li>
          <li><strong>Alienação Parental e Guarda:</strong> Defesa intransigente do bem-estar dos filhos.</li>
          <li><strong>Pactos Antenupciais:</strong> Planejamento jurídico preventivo para a vida em comum.</li>
        </ul>
      `}
    />
  );
}
