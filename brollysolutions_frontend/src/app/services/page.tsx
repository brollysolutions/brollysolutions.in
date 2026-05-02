import React from 'react';
import Link from 'next/link';

const services = [
  { num: "01", title: "Custom Software Development", desc: "Web apps, internal tools, customer portals, and SaaS products. Built clean, documented, and yours to own completely.", tags: ["React", "Next.js", "Python", "PostgreSQL"] },
  { num: "02", title: "AI Integration & Automation", desc: "Add AI to your existing workflows — document processing, chatbots, predictions, and intelligent reporting.", tags: ["LLMs", "OpenAI API", "Automation"] },
  { num: "03", title: "Data & Business Intelligence", desc: "Unify your data sources, clean your pipelines, and get dashboards that actually help you make decisions.", tags: ["Tableau", "Power BI", "dbt"] },
  { num: "04", title: "Cloud Infrastructure", desc: "Move to cloud, cut costs, or fix a fragile infrastructure. We architect for reliability and scale — not just speed.", tags: ["AWS", "Azure", "Docker", "Kubernetes"] },
  { num: "05", title: "MVP & Product Development", desc: "From napkin idea to working product in 8–12 weeks. We'll challenge your assumptions and help you build the right thing first.", tags: ["Discovery", "Prototyping", "Launch"] },
  { num: "06", title: "Tech Advisory & Audit", desc: "Not sure if your tech is healthy? We'll review your architecture, codebase, and infrastructure — and tell you the truth.", tags: ["Architecture Review", "Security", "Cost Audit"] }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white pb-24">
      
      <section className="py-24 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-20">
            <div>
              <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-4">What We Build</p>
              <h1 className="text-5xl font-bold tracking-tight">Services We Offer</h1>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed md:text-right">
              We pick a focused set of things and do them exceptionally — rather than claiming to do everything and spreading thin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
            {services.map((service, i) => (
              <div key={i} className="bg-brand-dark p-10 hover:bg-brand-black transition-colors relative group">
                <div className="font-serif text-brand-gold/40 text-xl italic mb-6 group-hover:text-brand-gold transition-colors">
                  {service.num}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 border border-brand-gold/20 text-brand-gold rounded bg-brand-gold/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-brand-gold text-brand-black font-bold rounded-xl hover:bg-brand-gold-hover transition-all">
              Book a Free Tech Audit →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}