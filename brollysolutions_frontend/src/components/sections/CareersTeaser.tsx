/**
 * CareersTeaser — short "join us" band inviting candidates to the careers page.
 */
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { OPENINGS } from '@/data/content';

export default function CareersTeaser() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-cream border border-line px-8 py-14 md:px-16 md:py-16">
            {/* decorative glow */}
            <div
              className="absolute -top-24 -right-16 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(194,155,56,0.2) 0%, transparent 65%)' }}
            />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700 mb-4">
                  Careers at Brolly
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 leading-tight">
                  Build the software that runs the enterprise — with a team that mentors, not manages.
                </h2>
                <p className="mt-5 text-ink-500 leading-relaxed max-w-xl">
                  We're hiring senior engineers, cloud specialists, AI practitioners and designers who care
                  about craft. {OPENINGS.length} roles are open right now.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button to="/careers" variant="accent" icon="arrow">
                    View open roles
                  </Button>
                  <Button href="mailto:careers@brollysolutions.in" variant="outline">
                    Send your CV
                  </Button>
                </div>
              </div>

              {/* role chips */}
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {OPENINGS.slice(0, 5).map((o) => (
                  <span
                    key={o.title}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-700"
                  >
                    <Icon name="check" className="w-4 h-4 text-accent-600" strokeWidth={2.4} />
                    {o.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
