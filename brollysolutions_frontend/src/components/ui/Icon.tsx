/**
 * Icon — a single source of truth for the outline SVG icons used across the
 * site (service cards, industry cards, feature bullets, etc.).
 *
 * All icons are 24×24, stroke `currentColor`, so they inherit text color and
 * can be sized with Tailwind width/height utilities on the wrapping element.
 */

export type IconName =
  | 'web'
  | 'cloud'
  | 'enterprise'
  | 'mobile'
  | 'ai'
  | 'qa'
  | 'consulting'
  | 'bank'
  | 'health'
  | 'retail'
  | 'factory'
  | 'truck'
  | 'signal'
  | 'bolt'
  | 'shield'
  | 'check'
  | 'arrow'
  | 'arrow-diagonal'
  | 'star'
  | 'quote'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'clock'
  | 'linkedin'
  | 'twitter'
  | 'github'
  | 'menu'
  | 'close'
  | 'chat'
  | 'document'
  | 'terminal'
  | 'login';

// Each entry is the inner markup of a 24×24 icon (paths only).
const PATHS: Record<IconName, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18M8 21h8M12 18v3" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 9.5a3.5 3.5 0 0 1 .5 6.97" />
      <path d="M12 13v6M9.5 16.5 12 19l2.5-2.5" />
    </>
  ),
  enterprise: (
    <>
      <path d="M4 21V6l8-3 8 3v15" />
      <path d="M4 21h16M9 21v-4h6v4M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  ai: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  qa: (
    <>
      <path d="M9 11l2 2 4-4" />
      <path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8a7.96 7.96 0 0 1 5 1.75" />
    </>
  ),
  consulting: (
    <>
      <path d="M12 3v2M12 8a4 4 0 0 0-2 7.46V18h4v-2.54A4 4 0 0 0 12 8Z" />
      <path d="M10 21h4" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10l9-6 9 6" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" />
    </>
  ),
  health: (
    <>
      <path d="M20.5 8.5c0-2.5-2-4.5-4.5-4.5-1.7 0-3.2 1-4 2.4C11.2 5 9.7 4 8 4 5.5 4 3.5 6 3.5 8.5c0 5 8.5 10 8.5 10s8.5-5 8.5-10Z" />
      <path d="M8.5 11.5h2l1-2 1.5 3 1-1h2" />
    </>
  ),
  retail: (
    <>
      <path d="M4 7h16l-1 13H5L4 7Z" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V6h3v15H3Z" />
      <path d="M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l3 3v4h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  signal: (
    <>
      <path d="M5 20v-6M10 20V9M15 20V4M20 20v-9" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  check: <path d="M5 13l4 4L19 7" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-diagonal': <path d="M7 17 17 7M17 7H9M17 7v8" />,
  star: (
    <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  ),
  quote: (
    <path d="M9 7H6a3 3 0 0 0-3 3v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3M20 7h-3a3 3 0 0 0-3 3v3a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 2 6a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" />
    </>
  ),
  twitter: (
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2c-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6A11.3 11.3 0 0 1 3.8 4.7a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5a4 4 0 0 0 3.2 3.9c-.5.2-1.1.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.3a11.3 11.3 0 0 0 17.4-9.5V8a8 8 0 0 0 2-2Z" />
  ),
  github: (
    <path d="M9 19c-4 1.4-4-2-6-2m12 4v-3.5a3 3 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.3-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 2.9 5.3 3.2 5.3 3.2a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 3.9 9.4c0 4.5 2.7 5.5 5.3 5.8a3 3 0 0 0-.8 2.3V21" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chat: (
    <>
      <path d="M21 12a8 8 0 0 1-11.3 7.3L3 21l1.7-6.7A8 8 0 1 1 21 12Z" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3m5 0h4" />
    </>
  ),
  login: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </>
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
