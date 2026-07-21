import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Calendar } from "lucide-react";
import { ARTICLES, type Category } from "@/lib/articles";

export const Route = createFileRoute("/artigos")({
  component: Artigos,
  head: () => ({
    meta: [
      { title: "Artigos e Blog | Braga Bitencourt Advogados" },
      { name: "description", content: "Conteúdos jurídicos práticos e atualizados sobre Família, Sucessões e Direito Internacional Privado." },
      { property: "og:title", content: "Artigos e Blog | Braga Bitencourt Advogados" },
      { property: "og:description", content: "Conteúdos jurídicos práticos e atualizados. Use a busca ou filtre por categoria." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/artigos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
});


const CATEGORIES: Category[] = ["Família", "Sucessões", "Internacional", "Patrimônio", "Empresarial"];

function Artigos() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Category | null>(null);

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchQ = query.trim() === "" || (a.title + " " + a.excerpt).toLowerCase().includes(query.toLowerCase());
      const matchC = !active || a.category === active;
      return matchQ && matchC;
    });
  }, [query, active]);

  return (
    <div className="pt-32 pb-24 bg-gradient-to-b from-white via-white to-[#f5eee0] min-h-screen">
      <div className="container mx-auto">
        <header className="mb-10">
          <h1 className="text-navy text-4xl md:text-5xl font-cinzel mb-3">Artigos e Blog</h1>
          <p className="text-navy/60 font-montserrat">
            Conteúdos práticos e atualizados com linguagem clara. Use a busca ou filtre por categoria.
          </p>
        </header>

        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(40,54,80,0.15)] border border-navy/5 p-6 md:p-8 mb-10 grid gap-6 md:grid-cols-[minmax(260px,320px)_1fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-navy/50 font-montserrat mb-2">Pesquise</p>
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar..."
                className="w-full pl-4 pr-12 py-3 rounded-full bg-[#f7f2e7] border border-transparent focus:border-gold-light focus:outline-none font-montserrat text-navy placeholder:text-navy/40 transition"
              />
              <button
                aria-label="Buscar"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gold-gradient text-navy flex items-center justify-center shadow-md hover:shadow-lg transition"
              >
                <Search size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-navy/50 font-montserrat mb-2 text-center">Categorias</p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActive(null)}
                className={`px-4 py-2 rounded-full text-xs font-montserrat tracking-wide transition border ${
                  active === null
                    ? "bg-gold-gradient text-navy border-transparent shadow-md"
                    : "bg-white text-navy/70 border-navy/10 hover:border-gold-light hover:text-navy"
                }`}
              >
                Todos
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat === active ? null : cat)}
                  className={`px-4 py-2 rounded-full text-xs font-montserrat tracking-wide transition border flex items-center gap-2 ${
                    active === cat
                      ? "bg-gold-gradient text-navy border-transparent shadow-md"
                      : "bg-white text-navy/70 border-navy/10 hover:border-gold-light hover:text-navy"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${active === cat ? "bg-navy" : "bg-gold-light"}`} />
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-navy/50 font-montserrat">
            Nenhum artigo encontrado. Tente outra busca ou categoria.
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(40,54,80,0.15)] border border-navy/5 hover:shadow-[0_20px_50px_-20px_rgba(40,54,80,0.35)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-navy/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-montserrat">
                    <Calendar size={12} />
                    {article.date}
                  </div>
                  <div className="absolute top-3 right-3 bg-gold-gradient text-navy text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full font-montserrat">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-navy font-cinzel text-lg leading-snug mb-3 line-clamp-3 min-h-[4.5rem]">
                    {article.title}
                  </h2>
                  <p className="text-navy/60 font-montserrat text-sm leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button className="w-full py-3 rounded-full bg-gold-gradient text-navy font-montserrat text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg hover:brightness-105 transition-all">
                      Leia mais
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
