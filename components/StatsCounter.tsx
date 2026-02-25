'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

const TARGETS = { students: 17, alumni: 25, hafiz30: 3, years: 17 };
const DURATION = 2000;
const STEPS = 60;

export default function StatsCounter() {
  const [counts, setCounts] = useState({ students: 0, alumni: 0, hafiz30: 0, years: 0 });
  const hasAnimatedRef = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const animateCounters = useCallback(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;
    const interval = DURATION / STEPS;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / STEPS, 1);
      setCounts({
        students: Math.floor(TARGETS.students * progress),
        alumni: Math.floor(TARGETS.alumni * progress),
        hafiz30: Math.floor(TARGETS.hafiz30 * progress),
        years: Math.floor(TARGETS.years * progress),
      });
      if (step >= STEPS) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) animateCounters();
      },
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );
    observer.observe(el);

    // Fallback: cek setelah layout jika section sudah terlihat saat load
    const rafId = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.2) animateCounters();
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [animateCounters]);

  const statAccents = [
    { bg: 'bg-emerald-500/10', bgHover: 'group-hover:bg-emerald-500/20', icon: 'text-emerald-600', shadow: 'hover:shadow-emerald-100/30', border: 'hover:border-emerald-200/80' },
    { bg: 'bg-amber-500/10', bgHover: 'group-hover:bg-amber-500/20', icon: 'text-amber-600', shadow: 'hover:shadow-amber-100/30', border: 'hover:border-amber-200/80' },
    { bg: 'bg-blue-500/10', bgHover: 'group-hover:bg-blue-500/20', icon: 'text-blue-600', shadow: 'hover:shadow-blue-100/30', border: 'hover:border-blue-200/80' },
    { bg: 'bg-violet-500/10', bgHover: 'group-hover:bg-violet-500/20', icon: 'text-violet-600', shadow: 'hover:shadow-violet-100/30', border: 'hover:border-violet-200/80' },
  ];
  const stats = [
    { value: counts.students, suffix: '+', label: 'Santri Aktif', icon: 'ri-group-line' },
    { value: counts.alumni, suffix: '+', label: 'Alumni', icon: 'ri-graduation-cap-line' },
    { value: counts.hafiz30, suffix: '+', label: 'Santri Hafiz 30 Juz', icon: 'ri-book-open-line' },
    { value: counts.years, suffix: '', label: 'Tahun Berdiri', icon: 'ri-calendar-line' },
  ];

  return (
    <div ref={sectionRef} className="mt-24 lg:mt-32">
      <div className="flex flex-col sm:flex-row sm:items-stretch gap-6 lg:gap-8">
        {stats.map((stat, i) => {
          const accent = statAccents[i % statAccents.length];
          return (
          <div
            key={i}
            className={`group flex-1 flex items-center gap-6 p-8 lg:p-10 rounded-2xl bg-white border border-zinc-200/80 shadow-xl shadow-zinc-200/30 hover:shadow-2xl ${accent.shadow} ${accent.border} transition-all duration-300 hover:-translate-y-1`}
          >
            <div className={`w-16 h-16 rounded-2xl ${accent.bg} flex items-center justify-center flex-shrink-0 ${accent.bgHover} transition-colors`}>
              <i className={`${stat.icon} ${accent.icon} text-2xl`} />
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight mb-0.5">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-zinc-600 font-medium">{stat.label}</div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
