"use client"; // Required for animations

import Link from "next/link";
import { motion } from "framer-motion";
import DetailedProcess from "@/features/home/components/DetailedProcess";
import AboutSection from "@/features/home/components/AboutSection";

export default function Home() {
  // Animation variants for cleaner code
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-6 text-center bg-brand-black">
      
      {/* 1. HERO SECTION */}
      <section className="flex flex-col items-center justify-center pt-32 pb-20 max-w-5xl space-y-8">
        
        {/* ANIMATED HEADLINE */}
        <motion.h1 
          {...fadeInUp}
          className="text-5xl font-extrabold tracking-tight text-white md:text-7xl leading-tight"
        >
          Empowering Businesses with <br className="hidden md:block" />
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-brand-gold"
          >
            Smart Digital Solutions
          </motion.span>
        </motion.h1>
        
        {/* ANIMATED SUBTEXT */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-xl text-gray-400 md:text-2xl leading-relaxed"
        >
          Brolly Solutions helps startups and enterprises build scalable, innovative, and efficient digital products.
        </motion.p>
        
        {/* ANIMATED BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col justify-center gap-5 pt-8 sm:flex-row w-full sm:w-auto"
        >
          <Link 
            href="/services" 
            className="px-10 py-4 text-lg font-bold text-brand-black transition-all duration-300 bg-brand-gold rounded-md shadow-[0_0_15px_rgba(242,218,96,0.3)] hover:bg-brand-gold-hover hover:-translate-y-1"
          >
            Get Started
          </Link>
          <Link 
            href="/contact" 
            className="px-10 py-4 text-lg font-bold text-brand-gold transition-all duration-300 border-2 border-brand-gold rounded-md hover:bg-brand-gold/10 hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <AboutSection />

      {/* 3. OUR PROCESS SECTION */}
      <DetailedProcess />

    </div>
  );
}