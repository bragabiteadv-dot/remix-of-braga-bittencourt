import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Calendar } from "lucide-react";

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

type Category = "Família" | "Sucessões" | "Internacional" | "Patrimônio" | "Empresarial";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: Category;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Divórcio consensual: como agilizar o processo e proteger o patrimônio da família",
    excerpt: "O divórcio consensual é uma alternativa mais rápida e menos desgastante para casais que desejam encerrar o vínculo conjugal. Entenda o passo a passo...",
    date: "19 de Março de 2026",
    category: "Família",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Inventário extrajudicial: quando é possível e quais documentos você vai precisar",
    excerpt: "O inventário extrajudicial permite dividir o patrimônio deixado pelo falecido em cartório, de forma mais ágil. Veja os requisitos e vantagens...",
    date: "19 de Março de 2026",
    category: "Sucessões",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Guarda compartilhada: direitos, deveres e como o juiz decide o melhor interesse da criança",
    excerpt: "Questões familiares costumam envolver emoções intensas, decisões urgentes e dúvidas que afetam diretamente a rotina e o patrimônio da família...",
    date: "19 de Março de 2026",
    category: "Família",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Planejamento sucessório: como blindar o patrimônio e evitar conflitos entre herdeiros",
    excerpt: "O planejamento sucessório é uma ferramenta estratégica que permite organizar a transmissão de bens em vida, reduzindo custos e conflitos futuros...",
    date: "06 de Março de 2026",
    category: "Patrimônio",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Casamento no exterior: como reconhecer e registrar sua união no Brasil",
    excerpt: "Casais que se casam fora do país precisam seguir procedimentos específicos para que o casamento tenha validade em território brasileiro...",
    date: "06 de Março de 2026",
    category: "Internacional",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Herança no exterior: como brasileiros podem receber bens deixados fora do país",
    excerpt: "Receber uma herança no exterior envolve regras específicas de direito internacional privado. Entenda como proceder para garantir seus direitos...",
    date: "06 de Março de 2026",
    category: "Internacional",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop",
  },
  {
    id: "7",
    title: "Pensão alimentícia: como funciona o cálculo, revisão e cobrança judicial em 2026",
    excerpt: "A pensão alimentícia é um dos temas que mais geram dúvidas no Direito de Família. Isso acontece porque muitas pessoas ainda desconhecem...",
    date: "06 de Março de 2026",
    category: "Família",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
  },
  {
    id: "8",
    title: "Holding familiar: vale a pena para proteger o patrimônio e reduzir tributos?",
    excerpt: "A holding familiar tem se tornado uma solução recorrente para famílias que desejam organizar bens, reduzir carga tributária e planejar a sucessão...",
    date: "06 de Março de 2026",
    category: "Empresarial",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    id: "9",
    title: "União estável: como comprovar, registrar e converter em casamento com segurança jurídica",
    excerpt: "A união estável é reconhecida pela lei brasileira e gera direitos e deveres semelhantes ao casamento. Veja como formalizar corretamente...",
    date: "06 de Março de 2026",
    category: "Família",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
  },
];

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
