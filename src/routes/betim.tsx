import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LocationTemplate } from "../components/sections/LocationTemplate";
import { Shield, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/betim")({
  component: BetimLayout,
  head: () => ({
    meta: [
      { title: "Advocacia em Betim | Braga Bitencourt Advogados" },
      { name: "description", content: "Escritório de advocacia em Betim especializado em Direito de Família, Sucessões e Internacional." },
      { property: "og:title", content: "Advocacia em Betim | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/betim" },
    ],
    links: [{ rel: "canonical", href: "/betim" }],
  }),
});

function BetimLayout() {
  return <Outlet />;
}

export function BetimIndex() {
  const services = [
    {
      title: "Direito de Família",
      description: "Divórcios, guarda de filhos, pensão alimentícia e reconhecimento de união estável em Betim.",
      icon: <Users size={32} />,
      href: "/betim/advocacia-familia"
    },
    {
      title: "Direito das Sucessões",
      description: "Inventários judiciais e extrajudiciais, testamentos e planejamento sucessório estratégico.",
      icon: <Shield size={32} />,
      href: "/betim/advocacia-sucessoes"
    },
    {
      title: "Direito Internacional",
      description: "Homologação de sentenças estrangeiras e demandas internacionais envolvendo brasileiros e estrangeiros.",
      icon: <Globe size={32} />,
      href: "/betim/advocacia-internacional"
    }
  ];

  return (
    <LocationTemplate 
      city="Betim"
      address="Av. Amazonas, 1446, salas 706/707, Brasileia, Betim - MG"
      mapLink="https://maps.google.com/?q=place_id:ChIJGXt5913DpgARaifpf_awe_c"
      services={services}
    />
  );
}

