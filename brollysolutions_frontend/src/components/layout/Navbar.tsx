import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Our Team', href: '/about' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  if (pathname === '/chatbot') return null;

  const isActive = (path: string) => pathname === path;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 w-full px-6 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'py-4 bg-[#ffffff]/90 backdrop-blur-2xl border-b border-zinc-300'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/logo_black.png"
              alt="Brolly Solutions"
              className="h-9 w-auto object-contain"
              style={{ filter: 'brightness(0)' }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-white px-3 py-2 rounded-full border border-zinc-300 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-5 py-2 text-[15px] font-semibold transition-colors duration-300 rounded-full"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive(link.href) ? 'text-brand-gold font-bold' : 'text-black hover:text-brand-gold'
                }`}>
                  {link.name}
                </span>
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-zinc-100 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5 z-50">
            <Link
              to="/login"
              className="flex items-center gap-2 text-[15px] text-black hover:text-brand-gold border border-zinc-400 hover:border-brand-gold px-4 py-2 rounded-full transition-all duration-300 bg-white hover:bg-zinc-50 font-bold"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
                <path d="M1.5 12.5C1.5 10.015 4.015 8 7 8s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
              </svg>
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-brand-gold block origin-center"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="w-5 h-[1.5px] bg-brand-gold block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-brand-gold block origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#ffffff]/98 backdrop-blur-2xl md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-4xl font-bold tracking-tight transition-colors ${
                      isActive(link.href) ? 'text-brand-gold' : 'text-black hover:text-brand-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="pt-6 flex flex-col items-center gap-4"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get a Free Tech Audit
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-[15px] text-black hover:text-brand-gold border border-zinc-400 rounded-full transition-all duration-300 bg-white hover:bg-zinc-50 font-bold"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
                    <path d="M1.5 12.5C1.5 10.015 4.015 8 7 8s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
                  </svg>
                  <span>Login</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}