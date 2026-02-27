'use client';

export default function Donation() {
  const usageBreakdown = [
    { category: 'Operasional Pendidikan', percentage: 40, colorClass: 'bg-emerald-500', colorLight: 'bg-emerald-500/20' },
    { category: 'Beasiswa Santri', percentage: 30, colorClass: 'bg-blue-500', colorLight: 'bg-blue-500/20' },
    { category: 'Pembangunan Fasilitas', percentage: 20, colorClass: 'bg-amber-500', colorLight: 'bg-amber-500/20' },
    { category: 'Kesejahteraan Ustadz', percentage: 10, colorClass: 'bg-violet-500', colorLight: 'bg-violet-500/20' },
  ];

  return (
    <section id="donation" className="relative overflow-hidden">
      {/* Split section - dark left, content right */}
      <div className="relative min-h-[600px] lg:min-h-[700px] flex flex-col lg:flex-row">
        {/* Left - dark gradient CTA */}
        <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-full flex items-center">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #064e3b 0%, #065f46 40%, #047857 100%)',
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 p-12 lg:p-16 xl:p-24">
            <span className="text-emerald-300/90 font-semibold text-xs uppercase tracking-[0.2em]">Donasi</span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Investasi Akhirat
            </h2>
            <p className="text-emerald-100/90 text-lg lg:text-xl max-w-lg leading-relaxed mb-10">
              Sedekah jariyah Anda membantu mencetak generasi penghafal Al-Qur&apos;an yang berakhlak mulia.
            </p>
            <blockquote className="border-l-4 border-emerald-400 pl-6 py-4 text-emerald-50/95 italic text-lg">
              &ldquo;Sebaik-baik kalian adalah yang mempelajari Al-Qur&apos;an dan mengajarkannya.&rdquo;
              <span className="block text-emerald-200/80 text-sm not-italic mt-2">— HR. Bukhari</span>
            </blockquote>
            <div className="mt-12">
              <a
                href="https://wa.me/6281287531710"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-emerald-800 font-bold hover:bg-emerald-50 transition-all duration-300 shadow-xl"
              >
                <i className="ri-whatsapp-line text-2xl" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right - bank info + transparency */}
        <div className="relative lg:w-1/2 bg-[#fafafa] flex flex-col">
          <div className="flex-1 p-12 lg:p-16 xl:p-24">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-zinc-900 mb-8">
                Informasi Rekening
              </h3>
              <div className="rounded-2xl p-8 bg-white border border-zinc-200/80 shadow-xl mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <i className="ri-bank-line text-emerald-600 text-xl" />
                  </div>
                  <span className="font-semibold text-zinc-900">Bank Syariah Indonesia (BSI)</span>
                </div>
                <div className="font-display text-4xl font-bold text-zinc-900 tracking-tight mb-1">7007206814</div>
                <div className="text-zinc-500">a.n. Yayasan Assa&apos;adah (PPA)</div>
              </div>

              <p className="text-zinc-600 mb-2">
                Konfirmasi donasi via WhatsApp: <a href="https://wa.me/6281287531710" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:text-emerald-700">081287531710</a>
                {' — '}
                <a href="https://wa.me/6282228793370" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 hover:text-emerald-700">082228793370</a>
              </p>
              <p className="text-zinc-500 text-sm">
                Apabila ingin mengasuh santri sebagai anak asuh, kami dengan senang hati memberi kesempatan. Semoga menjadi investasi di akhirat kelak.
              </p>

              <div className="mt-16">
                <h4 className="font-display text-xl font-bold text-zinc-900 mb-6">Transparansi Dana</h4>
                <p className="text-zinc-600 text-sm mb-8">
                  PPA Assa&apos;adah mengandalkan zakat, infaq, dan sedekah. Seluruh biaya santri dan ujroh assatidz (Rp30–35 juta/bulan) ditanggung Yayasan.
                </p>
                <div className="space-y-5">
                  {usageBreakdown.map((item, i) => {
                    const percentColors: Record<string, string> = {
                      'bg-emerald-500': 'text-emerald-600',
                      'bg-blue-500': 'text-blue-600',
                      'bg-amber-500': 'text-amber-600',
                      'bg-violet-500': 'text-violet-600',
                    };
                    return (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-zinc-800">{item.category}</span>
                        <span className={`font-bold ${percentColors[item.colorClass] ?? 'text-emerald-600'}`}>{item.percentage}%</span>
                      </div>
                      <div className="h-3 bg-zinc-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.colorClass} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Thank you bar */}
          <div className="p-8 lg:p-12 bg-white border-t border-zinc-200/80">
            <p className="text-zinc-600 text-center max-w-2xl mx-auto">
              Atas dukungan para dermawan, PPA Assa&apos;adah telah berjalan ±17 tahun dan insya Allah akan terus berkembang. Semoga Allah menjadikan bantuan Bapak/Ibu sebagai amal jariyah yang tidak pernah putus. <span className="font-semibold text-emerald-600">Jazakumullahu khairan katsiran.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
