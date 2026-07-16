import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "../components/sections/ServicePageTemplate";

export const Route = createFileRoute("/belo-horizonte/advocacia-internacional")({
  component: BHInternacional,
  head: () => ({
    meta: [
      { title: "Direito Internacional em BH | Braga Bitencourt Advogados" },
      { name: "description", content: "Demandas internacionais e homologação de sentenças estrangeiras em Belo Horizonte." },
      { property: "og:title", content: "Direito Internacional em BH | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/belo-horizonte/advocacia-internacional" },
    ],
    links: [{ rel: "canonical", href: "/belo-horizonte/advocacia-internacional" }],
  }),
});

function BHInternacional() {
  return (
    <ServicePageTemplate 
      city="Belo Horizonte"
      serviceTitle="Direito Internacional"
      description="Consultoria jurídica transnacional e suporte para brasileiros no exterior."
      parentHref="/belo-horizonte"
      content={`
        <p>A capital mineira concentra um grande volume de demandas envolvendo brasileiros que residem fora do país. Nossa atuação visa simplificar questões jurídicas complexas que envolvem diferentes ordenamentos.</p>
        <p>Atuação em Belo Horizonte:</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Homologação de Divórcios Estrangeiros:</strong> Regularização de estado civil no Brasil.</li>
          <li><strong>Inventários com Bens no Exterior:</strong> Partilha global de patrimônio.</li>
          <li><strong>Consultas de Direito Comparado:</strong> Suporte em conflitos de leis no espaço.</li>
          <li><strong>Adoção Internacional:</strong> Orientação jurídica em processos transnacionais.</li>
        </ul>
      `}
    />
  );
}
