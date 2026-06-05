"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname === '/rag_chatbot') return null;

  return (
    <footer className="bg-[#050505] text-white border-t border-[#161616] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/logo.png"
                alt="Brolly Solutions"
                width={148}
                height={44}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              Boutique software engineering and tech advisory. We build reliable, scalable systems for businesses that demand excellence.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 mb-6">Navigation</p>
            <ul className="space-y-3.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-brand-gold transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 mb-6">Social</p>
            <ul className="space-y-3.5">
              {socialItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-brand-gold transition-colors duration-300 font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-600 mb-6">Contact</p>
            <ul className="space-y-3.5 text-sm font-light text-gray-500">
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
                  href="/contact"
                  className="text-white text-sm font-medium border-b border-gray-700 pb-1 hover:text-brand-gold hover:border-brand-gold transition-all duration-300"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#161616]">
          <p className="text-xs text-gray-700 font-light">
            © {currentYear} Brolly Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}