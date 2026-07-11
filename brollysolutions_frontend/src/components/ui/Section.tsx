/**
 * Section — a reusable section wrapper that standardises vertical rhythm,
 * horizontal max-width/gutters, background tone, and the scroll-anchor id
 * used by the smooth-scroll navigation.
 */
import type { ReactNode } from 'react';

type Tone = 'white' | 'surface' | 'cream' | 'navy';

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  /** set false to remove the inner max-w container (full-bleed content) */
  container?: boolean;
  /** vertical padding size */
  spacing?: 'md' | 'lg';
}

const tones: Record<Tone, string> = {
  white: 'bg-white text-ink-700',
  surface: 'bg-surface text-ink-700',
  cream: 'bg-cream text-ink-700',
  // legacy alias — kept so old call sites still resolve (now light, not navy)
  navy: 'bg-cream text-ink-700',
};

export default function Section({
  children,
  id,
  tone = 'white',
  className = '',
  container = true,
  spacing = 'lg',
}: SectionProps) {
  const pad = spacing === 'lg' ? 'py-20 md:py-28' : 'py-14 md:py-20';

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${tones[tone]} ${pad} px-6 ${className}`}
    >
      {container ? <div className="max-w-7xl mx-auto">{children}</div> : children}
    </section>
  );
}
