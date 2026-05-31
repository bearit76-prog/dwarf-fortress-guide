import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(rootDir, 'public/sitemap.xml');
const chaptersPath = resolve(rootDir, 'src/data/chapters.js');
const lastmod = new Date().toISOString().slice(0, 10);
const siteUrl = 'https://dwarffortressguide.com';

const chaptersSource = await readFile(chaptersPath, 'utf8');
const chapterSlugs = [...chaptersSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);

const urls = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  ...chapterSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: '0.9',
    changefreq: 'monthly',
  })),
  { path: '/download-pdf', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.5', changefreq: 'yearly' },
  { path: '/support', priority: '0.4', changefreq: 'yearly' },
];

const entries = urls
  .map(
    ({ path, changefreq, priority }) => `  <url>
    <loc>${siteUrl}${path === '/' ? '' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, sitemap);
