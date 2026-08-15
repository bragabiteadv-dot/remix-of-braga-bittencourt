import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "../components/sections/FAQ";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/duvidas")({
  component: Duvidas,
  head: () =>
    buildSeo({
      path: "/duvidas",
      title: "Dúvidas Frequentes | Braga Bitencourt Advogados",
      description:
        "Tire suas dúvidas sobre Direito de Família, Sucessões e Demandas Internacionais. Fale com nossa equipe de advogados especializados.",
      image: OG_IMAGE,
    }),
});

function Duvidas() {
  return (
    <>
      <FAQ headingLevel="h1" />
      <ContactForm />
    </>
  );
}
