import { createFileRoute } from "@tanstack/react-router";
import { ServicesTicker } from "../components/sections/ServicesTicker";
import { FeatureGrid } from "../components/sections/FeatureGrid";

export const Route = createFileRoute("/areas-de-atuacao")({
  component: AreasAtuacao,
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Braga Bitencourt Advogados" },
      { name: "description", content: "Especialidades em Direito de Família, Sucessões e Direito Internacional." },
      { property: "og:title", content: "Áreas de Atuação | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/areas-de-atuacao" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao" }],
  }),
});

function AreasAtuacao() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 text-center mb-12">
        <h1 className="text-navy text-5xl font-cinzel mb-8">Nossas Especialidades</h1>
        <p className="text-navy/60 max-w-2xl mx-auto italic font-montserrat">
          Atuação multidisciplinar com foco em demandas patrimoniais e familiares complexas.
        </p>
      </div>
      <ServicesTicker />
      <FeatureGrid />
    </div>
  );
}
