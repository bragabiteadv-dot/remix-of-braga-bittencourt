import { Link } from "@tanstack/react-router";
import { getLegacyLandingSupport, type LandingSupport } from "@/lib/landing-support";

export function LandingSupportSections({ content, path }: { content?: LandingSupport; path?: string }) {
  const data = content ?? (path ? getLegacyLandingSupport(path) : undefined);
  if (!data) throw new Error("Seção de documentos precisa de conteúdo contextualizado");
  return (
    <div className="mt-14 space-y-8 font-montserrat" data-landing-support>
      <div>
        <h3 className="text-gold-light text-xl mb-4">Documentos e informações para a análise</h3>
        <ul className="space-y-3 text-primary-foreground/80 text-sm leading-relaxed">
          {data.documents.map((document) => <li key={document}>{document}</li>)}
        </ul>
      </div>
      <nav aria-label="Serviços relacionados" className="border-t border-primary-foreground/10 pt-8">
        <h3 className="text-gold-light text-xl mb-4">Serviços relacionados</h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {data.related.map((item) => <li key={item.path}><Link to={item.path} className="text-primary-foreground/80 text-sm underline underline-offset-4">{item.title}</Link></li>)}
        </ul>
        <Link to="/servicos-internacionais" className="inline-block mt-6 text-gold-light text-sm underline underline-offset-4">Consultar serviços por local de residência</Link>
      </nav>
    </div>
  );
}