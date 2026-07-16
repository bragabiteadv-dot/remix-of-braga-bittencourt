import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { MessageCircle } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold font-cinzel">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm bg-gold-gradient px-8 py-3 text-sm font-bold text-navy uppercase tracking-widest transition-transform hover:scale-105"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Braga Bitencourt Advogados | Família e Sucessões" },
      { name: "description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais. Atuação estratégica em inventários, divórcios e planejamento sucessório." },
      { name: "author", content: "Braga Bitencourt Advogados" },
      { property: "og:title", content: "Braga Bitencourt Advogados | Família e Sucessões" },
      { property: "og:description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Braga Bitencourt Advogados" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Montserrat:wght@300;400;500;600;700&display=swap" },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Braga Bitencourt Advogados",
          "description": "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais.",
          "url": "/",
          "telephone": "+5531980260880",
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Av. Raja Gabaglia, 2000, sala 614, Bloco 1",
              "addressLocality": "Belo Horizonte",
              "addressRegion": "MG",
              "postalCode": "30350-540",
              "addressCountry": "BR"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Av. Amazonas, 1446, salas 706/707",
              "addressLocality": "Betim",
              "addressRegion": "MG",
              "postalCode": "32600-325",
              "addressCountry": "BR"
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/5531980260880"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>
    </QueryClientProvider>
  );
}
