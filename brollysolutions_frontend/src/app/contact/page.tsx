import LeadForm from "@/features/contact/components/LeadForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-brand-black text-white pb-24">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-24 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-brand-gold font-mono tracking-widest uppercase text-sm">
            Begin the Journey
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Let’s Build Something <span className="text-brand-gold italic font-serif">Exceptional.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you’re looking to automate operations or launch a market-disrupting platform, our team is ready to provide the strategic engineering you need.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT & FORM */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE: Information & Trust */}
          <div className="space-y-12 text-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">What happens next?</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center text-brand-gold font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-white font-bold">Strategic Audit</h4>
                    <p className="text-gray-400 text-sm mt-1">Our team reviews your inquiry and performs a preliminary audit of your digital needs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center text-brand-gold font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-white font-bold">Discovery Call</h4>
                    <p className="text-gray-400 text-sm mt-1">We schedule a 30-minute deep-dive session to discuss your objectives and technical requirements.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center text-brand-gold font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-white font-bold">Custom Proposal</h4>
                    <p className="text-gray-400 text-sm mt-1">You receive a tailored roadmap outlining our recommended solution, timeline, and investment.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* QUICK CONTACT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gray-800">
              <div>
                <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-2">General Inquiries</p>
                <p className="text-white font-medium">hello@brollysolutions.com</p>
              </div>
              <div>
                <p className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-2">Office Hours</p>
                <p className="text-white font-medium">Mon — Fri, 9am — 6pm</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-transparent blur-xl -z-10 rounded-3xl"></div>
            <LeadForm />
          </div>

        </div>
      </section>

      {/* 3. OPTIONAL: LOGO/TRUST STRIP */}
      {/* <section className="py-12 border-t border-gray-800 bg-brand-dark/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale">
          <span className="text-xl font-black italic tracking-tighter">PARTNER ONE</span>
          <span className="text-xl font-black italic tracking-tighter">PARTNER TWO</span>
          <span className="text-xl font-black italic tracking-tighter">PARTNER THREE</span>
          <span className="text-xl font-black italic tracking-tighter">PARTNER FOUR</span>
        </div>
      </section> */}

    </div>
  );
}