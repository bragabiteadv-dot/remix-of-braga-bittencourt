import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
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
    }),
});

function Perfil() {
  return (
    <>
      <Hero />
      <TeamGrid />
      <ServicesTicker />
      <HistorySection />
      <FounderCard />
      <ContactForm imageAlt="Braga Bitencourt Advogados Perfil" />
    </>
  );
}
