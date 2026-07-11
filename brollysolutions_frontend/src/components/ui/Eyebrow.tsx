/**
 * Eyebrow — the small uppercase kicker label above section headings.
 * Uses the `.eyebrow` class from globals.css (accent tick + tracked caps).
 */
interface EyebrowProps {
  children: string;
  className?: string;
  /** center the tick + label (for centered section headers) */
  centered?: boolean;
  /** render light for placement on the dark navy background */
  light?: boolean;
}

export default function Eyebrow({ children, className = '', centered, light }: EyebrowProps) {
  return (
    <span
      className={`eyebrow ${centered ? 'justify-center' : ''} ${
        light ? '!text-accent-300' : ''
      } ${className}`}
    >
      {children}
    </span>
  );
}
