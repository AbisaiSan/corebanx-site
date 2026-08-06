# Corebanx — institutional site

Next.js implementation of the Corebanx site designed in Claude Design. The
original handoff bundle is still in the repo: the HTML prototypes live in
`project/`, the design conversation in `chats/`, and the agent-facing handoff
notes in [`docs/design-handoff.md`](docs/design-handoff.md).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of every page
npm run typecheck
```

## Pages

Portuguese is served from the root and English from `/en`, with the same URL
structure under both. Every page is statically prerendered.

| Page | PT | EN |
| --- | --- | --- |
| Home | `/` | `/en` |
| Produtos e Soluções (index) | `/produtos` | `/en/produtos` |
| Product detail (×12) | `/produtos/[slug]` | `/en/produtos/[slug]` |
| Para Bancos | `/solucoes/para-bancos` | `/en/solucoes/para-bancos` |
| Quem Somos | `/quem-somos` | `/en/quem-somos` |
| Cases e Parceiros | `/cases` | `/en/cases` |
| Contato | `/contato` | `/en/contato` |

The twelve product pages are `baas-core-bancario`, `dashboard-de-gestao`,
`trilhos-de-pagamento`, `integracao-de-cartoes`, `investimentos`, `convenios`,
`cobranca`, `white-label`, `seguranca-e-compliance`, `antifraude-e-pld`,
`regulatorio` and `sandbox`.

## Structure

```
app/(pt)/…          Portuguese routes + root layout (html lang="pt-BR")
app/(en)/en/…       English routes + root layout (html lang="en")
app/globals.css     Design system: palette, type, buttons, cards, fields, keyframes
components/         SiteHeader, SiteFooter, illustrations, page components
lib/copy/           PT/EN copy, one file per area
lib/products.ts     The five product groups and twelve products
```

Route files are three lines each; the page bodies are shared components under
`components/pages/` that take a `lang` prop.

## Design fidelity

The prototype laid every screen out inside a fixed-width frame carrying
`container-type: inline-size`, so all of its sizing is written in `cqw` units.
The site re-establishes that container on the page root (`.site` in
`globals.css`), which means every `clamp()` copied from the design resolves to
exactly the same value it did in the mockup — a 1280px-wide viewport renders
the desktop frame pixel for pixel, and 390px renders the mobile frame.

Colours, type scale, radii, shadows and spacing come from the prototype's
"Fundamentos visuais Corebanx" screen and are collected as tokens and component
classes in `globals.css`.

### Animations

All four scroll-driven behaviours from the design are preserved:

- **Partner strip** — continuous right-to-left marquee, paused on hover. The
  logo set is rendered twice and the track translates by exactly `-50%`, so one
  cycle is 972px and the loop has no seam.
- **Stat band** — each number counts up from zero over ~1.25s, all together.
- **BaaS card / Dashboard bars / Card shine + counters** — grouped per section
  by `AnimatedSection`, so everything inside a block fires at the same instant,
  and re-fires each time the block scrolls back into view rather than only once.

`prefers-reduced-motion: reduce` disables all of them.

## Decisions and open items

- **Prototype chrome dropped.** The dark preview bar (screen switcher,
  Desktop/Mobile frames, Protótipo/Revisão, PT/EN) was scaffolding for the
  mockup. Device switching is now real breakpoints; the PT/EN switch moved into
  the header, built from the same pill vocabulary as the rest of the design.
- **Mini design system screen dropped** as a page — it now exists as the token
  and component layer in `globals.css`.
- **Segment pages.** Only "Para Bancos" was designed. As in the prototype, the
  three other segment entries in the mega menu and footer point at it. They need
  their own pages once the copy exists.
- **Contact form has no backend.** It validates in the browser and confirms
  receipt; point `ContactPage`'s `onSubmit` at a real endpoint when there is one.
- **Placeholders kept, as designed:** partner and client logos, the testimonial
  photo and quote, the four case cards, certification seals, the phone number
  and street address. "Trabalhe conosco", "Central de privacidade", the legal
  links, the social links and "Agendar uma conversa" have no destinations yet.
- **Favicon** at `app/icon.svg` is a neutral orange placeholder — swap it for
  the real brand favicon.
- Two small inconsistencies in the prototype were normalised rather than
  copied: the Dashboard and Trilhos icons were swapped in the desktop mega menu
  relative to everywhere else, and a few menu items carried a shorter
  description on mobile than on desktop. Each product now has one icon and one
  description used everywhere.
- English copy comes from the prototype's own EN dictionary where it existed;
  strings the design never translated (product card lines, illustration labels,
  page metadata) were translated to match its tone and are worth a review by a
  native speaker before launch.
