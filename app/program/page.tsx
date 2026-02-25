'use client';

import Link from 'next/link';

const pekanan = [
  {
    title: 'Setoran Hafalan Mingguan',
    desc: 'Santri menyetor hafalan baru dan murojaah kepada ustadz pembimbing secara terjadwal.',
    icon: 'ri-book-open-line',
  },
  {
    title: 'Murojaah Bersama',
    desc: 'Kegiatan murojaah hafalan secara bersama-sama di masjid untuk menjaga hafalan tetap kuat.',
    icon: 'ri-group-line',
  },
  {
    title: 'Kajian Pekanan',
    desc: 'Kajian keislaman dan tausiyah untuk memperkuat pemahaman agama santri.',
    icon: 'ri-mic-line',
  },
  {
    title: 'Evaluasi Hafalan',
    desc: 'Evaluasi mingguan untuk memantau perkembangan hafalan dan memberikan bimbingan.',
    icon: 'ri-file-list-2-line',
  },
];

const bulanan = [
  {
    title: 'Target Hafalan Bulanan',
    desc: 'Setiap santri memiliki target hafalan per bulan sesuai program yang diikuti (reguler/intensif).',
    icon: 'ri-flag-line',
  },
  {
    title: 'Evaluasi Bulanan',
    desc: 'Penilaian capaian hafalan bulanan dan konsultasi dengan ustadz untuk perbaikan.',
    icon: 'ri-bar-chart-line',
  },
  {
    title: 'Pelaporan Perkembangan',
    desc: 'Laporan perkembangan hafalan dikirim kepada wali santri setiap bulan.',
    icon: 'ri-mail-line',
  },
  {
    title: 'Kegiatan Bulanan',
    desc: 'Kegiatan khusus seperti tadabur alam, outbound, atau silaturahmi ke masyarakat.',
    icon: 'ri-calendar-check-line',
  },
];

