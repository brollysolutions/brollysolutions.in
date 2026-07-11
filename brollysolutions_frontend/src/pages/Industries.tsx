/**
 * Industries — interior hero, full industries grid, and a "how we help"
 * value strip, then CTA.
 */
import { useEffect } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CTASection from '@/components/sections/CTASection';
import { COMPANY } from '@/data/content';

const CAPABILITIES = [
  { icon: 'shield', title: 'Regulatory awareness', desc: 'Compliance-conscious design for sectors where audits and data protection are non-negotiable.' },
  { icon: 'cloud', title: 'Modernization at scale', desc: 'Migrating legacy, mission-critical systems to the cloud without disrupting operations.' },
  { icon: 'ai', title: 'Applied intelligence', desc: 'Sector-specific AI — from fraud detection to demand forecasting — that drives real ROI.' },
] as const;

export default function Industries() {
  useEffect(() => {
    document.title = `Industries — ${COMPANY.name}`;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Software shaped by the sectors we serve"
        subtitle="We bring engineering depth and domain fluency to regulated, high-stakes industries — pairing technical craft with real understanding of your business."
      />

      <IndustriesSection withHeader={false} tone="surface" />

      {/* How we help */}
      <Section tone="white">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <Eyebrow centered>Cross-Industry Strengths</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              What we bring to every sector
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 p-8 transition-colors hover:border-accent-500/40">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-navy-900 text-accent-400 mb-6">
                  <Icon name={c.icon} className="w-7 h-7" />
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{c.title}</h3>
                <p className="text-ink-500 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Operating in a sector we didn't list?" subtitle="We adapt quickly to new domains. Tell us about your industry and challenge — we'll show you how we'd approach it." />
    </>
  );
}
