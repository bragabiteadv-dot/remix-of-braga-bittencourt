import { createFileRoute } from "@tanstack/react-router";
import { FounderCard } from "../components/sections/FounderCard";

export const Route = createFileRoute("/perfil")({
  component: Perfil,
  head: () => ({
    meta: [
      { title: "Perfil - Dr. Carlos Javét Bitencourt | Braga Bitencourt Advogados" },
      { name: "description", content: "Conheça Dr. Carlos Javét Bitencourt, especialista em Direito de Família e Sucessões." },
      { property: "og:title", content: "Perfil - Dr. Carlos Javét Bitencourt | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/perfil" },
    ],
    links: [{ rel: "canonical", href: "/perfil" }],
  }),
});

function Perfil() {
  return (
    <div className="pt-20">
      <FounderCard />
    </div>
  );
}
