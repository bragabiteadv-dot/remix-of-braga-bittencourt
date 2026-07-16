import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LocationTemplate } from "../components/sections/LocationTemplate";
import { User, FileText, Globe } from "lucide-react";

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
      description: "Divórcio consensual ou litigioso · Partilha de bens · Guarda e regulamentação de visitas · Pensão alimentícia · Pacto antenupcial · Tutela e Curatela · Medidas Protetivas",
      icon: <User size={32} strokeWidth={2.5} />,
      href: "/betim/advocacia-familia"
    },
    {
      title: "Direito das Sucessões",
      description: "Inventário judicial e extrajudicial · Testamentos · Planejamento sucessório · Holdings familiares · Doação e transferência de bens em vida",
      icon: <FileText size={32} strokeWidth={2.5} />,
      href: "/betim/advocacia-sucessoes"
    },
    {
      title: "Privado Internacional",
      description: "Homologação de sentenças estrangeiras · Autorização de viagem para menores · Divórcios e guardas com partes no exterior · Transcrições e averbações",
      icon: <Globe size={32} strokeWidth={2.5} />,
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

