import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/fale-conosco")({
  component: FaleConosco,
  head: () => ({
    meta: [
      { title: "Fale Conosco | Braga Bitencourt Advogados" },
      { name: "description", content: "Entre em contato conosco via WhatsApp, Email ou visite nossas sedes em BH e Betim." },
      { property: "og:title", content: "Fale Conosco | Braga Bitencourt Advogados" },
      { property: "og:description", content: "Entre em contato conosco via WhatsApp, Email ou visite nossas sedes em BH e Betim." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/fale-conosco" }],
  }),
});

function FaleConosco() {
  return (
    <div className="pt-20">
      <ContactForm />
    </div>
  );
}
