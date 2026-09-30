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
      title: "Dúvidas sobre Direito de Família e Sucessões | Braga Bitencourt",
      description:
        "Tire dúvidas sobre divórcio, guarda, pensão, partilha, inventário e outros temas jurídicos. Encontre informações e fale com nossa equipe.",
      image: OG_IMAGE,
      type: "website",
    }),
});

function Duvidas() {
  return (
    <>
      <FAQ
        headingLevel="h1"
        imageAlt="Braga Bitencourt Advogados - Tire suas dúvidas sobre família, sucessões e internacional privado"
      />
      <ContactForm />
    </>
  );
}
