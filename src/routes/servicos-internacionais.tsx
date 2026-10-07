import { createFileRoute } from "@tanstack/react-router";
import { ResidentDirectory } from "@/components/landing/ResidentDirectory";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/servicos-internacionais")({
  head: () => buildSeo({ path: "/servicos-internacionais", title: "Serviços no Brasil para Residentes no Exterior | Braga Bitencourt", description: "Encontre serviços de Família, Sucessões e Direito Internacional Privado no Brasil por local de residência. Braga Bitencourt, atendimento presencial e online.", type: "website" }),
  component: ResidentDirectory,
});