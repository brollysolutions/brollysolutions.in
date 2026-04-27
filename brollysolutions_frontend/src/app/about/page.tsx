import React from 'react';

const pillars = [
  {
    title: "Strategic Integrity",
    description: "We believe in honest partnerships. We don't just agree with every idea; we provide the critical thinking necessary to ensure your investment yields real-world returns.",
    icon: "⚖️"
  },
  {
    title: "Operational Excellence",
    description: "Quality is not an act, but a habit. Our internal standards for performance and reliability are set far above industry benchmarks.",
    icon: "🏆"
  },
  {
    title: "Future-Proofing",
    description: "The digital landscape shifts daily. We architect solutions that are resilient to change, allowing your business to pivot without rebuilding from scratch.",
    icon: "🚀"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-24 px-6 overflow-hidden border-b border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent opacity-50 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-brand-gold font-mono tracking-[0.2em] uppercase text-sm animate-fade-in">
            Established for Excellence
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Building the <span className="text-brand-gold italic font-serif">Future</span> of Digital Business.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed pt-4">
            Brolly Solutions is more than a service provider. We are a strategic ally for businesses navigating the complexities of the modern digital era.
          </p>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY SECTION (Split Layout) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-3xl font-bold">The Brolly Philosophy</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              We believe that every line of logic should serve a business purpose. Our approach is rooted in the intersection of **human-centric design** and **industrial-grade engineering**. 
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              While many focus on the trend of the week, we focus on the foundation of the decade. By prioritizing security, scalability, and intuitive interaction, we ensure our partners stay ahead—not just for today, but for the long term.
            </p>
            <div className="pt-4">
              <div className="h-1 w-24 bg-brand-gold rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-brand-dark border border-gray-800 p-10 rounded-2xl relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-gold opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-gold opacity-50"></div>
            <blockquote className="text-2xl font-serif italic text-white leading-snug">
              "Technology should be the silent engine of growth, not the bottleneck of progress. At Brolly, we build engines that never stop."
            </blockquote>
            <p className="mt-6 text-brand-gold font-bold uppercase tracking-widest text-sm">— Management Directive</p>
          </div>
        </div>
      </section>

      {/* 3. CORE PILLARS GRID */}
      <section className="py-24 px-6 bg-brand-dark/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Our Core Pillars</h3>
            <p className="text-gray-400">The values that drive every decision we make.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-left space-y-4 group">
                <div className="text-4xl">{pillar.icon}</div>
                <h4 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & TEAM PLACEHOLDER */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 text-left space-y-4">
            <h3 className="text-3xl font-bold">Leading the Way</h3>
            <p className="text-gray-400">
              Our leadership team brings together decades of experience in enterprise systems and digital strategy. We are committed to fostering a culture of curiosity and excellence.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Leadership Card 1 */}
            <div className="p-8 bg-brand-dark border border-gray-800 rounded-xl flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gray-800 border border-brand-gold/30"></div>
              <div>
                <h5 className="text-white font-bold text-lg">Founding Partner</h5>
                <p className="text-brand-gold text-sm font-mono">Strategy & Systems</p>
              </div>
            </div>
            {/* Leadership Card 2 */}
            <div className="p-8 bg-brand-dark border border-gray-800 rounded-xl flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-gray-800 border border-brand-gold/30"></div>
              <div>
                <h5 className="text-white font-bold text-lg">Director of Delivery</h5>
                <p className="text-brand-gold text-sm font-mono">Project Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-brand-gold p-12 rounded-3xl text-brand-black text-center shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
          <h3 className="text-3xl md:text-4xl font-black mb-6">Experience the Brolly Advantage.</h3>
          <p className="text-xl font-medium mb-8 opacity-90">
            Let's discuss how we can elevate your business operations and digital presence.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-10 py-4 bg-brand-black text-white font-bold rounded-xl hover:scale-105 transition-transform"
          >
            Start a Conversation
          </a>
        </div>
      </section>

    </div>
  );
}