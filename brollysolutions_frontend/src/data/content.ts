/**
 * content.ts — single source of truth for the site's marketing copy.
 * Pure data (no JSX) so it can be imported anywhere. Icons are referenced by
 * name and rendered through <Icon />.
 *
 * Copy is written specifically for Brolly Software Solutions — realistic
 * IT-services placeholder content (no lorem ipsum).
 */
import type { IconName } from '@/components/ui/Icon';

export const COMPANY = {
  name: 'Brolly Software Solutions',
  legalName: 'Brolly Software Solutions Pvt Ltd',
  domain: 'brollysolutions.in',
  tagline: 'Engineering digital transformation for the modern enterprise.',
  email: 'hello@brollysolutions.in',
  phone: '+91 90000 12345',
  addressLines: ['Brolly Software Solutions Pvt Ltd', 'HITEC City, Madhapur', 'Hyderabad, Telangana 500081, India'],
  hours: 'Mon – Sat, 9:00 AM – 6:00 PM IST',
  founded: 2014,
  loginUrl: 'https://brollysolutions.in/login',
};

export interface NavLink {
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

/* ── Products (SaaS tools) — each links to its live app via redirect URL ── */
export interface Product {
  icon: IconName;
  title: string;
  tagline: string;
  description: string;
  href: string;      // internal route ("/…") or external redirect URL
  badge: string;
}

export const PRODUCTS: Product[] = [
  {
    icon: 'chat',
    title: 'Chatbot',
    tagline: 'Conversational Intelligence',
    description:
      'A next-generation conversational assistant built on advanced LLMs. Integrates with your knowledge base, handles complex customer queries, and automates support workflows with human-like precision.',
    href: '/chatbot',
    badge: 'Most Popular',
  },
  {
    icon: 'ai',
    title: 'RAG Chatbot',
    tagline: 'Retrieval-Augmented AI',
    description:
      'Ground your assistant in your own documents. Our RAG chatbot retrieves and cites the right context so answers stay accurate, current, and trustworthy.',
    href: '/rag_chatbot',
    badge: 'Enterprise',
  },
  {
    icon: 'document',
    title: 'Resume Generator',
    tagline: 'ATS-Optimized Resumes',
    description:
      'Craft job-winning resumes in seconds. Analyzes job descriptions to optimize keywords for applicant tracking systems and outputs polished, professional profiles.',
    href: 'https://brollysolutions.in/resume_generator',
    badge: 'Smart Builder',
  },
  {
    icon: 'terminal',
    title: 'Prompt Generator',
    tagline: 'LLM Prompt Engineering',
    description:
      'Unlock the full potential of generative AI. Turn basic prompts into structured, highly effective instructions optimized for ChatGPT, Claude, Midjourney and other models.',
    href: 'https://brollysolutions.in/prompt_generator',
    badge: 'Developer Tool',
  },
  {
    icon: 'voice',
    title: 'Brolly VoxFlow',
    tagline: 'Spreadsheet-to-Voice Automation',
    description:
      'Turn raw data into live conversations with the world’s first RAG-powered outbound voice agent. Upload a lead list, assign a task in plain English, and launch thousands of context-aware calls in seconds.',
    href: '/voxflow',
    badge: 'New',
  },
];

/* ── Brolly VoxFlow — copy for the /voxflow product detail page ──── */
export interface VoxFlowStep {
  step: string;
  title: string;
  body: string;
}

export interface VoxFlowFeature {
  icon: IconName;
  title: string;
  body: string;
}

export const VOXFLOW = {
  /** The live VoxFlow app — target of the "View product" button on /voxflow. */
  appUrl: 'https://brollysolutions.in/voiceagent',

  /**
   * Demo video shown on /voxflow.
   *
   * TO ADD THE REAL RECORDING — no code changes needed beyond this block:
   *   1. Drop the file into `public/` (e.g. public/voxflow-demo.mp4).
   *   2. Set `src` to its path from the site root, e.g. '/voxflow-demo.mp4'.
   *   3. Optionally add a still frame as `poster` (e.g. '/voxflow-demo-poster.jpg')
   *      so the player shows an image instead of a black box before playback.
   *
   * While `src` is empty the page renders a placeholder instead of a player.
   * Use MP4 (H.264 + AAC) — it is the only format that plays everywhere.
   */
  demo: {
    src: '' as string,
    poster: '' as string,
    caption: 'Watch a lead list become live, personalized phone calls — end to end, in under two minutes.',
  },

  intro:
    'Stop spending hours manually dialing leads, tracking down time zones, and reading script templates. With Brolly VoxFlow, you can upload your data, assign a task in plain English, and watch your spreadsheets transform into thousands of automated, context-aware phone calls in seconds.',

  steps: [
    {
      step: '01',
      title: 'Upload your data',
      body: 'Drop your lead lists directly into the system. Brolly VoxFlow seamlessly parses CSV, Excel, or unstructured text files without requiring manual field mapping.',
    },
    {
      step: '02',
      title: 'Prompt your agent',
      body: 'Assign tasks using natural language. Simply type a prompt like: “Call every lead in this file, inform them their product demo is tonight at 6:00 PM, and confirm if they can still attend.”',
    },
    {
      step: '03',
      title: 'Smart execution',
      body: 'Our advanced Retrieval-Augmented Generation (RAG) engine scans your document, extracts individual lead variables (names, times, notes), and feeds them into our voice pipeline to launch high-fidelity outbound calls instantly.',
    },
  ] as VoxFlowStep[],

  features: [
    {
      icon: 'bolt',
      title: 'Dynamic data injection',
      body: 'The agent references specific cell data in real-time, making every automated call sound personalized, natural, and human.',
    },
    {
      icon: 'ai',
      title: 'Autonomous task execution',
      body: 'VoxFlow doesn’t just read a script; it understands the goal of your prompt and handles conversational deviations natively.',
    },
    {
      icon: 'cloud',
      title: 'Instant scalability',
      body: 'Move from a single uploaded file to thousands of simultaneous, concurrent phone calls without hitting infrastructure bottlenecks.',
    },
    {
      icon: 'signal',
      title: 'Live status dashboard',
      body: 'Track call completions, answer rates, and sentiment analysis directly from your Brolly console.',
    },
  ] as VoxFlowFeature[],

  architecture: {
    intro:
      'For engineering teams looking under the hood, Brolly VoxFlow bridges advanced language modeling with low-latency telephony infrastructure:',
    items: [
      {
        icon: 'ai',
        title: 'The RAG pipeline',
        body: 'Implements structural document parsing paired with a high-performance vector database for semantic search and accurate prompt injection.',
      },
      {
        icon: 'voice',
        title: 'The voice engine',
        body: 'Powered by state-of-the-art LLM frameworks and low-latency WebRTC/SIP trunking to ensure sub-second response times during live dialogue.',
      },
    ] as VoxFlowFeature[],
  },
};

/* ── Services ───────────────────────────────────────────────────── */
export interface Service {
  icon: IconName;
  title: string;
  summary: string;
  points: string[];
}

export const SERVICES: Service[] = [
  {
    icon: 'web',
    title: 'Web Development',
    summary:
      'High-performance web platforms and portals built on modern frameworks — fast, accessible, and engineered to scale with your business.',
    points: ['React / Next.js', 'Progressive Web Apps', 'Headless CMS', 'Design systems'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    summary:
      'Cloud migration, infrastructure automation, and CI/CD pipelines that cut release cycles from weeks to hours while lowering run costs.',
    points: ['AWS · Azure · GCP', 'Kubernetes & Docker', 'Terraform IaC', 'Observability'],
  },
  {
    icon: 'enterprise',
    title: 'Enterprise Software',
    summary:
      'Custom ERP, CRM, and workflow systems that replace brittle spreadsheets with reliable, integrated platforms your teams actually trust.',
    points: ['ERP / CRM', 'Systems integration', 'API platforms', 'Legacy modernization'],
  },
  {
    icon: 'mobile',
    title: 'Mobile App Development',
    summary:
      'Native and cross-platform mobile apps with pixel-perfect UX, offline resilience, and store-ready release engineering.',
    points: ['iOS & Android', 'React Native / Flutter', 'Offline-first', 'App Store delivery'],
  },
  {
    icon: 'ai',
    title: 'AI / ML Solutions',
    summary:
      'Applied AI that ships — from LLM copilots and RAG assistants to forecasting models and intelligent document processing.',
    points: ['LLM & RAG copilots', 'Predictive analytics', 'Computer vision', 'MLOps'],
  },
  {
    icon: 'qa',
    title: 'QA & Testing',
    summary:
      'Automated and manual quality engineering that catches defects before your customers do, with coverage you can measure.',
    points: ['Test automation', 'Performance testing', 'Security testing', 'CI quality gates'],
  },
  {
    icon: 'consulting',
    title: 'IT Consulting',
    summary:
      'Independent technology strategy, architecture reviews, and digital roadmaps that align engineering investment with business outcomes.',
    points: ['Tech strategy', 'Architecture audits', 'Digital roadmaps', 'Team augmentation'],
  },
];

/* ── Industries ─────────────────────────────────────────────────── */
export interface Industry {
  icon: IconName;
  name: string;
  description: string;
}

export const INDUSTRIES: Industry[] = [
  {
    icon: 'bank',
    name: 'Banking & Financial Services',
    description: 'Secure core-banking integrations, payment platforms, and regulatory-grade data systems for BFSI.',
  },
  {
    icon: 'health',
    name: 'Healthcare & Life Sciences',
    description: 'HIPAA-aware patient platforms, telehealth, and clinical data pipelines that protect what matters.',
  },
  {
    icon: 'retail',
    name: 'Retail & E-commerce',
    description: 'Omnichannel commerce, inventory intelligence, and personalization engines that lift conversion.',
  },
  {
    icon: 'factory',
    name: 'Manufacturing',
    description: 'Industry 4.0 platforms, IoT monitoring, and MES integrations that connect the factory floor.',
  },
  {
    icon: 'truck',
    name: 'Logistics & Supply Chain',
    description: 'Real-time fleet tracking, route optimization, and warehouse systems built for scale.',
  },
  {
    icon: 'signal',
    name: 'Telecom & Media',
    description: 'OSS/BSS modernization, streaming platforms, and subscriber analytics at national scale.',
  },
  {
    icon: 'bolt',
    name: 'Energy & Utilities',
    description: 'Smart-grid dashboards, asset monitoring, and demand-forecasting for the energy sector.',
  },
  {
    icon: 'shield',
    name: 'Government & Public Sector',
    description: 'Citizen-facing portals and secure, auditable digital services delivered with public accountability.',
  },
];

/* ── Stats / counters ───────────────────────────────────────────── */
export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 11, suffix: '+', label: 'Years in business' },
  { value: 480, suffix: '+', label: 'Projects delivered' },
  { value: 160, suffix: '+', label: 'Clients served' },
  { value: 14, suffix: '', label: 'Countries reached' },
];

