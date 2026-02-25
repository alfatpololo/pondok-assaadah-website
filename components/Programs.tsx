'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Programs() {
  const [activeProgram, setActiveProgram] = useState(0);
  const [facilitiesVisible, setFacilitiesVisible] = useState(false);
  const facilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = facilitiesRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => e.isIntersecting && setFacilitiesVisible(true),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: 'ri-book-2-line',
      title: 'Program Hafalan Reguler',
      description: 'Target hafalan 1 halaman per hari. Cocok untuk santri yang ingin menghafal dengan pace yang nyaman.',
      features: ['Durasi 3-4 tahun untuk 30 juz', 'Setoran harian dengan ustadz', 'Muroja\'ah rutin', 'Pembelajaran tajwid intensif'],
      accent: 'emerald',
      featured: true,
    },
    {
      icon: 'ri-flashlight-line',
      title: 'Program Intensif',
      description: 'Target 1.5-2 halaman per hari. Untuk santri yang ingin menyelesaikan hafalan lebih cepat.',
      features: ['Durasi 2-3 tahun untuk 30 juz', 'Setoran 2x sehari', 'Bimbingan ekstra', 'Evaluasi mingguan'],
      accent: 'amber',
      featured: false,
    },
    {
      icon: 'ri-award-line',
      title: 'Program Beasiswa',
      description: 'Beasiswa penuh bagi santri berprestasi dan kurang mampu. Tidak ada yang terhalang menghafal Al-Qur\'an.',
      features: ['Biaya pendidikan gratis', 'Asrama dan makan gratis', 'Buku dan perlengkapan', 'Uang saku bulanan'],
      accent: 'blue',
      featured: false,
    },
  ];

  const facilityColors = [
    { bg: 'bg-emerald-500/10', bgHover: 'group-hover:bg-emerald-500/20', icon: 'text-emerald-600', border: 'hover:border-emerald-200/80', shadow: 'hover:shadow-emerald-100/30' },
    { bg: 'bg-amber-500/10', bgHover: 'group-hover:bg-amber-500/20', icon: 'text-amber-600', border: 'hover:border-amber-200/80', shadow: 'hover:shadow-amber-100/30' },
    { bg: 'bg-blue-500/10', bgHover: 'group-hover:bg-blue-500/20', icon: 'text-blue-600', border: 'hover:border-blue-200/80', shadow: 'hover:shadow-blue-100/30' },
    { bg: 'bg-violet-500/10', bgHover: 'group-hover:bg-violet-500/20', icon: 'text-violet-600', border: 'hover:border-violet-200/80', shadow: 'hover:shadow-violet-100/30' },
    { bg: 'bg-rose-500/10', bgHover: 'group-hover:bg-rose-500/20', icon: 'text-rose-600', border: 'hover:border-rose-200/80', shadow: 'hover:shadow-rose-100/30' },
    { bg: 'bg-teal-500/10', bgHover: 'group-hover:bg-teal-500/20', icon: 'text-teal-600', border: 'hover:border-teal-200/80', shadow: 'hover:shadow-teal-100/30' },
  ];

  const facilities = [
    { icon: 'ri-home-4-line', name: 'Asrama Nyaman', desc: 'Kamar bersih & lingkungan kondusif' },
    { icon: 'ri-restaurant-line', name: 'Dapur & Makan', desc: 'Makanan sehat 3x sehari' },
    { icon: 'ri-book-line', name: 'Perpustakaan', desc: 'Kitab dan buku islami' },
    { icon: 'ri-hospital-line', name: 'Akses Medis Mudah', desc: 'Dekat klinik & layanan medis' },
    { icon: 'ri-football-line', name: 'Olahraga', desc: 'Futsal dan badminton' },
    { icon: 'ri-medal-line', name: 'Ekstrakulikuler', desc: 'Aktif, kreatif & produktif' },
  ];

  return (
    <section id="programs" className="relative">
      {/* Programs - staggered layout */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 blur-3xl bg-emerald-200/50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl bg-teal-200/50 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-amber-200/60 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-[0.2em]">Program</span>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 mt-3 tracking-tight">
                Program Tahfidz
              </h2>
            </div>
            <p className="text-lg text-zinc-600 max-w-xl lg:text-right">
              Berbagai program yang disesuaikan dengan kebutuhan dan kemampuan santri
            </p>
          </div>

          {/* Program tabs - interaktif */}
          <div className="flex flex-wrap gap-2 mb-10">
            {programs.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveProgram(i)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-left transition-all duration-300 ${
                  activeProgram === i
                    ? p.accent === 'emerald'
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-[1.02]'
                      : p.accent === 'amber'
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30 scale-[1.02]'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30 scale-[1.02]'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                <i className={`${p.icon} text-xl`} />
                <span>{p.title.replace('Program ', '')}</span>
              </button>
            ))}
          </div>

          {/* Program content - berubah sesuai tab */}
          <div className="relative rounded-3xl overflow-hidden border border-zinc-200/80 bg-white shadow-xl shadow-zinc-200/30 min-h-[340px] lg:min-h-[380px]">
            {programs.map((p, i) => (
              <div
                key={i}
                className={`transition-all duration-400 ease-out ${activeProgram === i ? 'opacity-100 relative' : 'absolute inset-0 opacity-0 pointer-events-none'}`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div
                    className={`relative flex-1 min-h-[280px] lg:min-h-[360px] flex items-center justify-center p-12 transition-colors duration-300 ${
                      p.accent === 'emerald'
                        ? 'bg-gradient-to-br from-emerald-500/15 via-emerald-50/80 to-transparent'
                        : p.accent === 'amber'
                        ? 'bg-gradient-to-br from-amber-500/15 via-amber-50/80 to-transparent'
                        : 'bg-gradient-to-br from-blue-500/15 via-blue-50/80 to-transparent'
                    }`}
                  >
                    <div
                      className={`w-28 h-28 rounded-3xl flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
                        p.accent === 'emerald' ? 'bg-emerald-500/20' : p.accent === 'amber' ? 'bg-amber-500/20' : 'bg-blue-500/20'
                      }`}
                    >
                      <i
                        className={`${p.icon} text-5xl ${
                          p.accent === 'emerald' ? 'text-emerald-600' : p.accent === 'amber' ? 'text-amber-600' : 'text-blue-600'
                        }`}
                      />
                    </div>
                  </div>
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <span
                      className={`inline-block text-xs font-semibold uppercase tracking-wider mb-2 ${
                        p.accent === 'emerald' ? 'text-emerald-600' : p.accent === 'amber' ? 'text-amber-600' : 'text-blue-600'
                      }`}
                    >
                      Program {i + 1}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 mb-4">{p.title}</h3>
                    <p className="text-zinc-600 leading-relaxed mb-6">{p.description}</p>
                    <ul className="space-y-3">
                      {p.features.map((f, j) => {
                        const checkColors = ['text-emerald-500', 'text-teal-500', 'text-emerald-600', 'text-teal-600'];
                        return (
                          <li key={j} className="flex items-center gap-3 text-zinc-700">
                            <i className={`ri-check-line ${checkColors[j % checkColors.length]} flex-shrink-0 text-lg`} />
                            {f}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 lg:mt-16">
            <Link
              href="/program"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-zinc-900/20"
            >
              Lihat Program Lainnya
              <i className="ri-arrow-right-line text-lg" />
            </Link>
          </div>

          {/* Facilities - icon grid dengan animasi saat scroll */}
          <div ref={facilitiesRef} className="mt-32 lg:mt-40">
            <div className="mb-12">
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-[0.2em]">Fasilitas</span>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 mt-3">
                Fasilitas Pondok
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {facilities.map((f, i) => {
                const c = facilityColors[i % facilityColors.length];
                return (
                  <div
                    key={i}
                    className={`group flex items-center gap-5 p-6 lg:p-8 rounded-2xl bg-white/80 border border-zinc-200/80 ${c.border} hover:shadow-xl ${c.shadow} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${
                      facilitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: facilitiesVisible ? `${i * 80}ms` : '0ms' }}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center flex-shrink-0 ${c.bgHover} group-hover:scale-110 transition-all duration-300`}>
                      <i className={`${f.icon} ${c.icon} text-2xl`} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-zinc-900 text-lg">{f.name}</h4>
                      <p className="text-zinc-600 text-sm mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Location - full width map with floating card */}
          <div className="mt-24 lg:mt-32 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.052680300684!2d106.87752331477074!3d-6.596037495279939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5a8c4c4c4c5%3A0x2e69c5a8c4c4c4c5!2sMutiara%20Sentul%2C%20Cibinong%2C%20Bogor!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent" />
            <div className="absolute inset-0 pointer-events-none" />
            <div className="relative z-10 flex items-center min-h-[420px] p-8 lg:p-16">
              <div className="max-w-md rounded-2xl p-8 lg:p-10 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                  <i className="ri-map-pin-line text-emerald-600 text-2xl" />
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-900 mb-4">Lokasi Pondok</h3>
                <p className="text-zinc-600 mb-6">
                  Jl. Alternatif Sentul 88, Perum Mutiara Sentul Blok M-5, Cibinong Bogor 16917
                </p>
                <a
                  href="tel:082298793370"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  <i className="ri-phone-line text-xl" />
                  082298793370
                </a>
                <p className="text-sm text-zinc-500 mt-6 pt-6 border-t border-zinc-200">
                  Santri mengikuti pendidikan formal di SDIT/SMPIT Yayasan Daarul Fikri Cibinong dengan membayar 30% dari SPP normal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
