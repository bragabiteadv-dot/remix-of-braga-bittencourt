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
  const isStandaloneLanding = pathname.startsWith("/advogado-");

  if (isStandaloneLanding) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col overflow-x-clip">
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
      <div className="min-h-screen flex flex-col overflow-x-clip">
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
