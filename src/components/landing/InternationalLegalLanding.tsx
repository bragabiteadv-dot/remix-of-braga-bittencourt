import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  FileCheck2,
  Globe2,
  Home,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { ActionMoment } from "@/components/sections/ActionMoment";
import { ContactForm } from "@/components/sections/ContactForm";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { HeroVideoBackground } from "@/components/sections/HeroVideoBackground";
import { TeamGrid } from "@/components/sections/TeamGrid";
import {
  GOOGLE_URL,
  GoogleIcon,
  useWhatsAppLink,
  WhatsAppCta,
  WhatsAppIcon,
} from "@/components/ui/whatsapp-cta";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import type { InternationalLandingPage } from "@/lib/international-landings";
import { getLocationContext } from "@/lib/international-landings";
import { PageAltProvider } from "@/lib/page-alt";
import historyTree from "@/assets/history-tree.webp";
import headerLogo from "@/assets/logo-header-optimized.webp";
import officeBetim from "@/assets/office-betim-new.jpg";
import officeBH from "@/assets/foto-escritorio-de-bh-25_11zon.webp";

interface Props {
  page: InternationalLandingPage;
}

const OFFICES = [
  {
    city: "Belo Horizonte",
    address: "Av. Raja Gabáglia, 2000, sala 614, Alpes, Belo Horizonte/MG",
    image: officeBH,
    map: "https://www.google.com/maps?q=Braga+Bitencourt+Advogados,+Av.+Raja+Gab%C3%A1glia,+2000,+Belo+Horizonte&output=embed",
  },
  {
    city: "Betim",
    address: "Av. Amazonas, 1446, 7º andar, salas 706/707, Brasiléia, Betim/MG",
    image: officeBetim,
    map: "https://www.google.com/maps?q=Braga+Bitencourt+Advogados,+Av.+Amazonas,+1446,+Betim&output=embed",
  },
] as const;

export function InternationalLegalLanding({ page }: Props) {
  const pageAlt = page.title;
  return (
    <PageAltProvider alt={pageAlt} service={page.service.name} city={page.location.name}>
      <div className="bg-navy">
        <LandingHeader page={page} />
        <LandingHero page={page} />
        <TeamGrid />
        <ServiceDetails page={page} />
        <ActionMoment />
        <ProcessSection page={page} />
        <GlobalReach />
        <OfficeSection page={page} />
        <ContactForm />
        <LandingFooter page={page} />
      </div>
    </PageAltProvider>
  );
}

function LandingHeader({ page }: Props) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 py-4">
        <Link to="/" aria-label="Página inicial da Braga Bitencourt Advogados">
          <img
            src={headerLogo}
            alt={`Braga Bitencourt — ${page.service.shortTitle}`}
            width={720}
            height={240}
            className="h-12 w-auto shrink-0"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </Link>
        <WhatsAppCta className="hidden sm:inline-flex !px-6 !py-3 !text-xs" />
      </div>
    </header>
  );
}

