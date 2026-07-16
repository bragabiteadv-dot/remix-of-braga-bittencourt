# Migration Plan: Braga Bitencourt Law Firm

Rebuilding the existing law firm website from WordPress/Elementor to TanStack Start + Tailwind v4 while maintaining absolute fidelity to the original design, copy, and layout.

## 1. Design System & Assets (`src/styles.css`, `src/routes/__root.tsx`)
- **Typography**: Load `Cinzel` (headings) and `Montserrat` (body) via `<link>` in `__root.tsx`.
- **Colors**: Define variables in `src/styles.css` for navy background (`#0a1427`), gold gradient buttons (`#cd9575` to `#f3c694`), and white/dark text.
- **Assets**: Upload all images from `bragabitencourt.com` using `lovable-assets` to serve them from CDN.

## 2. Core Architecture (`src/routes/`)
- **Global Layout (`__root.tsx`)**: Sticky header (Logo, Menu, CTA), Top info bar, Footer (Socials, Addresses, Maps), and floating WhatsApp button.
- **Home (`index.tsx`)**: Replicate every section (Hero, Features, Team, Services Ticker, Founder bio, Form).
- **New Section**: Add a "Localidades" section on Home with buttons for "BETIM" and "BELO HORIZONTE".

## 3. Route Inventory
- **Static Pages**: `/perfil`, `/areas-de-atuacao`, `/duvidas`, `/fale-conosco`, `/artigos`.
- **Location Hubs**: `/betim`, `/belo-horizonte`.
- **Service Pages**: 
  - `/betim/advocacia-[familia|sucessoes|internacional]`
  - `/belo-horizonte/advocacia-[familia|sucessoes|internacional]`
- **Template**: Use a shared `CityServicePage` component to keep the 6 service pages consistent while varying metadata and copy.

## 4. SEO & Compliance
- **Metadata**: Unique `head()` for every route (title, description, canonical, OG/Twitter tags).
- **Schema.org**: `LegalService` at root, `FAQPage` for dudas, `LocalBusiness` for location hubs, `BreadcrumbList` for service pages.
- **Technical SEO**: Dynamic `/sitemap.xml` server route and `public/robots.txt`.

## 5. Performance & UX
- **Performance**: Preload LCP images, lazy load below-the-fold assets, and minimize bundle size.
- **Form**: Maintain the 3-field contact form with WhatsApp deep link handoff.
- **Accessibility**: Semantic HTML (`<main>`, `<h1>-<h6>`), `aria-label` for icons, and 44x44px tap targets.

Implementation starts now with the design tokens and root shell.