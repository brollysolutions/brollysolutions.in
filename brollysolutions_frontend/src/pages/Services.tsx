/**
 * Services — full services page: interior hero, the reusable service grid,
 * engagement-model section, transparent process, and a closing CTA.
 */
import { useEffect } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Icon, { type IconName } from '@/components/ui/Icon';
import ServicesSection from '@/components/sections/ServicesSection';
import CTASection from '@/components/sections/CTASection';
import { COMPANY } from '@/data/content';

const ENGAGEMENT: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'consulting',
    title: 'Project Delivery',
    desc: 'Fixed-scope, fixed-price engagements with clear milestones and weekly demos — ideal for well-defined builds.',
  },
  {
    icon: 'ai',
    title: 'Dedicated Teams',
    desc: 'A cross-functional squad embedded with your organization, scaling engineering capacity on demand.',
  },
  {
    icon: 'shield',
    title: 'Managed Support',
    desc: 'Ongoing maintenance, monitoring, and enhancement of your platforms with defined SLAs.',
  },
];

const PROCESS = [
  { num: '01', title: 'Discover', desc: 'We audit your systems, goals, and constraints before proposing anything.' },
  { num: '02', title: 'Design', desc: 'Architecture, roadmap, and fixed pricing — nothing vague, nothing hidden.' },
  { num: '03', title: 'Build', desc: 'Senior engineers ship in weekly sprints with live demos and staging access.' },
  { num: '04', title: 'Scale', desc: 'Zero-downtime launch, full handover, and long-term support to keep you stable.' },
];

export default function Services() {
  useEffect(() => {
    document.title = `Services — ${COMPANY.name}`;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-lifecycle software engineering"
        subtitle="Strategy, design, build, and run — the complete set of capabilities enterprises need to transform, delivered by one accountable partner."
      />

      {/* Services grid (reused component) */}
      <ServicesSection withHeader tone="surface" />

      {/* Engagement models */}
      <Section tone="white">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Eyebrow>How We Engage</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Flexible models that fit your stage
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ENGAGEMENT.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 p-8 transition-colors hover:border-accent-500/40">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-500/10 text-accent-600 mb-6">
                  <Icon name={e.icon} className="w-7 h-7" />
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{e.title}</h3>
                <p className="text-ink-500 leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="surface">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <Eyebrow centered>Our Process</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Transparent from day one
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS.map((p, i) => (
            <Reveal key={p.num} delay={(i % 4) * 0.08}>
              <div className="relative h-full rounded-2xl bg-white border border-slate-200 p-8">
                <span className="text-5xl font-extrabold text-accent-500/20">{p.num}</span>
                <h3 className="mt-4 text-xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure which service you need?"
        subtitle="Start with a free technology audit. We'll assess your stack and recommend the right path — no obligation."
      />
    </>
  );
}
