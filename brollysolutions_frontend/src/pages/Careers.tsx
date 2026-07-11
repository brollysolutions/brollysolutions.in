/**
 * Careers — interior hero, culture/perks, open roles list, and CTA.
 */
import { useEffect } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { OPENINGS, CAREER_PERKS, COMPANY } from '@/data/content';

export default function Careers() {
  useEffect(() => {
    document.title = `Careers — ${COMPANY.name}`;
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Do the best engineering work of your career"
        subtitle="Join a senior-led team that mentors instead of manages, ships real software, and treats craft as a first-class value. We're growing — and we'd love to meet you."
      />

      {/* Culture / perks */}
      <Section tone="white">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <Eyebrow>Life at Brolly</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              A place built for people who care about how software is made
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              We keep teams small and senior, hold weekly demos, and give engineers real ownership. No busywork,
              no endless meetings — just meaningful problems and the autonomy to solve them well.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CAREER_PERKS.map((perk, i) => (
              <Reveal key={perk} delay={(i % 2) * 0.08}>
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-500/10 text-accent-600 shrink-0">
                    <Icon name="check" className="w-5 h-5" strokeWidth={2.2} />
                  </span>
                  <p className="text-[15px] text-ink-700 leading-snug">{perk}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Open roles */}
      <Section tone="surface">
        <div className="max-w-2xl mb-12">
          <Reveal>
            <Eyebrow>Open Roles</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              {OPENINGS.length} positions open
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {OPENINGS.map((job, i) => (
            <Reveal key={job.title} delay={(i % 6) * 0.05}>
              <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-300 hover:border-accent-500/50 hover:shadow-[0_16px_40px_-24px_rgba(15,42,78,0.35)]">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="consulting" className="w-4 h-4 text-accent-500" /> {job.team}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="pin" className="w-4 h-4 text-accent-500" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="clock" className="w-4 h-4 text-accent-500" /> {job.type}
                    </span>
                  </div>
                </div>
                <Button href={`mailto:careers@brollysolutions.in?subject=Application: ${job.title}`} variant="outline" size="sm" icon="arrow">
                  Apply
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-8 text-center">
            <p className="text-ink-500">
              Don't see your role? We're always keen to meet exceptional people.
            </p>
            <div className="mt-5">
              <Button href="mailto:careers@brollysolutions.in" variant="primary" icon="arrow">
                Send a speculative application
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
