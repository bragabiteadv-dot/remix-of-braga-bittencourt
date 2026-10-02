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
