"use client"; // Required to use usePathname and handle dynamic highlighting

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Helper function to check if a link is active
  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-brand-black/90 backdrop-blur-md border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO (Anchored Left) */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Image 
            src="/logo.png" 
            alt="Brolly Solutions Logo" 
            width={150} 
            height={50} 
            className="object-contain h-10 w-auto md:h-12" 
            priority 
          />
        </Link>

        {/* NAVIGATION LINKS (Perfectly Centered & Dynamic) */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 w-max">
          {navLinks.map((link) => (
            <div key={link.href} className="flex flex-col items-center">
              <Link 
                href={link.href} 
                className={`font-medium transition-colors py-1 ${
                  isActive(link.href) ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                }`}
              >
                {link.name}
              </Link>
              
              {/* Dynamic Highlighter - only shows if isActive is true */}
              {isActive(link.href) && (
                <div className="h-[3px] w-full bg-brand-gold rounded-full mt-1 animate-in fade-in zoom-in duration-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}