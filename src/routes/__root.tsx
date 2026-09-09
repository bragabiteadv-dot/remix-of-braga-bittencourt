import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { type ReactNode } from "react";
import { SITE_LOCALE } from "@/lib/site";
import { organizationSchema, unitSchemas, websiteSchema } from "@/lib/org-schema";

import appCss from "../styles.css?url";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingActions } from "../components/layout/FloatingActions";
import { ScrollHint } from "../components/layout/ScrollHint";

import { NotFoundView } from "../components/layout/NotFoundView";

function NotFoundComponent() {
  return <NotFoundView />;
}

const GTM_ID = "GTM-K2NTBF2P";
const GTM_HEAD_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','${GTM_ID}');`;
const GTM_BODY_NOSCRIPT = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "FYngCuYKcIIDZ5B6bY3LtpMiDX9Xw_da9_w2mhC6fIE" },
      { name: "author", content: "Braga Bitencourt Advogados" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Montserrat:wght@300;400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: GTM_HEAD_SCRIPT,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema())
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema())
      },
      ...unitSchemas().map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE_LOCALE}>
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src={GTM_BODY_NOSCRIPT}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isStandaloneLanding =
    pathname.startsWith("/advogado-validacao-homologacao-sentenca-estrangeira") ||
    pathname.startsWith("/advogado-divorcio-betim") ||
    pathname.startsWith("/advogado-familia-betim") ||
    pathname.startsWith("/advogado-guarda-betim") ||
    pathname.startsWith("/advogado-pensao-alimenticia-betim") ||
    pathname.startsWith("/advogado-inventario-betim") ||
    pathname.startsWith("/advogado-curatela-betim") ||
    pathname.startsWith("/advogado-divorcio-extrajudicial-betim") ||
    pathname.startsWith("/advogado-divorcio-nova-lima") ||
    pathname.startsWith("/advogado-familia-nova-lima") ||
    pathname.startsWith("/advogado-guarda-nova-lima") ||
    pathname.startsWith("/advogado-pensao-alimenticia-nova-lima") ||
    pathname.startsWith("/advogado-inventario-nova-lima") ||
    pathname.startsWith("/advogado-curatela-nova-lima") ||
    pathname.startsWith("/advogado-divorcio-extrajudicial-nova-lima") ||
    pathname.startsWith("/advogado-divorcio-bh") ||
    pathname.startsWith("/advogado-familia-bh") ||
    pathname.startsWith("/advogado-guarda-bh") ||
    pathname.startsWith("/advogado-pensao-alimenticia-bh") ||
    pathname.startsWith("/advogado-inventario-bh") ||
    pathname.startsWith("/advogado-curatela-bh") ||
    pathname.startsWith("/advogado-divorcio-extrajudicial-bh") ||
    pathname.startsWith("/advogado-divorcio-contagem") ||
    pathname.startsWith("/advogado-familia-contagem") ||
    pathname.startsWith("/advogado-guarda-contagem") ||
    pathname.startsWith("/advogado-pensao-alimenticia-contagem") ||
    pathname.startsWith("/advogado-inventario-contagem") ||
    pathname.startsWith("/advogado-curatela-contagem") ||
    pathname.startsWith("/advogado-divorcio-extrajudicial-contagem") ||
    pathname.startsWith("/advogado-divorcio-igarape") ||
    pathname.startsWith("/advogado-familia-igarape") ||
    pathname.startsWith("/advogado-guarda-igarape") ||
    pathname.startsWith("/advogado-pensao-alimenticia-igarape") ||
    pathname.startsWith("/advogado-inventario-igarape") ||
    pathname.startsWith("/advogado-curatela-igarape") ||
    pathname.startsWith("/advogado-fixacao-pensao-betim") ||
    pathname.startsWith("/advogado-exoneracao-pensao-betim") ||
    pathname.startsWith("/advogado-revisao-pensao-betim") ||
    pathname.startsWith("/advogado-execucao-pensao-betim") ||
    pathname.startsWith("/advogado-fixacao-pensao-bh") ||
    pathname.startsWith("/advogado-exoneracao-pensao-bh") ||
    pathname.startsWith("/advogado-revisao-pensao-bh") ||
    pathname.startsWith("/advogado-execucao-pensao-bh") ||
    pathname.startsWith("/advogado-fixacao-pensao-contagem") ||
    pathname.startsWith("/advogado-exoneracao-pensao-contagem") ||
    pathname.startsWith("/advogado-revisao-pensao-contagem") ||
    pathname.startsWith("/advogado-execucao-pensao-contagem") ||
    pathname.startsWith("/advogado-fixacao-pensao-nova-lima") ||
    pathname.startsWith("/advogado-exoneracao-pensao-nova-lima") ||
    pathname.startsWith("/advogado-revisao-pensao-nova-lima") ||
    pathname.startsWith("/advogado-execucao-pensao-nova-lima") ||
    pathname.startsWith("/advogado-reconhecimento-dissolucao-uniao-estavel-nova-lima") ||
    pathname.startsWith("/advogado-reconhecimento-dissolucao-uniao-estavel-bh") ||
    pathname.startsWith("/advogado-reconhecimento-dissolucao-uniao-estavel-betim") ||
    pathname.startsWith("/advogado-reconhecimento-dissolucao-uniao-estavel-contagem") ||
    pathname.startsWith("/advogado-reconhecimento-dissolucao-uniao-estavel-igarape") ||
    pathname.startsWith("/advogado-fixacao-pensao-igarape") ||
    pathname.startsWith("/advogado-exoneracao-pensao-igarape") ||
    pathname.startsWith("/advogado-revisao-pensao-igarape") ||
    pathname.startsWith("/advogado-execucao-pensao-igarape") ||
    pathname.startsWith("/advogado-contrato-namoro-betim") ||
    pathname.startsWith("/advogado-contrato-namoro-bh") ||
    pathname.startsWith("/advogado-contrato-namoro-contagem") ||
    pathname.startsWith("/advogado-contrato-namoro-igarape") ||
    pathname.startsWith("/advogado-contrato-namoro-nova-lima") ||
    pathname.startsWith("/advogado-reconhecimento-investigacao-negatoria-paternidade-betim") ||
    pathname.startsWith("/advogado-reconhecimento-investigacao-negatoria-paternidade-bh") ||
    pathname.startsWith("/advogado-reconhecimento-investigacao-negatoria-paternidade-contagem") ||
    pathname.startsWith("/advogado-reconhecimento-investigacao-negatoria-paternidade-igarape") ||
    pathname.startsWith("/advogado-reconhecimento-investigacao-negatoria-paternidade-nova-lima") ||
    pathname.startsWith("/advogado-guarda-compartilhada-betim") ||
    pathname.startsWith("/advogado-guarda-compartilhada-bh") ||
    pathname.startsWith("/advogado-guarda-compartilhada-contagem") ||
    pathname.startsWith("/advogado-guarda-compartilhada-igarape") ||
    pathname.startsWith("/advogado-guarda-compartilhada-nova-lima") ||
    pathname.startsWith("/advogado-mudanca-regime-bens-casamento-betim") ||
    pathname.startsWith("/advogado-mudanca-regime-bens-casamento-bh") ||
    pathname.startsWith("/advogado-mudanca-regime-bens-casamento-contagem") ||
    pathname.startsWith("/advogado-mudanca-regime-bens-casamento-igarape") ||
    pathname.startsWith("/advogado-mudanca-regime-bens-casamento-nova-lima") ||
    pathname.startsWith("/advogado-divorcio-extrajudicial-igarape") ||
    pathname.startsWith("/advogado-homologacao-decisao-judicial-estrangeira-stj-brasil") ||
    pathname.startsWith("/advogado-reconhecimento-homologacao-sentenca-estrangeira-stj-brasilia");

  if (isStandaloneLanding) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <main className="flex-grow">
            <Outlet />
          </main>
          <ScrollHint topOffset={16} />
          <FloatingActions />
        </div>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollHint topOffset={84} />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}
