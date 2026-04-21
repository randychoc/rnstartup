# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component-name>
```

Components are placed in `components/ui/`.

## Architecture

Single-page marketing site for RENOA (web development agency). All content is in one route (`app/page.tsx`) composed of full-width landing sections rendered in order:

`Header → Hero → Services → Portfolio → Plans → Care → Testimonials → About → Process → UseCases → CTA → Footer`

(`ComparisonTable` exists in `components/` and is fully implemented but commented out in `app/page.tsx` pending content decision.)

Each section is a named export in its own file under `components/`. There are no nested routes, no API routes, and no data fetching — all content is hardcoded. Original client images (PNG sources) live in `app/ClientesRenoa/`. Optimized versions for the web live in `public/portfolio/` as JPEG + WebP + AVIF triplets (see Image optimization below).

**Analytics:** Google Analytics (GA4) via `components/GoogleAnalytics.tsx` (loaded conditionally on `NEXT_PUBLIC_GA_MEASUREMENT_ID` env var), wired in `app/layout.tsx`.

**SEO:** `app/layout.tsx` exports full `metadata` (OpenGraph, Twitter card, canonical, robots) and a JSON-LD `<script>` (Schema.org `ProfessionalService`). `app/opengraph-image.tsx` auto-generates the `og:image` via Next.js `ImageResponse`.

**404:** `app/not-found.tsx` provides a branded 404 page.

## Image optimization

Portfolio images follow a two-format strategy (JPEG fallback + WebP in multiple sizes):

| Format | Tool | Quality | Sizes |
|---|---|---|---|
| JPEG | `sips` | 80 | full size (332–428 KB) — fallback only |
| WebP 400w | `cwebp -q 80 -resize 400 0` | 80 | 18–28 KB — mobile |
| WebP 800w | `cwebp -q 80 -resize 800 0` | 80 | 65–96 KB — tablet |
| WebP full | `cwebp -q 80` | 80 | 152–212 KB — desktop |

> AVIF sources were removed from `<picture>` tags because Firefox desktop had rendering issues with them.

`portfolio.tsx` uses `<picture>` tags with `srcset` + `sizes` for responsive loading:
```html
<source
  type="image/webp"
  srcSet="...-400w.webp 400w, ...-800w.webp 800w, ....webp 1200w"
  sizes="(max-width: 768px) 100vw, 550px"
/>
<img src="...jpg" loading="lazy" decoding="async" />
```

To add a new portfolio image: place the PNG source in `app/ClientesRenoa/`, then run `bash scripts/optimize-images.sh` (generates JPEG), then manually generate the three WebP variants in `public/portfolio/`:
```bash
cwebp -q 80 <file>.jpg -o <file>.webp
cwebp -q 80 -resize 800 0 <file>.jpg -o <file>-800w.webp
cwebp -q 80 -resize 400 0 <file>.jpg -o <file>-400w.webp
```

## Styling

- **Tailwind CSS v4** with CSS variables defined in `app/globals.css`.
- Brand palette is applied via inline `style` props (not Tailwind classes) for brand colors. Use the CSS variables defined in `globals.css`:
  - `--renoa-dark: #090820` — main background (dark sections)
  - `--renoa-dark-card: #11102E` — card background (dark sections)
  - `--renoa-purple: #7030EF` — primary accent
  - `--renoa-purple-light: #9B6BF5` — secondary accent
  - `--renoa-purple-dim: rgba(112, 48, 239, 0.15)` — subtle purple fill
  - `--renoa-purple-border: rgba(112, 48, 239, 0.2)` — purple border
- Utility classes `.section-dark`, `.section-dark-card`, `.shadow-card`, `.shadow-card-hover`, `.shadow-modal`, `.shadow-overlay` are defined in `globals.css`.
- **Accessibility (WCAG AA):** On dark backgrounds (`#090820`), `rgba(255,255,255,...)` text must be ≥ 0.7 opacity for body text and ≥ 0.6 for secondary/muted text. Never go below 0.6 on dark backgrounds.
- shadcn/ui components (`components/ui/`) use the `radix-nova` style with `lucide-react` icons.
- Dark mode is supported via `next-themes` (`components/theme-provider.tsx`). Press `d` to toggle.

## Performance notes

- `next.config.mjs` uses `output: 'export'` (static GitHub Pages) + `images: { unoptimized: true }` — `next/image` optimization is disabled; use raw `<img>` inside `<picture>` instead.
- `compiler.removeConsole` strips `console.log/warn` in production builds.
- Inter font uses `display: 'swap'` to prevent invisible text during font load.
- `app/layout.tsx` includes `preconnect` and `dns-prefetch` for Google Analytics domains.
- `GoogleAnalytics.tsx` uses `strategy="lazyOnload"` (defers GA scripts until after page load) to reduce Total Blocking Time.
- `public/.nojekyll` disables Jekyll processing on GitHub Pages.

## Section visual rhythm

Sections alternate dark/light backgrounds for contrast:

| Section | Background |
|---|---|
| Hero | `#090820` dark |
| Services | `#f8f8fc` light — text `#1a1a2e`, cards `#ffffff` with `border: 1px solid #e2e2ea` |
| Portfolio | `#090820` dark |
| Plans | `#f8f8fc` light — value context block has gradient `linear-gradient(135deg, rgba(112,48,239,0.08), rgba(155,107,245,0.05))` |
| Care | `#090820` dark |
| Testimonials | `#f8f8fc` light — text `#1a1a2e`, cards `#ffffff` |
| About | `#090820` dark |
| Process | `#f8f8fc` light |
| UseCases | `#090820` dark |
| CTA | Purple gradient `linear-gradient(135deg, #7030EF, #4A1DAF, #2D0F7A)` |

**Light section rules:** All text must use dark colors — titles `#1a1a2e`, body `#4a4a6a`. Cards use `background: #ffffff`, `border: 1px solid #e2e2ea`, `shadow-sm`. Never use white text on light sections.

## Spacing standards

- Section padding: `py-20 md:py-28` (CTA and UseCases use `py-16 md:py-20 lg:py-28`)
- Header-to-content gap: `mb-12 md:mb-16`
- `globals.css` sets `scroll-padding-top: 72px` on `html` to prevent the sticky header from covering anchor targets

## Header behavior

`header.tsx` is a `"use client"` component with:
- `sticky top-0 z-50` positioning
- Transparent + `#090820` background at top, `rgba(9,8,32,0.92)` + `backdrop-blur(14px)` after 50px scroll
- CTA button (`animate-pulse`) activates after 5 seconds on page, cancels on hover

## Key constants

Each CTA component defines its own `RENOA_PHONE_CLEAN` and `WHATSAPP_DEFAULT_MESSAGE` at the top of the file. When updating the phone number, change it in every file: `header.tsx`, `plans.tsx`, `care.tsx`, `cta.tsx`, `footer.tsx`, `use-cases.tsx`.

`hero.tsx` and `cta.tsx` each define `CURRENT_MONTH` and `AVAILABLE_SLOTS` constants — update both together every month for the availability indicator.

`footer.tsx` has a `SHOW_LEGAL` flag at the top to conditionally render legal/privacy links.
