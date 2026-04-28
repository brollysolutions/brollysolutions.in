"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Team', href: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-brand-black/90 backdrop-blur-md border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO (Using Next.js Image Optimization) */}
        <Link href="/" className="flex-shrink-0 z-10 flex items-center">
          <Image 
            src="/logo.png" // Ensure you have a logo.png in your public/ folder
            alt="Brolly Solutions Logo" 
            width={180} 
            height={48} 
            className="object-contain h-10 w-auto md:h-12" 
            style={{width: "auto"}}
            priority 
          />
        </Link>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 w-max">
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col items-center">
              <Link 
                href={link.href} 
                className={`text-sm transition-colors py-1 ${
                  isActive(link.href) ? 'text-brand-gold font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
              {isActive(link.href) && (
                <div className="h-[2px] w-full bg-brand-gold rounded-full mt-1 animate-in fade-in zoom-in duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="hidden md:block text-sm text-gray-300 hover:text-white transition-colors"
          >
            Talk to Us
          </Link>
          <Link 
            href="/contact" 
            className="px-5 py-2.5 text-sm font-bold text-brand-black transition-all duration-300 bg-brand-gold rounded-full hover:bg-brand-gold-hover hover:-translate-y-0.5"
          >
            Free Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}