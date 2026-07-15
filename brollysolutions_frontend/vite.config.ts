import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { COMPANY } from './src/data/content';
import { ROUTE_SEO, SITE_URL, DEFAULT_OG_IMAGE, NOINDEX_PATHS, absoluteUrl, type RouteSeo } from './src/data/seo';

const SEO_OPEN = '<!--seo-->';
const SEO_CLOSE = '<!--/seo-->';

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function seoBlock(route: RouteSeo): string {
  const url = absoluteUrl(route.path);
  const ogTitle = route.ogTitle ?? route.title;
  const ogDescription = route.ogDescription ?? route.description;

  return [
    `<title>${escapeHtml(route.title)}</title>`,
    `<meta name="description" content="${escapeHtml(route.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(COMPANY.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${DEFAULT_OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(ogDescription)}" />`,
    `<meta name="twitter:image" content="${DEFAULT_OG_IMAGE}" />`,
  ].join('\n    ');
}

function sitemap(): string {
  const urls = ROUTE_SEO.map((r) => `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robots(): string {
  const disallow = NOINDEX_PATHS.map((p) => `Disallow: ${p}`).join('\n');
  return `User-agent: *\nAllow: /\n${disallow}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

/**
 * seo-prerender — after the bundle is written, emit one real HTML file per
 * route with route-specific <head> tags, so crawlers and link unfurlers get
 * correct metadata without executing JS. The body stays the empty SPA shell;
 * React hydrates it client-side as before.
 */
function seoPrerender(): Plugin {
  return {
    name: 'seo-prerender',
    apply: 'build',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(outDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const template = fs.readFileSync(indexPath, 'utf8');
      const start = template.indexOf(SEO_OPEN);
      const end = template.indexOf(SEO_CLOSE);
      if (start === -1 || end === -1) {
        // Fail loudly: silently shipping homepage meta on every route is the
        // exact bug this plugin exists to prevent.
        throw new Error(
          `[seo-prerender] Could not find ${SEO_OPEN} … ${SEO_CLOSE} markers in index.html. ` +
            `Restore them or per-route metadata will not be generated.`,
        );
      }

      const before = template.slice(0, start + SEO_OPEN.length);
      const after = template.slice(end);

      for (const route of ROUTE_SEO) {
        const html = `${before}\n    ${seoBlock(route)}\n    ${after}`;
        const dir = route.path === '/' ? outDir : path.join(outDir, route.path);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, 'index.html'), html);
      }

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap());
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots());

      this.info(`generated ${ROUTE_SEO.length} route pages + sitemap.xml + robots.txt`);
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPrerender()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3002,
    proxy: {
      '/rag_chatbot': {
        target: 'https://brollysolutions.in',
        changeOrigin: true,
      },
    },
  },
});
