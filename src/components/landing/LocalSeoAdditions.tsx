import { Link } from "@tanstack/react-router";

export interface LocalSeoFaqItem {
  question: string;
  answer: string;
}

export interface LocalSeoLinkItem {
  title: string;
  path: string;
}

export function LocalSeoAdditions({
  faqTitle,
  faq,
  links,
}: {
  faqTitle: string;
  faq: LocalSeoFaqItem[];
  links: LocalSeoLinkItem[];
}) {
  return (
    <section className="bg-primary py-20 font-montserrat">
      <div className="container mx-auto max-w-5xl">
        <nav aria-label="Conteúdos relacionados" className="mb-16 border-b border-primary-foreground/10 pb-12">
          <h2 className="mb-6 text-center font-cinzel text-2xl uppercase text-primary-foreground md:text-3xl">
            Conteúdos relacionados
          </h2>
          <ul className="flex flex-wrap justify-center gap-3">
            {links.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="inline-flex min-h-11 items-center rounded-full border border-primary-foreground/20 px-5 py-2.5 text-sm text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="mb-10 text-center font-cinzel text-3xl uppercase leading-tight text-primary-foreground md:text-4xl">
          {faqTitle}
        </h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <details key={item.question} className="group rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
              <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-primary-foreground marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span aria-hidden="true" className="text-xl text-accent transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="px-6 pb-6 text-sm leading-relaxed text-primary-foreground/70 md:text-base">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}