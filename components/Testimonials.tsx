'use client';

import { useState } from 'react';

const ITEMS_PER_PAGE = 3;

export default function Testimonials() {
  const [pengurusCount, setPengurusCount] = useState(ITEMS_PER_PAGE);
  const testimonials = [
    { name: 'Ibu Aminah Zahra', role: 'Wali Santri', image: 'https://i.pravatar.cc/400?img=1', text: 'Alhamdulillah, anak saya sudah hafal 15 juz kurang dari 2 tahun. Metode di Assa\'adah sangat efektif dan para ustadz sangat sabar.' },
    { name: 'Bapak Hasan Basri', role: 'Wali Santri', image: 'https://i.pravatar.cc/400?img=2', text: 'Fasilitas pondok sangat memadai. Anak saya nyaman dan semangat menghafal. Jazakumullah khairan kepada pengurus.' },
    { name: 'Muhammad Faris', role: 'Alumni 30 Juz', image: 'https://i.pravatar.cc/400?img=3', text: 'Lulus dari Assa\'adah dengan hafalan 30 juz. Belajar disiplin, istiqomah, dan ikhlas. Sekarang melanjutkan ke universitas Islam.' },
    { name: 'Ibu Khadijah Rahman', role: 'Wali Santri', image: 'https://i.pravatar.cc/400?img=4', text: 'Program beasiswa sangat membantu. Anak saya bisa menghafal tanpa beban biaya. Semoga Allah membalas kebaikan donatur.' },
  ];

  const pembina = [
    { name: 'Deden Rahmawan', position: 'Ketua Pembina', image: '/Deden.jpg' },
    { name: 'Amke Wijatman', position: 'Anggota Pembina', image: '/Amke Wijatman.jpg' },
    { name: 'H.A. Taufik Suwanta', position: 'Anggota Pembina', image: '/taufik suwanta.jpeg' },
  ];

  const pengurus = [
    { name: 'Muhammad Hilmi Firdausi', position: 'Ketua', image: '/Hilmi.jpg' },
    { name: 'Zulfikar', position: 'Sekretaris', image: '/zulfikar.jpeg' },
    { name: 'Abdul Latif Ahmad', position: 'Wakil Sekretaris / Mudir PPA', image: '/abdul.jpg' },
    { name: 'Solihin', position: 'Bendahara', image: '/solihin.jpeg', imagePosition: '50% 35%' },
    { name: 'Lili Abidin', position: 'Wakil Bendahara I', image: 'https://ui-avatars.com/api/?name=Lili+Abidin&size=360&background=059669&color=fff' },
    { name: 'Eti Handayani', position: 'Wakil Bendahara II', image: 'https://ui-avatars.com/api/?name=Eti+Handayani&size=360&background=059669&color=fff' },
  ];

  const pengawas = [
    { name: 'Nugraha', position: 'Ketua Pengawas', image: '/nugraha.jpeg' },
    { name: 'Sahurdi', position: 'Anggota Pengawas', image: '/sahurdi.jpeg' },
    { name: 'Amiruddin', position: 'Anggota Pengawas', image: '/amir.jpeg', imagePosition: '15% 50%' },
  ];

  const getRoleIcon = (position: string) => {
    if (position.toLowerCase().includes('ketua') && !position.toLowerCase().includes('wakil')) return { icon: 'ri-crown-line', bg: 'bg-violet-500' };
    return { icon: 'ri-user-3-line', bg: 'bg-rose-500' };
  };

  const sizeStyles = {
    lg: {
      card: 'p-6 rounded-2xl max-w-[220px]',
      photo: 'w-28 h-28',
      icon: 'mt-4 w-11 h-11',
      iconClass: 'text-lg',
      position: 'text-base mt-3',
      name: 'text-sm mt-1',
    },
    md: {
      card: 'p-5 rounded-xl max-w-[180px]',
      photo: 'w-24 h-24',
      icon: 'mt-3 w-9 h-9',
      iconClass: 'text-base',
      position: 'text-sm mt-2',
      name: 'text-xs mt-0.5',
    },
    sm: {
      card: 'p-4 rounded-xl max-w-[150px]',
      photo: 'w-20 h-20',
      icon: 'mt-2 w-8 h-8',
      iconClass: 'text-sm',
      position: 'text-xs mt-2',
      name: 'text-[11px] mt-0.5',
    },
  };

  const PersonCard = ({ person, size = 'lg' }: { person: { name: string; position: string; image: string; imagePosition?: string }; size?: 'lg' | 'md' | 'sm' }) => {
    const { icon, bg } = getRoleIcon(person.position);
    const s = sizeStyles[size];
    return (
      <div className={`group flex flex-col items-center ${s.card} bg-white border border-zinc-200/80 shadow-md hover:shadow-xl transition-all duration-300 w-full mx-auto`}>
        <div className={`relative ${s.photo} rounded-full overflow-hidden bg-zinc-100 ring-2 ring-zinc-100 flex-shrink-0`}>
          <img
            src={person.image.startsWith('/') ? encodeURI(person.image) : person.image}
            alt={person.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: person.imagePosition ?? 'top' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute inset-0 flex flex-col items-center justify-center bg-zinc-200/90 text-zinc-500">
            <i className="ri-camera-line text-xl mb-0.5 opacity-60" />
            <span className="text-[10px] font-medium">Foto</span>
          </div>
        </div>
        <div className={`${s.icon} rounded-full ${bg} flex items-center justify-center shadow-md flex-shrink-0`}>
          <i className={`${icon} text-white ${s.iconClass}`} />
        </div>
        <h5 className={`font-display font-bold text-zinc-900 text-center leading-tight ${s.position}`}>{person.position}</h5>
        <p className={`text-emerald-600 font-medium text-center ${s.name}`}>{person.name}</p>
      </div>
    );
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl bg-emerald-200/50 translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Testimonials - offset masonry-style */}
        <div className="mb-32 lg:mb-40">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div>
              <span className="text-emerald-600 font-semibold text-xs uppercase tracking-[0.2em]">Testimoni</span>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 mt-3 tracking-tight">
                Apa Kata Mereka
              </h2>
            </div>
            <p className="text-lg text-zinc-600 max-w-xl lg:text-right">
              Pengalaman wali santri, alumni, dan pengajar PPA Assa&apos;adah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {testimonials.map((t, i) => {
              const cardHover = ['hover:border-emerald-200/60', 'hover:border-amber-200/60', 'hover:border-blue-200/60', 'hover:border-violet-200/60'][i % 4];
              return (
              <div
                key={i}
                className={`group relative rounded-2xl p-8 bg-white border border-zinc-200/80 shadow-lg hover:shadow-xl ${cardHover} transition-all duration-300 ${
                  i === 0 ? 'lg:mt-8' : i === 2 ? 'lg:mt-16' : i === 3 ? 'lg:mt-8' : ''
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed italic mb-8">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-zinc-900">{t.name}</div>
                    <div className="text-sm text-zinc-500">{t.role}</div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* Structure - FAKTA style */}
        <div>
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              Struktur Organisasi
            </span>
            <h3 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-zinc-900 tracking-tight">
              Susunan Pengurus PPA Assa&apos;adah
            </h3>
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
              Pembina, Pengurus, dan Pengawas adalah warga Mutiara Sentul yang secara sukarela meluangkan waktu mengelola Yayasan Assa&apos;adah
            </p>
          </div>

          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Card Pembina - terbesar */}
            <div>
              <h4 className="font-display text-2xl font-bold text-zinc-800 mb-6 text-center">Pembina</h4>
              <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {pembina.slice(0, 3).map((l, i) => (
                  <PersonCard key={i} person={l} size="lg" />
                ))}
              </div>
            </div>

            {/* Card Pengawas - medium */}
            <div>
              <h4 className="font-display text-xl font-bold text-zinc-800 mb-5 text-center">Pengawas</h4>
              <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {pengawas.slice(0, 3).map((l, i) => (
                  <PersonCard key={i} person={l} size="md" />
                ))}
              </div>
            </div>

            {/* Card Pengurus - terkecil */}
            <div>
              <h4 className="font-display text-lg font-bold text-zinc-800 mb-4 text-center">Pengurus</h4>
              <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                {pengurus.slice(0, pengurusCount).map((l, i) => (
                  <PersonCard key={i} person={l} size="sm" />
                ))}
              </div>
              {pengurus.length > ITEMS_PER_PAGE && pengurusCount < pengurus.length && (
                <button
                  onClick={() => setPengurusCount((c) => Math.min(c + ITEMS_PER_PAGE, pengurus.length))}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors flex items-center gap-2 mx-auto"
                >
                  Load More
                  <i className="ri-arrow-down-s-line" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
