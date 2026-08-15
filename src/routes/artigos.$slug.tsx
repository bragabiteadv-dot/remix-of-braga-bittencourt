import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, Link2, Share2, ArrowLeft, ImageIcon } from "lucide-react";
import { ARTICLES, getArticleById, getArticleBySlug, type Article } from "@/lib/articles";
import { HistorySection } from "@/components/sections/HistorySection";
import { Testimonials } from "@/components/sections/Testimonials";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { WhatsAppCta, whatsappArticleLink } from "@/components/ui/whatsapp-cta";
import { buildSeo } from "@/lib/seo";
import { articleSchemas, articleSeoDescription, articleSeoTitle } from "@/lib/article-seo";
import { OG_IMAGE } from "@/lib/site-og";

export const Route = createFileRoute("/artigos/$slug")({
  component: ArticlePage,
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) {
      const byId = getArticleById(params.slug);
      if (byId) throw redirect({ to: "/artigos/$slug", params: { slug: byId.slug }, statusCode: 301 });
      throw notFound();
    }
    return { article };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.article as Article | undefined;
    if (!a) {
      return buildSeo({
        path: `/artigos/${params.slug}`,
        title: "Artigo não encontrado | Braga Bitencourt Advogados",
        description: "O artigo solicitado não está disponível.",
        image: OG_IMAGE,
        noindex: true,
      });
    }
    return buildSeo({
      path: `/artigos/${a.slug}`,
      title: articleSeoTitle(a),
      description: articleSeoDescription(a),
      type: "article",
      image: a.image || OG_IMAGE,
      schema: articleSchemas(a),
    });
  },

});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* noop */ }
  };

  const handleShare = async () => {
    const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
    if (typeof nav !== "undefined" && nav.share) {
      try {
        await nav.share({ title: article.title, text: article.excerpt, url: window.location.href });
      } catch { /* noop */ }
    } else {
      handleCopy();
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

          <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 h-fit space-y-5">
              <div className="bg-white rounded-2xl shadow-[0_10px_40px_-15px_rgba(40,54,80,0.15)] border border-navy/5 p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-light font-montserrat font-semibold mb-2">
                  {article.category}
                </p>
                <p className="text-navy font-cinzel text-lg leading-snug">
                  {article.title}
                </p>
                <div className="h-0.5 w-10 bg-gold-gradient my-4" />
                <div className="space-y-2 text-navy/70 text-xs font-montserrat">
                  <p className="flex items-center gap-2">
                    <Calendar size={14} className="text-gold-light" />
                    {article.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={14} className="text-gold-light" />
                    {article.readingTime}
                  </p>
                </div>
              </div>

              <a
                href={whatsappArticleLink(article.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-4 bg-[#e8dcc4] border border-[#c5a880]/40 hover:brightness-105 transition"
              >
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[#c5a880]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-navy font-montserrat font-semibold text-sm">Atendimento no WhatsApp</p>
                  <p className="flex items-center gap-1.5 text-navy/70 text-xs font-montserrat mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Clique e fale com a equipe
                  </p>
                </div>
              </a>
            </aside>

            {/* Main content */}
            <article>
              {/* Hero image / placeholder */}
              <div className="relative rounded-2xl overflow-hidden aspect-square mb-8 shadow-[0_20px_50px_-25px_rgba(40,54,80,0.35)]">
                {article.image ? (
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#f5eee0] via-[#faf6ed] to-[#e8dcc4] flex flex-col items-center justify-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur flex items-center justify-center">
                      <ImageIcon size={32} className="text-gold-light" />
                    </div>
                    <p className="text-navy/50 text-xs uppercase tracking-[0.3em] font-montserrat">
                      Imagem em breve
                    </p>
                  </div>
                )}
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

              {/* Body */}
              <div className="space-y-5 text-navy/85 font-montserrat text-[15px] md:text-base leading-relaxed">
                {article.body.map((p, i) => (
                  <p key={i}>{p}</p>
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
                <WhatsAppCta className="inline-flex" href={whatsappArticleLink(article.title)} />
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
                        to="/artigos/$slug"
                        params={{ slug: r.slug }}
                        className="group bg-white rounded-xl overflow-hidden border border-navy/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                      >
                        <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#f5eee0] to-[#e8dcc4] flex items-center justify-center">
                          {r.image ? (
                            <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          ) : (
                            <ImageIcon size={28} className="text-gold-light/70" />
                          )}
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
