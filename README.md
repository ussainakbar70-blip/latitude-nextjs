# Latitude Properties — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS demo website for
Latitude Properties, a residential plot / land promoter in Coimbatore,
Tamil Nadu.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

> This project was written in a sandboxed environment without internet
> access, so `npm install` / `npm run build` were **not** run or verified
> here. Please run both locally (or let Vercel do it on deploy) before
> presenting the demo, and check the console for any issues.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment
   variables are required for the current demo.
4. Deploy — Vercel will run `npm install` and `npm run build`
   automatically.

## Project structure

```
src/
  app/            → App Router entry (layout, page, global styles)
  components/     → One component per section (Navbar, Hero, Projects, ...)
  data/           → Demo content: projects.ts, faqs.ts, site.ts (contact info)
  hooks/          → useReveal.ts — scroll-reveal IntersectionObserver hook
```

## Things to do before this goes live

- **Contact form**: `src/components/Contact.tsx` currently only shows a
  demo success state and does not send data anywhere. Wire it up to a
  Vercel API route, Formspree, or your preferred enquiry system.
- **Projects**: `src/data/projects.ts` holds three clearly-labeled demo
  placeholders. Replace with verified project names, locations, plot
  types and (if available) approval numbers.
- **Images**: hero and section images are Unsplash stock photos chosen
  to match the "land/plots in Tamil Nadu" brief. Swap in real site
  photography when available — `next.config.mjs` only currently
  whitelists `images.unsplash.com` as a remote image host, so add any
  new image domains there too.
- **Phone numbers / address**: pulled into `src/data/site.ts` as a single
  source of truth — update there if anything changes.
