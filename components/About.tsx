'use client';

import StatsCounter from './StatsCounter';
import SejarahSlider from './SejarahSlider';

export default function About() {
  const valueAccents = [
    { gradient: 'from-emerald-500 to-emerald-600', border: 'hover:border-emerald-200', shadow: 'hover:shadow-emerald-100/50' },
    { gradient: 'from-amber-500 to-amber-600', border: 'hover:border-amber-200', shadow: 'hover:shadow-amber-100/50' },
    { gradient: 'from-blue-500 to-blue-600', border: 'hover:border-blue-200', shadow: 'hover:shadow-blue-100/50' },
    { gradient: 'from-violet-500 to-violet-600', border: 'hover:border-violet-200', shadow: 'hover:shadow-violet-100/50' },
  ];
  const values = [
    { icon: 'ri-star-line', title: 'Tauhid', desc: 'Mengesakan Allah dalam setiap aspek kehidupan' },
    { icon: 'ri-heart-line', title: 'Akhlak', desc: 'Berakhlak mulia seperti Rasulullah SAW' },
    { icon: 'ri-time-line', title: 'Disiplin', desc: 'Konsisten dalam menghafal dan beribadah' },
    { icon: 'ri-hand-heart-line', title: 'Keikhlasan', desc: 'Mengharap ridha Allah semata' },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero - full bleed image with overlay text */}
      <div className="relative min-h-[85vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-02-19 at 11.57.09.jpeg"
            alt="PPA Assaadah"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-40">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-widest uppercase mb-6">
                Tentang Kami
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
                PPA Baitul Qur&apos;an As-Sa&apos;adah
              </h2>
              <p className="text-zinc-300 text-xl lg:text-2xl mt-6 max-w-2xl leading-relaxed">
                Pondok Penghafal Al-Qur&apos;an di Mutiara Sentul — memberkahi lingkungan sejak 2009
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4 text-white/60">
              <div className="w-px h-12 bg-white/30" />
              <span className="text-sm font-medium">Cibinong, Bogor</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content - white bg */}
      <div className="relative bg-white">
        {/* History + Image - split layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <SejarahSlider />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-emerald-500/20 -z-10 blur-2xl" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.25em]">Sejarah</span>
              <h3 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-zinc-900 mt-4 mb-8 leading-[1.15]">
                Dari 3 santri menjadi lembaga yang dipercaya ribuan keluarga
              </h3>
              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Berawal dari 3 santri dan seorang ustadz di sebuah rumah RT 01 Mutiara Sentul, kini PPA Assa&apos;adah telah berkembang memiliki bangunan sendiri seluas ±300 m².
                </p>
                <p>
                  Dengan bimbingan ustadz dan ustadzah berpengalaman, kami menjaga kualitas hafalan dan pembinaan karakter sesuai tuntunan Al-Qur&apos;an dan As-Sunnah.
                </p>
              </div>
            </div>
          </div>

          {/* Visi & Misi - side by side cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-32 lg:mt-40">
            <div className="group relative rounded-3xl p-10 lg:p-12 bg-zinc-50 border border-zinc-100 overflow-hidden hover:border-emerald-200/60 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-500/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center mb-6">
                  <i className="ri-eye-line text-white text-2xl" />
                </div>
                <h4 className="font-display text-2xl font-bold text-zinc-900 mb-4">Visi</h4>
                <p className="text-zinc-600 text-lg leading-relaxed">
                  Menjadi lembaga tahfidz terdepan yang mencetak generasi Qur&apos;ani yang hafal, faham, dan mengamalkan Al-Qur&apos;an dalam kehidupan sehari-hari.
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl p-10 lg:p-12 bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-emerald-500/10 translate-y-1/2 -translate-x-1/2 group-hover:bg-emerald-500/20 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <i className="ri-flag-line text-emerald-400 text-2xl" />
                </div>
                <h4 className="font-display text-2xl font-bold text-white mb-6">Misi</h4>
                <ul className="space-y-4">
                  {['Menghafal Al-Qur\'an 30 juz dengan tartil', 'Membentuk akhlak mulia sesuai tuntunan Islam', 'Mengembangkan potensi santri secara holistik'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-300">
                      <i className="ri-check-line text-emerald-400 text-xl flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <StatsCounter />

          {/* Values - horizontal cards */}
          <div className="mt-24 lg:mt-32">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.25em]">Nilai Utama</span>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 mt-4">
                Prinsip yang mendasari setiap kegiatan
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, i) => {
                const accent = valueAccents[i % valueAccents.length];
                return (
                  <div
                    key={i}
                    className={`group relative rounded-2xl p-8 bg-white border-2 border-zinc-100 ${accent.border} hover:shadow-xl ${accent.shadow} transition-all duration-300 hover:-translate-y-2`}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accent.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <i className={`${item.icon} text-white text-2xl`} />
                    </div>
                    <h4 className="font-display text-xl font-bold text-zinc-900 mb-3">{item.title}</h4>
                    <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
