import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
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
  head: () =>
    buildSeo({
      path: "/areas-de-atuacao",
      title: "Áreas de Atuação | Braga Bitencourt Advogados",
      description:
        "Especialidades em Direito de Família, Sucessões e Direito Internacional Privado.",
      image: OG_IMAGE,
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
