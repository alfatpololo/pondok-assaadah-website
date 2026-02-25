'use client';

import { useState, useEffect } from 'react';

// Semua foto di public
const fotos = [
  { id: 1, src: '/WhatsApp Image 2026-02-24 at 11.57.14 (1).jpeg', alt: 'PPA Assaadah', caption: 'Dokumentasi' },
  { id: 2, src: '/WhatsApp Image 2026-02-24 at 11.57.14.jpeg', alt: 'PPA Assaadah', caption: 'Dokumentasi' },
  { id: 3, src: '/WhatsApp Image 2026-02-24 at 11.57.15.jpeg', alt: 'PPA Assaadah', caption: 'Dokumentasi' },
  { id: 4, src: '/WhatsApp Image 2026-02-24 at 13.14.08.jpeg', alt: 'PPA Assaadah', caption: 'Dokumentasi kegiatan' },
  { id: 5, src: '/WhatsApp Image 2026-02-19 at 11.57.09.jpeg', alt: 'Pondok PPA Assaadah', caption: 'Suasana pondok' },
  { id: 6, src: '/pelatihan.jpg', alt: 'Pelatihan', caption: 'Pelatihan pengembangan santri' },
  { id: 7, src: '/pemberdayaan.jpg', alt: 'Pemberdayaan', caption: 'Program pelatihan masyarakat' },
  { id: 8, src: '/penyerahan sertifikat.jpg', alt: 'Penyerahan sertifikat', caption: 'Penyerahan sertifikat tahfiz' },
  { id: 9, src: '/WhatsApp Image 2026-02-25 at 12.26.58.jpeg', alt: 'PPA Assaadah', caption: 'Dokumentasi kegiatan' },
];

const videos = [
  { id: 1, youtubeId: 'imgc0p2mubc', alt: 'Video aktivitas', caption: 'Video aktivitas PPA Assa\'adah' },
  { id: 2, youtubeId: 'FYnZIGrChV8', alt: 'Video dokumentasi', caption: 'Video dokumentasi PPA Assa\'adah' },
  { id: 3, youtubeId: '3CY-iqHguFI', alt: 'Video kegiatan', caption: 'Video kegiatan PPA Assa\'adah' },
];

export default function Galeri() {
  const [lightboxFoto, setLightboxFoto] = useState<number | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<number | null>(null);
  const [videoTitles, setVideoTitles] = useState<Record<string, string>>({});

  const activeFoto = fotos.find((f) => f.id === lightboxFoto);
  const activeVideo = videos.find((v) => v.id === lightboxVideo);

  useEffect(() => {
    const fetchTitles = async () => {
      const next: Record<string, string> = {};
      await Promise.all(
        videos.map(async (v) => {
          try {
            const res = await fetch(
              `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${v.youtubeId}`
            );
            const data = await res.json();
            if (data.title) next[v.youtubeId] = data.title;
          } catch {
            // keep fallback caption
          }
        })
      );
      setVideoTitles((prev) => ({ ...prev, ...next }));
    };
    fetchTitles();
  }, []);

  return (
    <section id="galeri" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-emerald-200/50 translate-y-1/2 translate-x-1/2" />
      <div className="absolute top-0 left-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-violet-200/50 -translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="text-emerald-600 font-semibold text-xs uppercase tracking-[0.2em]">Moment</span>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 mt-3 tracking-tight">
              Galeri
            </h2>
          </div>
          <p className="text-lg text-zinc-600 max-w-xl lg:text-right">
            Dokumentasi foto dan video kegiatan Pondok Tahfidz Assa&apos;adah
          </p>
        </div>

        {/* Foto - grid */}
        <div className="mb-20">
          <h3 className="font-display text-xl font-bold text-zinc-800 mb-6">Foto</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {fotos.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightboxFoto(item.id)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <img
                  src={encodeURI(item.src)}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm">{item.caption}</p>
                  <span className="text-emerald-300 text-xs flex items-center gap-1 mt-1">
                    <i className="ri-zoom-in-line" /> Klik untuk memperbesar
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video YouTube - di bawah */}
        <div>
          <h3 className="font-display text-xl font-bold text-zinc-800 mb-6">Video kegiatan</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {videos.map((item) => (
              <button
                key={item.id}
                onClick={() => setLightboxVideo(item.id)}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <img
                  src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/30 group-hover:bg-zinc-900/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <i className="ri-play-fill text-white text-2xl ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-sm line-clamp-2">
                    {videoTitles[item.youtubeId] || item.caption}
                  </p>
                  <span className="text-emerald-300 text-xs flex items-center gap-1 mt-1">
                    <i className="ri-youtube-line" /> Klik untuk menonton
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox Foto */}
        {activeFoto && (
          <div
            className="fixed inset-0 z-[100] bg-zinc-900/95 flex items-center justify-center p-4"
            onClick={() => setLightboxFoto(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightboxFoto(null)}
              aria-label="Tutup"
            >
              <i className="ri-close-line text-2xl" />
            </button>
            <img
              src={encodeURI(activeFoto.src)}
              alt={activeFoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Lightbox Video */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-[100] bg-zinc-900/95 flex items-center justify-center p-4"
            onClick={() => setLightboxVideo(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              onClick={() => setLightboxVideo(null)}
              aria-label="Tutup"
            >
              <i className="ri-close-line text-2xl" />
            </button>
            <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={videoTitles[activeVideo.youtubeId] || activeVideo.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
