/**
 * TrustBar — a "trusted by" logo strip. We render client names as clean
 * wordmarks (placeholder for real logos) in an auto-scrolling marquee that
 * pauses on hover.
 */
import { CLIENTS } from '@/data/content';

export default function TrustBar() {
  // duplicate the list so the marquee can loop seamlessly
  const row = [...CLIENTS, ...CLIENTS];

  return (
    <section className="bg-white border-y border-slate-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink-500 mb-8">
          Trusted by teams at leading organizations
        </p>

        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div
            className="flex items-center gap-14 w-max"
            style={{ animation: 'marquee 34s linear infinite' }}
          >
            {row.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="text-xl md:text-2xl font-bold tracking-tight text-navy-900/25 whitespace-nowrap select-none transition-colors hover:text-accent-600"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
