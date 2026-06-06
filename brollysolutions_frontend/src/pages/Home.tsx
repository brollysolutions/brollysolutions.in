import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

// Reusable section label
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="w-7 h-px bg-brand-gold/40" />
      <span className="text-xs font-mono uppercase tracking-[0.35em] text-brand-gold font-bold">
        {children}
      </span>
    </div>
  );
}

// Reusable diagonal arrow SVG used in CTAs
function DiagonalArrow({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Pipeline timeline section
function PipelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const steps = [
    {
      id: "01",
      title: "Architecture & Strategy",
      timeline: "Days 1–3",
      desc: "We don't take orders and start coding. We audit your existing systems and architect a scalable foundation — designing for high availability before a single line is written.",
      deliverables: ["System Architecture Diagram", "Database Schema", "Fixed-Price Proposal"],
    },
    {
      id: "02",
      title: "Prototyping & Logic Mapping",
      timeline: "Weeks 1–2",
      desc: "For complex microservices, we map exact data flows. For user-facing applications, we deliver high-fidelity interactive prototypes so you see how it functions before heavy engineering begins.",
      deliverables: ["Interactive Figma Prototype", "API Flow Documentation", "Feedback Revisions"],
    },
    {
      id: "03",
      title: "Agile Engineering Sprints",
      timeline: "Weeks 3–10+",
      desc: "Senior developers build in weekly sprints. Every week, we demo live working software and adjust course based on your feedback immediately.",
      deliverables: ["Weekly Live Demos", "Staging Environment Access", "Clean, Documented Code"],
    },
    {
      id: "04",
      title: "Launch & Stabilization",
      timeline: "Final Week",
      desc: "Zero-downtime deployment to production. Full code ownership, admin documentation, and 30 days of standby support to ensure total stability.",
      deliverables: ["Zero-Downtime Deployment", "Full Source Code Transfer", "30-Day Support"],
    },
  ];

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto pb-20">
      {/* Track */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-250 -translate-x-1/2" />
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-gold -translate-x-1/2 shadow-[0_0_12px_rgba(242,218,96,0.5)]"
      />

      <div className="space-y-24 md:space-y-36 relative z-10">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={step.id}
              className={`relative flex flex-col md:flex-row items-center w-full ${isEven ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline label (desktop) */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`hidden md:flex flex-col w-5/12 ${isEven ? "items-start" : "items-end"}`}
              >
                <span className="text-[9rem] font-bold text-zinc-950/[0.04] leading-none tracking-tighter select-none">
                  {step.id}
                </span>
                <span className="text-brand-gold font-mono text-sm tracking-[0.25em] uppercase mt-1 font-bold">
                  {step.timeline}
                </span>
              </motion.div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full pl-20 pr-4 md:px-0 md:w-5/12 ${isEven ? "md:pr-10" : "md:pl-10"}`}
              >
                <div className="group relative bg-white border-2 border-zinc-950 hover:border-brand-gold/40 rounded-2xl p-8 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/0 via-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Mobile timeline */}
                  <p className="md:hidden text-xs font-mono uppercase tracking-[0.25em] text-brand-gold mb-4 font-bold">
                    {step.timeline}
                  </p>

                  <h3 className="text-[26px] font-bold text-black tracking-tight mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-black font-normal leading-relaxed text-[17px] mb-7">{step.desc}</p>

                  <div className="border-t border-zinc-300 pt-5">
                    <p className="text-sm font-mono uppercase tracking-[0.3em] text-black font-bold mb-4">
                      Deliverables
                    </p>
                    <ul className="space-y-3">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-base text-black font-normal">
                          <span className="w-1.5 h-1.5 bg-brand-gold group-hover:bg-brand-gold-hover rounded-full flex-shrink-0 transition-colors" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const products = [
  {
    title: "Chatbot",
    tagline: "Conversational Intelligence",
    desc: "Next-generation conversational assistant built with advanced LLMs. Integrates with your knowledge base, handles complex customer queries, and automates support workflows with human-like precision.",
    href: "/chatbot",
    icon: (
      <svg className="w-8 h-8 text-brand-gold transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
      </svg>
    ),
    badge: "Most Popular",
  },
  {
    title: "Resume Generator",
    tagline: "ATS-Optimized Resumes",
    desc: "Craft job-winning resumes in seconds. Analyzes job descriptions to optimize keywords for applicant tracking systems, formats design templates dynamically, and outputs professional profiles.",
    href: "https://brollysolutions.in/resume_generator",
    icon: (
      <svg className="w-8 h-8 text-brand-gold transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    badge: "Smart Builder",
  },
  {
    title: "Prompt Generator",
    tagline: "LLM Prompt Engineering",
    desc: "Unlock the full potential of generative AI. Elevate basic prompts into structured, highly effective instructions optimized for ChatGPT, Claude, Midjourney, and other LLMs.",
    href: "https://brollysolutions.in/prompt_generator",
    icon: (
      <svg className="w-8 h-8 text-brand-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M3 5.25a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5.25z" />
      </svg>
    ),
    badge: "Developer Tool",
  }
];

function ProductsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="products" className="w-full py-32 px-6 bg-white border-b border-zinc-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(242,218,96,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionLabel>Our Products</SectionLabel>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black mt-4">
            Custom-Built{" "}
            <span className="font-serif italic text-brand-gold">Solutions.</span>
          </h2>
          <p className="text-black font-normal text-[20px] mt-5 max-w-2xl mx-auto leading-relaxed">
            Ready-to-deploy, high-performance platforms designed to supercharge your business workflows and operations.
          </p>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const isInternal = product.href.startsWith("/");
            return isInternal ? (
              <Link
                key={product.title}
                to={product.href}
                className="group relative flex flex-col justify-between bg-white border-2 border-zinc-950 hover:border-brand-gold/40 rounded-2xl p-8 h-full transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                {/* Radial gradient glow behind card on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(194,155,56,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Dynamic bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 bg-zinc-100 border border-zinc-200 group-hover:border-brand-gold/20 rounded-xl transition-colors duration-500">
                      {product.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gold/90 border border-brand-gold/30 bg-brand-gold/[0.02] px-3.5 py-1.5 rounded-full group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-colors duration-500 font-bold">
                      {product.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="text-sm font-mono uppercase tracking-[0.25em] text-black group-hover:text-brand-gold/80 transition-colors duration-500 font-bold">
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl font-bold text-black tracking-tight mt-2 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-black font-normal leading-relaxed text-[17px] mb-8">
                    {product.desc}
                  </p>
                </div>

                {/* Link Action */}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-brand-gold transition-colors duration-300 w-fit pt-2 mt-auto">
                  Launch Product
                  <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <DiagonalArrow size={14} />
                  </span>
                </span>
              </Link>
            ) : (
              <a
                key={product.title}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between bg-white border-2 border-zinc-950 hover:border-brand-gold/40 rounded-2xl p-8 h-full transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                {/* Radial gradient glow behind card on hover */}
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(194,155,56,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Dynamic bottom border highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 bg-zinc-100 border border-zinc-200 group-hover:border-brand-gold/20 rounded-xl transition-colors duration-500">
                      {product.icon}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gold/90 border border-brand-gold/30 bg-brand-gold/[0.02] px-3.5 py-1.5 rounded-full group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-colors duration-500 font-bold">
                      {product.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="text-sm font-mono uppercase tracking-[0.25em] text-black group-hover:text-brand-gold/80 transition-colors duration-500 font-bold">
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl font-bold text-black tracking-tight mt-2 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-black font-normal leading-relaxed text-[17px] mb-8">
                    {product.desc}
                  </p>
                </div>

                {/* Link Action */}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-brand-gold transition-colors duration-300 w-fit pt-2 mt-auto">
                  Launch Product
                  <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <DiagonalArrow size={14} />
                  </span>
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

const getPainPointIcon = (index: number) => {
  switch (index) {
    case 0:
      return (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75M3.75 13.875v3.75" />
        </svg>
      );
    case 1:
      return (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      );
    case 2:
      return (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 7a5 5 0 00-5 5c0 2 1.5 3.5 2 4.5h6c.5-1 2-2.5 2-4.5a5 5 0 00-5-5z" />
        </svg>
      );
    case 3:
    default:
      return (
        <svg className="w-6 h-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7 16l4-4 4 4 6-6" />
        </svg>
      );
  }
};

export default function Home() {
  const painPoints = [
    {
      title: "Software isn't keeping up",
      desc: "Manual processes, spreadsheets as databases, and brittle systems breaking under load. You need real infrastructure.",
    },
    {
      title: "Burned by cheap agencies",
      desc: "Delivered late, delivered wrong, disappeared after payment. You need senior-level ownership from day one.",
    },
    {
      title: "Great idea, poor execution",
      desc: "You need an architect who thinks through trade-offs — and who will tell you what not to build.",
    },
    {
      title: "Data tells you nothing",
      desc: "Sales in one system, ops in another. You make decisions on gut feeling because the data is scattered.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-white text-black">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex items-center pt-36 pb-28 overflow-hidden border-b border-zinc-200">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/4 w-[900px] h-[900px] rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(circle, rgba(194,155,56,0.03) 0%, transparent 65%)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />

        <div className="w-full max-w-7xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

          {/* Left: Pitch */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-black"
              >
                We Help Growing
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-black"
              >
                Businesses Build
              </motion.span>
              <motion.span
                initial={{ opacity: 0, filter: "blur(12px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className="block font-serif italic text-brand-gold"
              >
                Smarter Software.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-[20px] text-black leading-relaxed max-w-xl font-normal"
            >
              A small, senior team that spent years inside large tech companies. We bring that expertise directly to businesses that deserve better — without the big-agency price tag.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to="/contact" className="btn-primary">
                Get a Free Tech Audit
              </Link>
              <Link to="/about" className="btn-secondary">
                Meet the Team
              </Link>
            </motion.div>
          </div>

          {/* Right: Pilot Offer Card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, type: "spring", stiffness: 60 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white border-2 border-zinc-950 hover:border-brand-gold/40 p-10 rounded-2xl relative overflow-hidden group transition-colors duration-500"
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(194,155,56,0.06) 0%, transparent 70%)" }} />

              <p className="text-[13px] font-mono uppercase tracking-[0.35em] text-brand-gold mb-5 flex items-center gap-2 font-bold">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                Limited — First 5 Clients
              </p>
              <h3 className="text-3xl font-bold text-black tracking-tight mb-4 leading-snug">
                Free 2-Hour Technology Audit
              </h3>
              <p className="text-black font-normal leading-relaxed mb-8 text-[17px]">
                We'll review your current tech setup, identify architectural gaps, and deliver a written report — with zero obligation to hire us.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center">
                Claim Your Free Audit
              </Link>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 border border-zinc-200 rounded-2xl rounded-br-[3rem]" />
          </motion.div>

        </div>
      </section>

      {/* ─── PROBLEM SECTION ──────────────────────────────── */}
      <section className="w-full py-32 px-6 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32 space-y-6"
          >
            <div>
              <SectionLabel>Who We Help</SectionLabel>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] mt-2 text-black">
                Sound <span className="font-serif italic text-brand-gold">Familiar?</span>
              </h2>
            </div>
            <p className="text-black text-[22px] leading-relaxed font-semibold">
              Most growing businesses hit the same technology walls. We've seen them hundreds of times — and we know exactly how to break through.
            </p>
            <p className="text-black text-[18px] leading-relaxed font-normal">
              We work best with <span className="text-black font-bold underline decoration-brand-gold/40 decoration-2 underline-offset-4">small and mid-size companies</span> scaling fast and needing a reliable technology partner — not a giant agency that treats them as a small account.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="space-y-6"
          >
            {painPoints.map((pain, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="group p-8 bg-white border-2 border-zinc-950 hover:border-brand-gold/50 hover:shadow-[0_10px_30px_rgba(194,155,56,0.06)] transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-brand-gold/[0.05] border border-brand-gold/10 group-hover:border-brand-gold/30 group-hover:bg-brand-gold/[0.08] rounded-2xl transition-all duration-300 shrink-0 flex items-center justify-center">
                    {getPainPointIcon(i)}
                  </div>
                  <div>
                    <h4 className="text-[21px] font-bold text-black mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {pain.title}
                    </h4>
                    <p className="text-black text-[17px] font-normal leading-relaxed">{pain.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── PRODUCTS SECTION ─────────────────────────────── */}
      <ProductsSection />

      {/* ─── PROCESS PIPELINE ─────────────────────────────── */}
      <section className="w-full py-32 px-6 bg-[#f8fafc] overflow-hidden border-b border-zinc-200">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(194,155,56,0.03) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>How We Build</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black mt-4">
              Engineering,{" "}
              <span className="font-serif italic text-black">Demystified.</span>
            </h2>
            <p className="text-black font-normal text-[20px] mt-5 max-w-2xl mx-auto leading-relaxed">
              We don't build in a black box. Our process is designed for absolute transparency, rapid iteration, and architectural precision.
            </p>
          </motion.div>
        </div>

        <PipelineSection />
      </section>

    </div>
  );
}
