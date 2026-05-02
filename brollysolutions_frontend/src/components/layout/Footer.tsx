import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10 border-t border-gray-800 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Brolly Solutions Logo" width={140} height={40} className="object-contain h-8 w-auto" style={{width:"auto"}}/>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A small, senior technology team helping growing businesses build smarter software. Honest pricing, senior talent, and no big-agency bloat.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-3">
            <h5 className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-6">Navigation</h5>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Free Audit</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-4">
            <h5 className="text-brand-gold font-mono text-xs uppercase tracking-widest mb-6">Contact</h5>
            <ul className="space-y-4">
              <li className="text-sm text-gray-400">hello@brollysolutions.com</li>
              <li className="text-sm text-gray-400">Mon — Fri, 9am — 6pm</li>
              <li className="pt-4">
                <Link href="/contact" className="inline-block px-6 py-2 bg-brand-dark border border-gray-700 rounded-lg text-sm font-bold hover:border-brand-gold transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Brolly Solutions. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            New company · Honest pricing · Senior team
          </p>
        </div>
      </div>
    </footer>
  );
}