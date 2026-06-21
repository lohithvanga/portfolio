# Vanga Lohith — Portfolio

A premium, light-themed personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **React 19 + TypeScript** — component architecture
- **Tailwind CSS v4** — utility styling, CSS-first theme tokens in `src/index.css`
- **Framer Motion** — scroll reveals, hover/tap micro-interactions, page transitions
- **Lucide React** — icon set (GitHub/LinkedIn glyphs are hand-rolled in `src/components/BrandIcons.tsx`, since brand marks aren't in the core Lucide set)

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  data/content.ts       — all copy and structured content (edit this to update text)
  components/           — one component per section + shared primitives
  hooks/                — useActiveSection (nav highlighting), useScrollProgress
```

## Before you deploy

1. **Resume**: `Hero.tsx` links to `/resume.pdf` (see `personal.resumeUrl` in `src/data/content.ts`). Add your actual resume PDF to the `public/` folder as `resume.pdf`, or update the path.
2. **Contact form**: `Contact.tsx` currently simulates a submission (validates, shows a success state) but does not send anywhere. Wire it up to a form backend (e.g. Formspree, a serverless function, or your own API) inside `handleSubmit`.
3. **Content**: All personal details, project copy, skills, and certifications live in `src/data/content.ts` — update there rather than hunting through components.
4. **Favicon**: a simple node-graph mark is in `public/favicon.svg`; swap it for a personal mark if you'd like.

## Notes on design

The hero background is a custom canvas-based neural node graph (`src/components/NodeField.tsx`) that drifts and responds to mouse position — the page's signature element, tying the visual identity to the AI/ML subject matter. Respects `prefers-reduced-motion`.
