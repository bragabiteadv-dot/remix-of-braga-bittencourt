import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";

export const Route = createFileRoute("/betim/advocacia-internacional")({
  component: BetimInternacional,
  head: () => ({
    meta: [
      { title: "Direito Internacional em Betim | Braga Bitencourt Advogados" },
      { name: "description", content: "Homologação de sentenças estrangeiras e demandas jurídicas internacionais em Betim." },
      { property: "og:title", content: "Direito Internacional em Betim | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/betim/advocacia-internacional" },
    ],
    links: [{ rel: "canonical", href: "/betim/advocacia-internacional" }],
  }),
});

function BetimInternacional() {
  return (
    <ServicePageTemplate 
      city="Betim"
      serviceTitle="Direito Internacional"
      description="Soluções jurídicas globais para brasileiros residentes no exterior e estrangeiros no Brasil."
      parentHref="/betim"
      content={`
        <p>Em um mundo globalizado, questões familiares e sucessórias frequentemente atravessam fronteiras. Oferecemos suporte especializado para garantir a validade de atos jurídicos em diferentes jurisdições.</p>
        <p>Áreas de atuação em Betim:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Homologação de Sentença Estrangeira:</strong> Validação de divórcios e decisões estrangeiras no STJ.</li>
          <li><strong>Divórcio Internacional:</strong> Dissolução de casamentos realizados no exterior.</li>
          <li><strong>Inventário Internacional:</strong> Gestão de bens localizados em múltiplos países.</li>
          <li><strong>Sequestro Internacional de Crianças:</strong> Atuação em casos regidos pela Convenção de Haia.</li>
          <li><strong>Consultoria em Lei Aplicável:</strong> Orientação sobre normas de direito privado internacional.</li>
        </ul>
      `}
    />
  );
}
