/**
 * TestimonialsSection — client quote carousel with auto-advance, manual
 * prev/next controls, and dot indicators. Animated with framer-motion.
 */
import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Icon from '@/components/ui/Icon';
import { TESTIMONIALS } from '@/data/content';

const AUTO_MS = 7000;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === count - 1 && next === 0) ? 1 : -1);
      setIndex((next + count) % count);
    },
    [index, count],
  );

  // auto-advance
  useEffect(() => {
    const id = setTimeout(() => go(index + 1), AUTO_MS);
    return () => clearTimeout(id);
  }, [index, go]);

  const t = TESTIMONIALS[index];

  return (
    <Section id="testimonials" tone="white">
      <div className="max-w-4xl mx-auto text-center">
        <Eyebrow centered>Client Voices</Eyebrow>
        <h2 className="mt-5 mb-12 text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
          What our clients say
        </h2>

        <div className="relative min-h-[280px] sm:min-h-[240px]">
          <Icon name="quote" className="w-12 h-12 mx-auto text-accent-500/30 mb-6" strokeWidth={1.4} />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="px-2"
            >
              <p className="text-xl md:text-2xl font-medium text-navy-900 leading-relaxed">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <p className="font-bold text-navy-900">{t.name}</p>
                <p className="text-sm text-ink-500">
                  {t.role}, {t.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-navy-900 hover:border-accent-500 hover:text-accent-600 transition-colors"
          >
            <Icon name="arrow" className="w-5 h-5 rotate-180" strokeWidth={2} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-accent-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-navy-900 hover:border-accent-500 hover:text-accent-600 transition-colors"
          >
            <Icon name="arrow" className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </Section>
  );
}
