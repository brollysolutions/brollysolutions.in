"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

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

const team = [
  {
    initials: "VS",
    name: "Vamshi Sai Kumar",
    role: "Founder · Full-Stack & AI",
    bio: "8 years building scalable backend systems, data pipelines, and AI integrations. Led engineering teams at two enterprise tech firms.",
    tags: ["Ex-TCS", "Ex-Infosys", "AWS Certified"],
  },
  {
    initials: "PR",
    name: "Priya Rajan",
    role: "Cloud & DevOps Lead",
    bio: "Specialist in cloud migrations, CI/CD pipelines, and cost optimization. Has migrated 20+ applications to cloud without a single downtime incident.",
    tags: ["Ex-Wipro", "Azure Certified", "GCP Pro"],
  },
  {
    initials: "AK",
    name: "Arun Krishnan",
    role: "Data & Analytics",
    bio: "Built data warehouses and BI systems for BFSI clients. Transforms messy data into dashboards executives actually use.",
    tags: ["Ex-Cognizant", "Tableau Expert", "dbt Certified"],
  },
  {
    initials: "SM",
    name: "Shruti Menon",
    role: "Product & UX Design",
    bio: "Designed B2B SaaS products from 0 to 1. Bridges business requirements and user experience — makes complex tools feel simple.",
    tags: ["Ex-Freshworks", "Figma Expert"],
  },
];

const proofs = [
  {
    type: "Open Source",
    title: "Data Pipeline Library on GitHub",
    desc: "A Python library used by 200+ developers for ETL automation. Real code, real stars, real community feedback.",
  },
  {
    type: "Technical Writing",
    title: "12 Published Articles on System Design",
    desc: "Published on Medium and Dev.to with 15,000+ combined reads. Expertise you can verify independently.",
  },
  {
    type: "Enterprise Work",
    title: "Projects From Previous Roles",
    desc: "We walk you through (under NDA) projects we led at TCS, Infosys, and Wipro — architectures, scale, outcomes.",
  },
  {
    type: "Certifications",
    title: "8 Active Industry Certifications",
    desc: "AWS Solutions Architect, Azure Developer, Google Data Engineer, and more. Verified, current, and linked on LinkedIn.",
  },
  {
    type: "Dogfooding",
    title: "We Built Our Own SaaS Product",
    desc: "An internal productivity tool built on the exact same stack we use for clients. We eat our own cooking.",
  },
  {
    type: "Guarantee",
    title: "Satisfaction-First Pricing",
    desc: "Your first project comes with a money-back guarantee on the final 30% payment. We're that confident.",
  },
];

export default function AboutPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.97, 1]);

  return (
    <div className="min-h-screen bg-brand-black text-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ─── HERO ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-36 items-end">
          <div className="lg:col-span-8">
            {/* <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Senior Engineering Roster</SectionLabel>
            </motion.div> */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mt-2"
            >
              The <br />
              <span className="font-serif italic text-brand-gold">Collective.</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-4 pb-4"
          >
            <p className="text-gray-500 text-lg font-light leading-relaxed border-l border-[#1e1e1e] pl-8">
              A specialized roster of senior engineers. No juniors, no bloat — just craftspeople building at the intersection of logic and precision.
            </p>
          </motion.div>
        </div>

        {/* ─── PHILOSOPHY ──────────────────────────────────── */}
        <motion.section
          ref={scrollRef}
          style={{ opacity, scale }}
          className="py-36 mb-36 border-y border-[#161616] relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(242,218,96,0.04) 0%, transparent 60%)" }}
          />
          <div className="max-w-4xl mx-auto text-center px-6">
            <SectionLabel centered>Foundational Philosophy</SectionLabel>
            <h3 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mt-4">
              We build software with{" "}
              <span className="font-serif italic">high-altitude perspective</span> and the{" "}
              <span className="text-brand-gold font-semibold">endurance</span> to solve the most complex architectural bottlenecks.
            </h3>
            <div className="mt-14 flex flex-wrap justify-center gap-10 text-gray-600 font-mono text-[10px] uppercase tracking-[0.3em]">
              {["Enterprise Discipline", "Startup Velocity", "Cinematic Quality"].map((v) => (
                <span key={v} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-brand-gold rounded-full" />
                  {v}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── TEAM ROSTER ─────────────────────────────────── */}
        <div className="border-t border-[#1a1a1a] mb-40">
          <p className="py-7 text-gray-700 font-mono text-[10px] uppercase tracking-[0.35em]">
            Senior Engineering Roster
          </p>
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group border-b border-[#1a1a1a] hover:border-brand-gold/20 transition-all duration-500 py-14"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                {/* Initials */}
                <div className="md:col-span-2">
                  <div className="relative w-16 h-16 rounded-full border border-[#222] flex items-center justify-center group-hover:border-brand-gold/40 transition-all duration-500">
                    <span className="font-serif text-xl text-gray-600 group-hover:text-brand-gold transition-colors duration-400">
                      {member.initials}
                    </span>
                    <div className="absolute inset-0 rounded-full border border-brand-gold/0 group-hover:border-brand-gold/20 group-hover:scale-[1.3] transition-all duration-700 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Name + Role */}
                <div className="md:col-span-4">
                  <h3 className="text-3xl font-semibold tracking-tight text-gray-400 group-hover:text-white transition-colors duration-400">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-brand-gold/70 mt-3">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <div className="md:col-span-4">
                  <p className="text-gray-600 font-light leading-relaxed text-sm group-hover:text-gray-400 transition-colors duration-400 pr-6">
                    {member.bio}
                  </p>
                </div>

                {/* Tags */}
                <div className="md:col-span-2 flex flex-wrap gap-2 md:justify-end">
                  {member.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-[9px] font-mono uppercase tracking-[0.2em] text-gray-600 border border-[#1e1e1e] rounded-full group-hover:text-brand-gold/60 group-hover:border-brand-gold/20 transition-all duration-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── PROOF LEDGER ────────────────────────────────── */}
        <div className="mb-6">
          <SectionLabel>Pedigree & Proof</SectionLabel>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mt-2">
            Why You Can <br />
            <span className="text-gray-700">Trust Us.</span>
          </h2>
        </div>

        <div className="border-t border-[#1a1a1a] mb-40">
          {proofs.map((proof, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border-b border-[#1a1a1a] hover:border-brand-gold/20 py-10 px-6 -mx-6 transition-all duration-400 hover:bg-brand-gold/[0.02] rounded-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-3 text-[10px] font-mono uppercase tracking-[0.3em] text-brand-gold/60 group-hover:text-brand-gold transition-colors duration-300 pt-0.5">
                  {proof.type}
                </div>
                <div className="md:col-span-4 text-xl font-semibold tracking-tight text-gray-300 group-hover:text-white transition-colors duration-300">
                  {proof.title}
                </div>
                <div className="md:col-span-5 text-gray-600 font-light leading-relaxed text-sm group-hover:text-gray-400 transition-colors duration-300">
                  {proof.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── BOTTOM CTA ──────────────────────────────────── */}
        <div className="py-32 flex flex-col items-center text-center gap-8">
          <SectionLabel centered>Ready to start?</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Let&apos;s Build Together
          </h2>
          <p className="text-gray-500 font-light text-lg max-w-md leading-relaxed">
            We take on a limited number of projects each quarter. Reach out to check availability.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="btn-primary">
              Start the Audit
            </Link>
            <Link href="/services" className="btn-secondary">
              View Services
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}