/* ── Why Brolly differentiators ─────────────────────────────────── */
export interface Differentiator {
  icon: IconName;
  title: string;
  description: string;
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: 'consulting',
    title: 'Senior-led delivery',
    description: 'Every engagement is architected and reviewed by senior engineers — no hand-offs to untested juniors.',
  },
  {
    icon: 'shield',
    title: 'Security by default',
    description: 'Secure SDLC, code scanning, and compliance-aware design baked into every project from day one.',
  },
  {
    icon: 'bolt',
    title: 'Outcome-focused',
    description: 'We measure success by your business metrics — throughput, cost, and time-to-market, not lines of code.',
  },
  {
    icon: 'cloud',
    title: 'Built to scale',
    description: 'Cloud-native architectures designed for high availability from your first user to your millionth.',
  },
];

/* ── Case studies ───────────────────────────────────────────────── */
export interface CaseStudy {
  tag: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    tag: 'Banking',
    title: 'Real-time payments platform for a regional bank',
    summary:
      'Re-architected a legacy batch settlement system into an event-driven microservices platform processing transactions in real time.',
    metric: '68%',
    metricLabel: 'faster settlement',
  },
  {
    tag: 'Retail',
    title: 'Omnichannel commerce for a national retailer',
    summary:
      'Unified in-store and online inventory into a single headless commerce platform with personalized recommendations.',
    metric: '2.4×',
    metricLabel: 'online conversion',
  },
  {
    tag: 'Healthcare',
    title: 'Telehealth & patient portal modernization',
    summary:
      'Delivered a HIPAA-aware telehealth platform with video consults, e-prescriptions, and a secure patient records portal.',
    metric: '99.98%',
    metricLabel: 'platform uptime',
  },
  {
    tag: 'Manufacturing',
    title: 'IoT monitoring for a smart factory',
    summary:
      'Connected 3,000+ shop-floor sensors into a real-time analytics dashboard predicting equipment failures before they happen.',
    metric: '31%',
    metricLabel: 'less downtime',
  },
];

