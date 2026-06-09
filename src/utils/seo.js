import { chapters } from '../data/chapters.js';

export const SITE_URL = 'https://dwarffortressguide.com';
export const SITE_NAME = 'Dwarf Fortress Strategy Guide';

const defaultDescription =
  'A modern fan-made Dwarf Fortress strategy guide for Steam players, covering embark planning, industry, engineering, defense, morale, and endgame systems.';

const pageMeta = {
  '/': {
    title: SITE_NAME,
    description: defaultDescription,
  },
  '/about': {
    title: `About | ${SITE_NAME}`,
    description: 'Learn about the fan-made Dwarf Fortress Strategy Guide and its beginner-friendly Steam UI focus.',
  },
  '/support': {
    title: `Support | ${SITE_NAME}`,
    description: 'Support the free fan-made Dwarf Fortress Strategy Guide passion project.',
  },
  '/download-pdf': {
    title: `Download PDF | ${SITE_NAME}`,
    description: 'Download the free PDF version of the fan-made Dwarf Fortress Strategy Guide.',
  },
  '/embark-calculator': {
    title: `Embark Calculator | ${SITE_NAME}`,
    description:
      'Build a Dwarf Fortress Steam 53.14 starting party, estimate embark points, and export an embark profile text block.',
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function canonicalUrl(pathname) {
  const normalizedPath = normalizePath(pathname);
  return `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function getPageMeta(pathname) {
  const normalizedPath = normalizePath(pathname);
  const chapter = chapters.find((item) => `/${item.slug}` === normalizedPath);
  const meta = chapter
    ? {
        title: `${chapter.title} | ${SITE_NAME}`,
        description: chapter.summary,
      }
    : pageMeta[normalizedPath] || pageMeta['/'];

  return {
    ...meta,
    canonical: canonicalUrl(normalizedPath),
    image: `${SITE_URL}/og-image.jpg`,
    type: 'website',
  };
}

export function getSitemapUrls() {
  return [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    ...chapters.map((chapter) => ({
      path: `/${chapter.slug}`,
      priority: '0.9',
      changefreq: 'monthly',
    })),
    { path: '/download-pdf', priority: '0.7', changefreq: 'monthly' },
    { path: '/embark-calculator', priority: '0.8', changefreq: 'monthly' },
    { path: '/about', priority: '0.5', changefreq: 'yearly' },
    { path: '/support', priority: '0.4', changefreq: 'yearly' },
  ].map((entry) => ({
    ...entry,
    loc: canonicalUrl(entry.path),
  }));
}
