import React from 'react';
import Link from 'next/link';

const team = [
  { initials: "VS", name: "Vamshi Sai Kumar", role: "Founder · Full-Stack & AI", bio: "8 years building scalable backend systems, data pipelines, and AI integrations. Led teams of 12 at two enterprise tech firms.", tags: ["Ex-TCS", "Ex-Infosys", "AWS Certified"] },
  { initials: "PR", name: "Priya Rajan", role: "Cloud & DevOps Lead", bio: "Specialist in cloud migrations, CI/CD pipelines, and cost optimization. Has moved 20+ applications to cloud without downtime incidents.", tags: ["Ex-Wipro", "Azure Certified", "GCP Pro"] },
  { initials: "AK", name: "Arun Krishnan", role: "Data & Analytics", bio: "Built data warehouses and BI systems for BFSI clients. Makes sense of messy data — transforms it into dashboards executives actually use.", tags: ["Ex-Cognizant", "Tableau Expert", "dbt Certified"] },
  { initials: "SM", name: "Shruti Menon", role: "Product & UX Design", bio: "Designed B2B SaaS products from 0 to 1. Bridges the gap between business requirements and user experience — makes complex tools simple.", tags: ["Ex-Freshworks", "Figma Expert"] }
];

const proofs = [
  { type: "Open Source Work", title: "Data Pipeline Library on GitHub", desc: "We've published a Python library used by 200+ developers for ETL automation. Real code, real stars, real community feedback." },
  { type: "Technical Writing", title: "12 Published Articles on System Design", desc: "Our engineers write about what they know. Published on Medium and Dev.to with 15,000+ combined reads. Expertise you can verify." },
  { type: "Past Employer Work", title: "Projects From Previous Roles", desc: "We can walk you through (under NDA) projects we led at TCS, Infosys, and Wipro — architectures, scale, business outcomes." },
  { type: "Certifications", title: "8 Active Industry Certifications", desc: "AWS Solutions Architect, Azure Developer, Google Data Engineer, and more. Verified, current, and linked on our LinkedIn profiles." },
  { type: "Demo Project", title: "We Built Our Own SaaS Product", desc: "We built a live internal productivity tool to eat our own cooking. It runs on the same stack we'll use for you." },
  { type: "Introductory Guarantee", title: "Satisfaction-First Pricing", desc: "We're so confident in our quality that your first project comes with a money-back guarantee on the final 30% payment." }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white pb-24">
      
      {/* 1. TEAM SECTION */}
      <section className="py-24 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-4">The Team</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Senior Talent. Startup Speed.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We're a small team with experience that punches well above our size. Combined, we've shipped products used by millions of people at some of India's largest companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-brand-dark border border-gray-800 p-8 rounded-2xl hover:border-brand-gold transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-gold to-yellow-700 flex items-center justify-center text-brand-black font-serif font-bold text-xl mb-6">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-brand-gold text-sm font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold px-2 py-1 bg-brand-black border border-gray-700 rounded text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROOF SECTION (The Honest Pitch) */}
      <section className="py-24 px-6 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-4">Why Trust Us</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">No Clients Yet — Here's Our Proof.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We're upfront: we're building our portfolio. Here's what we have instead of case studies right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofs.map((proof, i) => (
              <div key={i} className="bg-brand-dark border border-gray-800 p-8 rounded-2xl hover:shadow-[0_0_20px_rgba(242,218,96,0.1)] transition-all">
                <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-3">{proof.type}</p>
                <h3 className="text-lg font-bold mb-3 leading-snug">{proof.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{proof.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}