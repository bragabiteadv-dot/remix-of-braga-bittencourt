import { buildSeo } from "@/lib/seo";
import { OG_IMAGE } from "@/lib/site-og";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Calendar, ImageIcon } from "lucide-react";
import { ARTICLES, type Category } from "@/lib/articles";

export const Route = createFileRoute("/artigos/")({
  component: Artigos,
  head: () =>
    buildSeo({
      path: "/artigos",
      title: "Artigos Jurídicos | Direito de Família e Sucessões",
      description:
        "Confira artigos jurídicos sobre divórcio, guarda, pensão, partilha, inventário, sucessões e Direito Internacional, produzidos pela Braga Bitencourt.",
      image: OG_IMAGE,
      type: "website",
    }),
});


const CATEGORIES: Category[] = ["Família", "Sucessões", "Internacional"];

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
        <div className="mb-10">
          <h1 className="text-navy text-4xl md:text-5xl font-cinzel mb-3">Artigos e Blog</h1>
          <p className="text-navy/60 font-montserrat">
            Conteúdos práticos e atualizados com linguagem clara. Use a busca ou filtre por categoria.
          </p>
        </div>

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
          <div className="grid gap-8 md:grid-cols-2">
            {filtered.map((article) => (
              <Link
                key={article.id}
                to="/artigos/$slug"
                params={{ slug: article.slug }}
                aria-label={`Ler artigo: ${article.title}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(40,54,80,0.15)] border border-navy/5 hover:shadow-[0_20px_50px_-20px_rgba(40,54,80,0.35)] hover:-translate-y-1 transition-all duration-500 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#f5eee0] via-[#faf6ed] to-[#e8dcc4]">

                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur flex items-center justify-center">
                        <ImageIcon size={22} className="text-gold-light" />
                      </div>
                      <p className="text-navy/40 text-[10px] uppercase tracking-[0.25em] font-montserrat">
                        Imagem em breve
                      </p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                   <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-navy px-4 py-2 font-montserrat text-xs font-semibold text-primary-foreground shadow-lg">
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
                     <span className="block w-full text-center py-3 rounded-full bg-gold-gradient text-navy font-montserrat text-xs uppercase tracking-[0.2em] font-semibold shadow-md group-hover:shadow-lg group-hover:brightness-105 transition-all">
                      Leia mais
                     </span>
                  </div>

                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
