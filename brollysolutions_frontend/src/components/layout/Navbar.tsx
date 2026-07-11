/**
 * Navbar — sticky corporate navigation.
 *  • Text-based logo (accent "Brolly" mark) — no logo asset required.
 *  • Transparent over the navy hero, turns solid white on scroll.
 *  • Active-link underline, smooth-scroll routing, mobile hamburger sheet.
 */
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, COMPANY } from '@/data/content';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
  }, [mobileOpen]);

  // close the sheet whenever the route changes
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-cream/90 backdrop-blur-xl border-b border-line py-2.5'
            : 'bg-transparent border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50" aria-label="Brolly Software Solutions home">
            <img src="/logo_black.png" alt="Brolly Software Solutions" className="h-11 w-auto object-contain" />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-[15px] font-medium rounded-md transition-colors duration-200 ${
                  isActive(link.href) ? 'text-accent-600' : 'text-ink-700 hover:text-navy-900'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-0.5 rounded-full bg-accent-500"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={COMPANY.loginUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium rounded-md text-ink-700 hover:text-accent-600 transition-colors"
            >
              <Icon name="login" className="w-4 h-4" strokeWidth={1.8} />
              Login
            </a>
            <Button to="/contact" size="sm" variant="primary" icon="arrow">
              Get in Touch
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden z-50 p-2 -mr-2 text-navy-900"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} className="w-7 h-7" strokeWidth={1.8} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-cream lg:hidden flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3 text-3xl font-bold tracking-tight ${
                      isActive(link.href) ? 'text-accent-600' : 'text-navy-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8 flex flex-col gap-3"
              >
                <Button to="/contact" className="w-full" icon="arrow">
                  Get in Touch
                </Button>
                <a
                  href={COMPANY.loginUrl}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-lg border-[1.5px] border-slate-200 text-navy-900 font-semibold hover:border-accent-500 hover:text-accent-600 transition-colors"
                >
                  <Icon name="login" className="w-5 h-5" strokeWidth={1.8} />
                  Login
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
