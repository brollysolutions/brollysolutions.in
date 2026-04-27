import React from 'react';

const stats = [
  { label: 'Industry Expertise', value: '10+ Years' },
  { label: 'Successful Deployments', value: '50+' },
  { label: 'System Reliability', value: '99.9%' },
];

export default function AboutSection() {
  return (
    <section className="w-full max-w-7xl py-24 mx-auto px-6 border-t border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="text-left space-y-8">
          <div>
            <h2 className="text-brand-gold font-mono tracking-widest uppercase text-sm mb-4">
              Our Identity
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Where Strategic Vision <br /> 
              Meets <span className="text-brand-gold">Digital Excellence.</span>
            </h3>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            At Brolly Solutions, we don't just build tools; we engineer competitive advantages. 
            We bridge the gap between complex business challenges and elegant, high-performance 
            digital solutions designed to evolve with your company.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-gold/20 p-1 rounded">
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">Innovation First</h4>
                <p className="text-gray-400 text-sm">Leveraging modern frameworks and intelligent logic to keep your business ahead of the curve.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 bg-brand-gold/20 p-1 rounded">
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold">Scalability Guaranteed</h4>
                <p className="text-gray-400 text-sm">Architecting robust systems built to handle increasing demands without compromising performance.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-brand-gold/5 rounded-3xl blur-2xl -z-10"></div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-brand-dark border border-gray-800 p-8 rounded-2xl shadow-xl">
              <h4 className="text-gray-400 font-medium mb-8">Performance Metrics</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-left">
                    <div className="text-3xl font-black text-brand-gold mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-gold to-yellow-600 p-8 rounded-2xl">
              <h4 className="text-brand-black font-bold text-xl mb-2">Ready to Transform?</h4>
              <p className="text-brand-black/80 mb-6 font-medium">
                We are currently partnering with selected businesses for the upcoming quarter. 
                Let's discuss your next move.
              </p>
              <button className="bg-brand-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors">
                Connect With Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}