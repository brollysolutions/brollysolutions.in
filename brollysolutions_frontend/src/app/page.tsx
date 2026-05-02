"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-brand-black text-white">
      
      {/* 1. HERO SECTION & OFFER CARD */}
      <section className="w-full max-w-7xl px-6 pt-32 pb-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-800">
        
        {/* Left: The Honest Pitch */}
        <div className="space-y-8 text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-full bg-brand-gold/10 border-brand-gold/30 text-brand-gold text-xs font-bold tracking-widest uppercase"
          >
            Now Taking First Clients · Introductory Pricing
          </motion.div>
          
          <motion.h1 
            {...fadeInUp}
            className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            We Help Growing Businesses Build <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-brand-gold italic font-serif"
            >
              Smarter Software.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
          >
            We're a small, senior team that's spent years inside large tech companies. Now we bring that same expertise directly to businesses that deserve better — without the big-agency price tag.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link href="/contact" className="px-8 py-4 bg-brand-gold text-brand-black font-bold rounded-xl hover:bg-brand-gold-hover transition-all">
              Get a Free Tech Audit →
            </Link>
            <Link href="/about" className="px-8 py-4 border border-gray-700 text-white font-medium rounded-xl hover:border-brand-gold hover:text-brand-gold transition-all">
              ↓ Meet the Team
            </Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm text-gray-500 font-medium flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            No-commitment call · We'll tell you honestly if we can help
          </motion.p>
        </div>

        {/* Right: The Pilot Offer Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-brand-dark border border-gray-800 p-10 rounded-3xl relative overflow-hidden group hover:border-brand-gold/50 transition-colors"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-colors"></div>
          
          <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-6">
            ⚡ Limited Offer — First 5 Clients
          </p>
          <h3 className="text-3xl font-bold mb-4">Free 2-Hour Technology Audit</h3>
          <p className="text-gray-400 leading-relaxed mb-8">
            We'll review your current tech setup, identify gaps, and give you a written report — with zero obligation to hire us. Free for the first 5 companies.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-brand-black border border-gray-700 text-white font-bold rounded-lg hover:border-brand-gold transition-all">
            Claim Your Free Audit →
          </Link>
        </motion.div>
      </section>

      {/* 2. THE PROBLEM SECTION ("Sound Familiar?") */}
      <section className="w-full py-24 px-6 bg-brand-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-4">Who We Help</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sound Familiar?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Most growing businesses hit the same technology walls. We've seen them a hundred times — and we know exactly how to break through them.
            </p>
            <p className="text-gray-500">
              We work best with <strong className="text-gray-300">small and mid-size companies</strong> scaling fast and needing a reliable technology partner — not a giant agency that treats them like a small account.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: "🧱", title: "Your software isn't keeping up with your growth", desc: "Manual processes, spreadsheets as databases, and brittle systems that break under load. You need real infrastructure." },
              { icon: "💸", title: "You got burned by a freelancer or cheap agency", desc: "Delivered late, delivered wrong, disappeared after payment. You need someone with skin in the game and senior-level ownership." },
              { icon: "🤯", title: "You have a product idea but don't know where to start", desc: "You need someone who can think through the architecture, not just write code — and who will tell you what not to build." },
              { icon: "📉", title: "Your data is everywhere and tells you nothing", desc: "Sales in one system, ops in another, finance in Excel. You make decisions on gut feeling because the data is a mess." }
            ].map((pain, i) => (
              <div key={i} className="flex gap-6 p-8 bg-brand-dark border border-gray-800 rounded-2xl">
                <span className="text-3xl">{pain.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{pain.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{pain.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRANSPARENT PROCESS */}
      <section className="w-full py-24 px-6 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-4xl font-bold mb-16">Simple, Transparent Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
            {[
              { num: "01", title: "Free Audit Call", desc: "30 min. We learn about your business, your tech, and your goals. You get a written summary the same day." },
              { num: "02", title: "Proposal in 48 hrs", desc: "A clear scope, timeline, and fixed price. No surprise costs. We'll walk you through every line item." },
              { num: "03", title: "Build & Show Weekly", desc: "Every Friday, a live demo. You see progress. You give feedback. Nothing gets built in the dark." },
              { num: "04", title: "Deliver & Support", desc: "We hand over everything — code, docs, training. And we're available for 30 days post-launch at no extra charge." }
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-gray-800 rounded-2xl bg-brand-dark hover:border-brand-gold transition-colors group">
                <div className="text-5xl font-serif font-bold text-brand-gold/20 mb-4 group-hover:text-brand-gold/40 transition-colors">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}