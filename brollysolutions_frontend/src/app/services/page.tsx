import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "High-Performance Web Ecosystems",
    tagline: "Presence that commands attention.",
    description: "We don't just build websites; we engineer digital storefronts designed for high conversion and zero friction. Our focus is on speed, accessibility, and a seamless journey from visitor to loyal customer.",
    deliverables: ["Conversion-Optimized Layouts", "High-Traffic Resilience", "Global Content Delivery", "Secure Payment Architecture"],
    icon: "🌐"
  },
  {
    title: "Intelligent Systems & AI Logic",
    tagline: "Decisions driven by data, not guesses.",
    description: "Integrate predictive intelligence into your existing operations. We build custom logic engines that analyze patterns, automate complex decision-making, and provide your team with actionable insights in real-time.",
    deliverables: ["Custom Intelligence Models", "Predictive Trend Analysis", "Natural Language Processing", "Automated Insight Reporting"],
    icon: "🤖"
  },
  {
    title: "Seamless Operational Automation",
    tagline: "Efficiency is the ultimate competitive edge.",
    description: "Eliminate manual bottlenecks that slow your growth. We architect invisible workflows that handle repetitive tasks with perfect precision, allowing your human talent to focus on high-value creative strategy.",
    deliverables: ["Workflow Synchronization", "Legacy System Integration", "Data Migration Pipelines", "Automated Quality Control"],
    icon: "⚡"
  },
  {
    title: "Strategic Experience Design",
    tagline: "Interfaces that feel like second nature.",
    description: "User experience is the silent ambassador of your brand. We design intuitive, sophisticated interfaces that reduce cognitive load and foster an immediate sense of trust and authority with your users.",
    deliverables: ["User Journey Mapping", "Behavioral Analysis", "Interactive Prototyping", "Multi-Platform Visual Cohesion"],
    icon: "🎨"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white pb-24">
      
      {/* 1. PAGE HEADER */}
      <section className="relative py-24 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-brand-gold font-mono tracking-widest uppercase text-sm">
            Core Competencies
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Our <span className="text-brand-gold">Solutions</span> Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From initial concept to industrial-scale deployment, we provide the strategic engineering required to dominate your market.
          </p>
        </div>
      </section>

      {/* 2. DETAILED SERVICES STACK */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image/Visual Placeholder */}
            <div className="w-full lg:w-1/2 aspect-video bg-brand-dark border border-gray-800 rounded-3xl relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-brand-gold font-mono text-sm tracking-widest">{service.tagline}</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 text-left space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all"
                >
                  Inquire about this solution 
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. FINAL CTA */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-brand-dark border border-gray-800 p-12 rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Not sure which solution fits your needs?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Our strategists are ready to conduct a technical audit of your current operations and identify the highest-impact path forward.
          </p>
          <Link 
            href="/contact" 
            className="px-10 py-4 bg-brand-gold text-brand-black font-bold rounded-xl hover:bg-brand-gold-hover transition-colors"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section>

    </div>
  );
}