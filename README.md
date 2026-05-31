# Dwarf Fortress Strategy Guide

A dark-mode-only React, Tailwind CSS, and Vite site for a fan-made Dwarf Fortress strategy guide.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The build automatically regenerates `public/sitemap.xml` from the current chapter slugs.

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20` or newer

## Analytics and Search

Set these build-time environment variables in the deployment platform:

- `VITE_GA_MEASUREMENT_ID`: your GA4 measurement ID, formatted like `G-XXXXXXXXXX`
- `VITE_GOOGLE_SITE_VERIFICATION`: the Google Search Console HTML meta verification token

The deployed site exposes:

- `https://dwarffortressguide.com/sitemap.xml`
- `https://dwarffortressguide.com/robots.txt`
