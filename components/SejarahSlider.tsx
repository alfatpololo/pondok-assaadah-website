'use client';

import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  '/WhatsApp Image 2026-02-24 at 11.57.14 (1).jpeg',
  '/WhatsApp Image 2026-02-24 at 11.57.14.jpeg',
  '/WhatsApp Image 2026-02-24 at 11.57.15.jpeg',
];

export default function SejarahSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const src = encodeURI(SLIDES[index]);

  return (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/80 bg-zinc-100">
      <img
        key={index}
        src={src}
        alt={`Sejarah PPA Assaadah ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-zinc-700 hover:text-emerald-600 transition-colors"
        aria-label="Sebelumnya"
      >
        <i className="ri-arrow-left-s-line text-2xl" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-zinc-700 hover:text-emerald-600 transition-colors"
        aria-label="Berikutnya"
      >
        <i className="ri-arrow-right-s-line text-2xl" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
