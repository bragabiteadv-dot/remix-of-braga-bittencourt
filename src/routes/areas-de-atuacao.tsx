import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { TeamGrid } from "../components/sections/TeamGrid";
import { ServiceListing } from "../components/sections/ServiceListing";
import { ServicesTicker } from "../components/sections/ServicesTicker";
import { CallToActionBanner } from "../components/sections/CallToActionBanner";
import { ContactForm } from "../components/sections/ContactForm";
import { Testimonials } from "../components/sections/Testimonials";

export const Route = createFileRoute("/areas-de-atuacao")({
  component: AreasAtuacao,
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Braga Bitencourt Advogados" },
      { name: "description", content: "Especialidades em Direito de Família, Sucessões e Direito Internacional Privado." },
      { property: "og:title", content: "Áreas de Atuação | Braga Bitencourt Advogados" },
      { property: "og:description", content: "Especialidades em Direito de Família, Sucessões e Direito Internacional Privado." },
      { property: "og:url", content: "/areas-de-atuacao" },
    ],
    links: [{ rel: "canonical", href: "/areas-de-atuacao" }],
  }),
});

function AreasAtuacao() {
  return (
    <>
      <Hero />
      <TeamGrid />
      <ServiceListing />
      <ServicesTicker />
      <CallToActionBanner />
      <ContactForm />
      <Testimonials />
    </>
  );
}
