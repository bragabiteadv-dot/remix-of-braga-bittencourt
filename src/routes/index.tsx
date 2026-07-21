import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/sections/Hero";
import { FeatureGrid } from "../components/sections/FeatureGrid";
import { TeamGrid } from "../components/sections/TeamGrid";
import { Differentials } from "../components/sections/Differentials";
import { ServicesTicker } from "../components/sections/ServicesTicker";
import { HistorySection } from "../components/sections/HistorySection";
import { ServiceListing } from "../components/sections/ServiceListing";
import { CallToActionBanner } from "../components/sections/CallToActionBanner";
import { PracticeAreas } from "../components/sections/PracticeAreas";
import { LocationsSection } from "../components/sections/LocationsSection";
import { FounderCard } from "../components/sections/FounderCard";
import { ActionMoment } from "../components/sections/ActionMoment";
import { FAQ } from "../components/sections/FAQ";
import { GlobalReach } from "../components/sections/GlobalReach";
import { Testimonials } from "../components/sections/Testimonials";
import { PhysicalPresence } from "../components/sections/PhysicalPresence";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Braga Bitencourt Advogados | Família e Sucessões" },
      { name: "description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais. Inventários, divórcios e planejamento sucessório." },
      { property: "og:title", content: "Braga Bitencourt Advogados | Família e Sucessões" },
      { property: "og:description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais. Inventários, divórcios e planejamento sucessório." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      <LocationsSection />
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
