import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <span className="w-7 h-px bg-brand-gold/40" />
      <span className="text-sm font-mono uppercase tracking-[0.35em] text-brand-gold font-bold">
        {children}
      </span>
    </div>
  );
}

function DiagonalArrow({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <path
        d="M3.5 14.5L14.5 3.5M14.5 3.5H7M14.5 3.5V11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const products = [
  {
    title: "Chatbot",
    tagline: "Conversational Intelligence",
    desc: "Next-generation conversational assistant built with advanced LLMs. Integrates with your knowledge base, handles complex customer queries, and automates support workflows with human-like precision.",
    href: "/chatbot",
    icon: (
      <svg className="w-8 h-8 text-brand-gold transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
      </svg>
    ),
    badge: "Most Popular",
  },
  {
    title: "Resume Generator",
    tagline: "ATS-Optimized Resumes",
    desc: "Craft job-winning resumes in seconds. Analyzes job descriptions to optimize keywords for applicant tracking systems, formats design templates dynamically, and outputs professional profiles.",
    href: "https://brollysolutions.in/resume_generator",
    icon: (
      <svg className="w-8 h-8 text-brand-gold transition-all duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    badge: "Smart Builder",
  },
  {
    title: "Prompt Generator",
    tagline: "LLM Prompt Engineering",
    desc: "Unlock the full potential of generative AI. Elevate basic prompts into structured, highly effective instructions optimized for ChatGPT, Claude, Midjourney, and other LLMs.",
    href: "https://brollysolutions.in/prompt_generator",
    icon: (
      <svg className="w-8 h-8 text-brand-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M3 5.25a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5.25z" />
      </svg>
    ),
    badge: "Developer Tool",
  }
];

export default function Products() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="min-h-screen bg-white text-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Our Products</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-black mt-4">
            Custom-Built <span className="font-serif italic text-brand-gold">Solutions.</span>
          </h1>
          <p className="text-black font-normal text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Ready-to-deploy, high-performance platforms designed to supercharge your business workflows and operations.
          </p>
        </div>

        {/* Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const isInternal = product.href.startsWith("/");
            return isInternal ? (
              <Link
                key={product.title}
                to={product.href}
                className="group relative flex flex-col justify-between bg-white border-2 border-zinc-950 hover:border-brand-gold/40 rounded-2xl p-8 h-full transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(194,155,56,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 bg-zinc-100 border border-zinc-200 group-hover:border-brand-gold/20 rounded-xl transition-colors duration-500">
                      {product.icon}
                    </div>
                    <span className="text-sm font-mono uppercase tracking-widest text-brand-gold/90 border border-brand-gold/30 bg-brand-gold/[0.02] px-3.5 py-1.5 rounded-full group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-colors duration-500 font-bold">
                      {product.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="text-sm font-mono uppercase tracking-[0.25em] text-black group-hover:text-brand-gold/80 transition-colors duration-500 font-bold">
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl font-bold text-black tracking-tight mt-2 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-black font-normal leading-relaxed text-base mb-8">
                    {product.desc}
                  </p>
                </div>

                {/* Link Action */}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-brand-gold transition-colors duration-300 w-fit pt-2 mt-auto">
                  Launch Product
                  <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <DiagonalArrow size={14} />
                  </span>
                </span>
              </Link>
            ) : (
              <a
                key={product.title}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between bg-white border-2 border-zinc-950 hover:border-brand-gold/40 rounded-2xl p-8 h-full transition-colors duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(194,155,56,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 bg-zinc-100 border border-zinc-200 group-hover:border-brand-gold/20 rounded-xl transition-colors duration-500">
                      {product.icon}
                    </div>
                    <span className="text-sm font-mono uppercase tracking-widest text-brand-gold/90 border border-brand-gold/30 bg-brand-gold/[0.02] px-3.5 py-1.5 rounded-full group-hover:text-brand-gold group-hover:border-brand-gold/50 transition-colors duration-500 font-bold">
                      {product.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <span className="text-sm font-mono uppercase tracking-[0.25em] text-black group-hover:text-brand-gold/80 transition-colors duration-500 font-bold">
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl font-bold text-black tracking-tight mt-2 mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-black font-normal leading-relaxed text-base mb-8">
                    {product.desc}
                  </p>
                </div>

                {/* Link Action */}
                <span className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:text-brand-gold transition-colors duration-300 w-fit pt-2 mt-auto">
                  Launch Product
                  <span className="transform translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <DiagonalArrow size={14} />
                  </span>
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
