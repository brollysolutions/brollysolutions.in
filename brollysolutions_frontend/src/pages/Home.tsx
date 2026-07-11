/**
 * Home — assembles the corporate landing page from section components.
 * Order: Hero → Trust bar → About/Why → Services → Stats → Industries →
 * Case studies → Testimonials → Careers teaser → closing CTA.
 */
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import AboutPreview from '@/components/sections/AboutPreview';
import ServicesSection from '@/components/sections/ServicesSection';
import ProductsSection from '@/components/sections/ProductsSection';
import StatsSection from '@/components/sections/StatsSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CareersTeaser from '@/components/sections/CareersTeaser';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServicesSection withCta />
      <ProductsSection withCta tone="white" />
      <StatsSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CareersTeaser />
      <CTASection />
    </>
  );
}
