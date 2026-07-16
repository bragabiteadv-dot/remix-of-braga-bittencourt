import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/artigos")({
  component: Artigos,
  head: () => ({
    meta: [
      { title: "Artigos e Notícias | Braga Bitencourt Advogados" },
      { name: "description", content: "Conteúdo jurídico especializado sobre Direito de Família e Sucessões." },
      { property: "og:title", content: "Artigos e Notícias | Braga Bitencourt Advogados" },
      { property: "og:url", content: "/artigos" },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
});

function Artigos() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-navy text-5xl font-cinzel mb-8">Artigos e Conteúdo</h1>
        <div className="max-w-2xl mx-auto p-12 bg-navy rounded-sm shadow-2xl">
          <h2 className="text-gold-light text-2xl font-cinzel mb-4 tracking-widest uppercase">Em Breve</h2>
          <p className="text-white/60 font-montserrat leading-relaxed">
            Estamos preparando conteúdos jurídicos exclusivos e atualizações importantes sobre Família e Sucessões para você.
          </p>
          <div className="mt-8">
            <a 
              href="/"
              className="inline-block border border-gold-light text-gold-light px-8 py-3 rounded-sm uppercase tracking-widest hover:bg-gold-light hover:text-navy transition-all"
            >
              Voltar ao Início
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
