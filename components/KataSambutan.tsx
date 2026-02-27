'use client';

export default function KataSambutan() {
  return (
    <section id="kata-sambutan" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.25em]">Kata Sambutan</span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 mt-3">
            Sambutan Pengurus
          </h2>
        </div>

        <div className="space-y-16">
          {/* Sambutan Ketua Pembina */}
          <div className="rounded-2xl bg-white border border-zinc-200/80 shadow-lg p-8 lg:p-12">
            <h3 className="font-display text-xl font-bold text-emerald-800 mb-1 uppercase tracking-wide">
              Kata Sambutan
            </h3>
            <p className="font-display text-lg font-bold text-zinc-900 mb-8">
              Ketua Pembina PPA Baitul Qur&apos;an As-Sa&apos;adah
            </p>
            <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed space-y-4">
              <p>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</p>
              <p>
                Alhamdulillahi rabbil &apos;alamin, segala puji bagi Allah SWT yang menurunkan Al-Qur&apos;an sebagai cahaya kehidupan dan penuntun peradaban. Shalawat serta salam semoga tercurah kepada Nabi Muhammad SAW, teladan akhlak dan pembangun generasi mulia.
              </p>
              <p>
                PPA Baitul Qur&apos;an As-Sa&apos;adah berdiri atas keyakinan bahwa setiap anak yatim dan dhuafa menyimpan potensi kemuliaan. Kami tidak hanya membina hafalan, tetapi menanamkan nilai Tauhid sebagai arah hidup, Akhlak sebagai karakter, Disiplin sebagai kekuatan, dan Keikhlasan sebagai ruh perjuangan. Dari fondasi inilah kami berharap lahir generasi Qur&apos;ani yang mandiri, berdaya saing, dan tetap rendah hati dalam pengabdian kepada masyarakat dan bangsa.
              </p>
              <p>
                Amanah ini adalah perjalanan ruhani yang kita tempuh bersama, menanam benih-benih ayat di ladang hati yang mungkin pernah kering oleh keadaan. Semoga setiap huruf yang dihafalkan menjelma cahaya yang menerangi jalan hidup para santri, menjadi mata air keberkahan yang tak pernah putus, serta mengalir sebagai amal jariyah yang menyambungkan kebaikan kita hingga melampaui usia dan zaman.
              </p>
              <p>Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.</p>
              <p className="font-semibold text-zinc-900 pt-4">
                Deden Rahmawan<br />
                <span className="text-emerald-700 font-normal text-base">Ketua Pembina Yayasan Assa&apos;adah</span>
              </p>
            </div>
          </div>

          {/* Sambutan Ketua Pengurus */}
          <div className="rounded-2xl bg-white border border-zinc-200/80 shadow-lg p-8 lg:p-12">
            <h3 className="font-display text-xl font-bold text-emerald-800 mb-1 uppercase tracking-wide">
              Sambutan Ketua Pengurus
            </h3>
            <p className="font-display text-lg font-bold text-zinc-900 mb-8">
              PPA Baitul Qur&apos;an As-Sa&apos;adah
            </p>
            <div className="prose prose-zinc max-w-none text-zinc-700 leading-relaxed space-y-4">
              <p>Assalamu&apos;alaikum Warahmatullahi Wabarakatuh</p>
              <p>
                Alhamdulillahi rabbil &apos;alamin, segala puji bagi Allah SWT yang telah melimpahkan rahmat dan hidayah-Nya sehingga kita dapat terus berkhidmat dalam membina generasi Qur&apos;ani. Shalawat serta salam semoga senantiasa tercurah kepada Nabi Muhammad SAW, teladan terbaik dalam akhlak, keikhlasan, dan perjuangan.
              </p>
              <p>
                Sebagai Ketua Pengurus Yayasan PPA Baitul Qur&apos;an As-Sa&apos;adah, kami memikul amanah untuk menjalankan visi lembaga ini secara profesional, terarah, dan berkelanjutan. Kami berkomitmen menghadirkan pendidikan tahfizh yang terstruktur dan berkualitas, membina akhlak dan kedisiplinan santri, serta mengintegrasikan pendidikan agama dan formal agar lahir generasi yatim dan dhuafa yang mandiri, berdaya saing, dan siap berkontribusi bagi kemajuan bangsa.
              </p>
              <p>
                Kami mengajak seluruh pihak untuk terus bersinergi dan mendukung langkah ini, semoga setiap upaya yang kita lakukan menjadi amal jariyah yang diridhai Allah SWT dan membawa keberkahan bagi umat.
              </p>
              <p>Wassalamu&apos;alaikum Warahmatullahi Wabarakatuh.</p>
              <p className="font-semibold text-zinc-900 pt-4">
                Muhammad Hilmi Firdausi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
