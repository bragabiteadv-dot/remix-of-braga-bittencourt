import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroVideoBackground } from "../components/sections/HeroVideoBackground";
import {
  Scale,
  Users,
  Coins,
  FileSignature,
  Building2,
  Landmark,
  TreeDeciduous,
  Gem,
  Globe,
  MapPin,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Home,
} from "lucide-react";

import { GlobalReach } from "@/components/sections/GlobalReach";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ActionMoment } from "@/components/sections/ActionMoment";
import { ContactForm } from "@/components/sections/ContactForm";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { GOOGLE_URL, GoogleIcon, useWhatsAppLink, WhatsAppIcon, WhatsAppCta } from "@/components/ui/whatsapp-cta";
import { PageAltProvider } from "@/lib/page-alt";
import { buildSeoHead } from "@/components/SeoHead";
import { OG_IMAGE } from "@/lib/site-og";
import logoTree from "@/assets/history-tree.webp";
import curatelaBhHeaderLogo from "@/assets/logo-curatela-bh.webp";

import officeBH from "@/assets/office-bh-new.jpg";
import sedeBetim1 from "@/assets/sede-betim-1.webp";
import sedeBetim2 from "@/assets/sede-betim-2.webp";
import sedeBetim3 from "@/assets/sede-betim-3.webp";
import sedeBetim4 from "@/assets/sede-betim-4.webp";
import sedeBetim5 from "@/assets/sede-betim-5.webp";

const PATH = "/advogado-guarda-compartilhada-nova-lima";
const TITLE = "Advogado de Guarda Compartilhada em Nova Lima | Braga Bitencourt Advogados";
const SERVICE = "Guarda Compartilhada";
const CITY = "Nova Lima";
const OFFICE_ALT = `Escritório de ${SERVICE}`;
const PAGE_ALT = TITLE.split("|")[0].trim();
const LOGO_ALT = `Braga Bitencourt ${PAGE_ALT}`;
const DESCRIPTION =
  "Advogado de Guarda Compartilhada em Nova Lima com mais de 20 anos de experiência. Definição de guarda compartilhada, regulamentação de visitas, plano de convivência e alteração de guarda com sigilo e segurança.";


export const Route = createFileRoute("/advogado-guarda-compartilhada-nova-lima")({
  head: () =>
    buildSeoHead({
      title: TITLE,
      description: DESCRIPTION,
      canonicalUrl: PATH,
      city: "Nova Lima",
      service: "Guarda Compartilhada",
      image: OG_IMAGE,
      areaServed: "Nova Lima, MG",
      breadcrumbName: "Advogado de Guarda Compartilhada em Nova Lima",
      address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Raja Gabáglia, 2000 - sala 614 - Alpes",
          addressLocality: "Belo Horizonte",
          addressRegion: "MG",
          postalCode: "30494-170",
          addressCountry: "BR",
        },
    }),

  component: LandingPage,
});


function LandingPage() {
  return (
    <PageAltProvider alt={PAGE_ALT} service={SERVICE} city={CITY}>
      <LandingPageContent />
    </PageAltProvider>
  );
}

function LandingPageContent() {
  return (
    <div className="bg-[#08152C]">
      <LpHeader />
      <LpHero />
      <TeamGrid />
      <LpSituations />
      <ActionMoment />
      <LpOfficeGallery />
      <GlobalReach />
      <LpServices />
      <LpDifferentials />
      <LpPresence />
      <ContactForm />
      <LpFooter />
    </div>
  );
}

/* ---------------- Header ---------------- */

function LpHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#08152C]/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between gap-4 py-4">
        <img
          src={curatelaBhHeaderLogo}
          alt={LOGO_ALT}
          width={600}
          height={200}
          className="h-12 w-auto shrink-0"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <WhatsAppCta className="hidden sm:inline-flex !px-6 !py-3 !text-xs" />
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function LpHero() {
  const stats = [
    {
      title: "+ 20 anos",
      subtitle: ["EXPERIENCIA &", "BAGAGEM TÉCNICA"],
      text: "Duas décadas de especialização e liderança institucional em família, sucessões e internacional privado.",
    },
    {
      title: "Fale Direto",
      subtitle: ["ATENDIMENTO IMEDIATO E SIGILOSO"],
      text: "Contato direto como advogado do caso, assegurando confidencialidade e confiança.",
    },
    {
      title: "Sedes físicas",
      subtitle: ["-BELO HORIZONTE", "-BETIM"],
      text: "Estruturas de excelência para consultas presenciais ou suporte digital integrado.",
    },
    {
      title: "Raio Global",
      subtitle: ["BRASIL E EXTERIOR"],
      text: "Suporte jurídico especializado com ampla atuação no Brasil e no exterior.",
    },
  ];

  return (
    <section className="relative bg-[#08152C] pt-16 pb-24 overflow-hidden">
      <HeroVideoBackground />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-[1]" />


      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Left */}
          <div className="lg:w-[55%] w-full min-w-0">
            <h1 className="text-white text-[32px] md:text-[44px] lg:text-[55px] font-cinzel leading-[1.1] mb-6">
              Advogado de Guarda Compartilhada em Nova Lima
            </h1>

            <h2 className="text-gold-light font-montserrat font-semibold text-lg md:text-2xl leading-snug mb-8 max-w-[600px]">
              Conte com quem tem mais de 20 anos resolvendo casos como o seu.
            </h2>

            <p className="text-white text-sm md:text-base font-montserrat leading-relaxed mb-10 max-w-[600px]">
              Advogado especialista em Guarda Compartilhada em Nova Lima — Proteja seus filhos, sua convivência, sua tranquilidade e bem estar.
              Conduzimos seu processo de guarda compartilhada em Nova Lima com o sigilo, a segurança e o acolhimento que você precisa.
            </p>

            <WhatsAppCta className="w-full sm:w-auto" />

            <p className="text-white text-xs font-montserrat mt-6 tracking-wide">
              Atendimento presencial e online.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={officeBH}
                alt={OFFICE_ALT}
                className="w-full h-[320px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right panel */}
          <div className="lg:w-[45%] w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] glass-card rounded-[2rem] p-8 lg:p-10 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="flex flex-col items-center mb-10">
                <div className="inline-block px-6 py-2 border border-white/20 rounded-full mb-8">
                  <span className="text-white text-sm font-bold">Sobre Nosso Trabalho</span>
                </div>
                <p className="text-white text-center text-sm md:text-base font-montserrat leading-relaxed px-2">
                  Advocacia de excelência focada em segurança jurídica, visão prática e soluções objetivas com totla
                  claresa desde o primeiro contato.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col items-start min-h-[220px] transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
                  >
                    <h3 className="text-white text-[26px] md:text-[30px] font-bold font-montserrat mb-3 leading-tight">
                      {s.title}
                    </h3>
                    <div className="mb-4">
                      {s.subtitle.map((line) => (
                        <p key={line} className="text-gold-light text-[10px] font-bold tracking-widest uppercase">
                          {line}
                        </p>
                      ))}
                    </div>
                    <p className="text-white text-[11px] font-medium leading-snug mt-auto">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Situações ---------------- */

function LpSituations() {
  const waLink = useWhatsAppLink();
  const { ref, isVisible } = useRevealOnScroll();

  const items = [
    {
      icon: <Scale className="w-7 h-7" />,
      title: "Quer definir a guarda compartilhada de forma amigável ou judicial?",
      text: "Entenda a diferença entre o acordo consensual e a ação judicial de guarda compartilhada.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Precisa organizar o calendário de convivência e as férias dos filhos?",
      text: "Garanta um plano de convivência claro, com divisão de feriados, férias e rotina escolar.",
    },
    {
      icon: <Coins className="w-7 h-7" />,
      title: "Tem dúvidas sobre pensão alimentícia na guarda compartilhada?",
      text: "Saiba por que a guarda compartilhada não elimina a pensão e como o valor é definido.",
    },
    {
      icon: <FileSignature className="w-7 h-7" />,
      title: "O outro genitor descumpre os horários de convivência?",
      text: "Entenda como cobrar judicialmente o cumprimento do acordo e evitar a alienação parental.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Quer alterar a guarda unilateral para compartilhada?",
      text: "Descubra os requisitos para modificar a guarda e ampliar a convivência com seus filhos.",
    },
    {
      icon: <Landmark className="w-7 h-7" />,
      title: "Precisa mudar de cidade e não sabe como fica a guarda?",
      text: "Saiba como a mudança de domicílio impacta a convivência e como adequar o acordo.",
    },
  ];

  return (
    <section className="py-24 bg-[#F6F3EE]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-navy text-3xl md:text-4xl font-cinzel uppercase leading-tight mb-6">
            Você está passando por uma dessas situações na guarda dos seus filhos?
          </h2>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mb-6" />
          <p className="text-navy/70 font-montserrat text-sm md:text-base leading-relaxed">
            Se você se identificou com algum desses cenários, o Braga Bitencourt pode te ajudar — com experiência,
            clareza e discrição.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 reveal-stagger ${isVisible ? "visible" : ""}`}
        >
          {items.map((item) => (
            <a
              key={item.title}
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg p-8 border border-navy/10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
            >
              <div className="w-14 h-14 rounded-full bg-gold-gradient text-[#283650] flex items-center justify-center mb-6 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-navy font-montserrat font-bold text-base leading-snug mb-3 group-hover:text-[#cd9575] transition-colors">
                {item.title}
              </h3>
              <p className="text-navy/60 font-montserrat text-sm leading-relaxed">{item.text}</p>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <WhatsAppCta className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Galeria da sede ---------------- */

function LpOfficeGallery() {
  const photos = [sedeBetim1, sedeBetim2, sedeBetim3, sedeBetim4, sedeBetim5];
  const loop = [...photos, ...photos];

  return (
    <section className="py-24 bg-[#08152C] overflow-hidden">
      <div className="container mx-auto mb-12">
        <h2 className="text-white text-3xl md:text-4xl font-cinzel text-center uppercase tracking-wider">
          Nossa sede
        </h2>
        <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
      </div>

      <div className="relative w-full">
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((src, idx) => (
            <div
              key={idx}
              className="w-[300px] md:w-[420px] h-[240px] md:h-[300px] shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={PAGE_ALT}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Serviços ---------------- */

function LpServices() {
  const { ref, isVisible } = useRevealOnScroll();

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direito de Família",
      items: [
        "Divórcio consensual ou litigioso",
        "Partilha de bens",
        "Guarda e regulamentação de visitas",
        "Pensão alimentícia",
        "Pacto antenupcial",
        "Tutela e Curatela",
        "Medidas Protetivas",
      ],
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Direito das Sucessões",
      items: [
        "Inventário judicial e extrajudicial",
        "Testamentos",
        "Planejamento sucessório",
        "Holdings familiares",
        "Doação e transferência de bens em vida",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Privado Internacional",
      items: [
        "Homologação de sentenças estrangeiras",
        "Autorização de viagem para menores",
        "Divórcios e guardas com partes no exterior",
        "Transcrições e averbações",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#08152C]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-light text-xs font-bold uppercase tracking-[0.3em] mb-4 block font-montserrat">
            Áreas de atuação
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-cinzel uppercase tracking-wider">
            O que fazemos por você em Nova Lima
          </h2>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 reveal-stagger ${isVisible ? "visible" : ""}`}
        >
          {services.map((s) => (
            <article
              key={s.title}
              className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-gold-light mb-6">{s.icon}</div>
              <h3 className="text-white font-cinzel text-xl mb-6">{s.title}</h3>
              <ul className="space-y-3">
                {s.items.map((i) => (
                  <li key={i} className="text-white/60 font-montserrat text-sm leading-relaxed flex gap-3">
                    <span className="text-gold-light">·</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <WhatsAppCta className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Diferenciais ---------------- */

function LpDifferentials() {
  const { ref, isVisible } = useRevealOnScroll();

  const items = [
    {
      icon: <TreeDeciduous className="w-12 h-12" />,
      title: "Arquitetura sucessória e legado.",
      text: "A proteção do patrimônio exige mais do que conhecimento jurídico: exige visão estratégica e compromisso com a preservação dos legados familiares. Com tradição e excelência técnica, conduzimos cada sucessão com segurança, cuidado e planejamento.",
      highlight: false,
    },
    {
      icon: <Gem className="w-12 h-12" />,
      title: "Escuta estratégica e rigor.",
      text: "Questões familiares demandam sensibilidade e estratégia na mesma medida. Atuamos com escuta qualificada, discrição e segurança jurídica, transformando situações complexas em soluções claras e eficientes.",
      highlight: true,
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Vanguarda em Visual Law e Petições Interativas.",
      text: "Unimos tradição e tecnologia para oferecer uma advocacia mais moderna e eficiente. Por meio de recursos como Visual Law e Petições Interativas, tornamos a comunicação jurídica mais clara, dinâmica e persuasiva, favorecendo decisões mais rápidas e assertivas.",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-[#08152C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <pattern id="lp-diamond" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lp-diamond)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-light text-xs font-bold uppercase tracking-[0.3em] mb-4 block font-montserrat">
            Diferenciais
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-cinzel uppercase tracking-wider mb-6">
            Por que o Braga Bitencourt é diferente
          </h2>
          <p className="text-white/60 font-montserrat text-sm md:text-base leading-relaxed">
            Uma atuação pensada para casos familiares sensíveis: técnica, discrição, presença e clareza para que você.
            Tome decisões com mais segurança.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger ${isVisible ? "visible" : ""}`}
        >
          {items.map((item) => (
            <div
              key={item.title}
              className={`p-10 rounded-sm flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-2xl ${
                item.highlight
                  ? "bg-[#F8D59B] text-navy border-t-4 border-[#F1BE87]"
                  : "bg-white text-navy border-t-4 border-[#cd9575]"
              }`}
            >
              <div className="mb-6 text-navy">{item.icon}</div>
              <h3 className="font-cinzel text-lg mb-4 leading-snug">{item.title}</h3>
              <p className="font-montserrat text-sm leading-relaxed text-navy/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Presença física ---------------- */

const MAPS_URL =
  "https://www.google.com/maps/place/Braga+Bitencourt+Advogados/@-19.954955,-43.9595168,1022m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa6be0a87eba137:0x5b7a5c4dbe44fd0b!8m2!3d-19.954955!4d-43.9595168!16s%2Fg%2F1x6q2_2p?entry=ttu&g_ep=EgoyMDI2MDgyMy4wIKXMDSoASAFQAw%3D%3D";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Braga+Bitencourt+Advogados,+Av.+Raja+Gab%C3%A1glia,+2000+-+sala+614+-+Alpes,+Belo+Horizonte+-+MG,+30494-170&output=embed";

function LpPresence() {
  return (
    <section className="py-24 bg-[#08152C] relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-cinzel uppercase tracking-wider leading-tight">
            Presença física e atendimento jurídico especializado de alto padrão
          </h2>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto my-6" />
          <p className="text-white/70 font-montserrat text-sm md:text-base leading-relaxed">
             Estamos prontos para oferecer orientação jurídica especializada com atendimento humanizado e ágil. Fácil acesso
             para clientes de toda a região metropolitana. Atendimento presencial e à distância. Entre em contato e agende
             sua consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl overflow-hidden shadow-2xl h-full min-h-[420px] hover:opacity-95 transition-opacity"
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do escritório em Belo Horizonte"
            />
          </a>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full min-h-[420px]">
            <div className="h-56 overflow-hidden shrink-0">
              <img
                src={officeBH}
                alt={OFFICE_ALT}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c89269] font-montserrat font-semibold text-sm md:text-base leading-relaxed flex gap-3 hover:underline"
              >
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  Braga Bitencourt Advogados BH, Av. Raja Gabáglia, 2000 – sala 614 – Alpes, BH – Mg
                </span>
              </a>

              <WhatsAppCta className="w-full !py-4 !text-sm" />

              <p className="text-navy/60 font-montserrat text-sm leading-relaxed">
                Atendimento com discrição, clareza e direção estratégica desde o primeiro contato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

const GOOGLE_SEARCH_URL = "https://www.google.com/search?q=braga+bittencourt+adovagos&rlz=1C1GCEA_enBR1196BR1197&oq=braga+bittencourt+adovagos&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAHSAQg1MDc2ajBqOagCBrACAfEFWe6JCqrJDgQ&sourceid=chrome&source=chrome.ob&ie=UTF-8";
const BH_MAP_URL = MAPS_URL;

function LpFooter() {
  const waLink = useWhatsAppLink();
  const socialIconClass =
    "w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold-light hover:text-navy hover:border-gold-light transition-all duration-300";

  return (
    <footer className="bg-[#08152C] text-white relative">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left pills */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={BH_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <MapPin size={16} className="text-gold-light shrink-0" />
                <span>Av. Raja Gabáglia, 2000 – sala 614 – Alpes, BH – Mg</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <Phone size={16} className="text-gold-light shrink-0" />
                <span>(31) 98026-0880</span>
              </a>
            </div>

            {/* Right buttons */}
            <div className="flex items-center gap-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm text-white/90 hover:bg-white/5 hover:border-white/30 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:bragabitencourtadv@gmail.com"
                className={socialIconClass}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <Link
                to="/"
                className={socialIconClass}
                aria-label="Home"
              >
                <Home size={18} />
              </Link>
              <a
                href="https://www.facebook.com/bragabitencourtadv/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Google"
              >
                <GoogleIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/bragabitencourtadv/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="shrink-0">
            <img
              src={logoTree}
              alt={PAGE_ALT}
              className="h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-white/90 font-medium">
              Braga Bitencourt Advogados - CNPJ: 10.669.099/0001-72
            </p>
            <p className="text-xs text-white/50">
              Todos os direitos reservados. Design focado em privacidade, acolhimento e alta conversão.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
