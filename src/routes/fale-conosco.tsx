import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/fale-conosco")({
  component: FaleConosco,
  head: () =>
    buildSeo({
      path: "/fale-conosco",
      title: "Fale Conosco | Braga Bitencourt Advogados",
      description:
        "Entre em contato conosco via WhatsApp, Email ou visite nossas sedes em BH e Betim.",
      image: OG_IMAGE,
    }),
});

function FaleConosco() {
  return (
    <div className="pt-20 bg-navy">
      <ContactForm headingLevel="h1" />
    </div>
  );
}
