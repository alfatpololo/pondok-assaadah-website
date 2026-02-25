'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Tentang' },
    { href: '#programs', label: 'Program' },
    { href: '#berita', label: 'Berita' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#donation', label: 'Donasi' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 lg:px-8 rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-xl shadow-zinc-900/5 border border-zinc-200/60'
            : 'bg-white/5 backdrop-blur-md border border-white/10'
        } px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          <Link href="#" className="flex-shrink-0 group flex items-center gap-3">
            <img
              src="/assaadah logo.png"
              alt=""
              className={`h-11 lg:h-12 w-auto object-contain transition-all duration-300 ${!isScrolled ? 'brightness-0 invert' : ''}`}
              aria-hidden
            />
            <span className="font-display font-bold text-xl tracking-tight group-hover:tracking-normal transition-all duration-300">
              {isScrolled ? (
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  PPA Assa&apos;adah
                </span>
              ) : (
                <span className="text-white">PPA Assa&apos;adah</span>
              )}
            </span>
          </Link>

          {/* Desktop nav - pill style */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
            <div className="w-px h-6 mx-1 bg-current opacity-20" />
            <Link
              href="#donation"
              className="ml-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Donasi Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? 'text-zinc-700 hover:bg-zinc-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div
            className={`py-4 rounded-2xl ${
              isScrolled ? 'bg-zinc-50/80 border border-zinc-200/80' : 'bg-white/5 border border-white/10'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-5 py-4 text-sm font-medium rounded-xl mx-2 mb-1 transition-all ${
                  isScrolled
                    ? 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-5 py-4 pt-2 mx-2 mt-2 border-t border-current/10">
              <Link
                href="#donation"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-600 text-white transition-all shadow-lg shadow-emerald-500/25"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="ri-heart-line text-lg" />
                Donasi Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
