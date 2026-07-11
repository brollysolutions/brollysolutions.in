/**
 * Button — one reusable button/link primitive for the whole site.
 *
 * Renders as:
 *   • a react-router <Link>  when `to` is an internal path
 *   • an <a>                 when `href` is an external/absolute URL
 *   • a native <button>      otherwise
 *
 * Variants are tuned for both light sections and the dark navy hero.
 */
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import Icon, { type IconName } from './Icon';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'white';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  to?: string;                 // internal route -> <Link>
  href?: string;               // external URL   -> <a>
  onClick?: () => void;        // -> <button>
  variant?: Variant;
  size?: Size;
  icon?: IconName;             // trailing icon
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const base =
  'group inline-flex items-center justify-center gap-2 font-semibold rounded-lg ' +
  'transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[15px] px-7 py-3.5',
  lg: 'text-base px-8 py-4',
};

const variants: Record<Variant, string> = {
  // Solid navy — the primary trustworthy CTA on light backgrounds
  primary:
    'bg-navy-900 text-white shadow-[0_6px_20px_rgba(33,28,23,0.18)] ' +
    'hover:bg-navy-700 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(33,28,23,0.28)]',
  // Bright teal accent
  accent:
    'bg-accent-500 text-white shadow-[0_6px_20px_rgba(194,155,56,0.28)] ' +
    'hover:bg-accent-600 hover:-translate-y-0.5',
  // Outline on light backgrounds
  outline:
    'border-[1.5px] border-slate-200 text-navy-900 bg-white ' +
    'hover:border-accent-500 hover:text-accent-600 hover:-translate-y-0.5',
  // Transparent, minimal
  ghost: 'text-navy-900 hover:text-accent-600',
  // Light button for the dark navy hero
  white:
    'bg-white text-navy-900 hover:bg-accent-500 hover:text-white hover:-translate-y-0.5 ' +
    'shadow-[0_6px_20px_rgba(0,0,0,0.15)]',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        onClick={onClick}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {inner}
    </button>
  );
}
