import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { institutionalTeamImageSeo, pageImagesSchema } from "@/lib/image-seo";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { TeamGrid } from "../components/sections/TeamGrid";
import { ServicesTicker } from "../components/sections/ServicesTicker";
import { HistorySection } from "../components/sections/HistorySection";
import { FounderCard } from "../components/sections/FounderCard";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/perfil")({
  component: Perfil,
  head: () =>
    buildSeo({
      path: "/perfil",
      title: "Perfil dos Advogados | Braga Bitencourt Advogados",
      description:
        "Conheça a trajetória e atuação dos advogados da Braga Bitencourt Advogados, com experiência em Direito de Família, Sucessões e Direito Internacional.",
      image: OG_IMAGE,
      type: "website",
      // Alt, título e descrição dos retratos da equipe (doc 6) em JSON-LD.
      schema: pageImagesSchema(institutionalTeamImageSeo("/perfil")),
    }),
});

function Perfil() {
  return (
    <>
      <Hero />
      <TeamGrid />
      <ServicesTicker />
      <HistorySection />
      <FounderCard imageAlt="Dr. Javét fundador da Braga Bitencourt Advogados." />
      <ContactForm imageAlt="Braga Bitencourt Advogados Perfil" />
    </>
  );
}
