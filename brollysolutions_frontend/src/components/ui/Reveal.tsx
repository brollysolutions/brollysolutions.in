/**
 * Reveal — a tiny wrapper around framer-motion for the site's signature
 * "fade + slide up on scroll" animation. Keeps section files clean.
 */
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'span';
}

export default function Reveal({ children, delay = 0, y = 24, className = '' }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