/* ── Testimonials ───────────────────────────────────────────────── */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Brolly rebuilt our settlement engine without a single day of downtime. They think like architects, not order-takers — the roadmap they gave us paid for itself in a quarter.',
    name: 'Anita Deshmukh',
    role: 'Chief Technology Officer',
    company: 'Meridian Financial',
  },
  {
    quote:
      'We had been burned by two agencies before Brolly. The difference is senior ownership from day one. They shipped exactly what they promised, on the date they promised.',
    name: 'Rahul Verma',
    role: 'VP of Engineering',
    company: 'NorthStar Retail',
  },
  {
    quote:
      'Their AI team took our support workflow from a backlog nightmare to fully automated triage. The RAG assistant they built handles 70% of tickets with zero human touch.',
    name: 'Sophia Lindgren',
    role: 'Head of Customer Operations',
    company: 'Talix Health',
  },
  {
    quote:
      'Enterprise discipline with startup velocity. Weekly demos, clean documented code, and a team that genuinely cared about our outcomes. We now treat them as our extended engineering arm.',
    name: 'Marcus Chen',
    role: 'Founder & CEO',
    company: 'Fleetwise Logistics',
  },
];

/* ── Trust bar (client / partner names) ─────────────────────────── */
export const CLIENTS: string[] = [
  'Meridian Financial',
  'NorthStar Retail',
  'Talix Health',
  'Fleetwise Logistics',
  'Vertex Manufacturing',
  'Aurora Energy',
  'Cobalt Telecom',
  'Civica Public',
];

/* ── Careers ────────────────────────────────────────────────────── */
export interface JobOpening {
  title: string;
  location: string;
  type: string;
  team: string;
}

export const OPENINGS: JobOpening[] = [
  { title: 'Senior Full-Stack Engineer', location: 'Hyderabad / Remote', type: 'Full-time', team: 'Engineering' },
  { title: 'Cloud & DevOps Engineer', location: 'Hyderabad', type: 'Full-time', team: 'Platform' },
  { title: 'AI / ML Engineer', location: 'Remote (India)', type: 'Full-time', team: 'AI Lab' },
  { title: 'QA Automation Engineer', location: 'Hyderabad', type: 'Full-time', team: 'Quality' },
  { title: 'Product Designer (UX)', location: 'Hyderabad / Remote', type: 'Full-time', team: 'Design' },
  { title: 'Engineering Intern', location: 'Hyderabad', type: 'Internship', team: 'Engineering' },
];

export const CAREER_PERKS: string[] = [
  'Senior mentorship on every team',
  'Remote-friendly, outcome-driven culture',
  'Learning & certification budget',
  'Comprehensive health cover',
  'Meaningful, hard engineering problems',
  'Transparent, merit-based growth',
];
