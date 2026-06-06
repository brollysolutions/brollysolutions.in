import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function SectionLabel({ children, centered = false }: { children: string; centered?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}>
      <span className="w-7 h-px bg-brand-gold/40" />
      <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-brand-gold">
        {children}
      </span>
    </div>
  );
}

const services = [
  {
    num: "01",
    title: "Custom Software Development",
    desc: "Enterprise-grade web apps, internal tools, and SaaS products. Built clean, documented, and architected for scale — not just for demo day.",
    tags: ["React", "Python", "PostgreSQL"],
    details: ["Microservices Architecture", "Custom Middleware", "Real-time WebSockets", "Load-balanced Infrastructure"],
  },
  {
    num: "02",
    title: "AI & RAG Integration",
    desc: "Custom LLM pipelines and automated document processing built directly into your existing operational workflows.",
    tags: ["Qdrant", "FastAPI", "OpenAI"],
    details: ["Vector Database Tuning", "Semantic Search", "Cache Optimization", "Prompt Engineering"],
  },
  {
    num: "03",
    title: "Data & Business Intelligence",
    desc: "Unify messy data sources into real-time operational visibility and predictive dashboards executives actually use.",
    tags: ["Data Pipelines", "dbt", "Power BI"],
    details: ["ETL/ELT Workflows", "Data Warehousing", "Automated Reporting", "Predictive Analytics"],
  },
  {
    num: "04",
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud setups that won't break under load or artificially inflate your monthly burn rate.",
    tags: ["AWS", "Docker", "Kubernetes"],
    details: ["Terraform (IaC)", "CI/CD Orchestration", "Serverless Optimization", "Security Auditing"],
  },
  {
    num: "05",
    title: "8–12 Week MVP Build",
    desc: "Fast-track your product to market. We challenge your assumptions and build the right foundation first.",
    tags: ["Prototyping", "Launch"],
    details: ["Rapid Prototyping", "Core Feature Logic", "Database Modeling", "Scalable Launch Stack"],
  },
  {
    num: "06",
    title: "Tech Advisory & Audit",
    desc: "Deep architectural and security reviews to uncover bottlenecks. We tell you the truth about your codebase.",
    tags: ["Architecture", "Security"],
    details: ["Technical Due Diligence", "Refactoring Strategy", "Cost Optimization", "Legacy Code Audits"],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mt-2 text-zinc-900"
            >
              Masterful <br />
              <span className="font-serif italic text-brand-gold">Execution.</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 pb-2"
          >
            <p className="text-zinc-600 text-lg font-light leading-relaxed">
              We specialize in the complex. From high-concurrency backends to custom RAG pipelines, we architect for the long term.
            </p>
          </motion.div>
        </div>

        {/* ─── SERVICE INDEX ──────────────────────────────── */}
        <div className="border-t border-zinc-200">
          {services.map((service) => (
            <div
              key={service.num}
              onMouseEnter={() => setHoveredIndex(service.num)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-zinc-200 hover:border-brand-gold/30 transition-colors duration-500 cursor-default"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-6 items-start relative z-10">

                {/* Number */}
                <div className="md:col-span-1 pt-1">
                  <motion.span
                    animate={{ color: hoveredIndex === service.num ? '#c29b38' : '#71717a' }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-xs"
                  >
                    {service.num}
                  </motion.span>
                </div>

                {/* Title + Tags */}
                <div className="md:col-span-5">
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-650 group-hover:text-black transition-colors duration-400 mb-5">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-500 border border-zinc-200 rounded-full group-hover:border-brand-gold/30 group-hover:text-brand-gold transition-all duration-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dynamic reveal: description vs details */}
                <div className="md:col-span-6 flex flex-col justify-center min-h-[100px]">
                  <AnimatePresence mode="wait">
                    {hoveredIndex === service.num ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-2 gap-3"
                      >
                        {service.details.map((detail, k) => (
                          <div key={k} className="flex items-center gap-2.5">
                            <span className="w-1 h-1 bg-brand-gold rounded-full flex-shrink-0" />
                            <span className="text-sm font-light text-zinc-700">{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.p
                        key="desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-zinc-600 text-base font-light leading-relaxed max-w-md"
                      >
                        {service.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Hover background sweep */}
              <motion.div
                animate={{ opacity: hoveredIndex === service.num ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none rounded-sm"
                style={{
                  background: "radial-gradient(circle at 30% 50%, rgba(194,155,56,0.025) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ─── BOTTOM CTA ─────────────────────────────────── */}
        <div className="mt-20 flex flex-col items-center text-center gap-8">
          <SectionLabel centered>Ready to start?</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900">
            Request a Strategic Audit
          </h2>
          <p className="text-zinc-600 font-light text-lg max-w-md leading-relaxed">
            We'll review your stack, identify architectural gaps, and tell you exactly what we'd build — no obligation.
          </p>
          <div className="flex gap-4 mt-2">
            <Link to="/contact" className="btn-primary">
              Initiate Discovery
            </Link>
            <Link to="/about" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
