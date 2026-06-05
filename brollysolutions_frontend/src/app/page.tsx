"use client";

import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

// Reusable section label
function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="w-7 h-px bg-brand-gold/40" />
      <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-brand-gold">
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
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#1e1e1e] -translate-x-1/2" />
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
                <span className="text-[9rem] font-bold text-white/[0.04] leading-none tracking-tighter select-none">
                  {step.id}
                </span>
                <span className="text-brand-gold font-mono text-xs tracking-[0.25em] uppercase mt-1 font-medium">
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
                <div className="group relative bg-brand-surface border border-[#1e1e1e] hover:border-brand-gold/20 rounded-2xl p-8 transition-colors duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-gold/0 via-brand-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Mobile timeline */}
                  <p className="md:hidden text-[10px] font-mono uppercase tracking-[0.25em] text-brand-gold mb-4">
                    {step.timeline}
                  </p>

                  <h3 className="text-2xl font-semibold text-white tracking-tight mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm mb-7">{step.desc}</p>

                  <div className="border-t border-[#1a1a1a] pt-5">
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 mb-4">
                      Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {step.deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-400 font-light">
                          <span className="w-1 h-1 bg-brand-gold/50 group-hover:bg-brand-gold rounded-full flex-shrink-0 transition-colors" />
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
    <section id="products" className="w-full py-32 px-6 bg-[#0a0a0a] border-b border-[#161616] relative overflow-hidden">
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
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white mt-4">
            Custom-Built{" "}
            <span className="font-serif italic text-brand-gold">Solutions.</span>
          </h2>
          <p className="text-gray-500 font-light text-lg mt-5 max-w-xl mx-auto leading-relaxed">
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
          {products.map((product) => (
            <motion.a
              key={product.title}
              href={product.href}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group relative flex flex-col justify-between bg-brand-surface border border-[#1e1e1e] hover:border-brand-gold/30 rounded-2xl p-8 h-full transition-colors duration-500 overflow-hidden cursor-pointer"
            >
              {/* Radial gradient glow behind card on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(242,218,96,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Dynamic bottom border highlight */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-[#161616] border border-[#262626] group-hover:border-brand-gold/20 rounded-xl transition-colors duration-500">
                    {product.icon}
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-brand-gold/60 border border-brand-gold/15 bg-brand-gold/[0.02] px-2.5 py-1 rounded-full group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-colors duration-500">
                    {product.badge}
                  </span>
                </div>

                {/* Content */}
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500 group-hover:text-brand-gold/60 transition-colors duration-500">
                  {product.tagline}
                </span>
                <h3 className="text-2xl font-semibold text-white tracking-tight mt-2 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm mb-8">
                  {product.desc}
                </p>
              </div>

              {/* Link Action */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-brand-gold transition-colors duration-300 w-fit pt-2 mt-auto">
                Launch Product
                <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                  <DiagonalArrow size={14} />
                </span>
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
    <div className="flex flex-col items-center min-h-screen bg-brand-black text-white">

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative w-full min-h-[92vh] flex items-center pt-36 pb-28 overflow-hidden border-b border-[#161616]">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/4 w-[900px] h-[900px] rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(circle, rgba(242,218,96,0.07) 0%, transparent 65%)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />

        <div className="w-full max-w-7xl px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

          {/* Left: Pitch */}
          <div className="space-y-8">
            {/* <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Senior Engineering Collective</SectionLabel>
            </motion.div> */}

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-white"
              >
                We Help Growing
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-white"
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
              className="text-lg text-gray-500 leading-relaxed max-w-lg font-light"
            >
              A small, senior team that spent years inside large tech companies. We bring that expertise directly to businesses that deserve better — without the big-agency price tag.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href="/contact" className="btn-primary">
                Get a Free Tech Audit
              </Link>
              <Link href="/about" className="btn-secondary">
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
              className="bg-brand-surface border border-[#1e1e1e] hover:border-brand-gold/20 p-10 rounded-2xl relative overflow-hidden group transition-colors duration-500"
            >
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(242,218,96,0.12) 0%, transparent 70%)" }} />

              <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-brand-gold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                Limited — First 5 Clients
              </p>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 leading-snug">
                Free 2-Hour Technology Audit
              </h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8 text-sm">
                We'll review your current tech setup, identify architectural gaps, and deliver a written report — with zero obligation to hire us.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center">
                Claim Your Free Audit
              </Link>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 border border-[#1a1a1a] rounded-2xl rounded-br-[3rem]" />
          </motion.div>

        </div>
      </section>

      {/* ─── PROBLEM SECTION ──────────────────────────────── */}
      <section className="w-full py-32 px-6 bg-brand-black border-b border-[#161616]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-32"
          >
            <SectionLabel>Who We Help</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.05] mb-7 mt-2">
              Sound Familiar?
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-5">
              Most growing businesses hit the same technology walls. We've seen them hundreds of times — and we know exactly how to break through.
            </p>
            <p className="text-gray-600 text-base font-light leading-relaxed">
              We work best with <span className="text-gray-300 font-medium">small and mid-size companies</span> scaling fast and needing a reliable technology partner — not a giant agency that treats them as a small account.
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
            className="space-y-4"
          >
            {painPoints.map((pain, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="group p-7 bg-brand-surface border border-[#1e1e1e] rounded-2xl hover:border-brand-gold/20 transition-all duration-400"
              >
                <div className="flex items-start gap-4">
                  <span className="w-1 h-1 bg-brand-gold/50 rounded-full mt-2.5 flex-shrink-0 group-hover:bg-brand-gold transition-colors" />
                  <div>
                    <h4 className="text-base font-semibold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                      {pain.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-light leading-relaxed">{pain.desc}</p>
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
      <section className="w-full py-32 px-6 bg-[#050505] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(242,218,96,0.04) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>How We Build</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white mt-4">
              Engineering,{" "}
              <span className="font-serif italic text-gray-600">Demystified.</span>
            </h2>
            <p className="text-gray-500 font-light text-lg mt-5 max-w-xl mx-auto leading-relaxed">
              We don't build in a black box. Our process is designed for absolute transparency, rapid iteration, and architectural precision.
            </p>
          </motion.div>
        </div>

        <PipelineSection />
      </section>

    </div>
  );
}