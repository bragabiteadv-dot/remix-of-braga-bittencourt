import { createFileRoute } from "@tanstack/react-router";
import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { Hero } from "../components/sections/Hero";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { TeamGrid } from "../components/sections/TeamGrid";
import { Differentials } from "../components/sections/Differentials";
import { ServicesTicker } from "../components/sections/ServicesTicker";
import { HistorySection } from "../components/sections/HistorySection";
import { ServiceListing } from "../components/sections/ServiceListing";
import { CallToActionBanner } from "../components/sections/CallToActionBanner";
import { PracticeAreas } from "../components/sections/PracticeAreas";

import { FounderCard } from "../components/sections/FounderCard";
import { ActionMoment } from "../components/sections/ActionMoment";
import { FAQ } from "../components/sections/FAQ";
import { GlobalReach } from "../components/sections/GlobalReach";
import { Testimonials } from "../components/sections/Testimonials";
import { PhysicalPresence } from "../components/sections/PhysicalPresence";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    buildSeo({
      path: "/",
      title: "Advogados em Betim e Belo Horizonte | Braga Bitencourt",
      description:
        "Escritório de advocacia em Betim e Belo Horizonte especializado em Direito de Família, Sucessões e Direito Internacional. Fale com nossa equipe.",
      image: OG_IMAGE,
      type: "website",
    }),
});

function Index() {
  return (
    <>
      <Hero />

      <TeamGrid />
      <Differentials />
      <ServicesTicker />
      <HistorySection />
      <ServiceListing />
      <CallToActionBanner />
      <PracticeAreas />
      
      <FounderCard />
      <ActionMoment />
      <FAQ />
      <GlobalReach />
      <Testimonials />
      <PhysicalPresence />
      <ContactForm imageAlt="Contato Braga Bitencourt Advogados" />
    </>
  );
}
