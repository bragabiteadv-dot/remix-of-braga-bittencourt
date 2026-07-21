import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "../components/sections/FAQ";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/duvidas")({
  component: Duvidas,
  head: () => ({
    meta: [
      { title: "Dúvidas Frequentes | Braga Bitencourt Advogados" },
      { name: "description", content: "Tire suas dúvidas sobre Direito de Família, Sucessões e Demandas Internacionais. Fale com nossa equipe de advogados especializados." },
      { property: "og:title", content: "Dúvidas Frequentes | Braga Bitencourt Advogados" },
      { property: "og:description", content: "Tire suas dúvidas sobre Direito de Família, Sucessões e Demandas Internacionais. Fale com nossa equipe de advogados especializados." },
      { property: "og:url", content: "/duvidas" },
    ],
    links: [{ rel: "canonical", href: "/duvidas" }],
  }),
});

function Duvidas() {
  return (
    <>
      <FAQ />
      <ContactForm />
    </>
  );
}
