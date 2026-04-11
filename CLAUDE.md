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

`Header → Hero → Services → Plans → Care → Process → UseCases → CTA → Footer`

(`ComparisonTable` exists in `components/` but is currently commented out pending content.)

Each section is a named export in its own file under `components/`. There are no nested routes, no API routes, and no data fetching — all content is hardcoded.

**Analytics:** Google Analytics (GA4) via `components/GoogleAnalytics.tsx` and Vercel Analytics via `@vercel/analytics`, both wired in `app/layout.tsx`.

## Styling

- **Tailwind CSS v4** with CSS variables defined in `app/globals.css`.
- Brand palette is applied via inline `style` props (not Tailwind classes) for the dark navy/purple theme used in most sections. Use the CSS variables defined in `globals.css`:
  - `--renoa-dark: #090820` — main background
  - `--renoa-purple: #7030EF` — primary accent
  - `--renoa-purple-light: #9B6BF5` — secondary accent
- shadcn/ui components (`components/ui/`) use the `radix-nova` style with `lucide-react` icons.

## Key constants

The WhatsApp CTA phone number and default message are defined at the top of `components/header.tsx` (`RENOA_PHONE_CLEAN`, `WHATSAPP_DEFAULT_MESSAGE`) — the same pattern is repeated in other CTA components.