const tahunan = [
  {
    title: 'Target Hafalan Tahunan',
    desc: 'Target penyelesaian juz tertentu dalam setahun sesuai kemampuan dan program santri.',
    icon: 'ri-trophy-line',
  },
  {
    title: 'Munaqosyah',
    desc: 'Ujian hafalan resmi bagi santri yang telah menyelesaikan target juz tertentu.',
    icon: 'ri-medal-line',
  },
  {
    title: 'Wisuda Tahfiz',
    desc: 'Wisuda bagi santri yang telah menyelesaikan hafalan 30 juz.',
    icon: 'ri-graduation-cap-line',
  },
  {
    title: 'Penerimaan Santri Baru',
    desc: 'Pendaftaran dan seleksi santri baru untuk tahun ajaran berikutnya.',
    icon: 'ri-user-add-line',
  },
];

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navbar placeholder - reuse from home */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-3 bg-white/90 backdrop-blur-2xl shadow-xl shadow-zinc-900/5 border-b border-zinc-200/60">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-display font-bold text-xl text-zinc-900 hover:text-emerald-600 transition-colors"
          >
            PPA Assa&apos;adah
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/#about"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Tentang
            </Link>
            <Link
              href="/#programs"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Program
            </Link>
            <Link
              href="/#donation"
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
            >
              Donasi
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/#programs"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white text-sm font-medium mb-6 transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Kembali ke Program
          </Link>
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-[0.2em]">Detail Program</span>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-3 tracking-tight">
            Program Pekanan, Bulanan & Tahunan
          </h1>
          <p className="text-emerald-100/90 text-lg mt-6 max-w-2xl mx-auto">
            Berikut rangkaian kegiatan PPA Assa&apos;adah yang berjalan secara terstruktur dari pekanan hingga tahunan
          </p>
        </div>
      </header>

      <main className="relative py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-20">
          {/* Program Pekanan */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <i className="ri-calendar-line text-emerald-600 text-2xl" />
              </div>
              <div>
                <span className="text-emerald-600 font-semibold text-xs uppercase tracking-wider">Mingguan</span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 mt-1">Program Pekanan</h2>
                <p className="text-zinc-600 mt-1">Kegiatan rutin yang berjalan setiap minggu</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {pekanan.map((item, i) => (
                <div
                  key={i}
                  className="group p-6 lg:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-md hover:shadow-xl hover:border-emerald-200/80 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                    <i className={`${item.icon} text-emerald-600 text-xl`} />
                  </div>
                  <h3 className="font-display font-bold text-zinc-900 text-lg">{item.title}</h3>
                  <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Program Bulanan */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shadow-lg shadow-blue-500/10">
                <i className="ri-calendar-2-line text-blue-600 text-2xl" />
              </div>
              <div>
                <span className="text-blue-600 font-semibold text-xs uppercase tracking-wider">Bulanan</span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 mt-1">Program Bulanan</h2>
                <p className="text-zinc-600 mt-1">Evaluasi dan target capaian setiap bulan</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {bulanan.map((item, i) => (
                <div
                  key={i}
                  className="group p-6 lg:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-md hover:shadow-xl hover:border-blue-200/80 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <i className={`${item.icon} text-blue-600 text-xl`} />
                  </div>
                  <h3 className="font-display font-bold text-zinc-900 text-lg">{item.title}</h3>
                  <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Program Tahunan */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shadow-lg shadow-amber-500/10">
                <i className="ri-calendar-event-line text-amber-600 text-2xl" />
              </div>
              <div>
                <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">Tahunan</span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 mt-1">Program Tahunan</h2>
                <p className="text-zinc-600 mt-1">Target besar dan milestone penting setiap tahun</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {tahunan.map((item, i) => (
                <div
                  key={i}
                  className="group p-6 lg:p-8 rounded-2xl bg-white border border-zinc-200/80 shadow-md hover:shadow-xl hover:border-amber-200/80 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                    <i className={`${item.icon} text-amber-600 text-xl`} />
                  </div>
                  <h3 className="font-display font-bold text-zinc-900 text-lg">{item.title}</h3>
                  <p className="text-zinc-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Program Temporer */}
          <section className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center shadow-lg shadow-violet-500/10">
                <i className="ri-flashlight-line text-violet-600 text-2xl" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-violet-500/20 text-violet-700 text-xs font-semibold uppercase tracking-wider mb-2">
                  Highlight
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900">Program Temporer</h2>
                <p className="text-zinc-600 mt-1">Program tambahan yang tersedia saat ini</p>
              </div>
            </div>
            <div className="relative rounded-2xl bg-gradient-to-br from-violet-500/5 via-violet-50/50 to-transparent border-2 border-violet-200/60 p-6 lg:p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="group p-6 rounded-xl bg-white border border-violet-200/40 shadow-md hover:shadow-xl hover:border-violet-300/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="ri-global-line text-violet-600 text-xl" />
                  </div>
                  <h3 className="font-display font-bold text-zinc-900">Course Bahasa Inggris</h3>
                  <p className="text-zinc-600 text-sm mt-2">Pembelajaran bahasa Inggris untuk meningkatkan kompetensi santri.</p>
                </div>
                <div className="group p-6 rounded-xl bg-white border border-violet-200/40 shadow-md hover:shadow-xl hover:border-violet-300/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="ri-calculator-line text-violet-600 text-xl" />
                  </div>
                  <h3 className="font-display font-bold text-zinc-900">Matematika</h3>
                  <p className="text-zinc-600 text-sm mt-2">Pelajaran matematika untuk mendukung kemampuan akademik santri.</p>
                </div>
                <div className="group p-6 rounded-xl bg-white border border-violet-200/40 shadow-md hover:shadow-xl hover:border-violet-300/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="ri-computer-line text-violet-600 text-xl" />
                  </div>
                  <h3 className="font-display font-bold text-zinc-900">Teknisi Komputer</h3>
                  <p className="text-zinc-600 text-sm mt-2">Pelatihan keterampilan teknisi komputer dan perawatan perangkat.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-16 px-6 rounded-3xl bg-gradient-to-br from-zinc-50 to-emerald-50/30 border border-zinc-200/80">
            <p className="text-zinc-600 mb-6 text-lg">Ingin mendaftarkan putra/putri Anda?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6282298793370"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              >
                <i className="ri-whatsapp-line text-xl" />
                Hubungi via WhatsApp
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-zinc-200 hover:border-emerald-300 text-zinc-700 hover:text-emerald-700 font-semibold hover:bg-white/80 transition-all"
              >
                <i className="ri-arrow-left-line text-lg" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
