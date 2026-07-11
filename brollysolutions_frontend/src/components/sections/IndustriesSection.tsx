/**
 * IndustriesSection — grid of industries served. Reused on Home (preview) and
 * the Industries page (full).
 */
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';
import { INDUSTRIES } from '@/data/content';

interface Props {
  withHeader?: boolean;
  tone?: 'white' | 'surface';
  /** limit the number shown (Home preview vs full page) */
  limit?: number;
}

export default function IndustriesSection({ withHeader = true, tone = 'white', limit }: Props) {
  const items = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES;

  return (
    <Section id="industries" tone={tone}>
      {withHeader && (
        <div className="max-w-2xl mb-14">
          <Reveal>
            <Eyebrow>Industries We Serve</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Deep domain expertise, applied
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              We combine engineering craft with an understanding of the regulations, workflows, and pressures
              specific to your sector.
            </p>
          </Reveal>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((industry, i) => (
          <Reveal key={industry.name} delay={(i % 4) * 0.06}>
            <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/50 hover:shadow-[0_20px_50px_-24px_rgba(15,42,78,0.35)]">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 mb-5 transition-colors group-hover:bg-accent-500 group-hover:text-white">
                <Icon name={industry.icon} className="w-6 h-6" />
              </span>
              <h3 className="text-base font-bold text-navy-900 mb-2 leading-snug">{industry.name}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{industry.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