function LandingHero({ page }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy pb-20 pt-14 md:pb-24 md:pt-16">
      <HeroVideoBackground />
      <div className="container relative z-10 mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,.85fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="mb-5 font-montserrat text-xs font-bold uppercase text-gold-light">
              Direito internacional privado · atendimento no Brasil e no exterior
            </p>
            <h1 className="mb-6 break-words font-cinzel text-[clamp(1.7rem,3.1vw,3rem)] leading-[1.15] text-primary-foreground">
              {page.title}
            </h1>
            <h2 className="mb-7 max-w-3xl font-montserrat text-lg font-semibold leading-snug text-gold-light md:text-2xl">
              {page.service.shortTitle} com análise documental individual e orientação sobre o procedimento aplicável no Brasil.
            </h2>
            <p className="mb-9 max-w-3xl font-montserrat text-sm leading-relaxed text-primary-foreground md:text-base">
              {page.service.legalContext} {getLocationContext(page.location)}
            </p>
            <WhatsAppCta className="w-full sm:w-auto" />
            <p className="mt-5 font-montserrat text-xs text-primary-foreground">Atendimento presencial e online.</p>
          </div>

          <aside className="border border-white/15 bg-white/5 p-7 shadow-2xl backdrop-blur-md md:p-9">
            <Scale className="mb-6 h-10 w-10 text-gold-light" aria-hidden="true" />
            <h2 className="mb-4 font-cinzel text-2xl text-primary-foreground">Análise jurídica do seu caso</h2>
            <p className="mb-7 font-montserrat text-sm leading-relaxed text-primary-foreground">
              O nome do procedimento não substitui a análise do documento. Confirmamos a via adequada, a autoridade competente e as exigências brasileiras antes do protocolo.
            </p>
            <ul className="space-y-4">
              {page.service.steps.map((step) => (
                <li key={step} className="flex gap-3 font-montserrat text-sm text-primary-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-light" aria-hidden="true" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ServiceDetails({ page }: Props) {
  const { ref, isVisible } = useRevealOnScroll();
  const cards = [
    {
      icon: FileCheck2,
      title: "Documentação estrangeira",
      text: `Conferimos os documentos relacionados a ${page.location.name}, sua integridade, autenticidade e a necessidade de apostilamento ou legalização consular.`,
    },
    {
      icon: Globe2,
      title: "Efeitos jurídicos no Brasil",
      text: page.service.legalContext,
    },
    {
      icon: ShieldCheck,
      title: "Procedimento adequado",
      text: "Indicamos a autoridade competente e evitamos o uso de uma via inadequada, exigências desnecessárias ou protocolos com documentação incompleta.",
    },
  ];
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-4 font-montserrat text-xs font-bold uppercase text-gold-dark">Como podemos ajudar</p>
          <h2 className="mb-5 font-cinzel text-3xl text-navy md:text-4xl">{page.service.name}</h2>
          <div className="mx-auto mb-6 h-0.5 w-24 bg-gold-gradient" />
          <p className="font-montserrat leading-relaxed text-navy/70">{page.service.summary} Cada caso é avaliado de acordo com o documento, o país de origem e a finalidade pretendida.</p>
        </div>
        <div ref={ref} className={`grid gap-6 md:grid-cols-3 reveal-stagger ${isVisible ? "visible" : ""}`}>
          {cards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border border-navy/10 bg-background p-8 shadow-sm transition-transform duration-500 hover:-translate-y-1">
              <Icon className="mb-6 h-8 w-8 text-gold-dark" aria-hidden="true" />
              <h3 className="mb-3 font-cinzel text-xl text-navy">{title}</h3>
              <p className="font-montserrat text-sm leading-relaxed text-navy/70">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ page }: Props) {
  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 font-montserrat text-xs font-bold uppercase text-gold-light">Etapas essenciais</p>
          <h2 className="font-cinzel text-3xl text-primary-foreground md:text-4xl">Condução técnica do início ao resultado</h2>
        </div>
        <ol className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.service.steps.map((step, index) => (
            <li key={step} className="border border-white/10 bg-white/5 p-7">
              <span className="mb-5 block font-cinzel text-3xl text-gold-light">{String(index + 1).padStart(2, "0")}</span>
              <p className="font-montserrat text-sm leading-relaxed text-primary-foreground">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center"><WhatsAppCta className="w-full sm:w-auto" /></div>
      </div>
    </section>
  );
}

function OfficeSection({ page }: Props) {
  return (
    <section className="bg-muted py-20 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="mb-5 font-cinzel text-3xl text-navy md:text-4xl">Sedes físicas e atendimento internacional</h2>
          <p className="font-montserrat text-sm leading-relaxed text-navy/70">Atendemos casos relacionados a {page.location.name} de forma online e também em nossas sedes em Minas Gerais.</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {OFFICES.map((office) => (
            <article key={office.city} className="overflow-hidden bg-background shadow-xl">
              <img src={office.image} alt={`Escritório Braga Bitencourt em ${office.city}`} loading="lazy" width={900} height={600} className="h-56 w-full object-cover" />
              <div className="p-7">
                <h3 className="mb-3 font-cinzel text-xl text-navy">{office.city}</h3>
                <p className="mb-6 flex gap-3 font-montserrat text-sm leading-relaxed text-navy/70"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />{office.address}</p>
                <iframe src={office.map} title={`Mapa da sede em ${office.city}`} loading="lazy" className="h-52 w-full border-0" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingFooter({ page }: Props) {
  const waLink = useWhatsAppLink();
  const iconClass = "flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-primary-foreground transition-colors hover:border-gold-light hover:text-gold-light";
  return (
    <footer className="border-t border-white/10 bg-navy text-primary-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 py-10 md:flex-row">
        <Link to="/" className="shrink-0"><img src={historyTree} alt={`Braga Bitencourt — ${page.location.name}`} className="h-16 w-auto" loading="lazy" /></Link>
        <div className="flex items-center gap-2">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="WhatsApp"><WhatsAppIcon /></a>
          <a href="mailto:bragabitencourtadv@gmail.com" className={iconClass} aria-label="E-mail"><Mail size={18} /></a>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Google"><GoogleIcon size={18} /></a>
          <Link to="/" className={iconClass} aria-label="Início"><Home size={18} /></Link>
        </div>
        <div className="text-center font-montserrat md:text-right">
          <p className="text-sm font-medium">Braga Bitencourt Advogados · CNPJ 10.669.099/0001-72</p>
          <p className="mt-2 text-xs text-primary-foreground">Atendimento relacionado a {page.location.name}</p>
        </div>
      </div>
    </footer>
  );
}