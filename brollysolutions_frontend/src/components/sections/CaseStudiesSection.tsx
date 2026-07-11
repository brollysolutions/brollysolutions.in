/**
 * CaseStudiesSection — portfolio grid of sample project cards with a headline
 * outcome metric each. Placeholder content specific to Brolly's sectors.
 */
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { CASE_STUDIES } from '@/data/content';

export default function CaseStudiesSection() {
  return (
    <Section id="work" tone="surface">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <Reveal>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Case studies & outcomes
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-ink-500 leading-relaxed">
            A snapshot of platforms we've engineered — and the measurable impact they delivered for our clients.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {CASE_STUDIES.map((cs, i) => (
          <Reveal key={cs.title} delay={(i % 2) * 0.1}>
            <article className="group h-full rounded-2xl bg-white border border-slate-200 p-8 transition-all duration-300 hover:border-accent-500/50 hover:shadow-[0_24px_60px_-28px_rgba(15,42,78,0.4)]">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-600 bg-accent-500/10 px-3 py-1.5 rounded-full">
                  {cs.tag}
                </span>
                <div className="text-right">
                  <p className="text-3xl font-extrabold text-navy-900 leading-none">{cs.metric}</p>
                  <p className="text-xs text-ink-500 mt-1">{cs.metricLabel}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 leading-snug">{cs.title}</h3>
              <p className="text-[15px] text-ink-500 leading-relaxed mb-6">{cs.summary}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-accent-600 transition-colors">
                Read case study
                <Icon name="arrow-diagonal" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </span>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button to="/contact" variant="primary" icon="arrow">
          Discuss your project
        </Button>
      </div>
    </Section>
  );
}
