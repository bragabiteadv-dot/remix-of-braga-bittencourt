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
import { WHATSAPP_LINK, WhatsAppIcon } from "../components/ui/whatsapp-cta";

import { NotFoundView } from "../components/layout/NotFoundView";

function NotFoundComponent() {
  return <NotFoundView />;
}


export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Braga Bitencourt Advogados | Família e Sucessões" },
      { name: "description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais. Inventários, divórcios e planejamento sucessório." },
      { name: "author", content: "Braga Bitencourt Advogados" },
      { property: "og:title", content: "Braga Bitencourt Advogados | Família e Sucessões" },
      { property: "og:description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais. Inventários, divórcios e planejamento sucessório." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Braga Bitencourt Advogados" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Braga Bitencourt Advogados | Família e Sucessões" },
      { name: "twitter:description", content: "Advocacia especializada em Direito de Família, Sucessões e Demandas Internacionais. Inventários, divórcios e planejamento sucessório." },
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
    ],
    scripts: [
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
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isStandaloneLanding = pathname.startsWith("/advogado-divorcio-betim") || pathname.startsWith("/advogado-familia-betim");


  if (isStandaloneLanding) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col overflow-x-hidden">
          <main className="flex-grow">
            <Outlet />
          </main>
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
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.link/i03d4k"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
          aria-label="Falar no WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </div>
    </QueryClientProvider>
  );
}
