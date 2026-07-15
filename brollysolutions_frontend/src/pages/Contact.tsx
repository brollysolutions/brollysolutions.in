/**
 * Contact — interior hero, contact info cards, the LeadForm, address block,
 * and a map embed placeholder.
 */
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Icon, { type IconName } from '@/components/ui/Icon';
import LeadForm from '@/features/contact/components/LeadForm';
import { COMPANY } from '@/data/content';

const INFO: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'mail', label: 'Email us', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: 'phone', label: 'Call us', value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
  { icon: 'clock', label: 'Office hours', value: COMPANY.hours },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's start the conversation"
        subtitle="Tell us about your project or challenge. We review every inquiry personally and respond within one business day."
      />

      {/* Info cards */}
      <Section tone="white" spacing="md">
        <div className="grid sm:grid-cols-3 gap-6">
          {INFO.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-slate-200 p-7 transition-colors hover:border-accent-500/40">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 mb-5">
                  <Icon name={item.icon} className="w-6 h-6" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-lg font-bold text-navy-900 hover:text-accent-600 transition-colors break-words">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-navy-900">{item.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Form + address */}
      <Section tone="surface">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Address + map */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="rounded-2xl bg-white border border-slate-200 p-8">
                <h2 className="text-2xl font-extrabold text-navy-900 mb-5">Visit our office</h2>
                <div className="flex items-start gap-3 text-ink-700">
                  <Icon name="pin" className="w-5 h-5 mt-0.5 text-accent-500 shrink-0" />
                  <address className="not-italic leading-relaxed">
                    {COMPANY.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </Reveal>

            {/* Map embed placeholder */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-line bg-cream-deep aspect-[4/3]">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(33,28,23,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(33,28,23,0.06) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-500 text-white mb-4 shadow-lg">
                    <Icon name="pin" className="w-7 h-7" />
                  </span>
                  <p className="text-navy-900 font-semibold">HITEC City, Hyderabad</p>
                  <p className="text-ink-500 text-sm mt-1">Map embed placeholder — drop in a Google Maps iframe</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-10">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
