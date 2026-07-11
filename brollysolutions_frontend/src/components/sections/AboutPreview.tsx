/**
 * AboutPreview — company overview + "Why Brolly" differentiators.
 * Two-column: narrative on the left, differentiator cards on the right.
 */
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { DIFFERENTIATORS } from '@/data/content';

export default function AboutPreview() {
  return (
    <Section id="about" tone="white">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left: narrative */}
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.1]">
            A technology partner built for the long term
          </h2>
          <p className="mt-6 text-lg text-ink-500 leading-relaxed">
            Founded in 2014, Brolly Software Solutions is an IT services and digital transformation firm
            headquartered in Hyderabad. We help enterprises and fast-scaling companies modernize legacy
            systems, adopt the cloud, and put AI to work — responsibly and at scale.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-2">Our Mission</p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                To engineer dependable software that compounds our clients' competitive advantage.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-5">
              <p className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-2">Our Vision</p>
              <p className="text-[15px] text-ink-700 leading-relaxed">
                To be the most trusted delivery partner for enterprises embracing digital change.
              </p>
            </div>
          </div>

          <div className="mt-9">
            <Button to="/about" variant="outline" icon="arrow">
              More about Brolly
            </Button>
          </div>
        </Reveal>

        {/* Right: differentiators */}
        <div className="grid sm:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 2) * 0.1}>
              <div className="h-full rounded-2xl bg-surface border border-slate-200 p-6 transition-colors hover:border-accent-500/40">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-navy-900 text-accent-400 mb-5">
                  <Icon name={d.icon} className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{d.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{d.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
