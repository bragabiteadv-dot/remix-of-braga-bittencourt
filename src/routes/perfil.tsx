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
      title: "Perfil - Dr. Carlos Javét Bitencourt | Braga Bitencourt Advogados",
      description:
        "Conheça Dr. Carlos Javét Bitencourt, especialista em Direito de Família e Sucessões.",
      image: OG_IMAGE,
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
      <ContactForm />
    </>
  );
}
