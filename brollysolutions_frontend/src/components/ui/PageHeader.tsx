/**
 * PageHeader — consistent cream hero banner for interior pages (About,
 * Services, Products, Industries, Careers, Contact).
 */
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** optional call-to-action row rendered under the subtitle */
  actions?: ReactNode;
}

export default function PageHeader({ eyebrow, title, subtitle, actions }: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-cream text-ink-700 pt-36 pb-16 md:pt-44 md:pb-20 px-6 border-b border-line">
      {/* grid + glow */}
      <div
        className="absolute inset-0 opacity-[0.6] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(33,28,23,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(33,28,23,0.045) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 30% 20%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 30% 20%, black, transparent)',
        }}
      />
      <div
        className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(194,155,56,0.14) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-700 mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] max-w-3xl text-navy-900"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-ink-500 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            {actions}
          </motion.div>
        )}
      </div>
    </header>
  );
}
