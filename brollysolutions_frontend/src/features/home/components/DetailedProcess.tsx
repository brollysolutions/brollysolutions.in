import React from 'react';

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We deep-dive into your operational needs to define a clear roadmap. We identify efficiency gaps and opportunities for intelligent automation to ensure your solution drives immediate value.",
    focus: "Strategic Alignment & Goal Setting"
  },
  {
    id: "02",
    title: "Architecture & Blueprinting",
    description: "Our team designs a future-proof system architecture. We prioritize security, data integrity, and a seamless user experience to create a solid foundation for growth.",
    focus: "System Design & Experience Planning"
  },
  {
    id: "03",
    title: "Agile Implementation",
    description: "We build your solution using a high-performance framework. Our methodology ensures rapid progress while maintaining the highest standards of code quality and functional precision.",
    focus: "Full-Scale Solution Building"
  },
  {
    id: "04",
    title: "Rigorous Quality Assurance",
    description: "We don't just test for functionality; we test for endurance. Every system undergoes extensive stress testing to guarantee reliability under heavy real-world usage.",
    focus: "Performance Tuning & Validation"
  },
  {
    id: "05",
    title: "Deployment & Scaling",
    description: "We launch your product with a zero-downtime strategy. Post-launch, we monitor system health and provide the infrastructure needed to scale as your user base grows.",
    focus: "Launch Excellence & Continuity"
  }
];

export default function DetailedProcess() {
  return (
    <section className="w-full max-w-5xl py-24 mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Our <span className="text-brand-gold">Delivery Process</span>
        </h2>
        <p className="text-gray-400 text-lg">A systematic methodology for consistent, high-impact results.</p>
      </div>

      <div className="space-y-12">
        {processSteps.map((step) => (
          <div key={step.id} className="relative flex flex-col md:flex-row gap-8 p-8 border border-gray-800 rounded-2xl bg-brand-dark hover:border-brand-gold transition-colors duration-300 group text-left">
            <div className="text-6xl font-black text-white/5 absolute right-8 top-4 group-hover:text-brand-gold/10 transition-colors">
              {step.id}
            </div>

            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-brand-black border-2 border-brand-gold flex items-center justify-center text-brand-gold text-2xl font-bold">
                {step.id}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 max-w-2xl">
                {step.description}
              </p>
              <div className="inline-block px-3 py-1 rounded-md bg-brand-black border border-gray-700">
                <span className="text-xs font-mono text-brand-gold uppercase tracking-widest">
                  Key Focus: {step.focus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}