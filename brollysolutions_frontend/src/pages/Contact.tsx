import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from "@/features/contact/components/LeadForm";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="w-7 h-px bg-brand-gold/40" />
      <span className="text-xs font-mono uppercase tracking-[0.35em] text-brand-gold font-semibold">
        {children}
      </span>
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Strategic Review",
    desc: "We evaluate your current stack, team composition, and business objectives before proposing anything.",
  },
  {
    num: "02",
    title: "Discovery Call",
    desc: "A 30-minute technical deep-dive with our senior engineers to align on scope and constraints.",
  },
  {
    num: "03",
    title: "Custom Architecture",
    desc: "You receive a tailored roadmap, timeline, and exact fixed pricing — nothing vague, nothing hidden.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black pt-28 pb-20 relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(circle, rgba(242,218,96,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Get in Touch</SectionLabel>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mt-2 text-black"
            >
              Initiate <br />
              <span className="font-serif italic text-brand-gold">Dialogue.</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 pb-2"
          >
            <p className="text-black text-lg font-normal leading-relaxed">
              Submit your project details below. We review every inquiry personally to determine if we're the right fit for your scaling needs.
            </p>
          </motion.div>
        </div>

        {/* ─── MAIN LAYOUT ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT: Process + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-14"
          >
            {/* Process */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-black mb-7 pb-4 border-b border-zinc-200 font-semibold">
                The Audit Process
              </p>
              <ul className="space-y-0">
                {steps.map((step, i) => (
                  <li
                    key={i}
                    className="group border-b border-zinc-200 py-6 relative overflow-hidden"
                  >
                    {/* Hover sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-in-out pointer-events-none" />
                    <div className="relative z-10 flex gap-6 items-start">
                      <span className="font-mono text-sm text-black group-hover:text-brand-gold transition-colors duration-300 pt-1 flex-shrink-0 font-semibold">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="text-xl font-bold tracking-tight text-black group-hover:text-brand-gold transition-colors duration-300 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-black text-base font-normal leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-zinc-200">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-black mb-2.5 font-semibold">
                  Direct Inquiry
                </p>
                <a
                  href="mailto:hello@brollysolutions.com"
                  className="text-black text-base hover:text-brand-gold transition-colors duration-300 font-semibold border-b border-black pb-0.5"
                >
                  hello@brollysolutions.com
                </a>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-black mb-2.5 font-semibold">
                  Operating Hours
                </p>
                <p className="text-black text-base font-normal">Mon — Sat, 9am — 6pm IST</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            {/* Single unified glass card */}
            <div className="bg-[#fafafa] border border-zinc-200 p-8 md:p-12 rounded-2xl relative overflow-hidden group">
              <div
                className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle, rgba(242,218,96,0.06) 0%, transparent 70%)" }}
              />
              <div className="relative z-10">
                <LeadForm />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
