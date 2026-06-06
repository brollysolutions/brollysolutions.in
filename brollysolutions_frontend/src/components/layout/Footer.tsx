import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/about' },
  { label: 'Free Audit', href: '/contact' },
];

const socialItems = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Twitter', href: '#' },
];

export default function Footer() {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  if (pathname === '/chatbot') return null;

  return (
    <footer className="bg-[#f4f4f5] text-black border-t border-zinc-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <img
                src="/logo_black.png"
                alt="Brolly Solutions"
                className="h-8 w-auto object-contain"
                style={{ filter: 'brightness(0)' }}
              />
            </Link>
            <p className="text-black text-base leading-relaxed max-w-sm font-normal">
              Boutique software engineering and tech advisory. We build reliable, scalable systems for businesses that demand excellence.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black font-semibold mb-6">Navigation</p>
            <ul className="space-y-3.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-base text-black hover:text-brand-gold transition-colors duration-300 font-normal"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black font-semibold mb-6">Social</p>
            <ul className="space-y-3.5">
              {socialItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-base text-black hover:text-brand-gold transition-colors duration-300 font-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-black font-semibold mb-6">Contact</p>
            <ul className="space-y-3.5 text-base font-normal text-black">
              <li>
                <a
                  href="mailto:hello@brollysolutions.com"
                  className="hover:text-brand-gold transition-colors duration-300"
                >
                  hello@brollysolutions.com
                </a>
              </li>
              <li>Mon — Sat, 9am — 6pm IST</li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="text-black text-base font-semibold border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-300">
          <p className="text-sm text-black font-normal">
            © {currentYear} Brolly Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-black hover:text-brand-gold transition-colors font-normal">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-black hover:text-brand-gold transition-colors font-normal">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}