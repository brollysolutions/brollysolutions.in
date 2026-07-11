/**
 * Hero — full-width cream hero with a subtle tech grid + gold glow, a strong
 * value proposition, dual CTAs, and a floating metrics card.
 */
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { STATS } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream text-ink-700 pt-36 pb-24 md:pt-44 md:pb-32">
      {/* ── Background visual ─────────────────────────────── */}
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(33,28,23,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,28,23,0.05) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)',
        }}
      />
      {/* gold glow */}
      <div
        className="absolute -top-40 -right-24 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(194,155,56,0.16) 0%, transparent 62%)', animation: 'pulse-glow 9s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-48 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(194,155,56,0.08) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* ── Left: pitch ───────────────────────────────── */}
        <div className="lg:col-span-7">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-500/30 bg-accent-500/5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-700 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            Digital Transformation Partner
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-navy-900">
            <motion.span custom={1} variants={fadeUp} initial="hidden" animate="show" className="block">
              Engineering the software
            </motion.span>
            <motion.span custom={2} variants={fadeUp} initial="hidden" animate="show" className="block">
              that runs the{' '}
              <span className="text-accent-600">modern enterprise.</span>
            </motion.span>
          </h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 text-lg text-ink-500 leading-relaxed max-w-xl"
          >
            Brolly Software Solutions partners with ambitious organizations to design, build, and scale
            mission-critical systems — from cloud platforms and enterprise applications to applied AI.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button to="/contact" variant="accent" size="lg" icon="arrow">
              Get in Touch
            </Button>
            <Button to="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </motion.div>

          {/* trust ticks */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-500"
          >
            {['ISO-aligned delivery', 'Cloud-native by default', 'Senior-led teams'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <Icon name="check" className="w-4 h-4 text-accent-600" strokeWidth={2.4} />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: floating metrics card ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-2xl border border-line bg-white p-8 shadow-[0_30px_60px_-30px_rgba(33,28,23,0.25)]"
          >
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">By the numbers</p>
              <span className="flex items-center gap-1.5 text-xs text-ink-500">
                <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" /> Since 2014
              </span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-accent-500/50 pl-4">
                  <p className="text-3xl font-extrabold text-navy-900">
                    {s.prefix}
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="text-sm text-ink-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 pt-6 border-t border-line flex items-center gap-3">
              <Icon name="shield" className="w-9 h-9 text-accent-600 shrink-0" />
              <p className="text-sm text-ink-700 leading-snug">
                Trusted with security-critical systems across banking, healthcare & the public sector.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
