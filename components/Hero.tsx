'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient mesh background - unicorn style */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              'linear-gradient(135deg, #064e3b 0%, #065f46 25%, #0a0a0b 50%, #0f172a 75%, #064e3b 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.4), transparent),
              radial-gradient(ellipse 60% 40% at 100% 0%, rgba(34, 211, 238, 0.15), transparent),
              radial-gradient(ellipse 50% 30% at 0% 50%, rgba(16, 185, 129, 0.2), transparent)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0b_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300/90 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            PPA Baitul Qur&apos;an As-Sa&apos;adah Mutiara Sentul
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            Mencetak Generasi Penghafal Qur&apos;an yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
              Berakhlak Mulia
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl animate-fade-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
          >
            Metode terbukti efektif, pengajar berpengalaman, dan fasilitas memadai untuk mendampingi santri menghafal Al-Qur&apos;an dengan tartil.
          </p>

          <div
            className="flex flex-wrap gap-3 animate-slide-up"
            style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
          >
            <Link
              href="#donation"
              className="group inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Donasi Sekarang
              <i className="ri-arrow-right-line text-lg transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white/90 hover:text-white border border-white/20 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <Link href="#about" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <i className="ri-arrow-down-s-line text-2xl" />
        </Link>
      </div>
    </section>
  );
}
