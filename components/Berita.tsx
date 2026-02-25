'use client';

import Link from 'next/link';
import { beritaData } from '@/lib/berita';

export default function Berita() {
  return (
    <section id="berita" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl bg-emerald-200/50 -translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-[0.2em]">Update</span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 mt-3 tracking-tight">
              Berita Terkini
            </h2>
          </div>
          <p className="text-lg text-zinc-600 max-w-xl lg:text-right">
            Kegiatan, acara, dan informasi terbaru dari PPA Assa&apos;adah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beritaData.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <Link href={`/berita/${item.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 text-xs font-semibold">
                      {item.category}
                    </span>
                    <span className="text-zinc-400 text-sm">{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-zinc-900 text-lg leading-tight group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm mt-2 line-clamp-2">{item.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm mt-4 group/link hover:gap-3 transition-all">
                    Baca selengkapnya
                    <i className="ri-arrow-right-line" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
