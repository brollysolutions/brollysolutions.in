/**
 * Card — reusable surface used by service/industry/case-study grids.
 * Supports an optional react-router link, a hover lift, and an accent top rule.
 */
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  /** show the animated accent rule that grows on hover */
  accentRule?: boolean;
  hover?: boolean;
}

export default function Card({
  children,
  to,
  href,
  className = '',
  accentRule = false,
  hover = true,
}: CardProps) {
  const classes =
    'group relative flex flex-col bg-white border border-slate-200 rounded-2xl p-8 ' +
    'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ' +
    (hover
      ? 'hover:border-accent-500/50 hover:shadow-[0_20px_50px_-24px_rgba(15,42,78,0.35)] hover:-translate-y-1 '
      : '') +
    className;

  const inner = (
    <>
      {accentRule && (
        <span className="absolute top-0 left-0 h-[3px] w-0 bg-accent-500 rounded-full transition-all duration-500 group-hover:w-full" />
      )}
      {children}
    </>
  );

  if (to) return <Link to={to} className={classes}>{inner}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  return <div className={classes}>{inner}</div>;
}
