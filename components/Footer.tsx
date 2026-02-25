'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0a0b 0%, #0f172a 30%, #064e3b 80%, #065f46 100%)',
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <img
              src="https://placehold.co/140x40/ffffff/059669?text=PPA+Assaadah&font=roboto"
              alt="PPA Assaadah"
              className="h-14 w-auto mb-8 opacity-90"
            />
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
              Mencetak generasi penghafal Al-Qur&apos;an yang berakhlak mulia dan bermanfaat bagi umat.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'ri-facebook-fill', hover: 'hover:bg-emerald-500/20 hover:text-emerald-400' },
                { icon: 'ri-instagram-line', hover: 'hover:bg-amber-500/20 hover:text-amber-400' },
                { icon: 'ri-youtube-fill', hover: 'hover:bg-rose-500/20 hover:text-rose-400' },
                { icon: 'ri-whatsapp-line', hover: 'hover:bg-emerald-500/20 hover:text-emerald-400' },
              ].map(({ icon, hover }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 transition-all duration-300 ${hover}`}
                >
                  <i className={`${icon} text-xl`} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-6 text-lg">Tautan</h4>
            <ul className="space-y-4">
              {[
                { href: '#about', label: 'Tentang Kami' },
                { href: '#programs', label: 'Program Tahfidz' },
                { href: '#berita', label: 'Berita' },
                { href: '#galeri', label: 'Galeri' },
                { href: '#donation', label: 'Donasi' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-zinc-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Made with Readdy
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-display font-bold text-white mb-6 text-lg">Kontak</h4>
            <ul className="space-y-5 text-zinc-400">
              <li className="flex items-start gap-4">
                <i className="ri-map-pin-line text-emerald-400/80 mt-1 flex-shrink-0 text-xl" />
                <span>Jl. Alternatif Sentul 88, Perum Mutiara Sentul Blok M-5, Cibinong Bogor 16917</span>
              </li>
              <li className="flex items-center gap-4">
                <i className="ri-phone-line text-emerald-400/80 text-xl flex-shrink-0" />
                <a href="tel:082298793370" className="hover:text-emerald-400 transition-colors">082298793370</a>
              </li>
              <li className="flex items-center gap-4">
                <i className="ri-whatsapp-line text-emerald-400/80 text-xl flex-shrink-0" />
                <a href="https://wa.me/6282298793370" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">082298793370</a>
              </li>
            </ul>
            <div className="mt-10 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-emerald-200/90 text-sm leading-relaxed">
                <i className="ri-information-line mr-2" />
                Kunjungan harap membuat janji terlebih dahulu
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-zinc-500 text-sm">© 2026 PPA Baitul Qur&apos;an As-Sa&apos;adah Mutiara Sentul</p>
            <p className="text-zinc-500 text-sm">Dibuat dengan ❤️ untuk generasi Qur&apos;ani</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
