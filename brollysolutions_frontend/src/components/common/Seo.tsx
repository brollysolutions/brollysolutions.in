/**
 * Seo — keeps <head> in sync with the current route during client-side
 * navigation.
 *
 * The build-time `seo-prerender` plugin (vite.config.ts) already bakes correct
 * tags into each route's HTML for crawlers and link unfurlers. This component
 * covers the other half: once React takes over routing, no full page load
 * happens, so the tags must be updated in place. Both read the same data from
 * @/data/seo.
 *
 * Renders nothing.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY } from '@/data/content';
import { ROUTE_SEO, DEFAULT_OG_IMAGE, absoluteUrl } from '@/data/seo';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = ROUTE_SEO.find((r) => r.path === pathname);
    // Unknown route: leave whatever the server sent rather than guessing.
    if (!route) return;

    const url = absoluteUrl(route.path);
    const ogTitle = route.ogTitle ?? route.title;
    const ogDescription = route.ogDescription ?? route.description;

    document.title = route.title;
    upsertMeta('name', 'description', route.description);
    upsertCanonical(url);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', COMPANY.name);
    upsertMeta('property', 'og:title', ogTitle);
    upsertMeta('property', 'og:description', ogDescription);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', DEFAULT_OG_IMAGE);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', ogTitle);
    upsertMeta('name', 'twitter:description', ogDescription);
    upsertMeta('name', 'twitter:image', DEFAULT_OG_IMAGE);
  }, [pathname]);

  return null;
}
