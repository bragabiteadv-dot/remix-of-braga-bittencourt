import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Clock, Search, Link2, Share2, ChevronDown, ArrowLeft } from "lucide-react";
import { ARTICLES, getArticleById } from "@/lib/articles";
import { HistorySection } from "@/components/sections/HistorySection";
import { Testimonials } from "@/components/sections/Testimonials";
import { GlobalReach } from "@/components/sections/GlobalReach";

export const Route = createFileRoute("/artigos/$id")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticleById(params.id);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} | Braga Bitencourt Advogados` : "Artigo | Braga Bitencourt Advogados";
    const description = a?.excerpt ?? "Artigo jurídico do escritório Braga Bitencourt Advogados.";
    const url = `/artigos/${params.id}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(a ? [{ property: "og:image", content: a.image }, { name: "twitter:image", content: a.image }] : []),
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [activeId, setActiveId] = useState<string>(article.sections[0]?.id ?? "");
  const [copied, setCopied] = useState(false);

  const filteredSections = useMemo(() => {
    if (!query.trim()) return article.sections;
    const q = query.toLowerCase();
    return article.sections.filter((s) => s.title.toLowerCase().includes(q));
  }, [query, article.sections]);

  const visible = showAll ? filteredSections : filteredSections.slice(0, 6);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* noop */ }
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && (navigator as Navigator & { share?: (data: ShareData) => Promise<void> }).share) {
      try {
        await (navigator as Navigator & { share: (data: ShareData) => Promise<void> }).share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href,
        });
      } catch { /* noop */ }
    } else {
      handleCopy();
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  const related = ARTICLES.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <>
      <div className="pt-28 pb-24 bg-gradient-to-b from-white via-white to-[#f5eee0] min-h-screen">
        <div className="container mx-auto">
          <Link
            to="/artigos"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy text-xs font-montserrat uppercase tracking-[0.2em] mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Voltar para artigos
          </Link>

          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            {/* Sidebar TOC */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(40,54,80,0.15)] border border-navy/5 p-6">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <p className="text-navy font-cinzel text-sm tracking-[0.2em] uppercase">Sumário</p>
                    <div className="h-0.5 w-10 bg-gold-gradient mt-1" />
                  </div>
                  <span className="text-navy/40 text-xs font-montserrat">
                    {article.sections.length} tópicos
                  </span>
                </div>

                <div className="relative mb-4">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40"
                  />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar tópico..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-full bg-[#faf6ed] border border-transparent focus:border-gold-light focus:outline-none font-montserrat text-sm text-navy placeholder:text-navy/40 transition"
                  />
                </div>

                <ul className="space-y-2">
                  {visible.map((s) => {
                    const active = s.id === activeId;
                    return (
                      <li key={s.id}>
                        <button
                          onClick={() => scrollTo(s.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm font-montserrat leading-snug transition-colors ${
                            active
                              ? "bg-[#f5eee0] text-navy border border-gold-light/40"
                              : "bg-white text-navy/75 border border-navy/5 hover:border-gold-light/40 hover:text-navy"
                          }`}
                        >
                          {s.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                {filteredSections.length > 6 && (
                  <button
                    onClick={() => setShowAll((v) => !v)}
                    className="mt-3 w-full flex items-center justify-between px-4 py-3 rounded-lg bg-[#faf6ed] text-navy text-sm font-montserrat font-semibold border border-navy/5 hover:border-gold-light transition"
                  >
                    {showAll ? "Mostrar menos" : "Mostrar mais"}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${showAll ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {/* WhatsApp card */}
              <a
                href="https://wa.me/5531980260880?text=Olá! Vim pelo artigo do site e gostaria de falar com um advogado."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-4 rounded-2xl p-4 bg-[#e8dcc4] border border-[#c5a880]/40 hover:brightness-105 transition"
              >
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#c5a880]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="flex items-center gap-2 text-navy font-montserrat font-semibold text-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                    </svg>
                    Atendimento no WhatsApp
                  </p>
                  <p className="flex items-center gap-1.5 text-navy/70 text-xs font-montserrat mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Clique e fale com a equipe
                  </p>
                </div>
              </a>
            </aside>

            {/* Main content */}
            <article>
              {/* Hero image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 shadow-[0_20px_50px_-25px_rgba(40,54,80,0.35)]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold-gradient text-navy text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full font-montserrat">
                  {article.category}
                </div>
              </div>

              <h1 className="text-navy font-cinzel text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/10 text-navy/70 text-xs font-montserrat">
                  <Calendar size={14} className="text-gold-light" />
                  Publicado em: {article.date}
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/10 text-navy/70 text-xs font-montserrat">
                  <Clock size={14} className="text-gold-light" />
                  {article.readingTime}
                </span>
                <div className="flex-1" />
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/10 text-navy/80 hover:text-navy hover:border-gold-light text-xs font-montserrat transition"
                >
                  <Link2 size={14} />
                  {copied ? "Link copiado" : "Copiar link"}
                </button>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/10 text-navy/80 hover:text-navy hover:border-gold-light text-xs font-montserrat transition"
                >
                  <Share2 size={14} />
                  Compartilhar
                </button>
              </div>

              {/* Intro */}
              <div className="space-y-5 text-navy/85 font-montserrat text-[15px] md:text-base leading-relaxed">
                {article.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Sections */}
              <div className="mt-12 space-y-12">
                {article.sections.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="text-navy font-cinzel text-2xl md:text-3xl leading-tight mb-4">
                      {s.title}
                    </h2>
                    <div className="h-0.5 w-16 bg-gold-gradient mb-6" />
                    <div className="space-y-4 text-navy/85 font-montserrat text-[15px] md:text-base leading-relaxed">
                      {s.content.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-16 p-8 md:p-10 rounded-2xl bg-navy text-center">
                <h3 className="text-white font-cinzel text-2xl md:text-3xl mb-3">
                  Precisa de orientação sobre este tema?
                </h3>
                <p className="text-white/60 font-montserrat text-sm md:text-base mb-6 max-w-xl mx-auto">
                  Nossa equipe está pronta para analisar seu caso com sigilo absoluto e propor a melhor estratégia jurídica.
                </p>
                <a
                  href="https://wa.me/5531980260880?text=Olá! Li o artigo no site e gostaria de falar com um advogado."
                  className="btn-primary inline-flex"
                >
                  <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  FALE COM ADVOGADO
                </a>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div className="mt-16">
                  <h3 className="text-navy font-cinzel text-2xl md:text-3xl mb-8">
                    Continue lendo
                  </h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {related.map((r) => (
                      <Link
                        key={r.id}
                        to="/artigos/$id"
                        params={{ id: r.id }}
                        className="group bg-white rounded-xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                      >
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={r.image}
                            alt={r.title}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <div className="p-5">
                          <p className="text-[10px] uppercase tracking-widest text-gold-light font-montserrat font-semibold mb-2">
                            {r.category}
                          </p>
                          <h4 className="text-navy font-cinzel text-base leading-snug line-clamp-3">
                            {r.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>

      <HistorySection />
      <Testimonials />
      <GlobalReach />
    </>
  );
}
