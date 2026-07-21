import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { TeamGrid } from "../components/sections/TeamGrid";
import { ServicesTicker } from "../components/sections/ServicesTicker";
import { HistorySection } from "../components/sections/HistorySection";
import { FounderCard } from "../components/sections/FounderCard";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/perfil")({
  component: Perfil,
  head: () => ({
    meta: [
      { title: "Perfil - Dr. Carlos Javét Bitencourt | Braga Bitencourt Advogados" },
      { name: "description", content: "Conheça Dr. Carlos Javét Bitencourt, especialista em Direito de Família e Sucessões." },
      { property: "og:title", content: "Perfil - Dr. Carlos Javét Bitencourt | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/perfil" },
    ],
    links: [{ rel: "canonical", href: "/perfil" }],
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
