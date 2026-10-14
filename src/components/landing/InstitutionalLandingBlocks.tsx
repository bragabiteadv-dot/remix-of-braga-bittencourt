import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getLegacyLandingSupport, type LandingSupport } from "@/lib/landing-support";

export interface InstitutionalRelatedLink {
  path: string;
  title: string;
}

export function RelatedContentNavigation({
  links,
  articles = [],
  headingTag = "p",
  ariaLabel = "Conteúdos relacionados",
}: {
  links: readonly InstitutionalRelatedLink[];
  articles?: readonly InstitutionalRelatedLink[];
  headingTag?: "p" | "h2";
  ariaLabel?: string;
}) {
  const Heading = headingTag;
  return (
    <nav aria-label={ariaLabel} className="mt-12 border-y border-primary-foreground/10 py-8 font-montserrat">
      <Heading className="mb-5 text-center font-cinzel text-xl text-gold-light">Conteúdos relacionados</Heading>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="w-full text-center text-sm text-primary-foreground/70">Consulte também orientações sobre</span>
        {links.map((item) => (
          <Link key={item.path} to={item.path} className="rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground/85 transition-colors duration-300 hover:border-gold-light/60 hover:text-gold-light">
            {item.title}
          </Link>
        ))}
      </div>
      {articles.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <span className="w-full text-center text-sm text-primary-foreground/70">Nos artigos, veja ainda</span>
          {articles.map((item) => (
            <Link key={item.path} to={item.path} className="border-b border-gold-light/50 pb-1 text-sm text-gold-light transition-colors duration-300 hover:border-primary-foreground hover:text-primary-foreground">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export function InstitutionalLandingSupport({
  path,
  content,
  documentTitles,
  documentsId = "landing-documents-title",
}: {
  path?: string;
  content?: LandingSupport;
  documentTitles: readonly string[];
  documentsId?: string;
}) {
  const data = content ?? (path ? getLegacyLandingSupport(path) : undefined);
  if (!data) throw new Error("Seção de documentos precisa de conteúdo contextualizado");
  return (
    <div className="mt-12 space-y-12 font-montserrat" data-landing-support>
      <section aria-labelledby={documentsId}>
        <h3 id={documentsId} className="mb-6 text-xl text-gold-light">Documentos e informações para a análise</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.documents.map((document, index) => (
            <article key={document} className="border border-primary-foreground/10 bg-primary-foreground/5 p-6 transition-colors duration-300 hover:border-gold-light/30 hover:bg-primary-foreground/10">
              <p className="mb-3 font-cinzel text-base text-primary-foreground">{documentTitles[index]}</p>
              <p className="text-sm leading-relaxed text-primary-foreground/75">{document}</p>
            </article>
          ))}
        </div>
      </section>
      <nav aria-label="Serviços relacionados" className="border-t border-primary-foreground/10 pt-10">
        <h3 className="mb-6 text-xl text-gold-light">Serviços relacionados</h3>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.related.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="group flex min-h-24 items-center justify-between gap-5 border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-primary-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <span className="text-sm font-semibold leading-relaxed">{item.title}</span>
                <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-light transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/servicos-internacionais" className="mt-7 inline-flex items-center gap-2 border-b border-gold-light/50 pb-1 text-sm text-gold-light transition-colors duration-300 hover:border-primary-foreground hover:text-primary-foreground">
          Consultar serviços por local de residência
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </nav>
    </div>
  );
}