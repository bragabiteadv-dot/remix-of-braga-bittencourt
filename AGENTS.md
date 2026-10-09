<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Article cover images that must remain available independently of the asset CDN are imported from local bundled media, because the previous CDN URLs returned access errors.
- Treat every `/advogado-*` route as a standalone landing page in the root layout, because these routes own their distinct header and footer.
- Prepare the D3 globe during browser idle time, render it only near its viewport, and serve local precomputed geography because it must stay responsive without burdening initial load.
- Generate every indexable route's canonical through `buildSeo`/`buildSeoHead` and `siteUrl`, which normalizes paths and fixes the origin to `https://bragabitencourt.com` so tracking parameters cannot leak into SEO URLs.
- Register international act-origin and resident-service URLs with lightweight individual route files and the full original averbação template; keep resident scopes separate and aliases as permanent redirects, because preview discovery requires explicit routes without conflating residence and document origin.
- Keep per-page resident overrides in individual route files and route catalogue data separate from shared service copy, because manual edits must affect only the selected page while legal scope corrections remain centralized.
- Keep the complete runtime route tree, widen it to AnyRoute at the independent router factory boundary and use an explicit return type, because generated registration must not infer its own enormous route tree recursively.
- Generate an independent exact-ID file-route registry with root context and disable the recursive generator type graph, because thousands of explicit routes must remain discoverable without recursively importing their own inferred types.
- Group resident and international file routes under URL-transparent family layouts rendering Outlet, because a flat root with hundreds of typed children makes automatic verification exceed its limits; preserve individual files, public URLs and page options.
- Render contextual document and related-service blocks through a shared support section for every content landing, because coverage must include legacy, act-origin and resident pages without replacing their existing layouts.
