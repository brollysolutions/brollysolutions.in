import React from 'react';
import Link from 'next/link';

const projects = [
  {
    title: "Global Retail Infrastructure",
    client: "E-commerce Enterprise",
    impact: "45% Increase in Conversion",
    description: "A complete overhaul of a legacy digital storefront into a high-performance retail engine. We focused on reducing friction in the user journey and architecting a system capable of handling massive seasonal traffic spikes without latency.",
    outcomes: ["Zero-Downtime Deployment", "Unified Inventory Sync", "Mobile-First User Experience"],
    category: "Commerce Solutions"
  },
  {
    title: "Automated Intelligence Interface",
    client: "SaaS Innovation Group",
    impact: "70% Reduction in Support Overhead",
    description: "Implementation of a bespoke intelligence layer designed to handle complex user inquiries. By automating the first tier of communication, we allowed the client's team to focus on high-level strategic accounts while maintaining a 24/7 presence.",
    outcomes: ["Context-Aware Logic", "Multilingual Support", "Instant Query Resolution"],
    category: "Intelligence Integration"
  },
  {
    title: "Enterprise Analytics Core",
    client: "Financial Services Firm",
    impact: "Real-time Operational Visibility",
    description: "Design and deployment of a centralized data nerve center. This solution aggregated fragmented data streams into a single, high-fidelity dashboard, enabling the executive team to make data-driven decisions in minutes rather than days.",
    outcomes: ["Automated KPI Tracking", "Predictive Trend Modeling", "Internal Security Protocols"],
    category: "Data & Automation"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white pb-24">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-24 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-brand-gold font-mono tracking-widest uppercase text-sm">
            Case Studies
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            The Impact of <span className="text-brand-gold italic font-serif">Strategic Engineering</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We don't just deliver projects; we deliver results. Explore how we’ve helped businesses transform their operations through digital excellence.
          </p>
        </div>
      </section>

      {/* 2. CASE STUDIES LIST */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Project Branding & Impact (Sidebar) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-1">
                <p className="text-brand-gold font-mono text-xs uppercase tracking-widest">{project.category}</p>
                <h3 className="text-3xl font-bold">{project.title}</h3>
                <p className="text-gray-500 font-medium">{project.client}</p>
              </div>
              
              <div className="p-6 bg-brand-dark border-l-4 border-brand-gold rounded-r-xl">
                <p className="text-sm text-gray-400 uppercase tracking-tighter mb-1">Key Impact</p>
                <p className="text-2xl font-black text-white">{project.impact}</p>
              </div>
            </div>

            {/* Project Narrative & Details */}
            <div className="lg:col-span-8 bg-brand-dark/40 border border-gray-800 p-8 md:p-12 rounded-3xl hover:border-brand-gold/50 transition-colors duration-500">
              <div className="space-y-8">
                <p className="text-lg text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-white font-bold uppercase text-xs tracking-widest">Project Outcomes</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.outcomes.map((outcome, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-brand-black border border-gray-700 rounded-full text-sm text-gray-300"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. RESULTS STRIP */}
      <section className="py-20 px-6 bg-brand-gold text-brand-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="max-w-xl">
            <h3 className="text-4xl font-black mb-4 italic">Your success story is next.</h3>
            <p className="text-lg font-medium opacity-80">
              Every business has unique challenges. We have the engineering expertise to turn those challenges into your greatest advantages.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="px-10 py-5 bg-brand-black text-white font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform"
          >
            Start Your Project
          </Link>
        </div>
      </section>

    </div>
  );
}