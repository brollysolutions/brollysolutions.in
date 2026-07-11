/**
 * About — company story, mission/vision, Why Brolly, values, leadership, stats.
 */
import { useEffect } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';
import { DIFFERENTIATORS, COMPANY } from '@/data/content';

const VALUES = [
  { title: 'Ownership', desc: 'We act like owners of the systems we build — accountable long after launch.' },
  { title: 'Craft', desc: 'Clean, documented, well-tested code is the baseline, not a premium add-on.' },
  { title: 'Transparency', desc: 'Weekly demos, honest timelines, and no black boxes — ever.' },
  { title: 'Pragmatism', desc: 'We tell you what not to build. The best code is often the code you avoid.' },
];

const LEADERSHIP = [
  { initials: 'VS', name: 'Vamshi Sai Kumar', role: 'Founder & CEO' },
  { initials: 'PR', name: 'Priya Rajan', role: 'VP, Cloud & Platform' },
  { initials: 'AK', name: 'Arun Krishnan', role: 'Head of Data & AI' },
  { initials: 'SM', name: 'Shruti Menon', role: 'Head of Design' },
];

export default function About() {
  useEffect(() => {
    document.title = `About — ${COMPANY.name}`;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Engineering trust into every line of code"
        subtitle="Brolly Software Solutions is an IT services and digital transformation firm helping enterprises modernize, scale, and innovate — with senior-led teams and outcome-first delivery."
      />

      {/* Story */}
      <Section tone="white">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              From a small senior team to a trusted enterprise partner
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg text-ink-500 leading-relaxed">
              <p>
                Brolly Software Solutions was founded in {COMPANY.founded} by engineers who had spent years
                inside large technology companies and consultancies. We started with a simple conviction:
                growing organizations deserve enterprise-grade engineering without enterprise-grade friction.
              </p>
              <p>
                Today we deliver web and mobile platforms, cloud and DevOps modernization, custom enterprise
                software, and applied AI to clients across BFSI, healthcare, retail, manufacturing and the
                public sector — from our headquarters in Hyderabad and remotely across 14 countries.
              </p>
              <p>
                What hasn't changed is our model: senior people, accountable delivery, and software built to
                last.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section tone="surface">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: 'Our Mission',
              text: "To engineer dependable software that compounds our clients' competitive advantage, delivered by people who take genuine ownership of outcomes.",
            },
            {
              label: 'Our Vision',
              text: 'To be the most trusted software delivery partner for enterprises embracing digital change — known for craft, candor, and results.',
            },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white border border-slate-200 p-8">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 text-accent-400 mb-6">
                  <Icon name={i === 0 ? 'bolt' : 'star'} className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{m.label}</h3>
                <p className="text-ink-500 leading-relaxed">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why Brolly */}
      <Section tone="white">
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Eyebrow>Why Brolly</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Differentiators that show up in the work
            </h2>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 4) * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 p-6 transition-colors hover:border-accent-500/40">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 mb-5">
                  <Icon name={d.icon} className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{d.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{d.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="surface">
        <div className="grid lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-1">
            <Eyebrow>Our Values</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight">
              The principles behind every engagement
            </h2>
          </Reveal>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.1}>
                <div className="rounded-2xl bg-white border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-500/10 text-accent-600">
                      <Icon name="check" className="w-5 h-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="text-lg font-bold text-navy-900">{v.title}</h3>
                  </div>
                  <p className="text-sm text-ink-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats */}
      <StatsSection />

      {/* Leadership */}
      <Section tone="white">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <Eyebrow centered>Leadership</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Senior people, all the way down
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 0.08}>
              <div className="text-center rounded-2xl border border-slate-200 p-8 transition-colors hover:border-accent-500/40">
                <div className="mx-auto mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-navy-900 text-white text-xl font-extrabold">
                  {p.initials}
                </div>
                <h3 className="font-bold text-navy-900">{p.name}</h3>
                <p className="text-sm text-accent-600 mt-1">{p.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection title="Want to work with a team like this?" />
    </>
  );
}
