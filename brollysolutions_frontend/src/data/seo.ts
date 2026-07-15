/**
 * seo.ts — per-route SEO metadata, the single source of truth for titles,
 * descriptions and canonical URLs.
 *
 * Consumed in two places:
 *   • at build time by the `seo-prerender` plugin in vite.config.ts, which
 *     writes a real HTML file per route (plus sitemap.xml / robots.txt), so
 *     crawlers and link unfurlers see correct tags without running JS;
 *   • at runtime by <Seo /> (@/components/common/Seo), which re-applies them
 *     on client-side navigation.
 *
 * Keep this module free of JSX and browser APIs — vite.config.ts imports it
 * in a plain Node context.
 */
import { COMPANY } from './content';

export const SITE_URL = `https://${COMPANY.domain}`;

/** Absolute URL — social unfurlers reject relative image paths. */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

export interface RouteSeo {
  /** Route path, exactly as registered in App.tsx. */
  path: string;
  title: string;
  description: string;
  /** Defaults to `title` when omitted. */
  ogTitle?: string;
  /** Defaults to `description` when omitted. */
  ogDescription?: string;
}

/**
 * Only public marketing routes belong here. The standalone app routes
 * (/chatbot, /rag_chatbot) are intentionally excluded — they are products,
 * not landing pages, and are disallowed in robots.txt.
 */
export const ROUTE_SEO: RouteSeo[] = [
  {
    path: '/',
    title: `${COMPANY.name} — Enterprise Software & Digital Transformation`,
    description:
      'Brolly Software Solutions Pvt Ltd is an IT services and digital transformation firm delivering web, cloud, enterprise software, mobile, and AI/ML solutions for enterprises across BFSI, healthcare, retail, and more.',
    ogDescription:
      'Engineering the software that runs the modern enterprise. Cloud, enterprise software, mobile, and applied AI — delivered by senior-led teams.',
  },
  {
    path: '/about',
    title: `About — ${COMPANY.name}`,
    description: `Founded in ${COMPANY.founded} and based in Hyderabad, Brolly Software Solutions builds enterprise software with senior-led teams. Meet the people, principles, and track record behind the work.`,
  },
  {
    path: '/services',
    title: `Services — ${COMPANY.name}`,
    description:
      'Web and mobile engineering, cloud and DevOps, enterprise software, AI/ML, QA automation, and technology consulting — delivered end to end by Brolly Software Solutions.',
  },
  {
    path: '/products',
    title: `Products — ${COMPANY.name}`,
    description:
      'Ready-to-deploy SaaS platforms from Brolly Software Solutions: Chatbot, RAG Chatbot, Resume Generator, Prompt Generator, and Brolly VoxFlow — launch instantly or have them tailored to your team.',
  },
  {
    path: '/voxflow',
    title: `Brolly VoxFlow — Spreadsheet-to-Voice Automation`,
    description:
      'Brolly VoxFlow turns spreadsheets into thousands of context-aware outbound phone calls. Upload a lead list, assign a task in plain English, and let our RAG-powered voice agent make the calls.',
    ogTitle: 'Brolly VoxFlow — Turn spreadsheets into live conversations',
    ogDescription:
      'The world’s first RAG-powered outbound voice agent. Upload your data, prompt in plain English, and launch thousands of personalized calls in seconds.',
  },
  {
    path: '/industries',
    title: `Industries — ${COMPANY.name}`,
    description:
      'Domain-aware engineering for BFSI, healthcare, retail, manufacturing, logistics, and telecom. See how Brolly Software Solutions delivers for regulated, high-stakes industries.',
  },
  {
    path: '/careers',
    title: `Careers — ${COMPANY.name}`,
    description: `Join Brolly Software Solutions in Hyderabad. Explore open engineering roles, our benefits, and what it is like to build enterprise software with a senior-led team.`,
  },
  {
    path: '/contact',
    title: `Contact — ${COMPANY.name}`,
    description: `Talk to Brolly Software Solutions. Reach us at ${COMPANY.email} or ${COMPANY.phone}, or visit our office in HITEC City, Hyderabad. ${COMPANY.hours}.`,
  },
];

/** Routes served by the SPA that must never be indexed. */
export const NOINDEX_PATHS = ['/chatbot', '/rag_chatbot'];

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
