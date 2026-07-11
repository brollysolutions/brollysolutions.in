/**
 * StatsSection — animated counters on a cream band. Numbers count up on scroll.
 */
import Counter from '@/components/ui/Counter';
import Reveal from '@/components/ui/Reveal';
import { STATS } from '@/data/content';

export default function StatsSection() {
  return (
    <section className="relative bg-cream text-ink-700 py-20 md:py-24 px-6 overflow-hidden border-y border-line">
      {/* accent glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(194,155,56,0.12) 0%, transparent 70%)' }}
      />
      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-700">Proven at scale</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-navy-900">
            A decade of delivering outcomes
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="block text-5xl md:text-6xl font-extrabold tracking-tight text-navy-900"
                />
                <span className="mx-auto mt-3 block h-0.5 w-10 rounded-full bg-accent-500" />
                <p className="mt-3 text-sm md:text-base text-ink-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
