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
      title: "Braga Bitencourt Advogados | Família, Sucessões e Direito Internacional",
      description:
        "Braga Bitencourt Advogados atua em Direito de Família, Sucessões e Direito Internacional Privado, com atendimento em Belo Horizonte, Betim e para clientes no Brasil e exterior.",
      image: OG_IMAGE,
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
      <ContactForm />
    </>
  );
}
