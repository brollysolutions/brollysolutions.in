/**
 * Footer — corporate footer: brand blurb, quick links, services, contact,
 * social icons and a legal bar. Cream tone to match the light theme.
 */
import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS, SERVICES } from '@/data/content';
import Icon, { type IconName } from '@/components/ui/Icon';

const socials: { label: string; icon: IconName; href: string }[] = [
  { label: 'LinkedIn', icon: 'linkedin', href: '#' },
  { label: 'Twitter', icon: 'twitter', href: '#' },
  { label: 'GitHub', icon: 'github', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream text-ink-500 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="inline-block mb-5">
              <img src="/logo_black.png" alt="Brolly Software Solutions" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-ink-500">
              {COMPANY.tagline} We build reliable, scalable software for enterprises across BFSI, healthcare,
              retail and beyond.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-line text-ink-700 hover:text-accent-600 hover:border-accent-500 hover:bg-accent-500/5 transition-colors"
                >
                  <Icon name={s.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900 mb-5">Company</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm hover:text-accent-600 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900 mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link to="/services" className="text-sm hover:text-accent-600 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-900 mb-5">Get in Touch</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="w-4 h-4 mt-0.5 text-accent-600 shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-accent-600 transition-colors break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="w-4 h-4 mt-0.5 text-accent-600 shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="hover:text-accent-600 transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="w-4 h-4 mt-0.5 text-accent-600 shrink-0" />
                <span>HITEC City, Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {year} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/contact" className="text-ink-500 hover:text-accent-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-ink-500 hover:text-accent-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
