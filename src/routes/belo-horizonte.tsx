import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LocationTemplate } from "../components/sections/LocationTemplate";
import { Shield, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/belo-horizonte")({
  component: BeloHorizonteLayout,
  head: () => ({
    meta: [
      { title: "Advocacia em Belo Horizonte | Braga Bitencourt Advogados" },
      { name: "description", content: "Escritório de advocacia em Belo Horizonte especializado em Direito de Família, Sucessões e Internacional." },
      { property: "og:title", content: "Advocacia em Belo Horizonte | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/belo-horizonte" },
    ],
    links: [{ rel: "canonical", href: "/belo-horizonte" }],
  }),
});

function BeloHorizonteLayout() {
  return <Outlet />;
}

export function BeloHorizonteIndex() {
  const services = [
    {
      title: "Direito de Família",
      description: "Divórcios complexos, guarda, pensão e partilha de bens em Belo Horizonte.",
      icon: <Users size={32} />,
      href: "/belo-horizonte/advocacia-familia"
    },
    {
      title: "Direito das Sucessões",
      description: "Inventários, planejamento sucessório e gestão de heranças na capital mineira.",
      icon: <Shield size={32} />,
      href: "/belo-horizonte/advocacia-sucessoes"
    },
    {
      title: "Direito Internacional",
      description: "Consultoria internacional e homologação de sentenças estrangeiras em BH.",
      icon: <Globe size={32} />,
      href: "/belo-horizonte/advocacia-internacional"
    }
  ];

  return (
    <LocationTemplate 
      city="Belo Horizonte"
      address="Av. Raja Gabaglia, 2000, sala 614, Bloco 1 - Alpes, Belo Horizonte - MG"
      mapLink="https://maps.google.com/?q=place_id:ChIJN6Hrhwq-pgARC_1Evk1cels"
      services={services}
    />
  );
}

