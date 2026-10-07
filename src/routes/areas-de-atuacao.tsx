import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { createFileRoute, Link } from "@tanstack/react-router";
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
      title: "Áreas de Atuação Jurídica | Braga Bitencourt",
      description:
        "Conheça nossas áreas de atuação em Direito de Família, Divórcio, Guarda, Pensão, Partilha, Sucessões, Inventário e Direito Internacional.",
      image: OG_IMAGE,
      type: "website",
    }),
});

function AreasAtuacao() {
  return (
    <>
      <Hero />
      <TeamGrid />
      <ServiceListing />
      <div className="bg-navy py-8 text-center">
        <Link to="/servicos-internacionais" className="btn-primary">Serviços no Brasil para residentes no exterior</Link>
      </div>
      <ServicesTicker />
      <CallToActionBanner />
      <ContactForm imageAlt="Veja as áreas de atuação da Braga Bitencourt" />
      <Testimonials />
    </>
  );
}
