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

## Cloudflare Pages

Use these settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `20` or newer

The `public/_redirects` file keeps clean React Router URLs working after deployment.
