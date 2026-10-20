# Independent Museum Wayang visitor guide

Indonesian and English static pages for Museum Wayang, Kota Tua, Jakarta. The site has no museum/government affiliation, accounts, contact forms or ticket sales.

Run `pnpm install --frozen-lockfile`, `pnpm check` and `pnpm build` with Node 24.19.0 and pnpm 11.22.0. The verified Cloudflare Worker name is `wayangmuseum`. The ASSETS Worker enforces HTTPS/apex redirects, keeps query/path, and returns missing pages with 404/noindex. Generated output must be rebuilt and committed with referenced assets.

Public sources are linked on the visitor page. Weekday hours differ between Maps and the ministry portal; both are dated and visible. Ticket categories, renewal reports and past performances must not become blanket current promises. No recurring hours or price schema is published.

Language versions use reciprocal static URLs rather than a stored client-side toggle. Optional analytics defaults off; a tab refusal overrides old permission if the permanent write fails. The legacy app-specific service worker and caches are retired to avoid old offline homepage fallbacks. Production visual/image-loading verification is a separate coordinator gate.
