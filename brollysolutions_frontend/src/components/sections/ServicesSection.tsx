/**
 * ServicesSection — grid of service cards with icons. Reused on the Home page
 * (headed section) and the Services page.
 */
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { SERVICES } from '@/data/content';

interface Props {
  /** show the section heading block (hide when the page has its own hero) */
  withHeader?: boolean;
  /** show the "View all services" CTA below the grid */
  withCta?: boolean;
  tone?: 'white' | 'surface';
}

export default function ServicesSection({ withHeader = true, withCta = false, tone = 'surface' }: Props) {
  return (
    <Section id="services" tone={tone}>
      {withHeader && (
        <div className="max-w-2xl mx-auto text-center mb-14">
          <Reveal>
            <Eyebrow centered>What We Do</Eyebrow>
            <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Services that move the enterprise forward
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              End-to-end software capabilities under one accountable, senior-led team — from strategy and
              design through build, launch, and long-term support.
            </p>
          </Reveal>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 0.08}>
            <Card accentRule className="h-full">
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-accent-500/10 text-accent-600 mb-6 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                <Icon name={service.icon} className="w-7 h-7" />
              </span>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-[15px] text-ink-500 leading-relaxed mb-6">{service.summary}</p>
              <ul className="mt-auto space-y-2">
                {service.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-ink-700">
                    <Icon name="check" className="w-4 h-4 text-accent-500 shrink-0" strokeWidth={2.4} />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      {withCta && (
        <div className="mt-12 text-center">
          <Button to="/services" variant="primary" icon="arrow">
            View all services
          </Button>
        </div>
      )}
    </Section>
  );
}
