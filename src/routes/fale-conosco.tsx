import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/sections/ContactForm";

export const Route = createFileRoute("/fale-conosco")({
  component: FaleConosco,
  head: () =>
    buildSeo({
      path: "/fale-conosco",
      title: "Contato | Braga Bitencourt Advogados em Betim e BH",
      description:
        "Entre em contato com a Braga Bitencourt Advogados em Betim ou Belo Horizonte. Fale com nossa equipe pelo WhatsApp, telefone ou formulário.",
      image: OG_IMAGE,
      type: "website",
    }),
});

function FaleConosco() {
  return (
    <div className="pt-20 bg-navy">
      <ContactForm headingLevel="h1" imageAlt="Fale com a Braga BItencourt Advogados" />
    </div>
  );
}
