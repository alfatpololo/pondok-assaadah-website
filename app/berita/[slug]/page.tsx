import Link from 'next/link';
import { beritaData, getBeritaBySlug } from '@/lib/berita';

export function generateStaticParams() {
  return beritaData.map((b) => ({ slug: b.slug }));
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);

  if (!berita) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 mb-4">Berita tidak ditemukan</h1>
          <Link href="/#berita" className="text-emerald-600 font-semibold hover:underline">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  const content = berita.content || berita.excerpt;
  const paragraphs = content.split('\n\n').filter(Boolean);

  return (
    <div className="min-h-screen bg-[#fafafa]">
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
              href="/#berita"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Berita
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

      <article className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/#berita"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium mb-8 transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Kembali ke Berita
          </Link>

          <header className="mb-10">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 text-xs font-semibold">
              {berita.category}
            </span>
            <span className="text-zinc-400 text-sm ml-3">{berita.date}</span>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-zinc-900 mt-4 leading-tight">
              {berita.title}
            </h1>
          </header>

          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-100 mb-10">
            <img
              src={berita.image}
              alt={berita.title}
              className={`w-full h-full object-cover ${berita.imagePosition === 'bottom' ? 'object-bottom' : 'object-center'}`}
            />
          </div>

          <div className="prose prose-zinc max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-zinc-200">
            <Link
              href="/#berita"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              <i className="ri-arrow-left-line" />
              Lihat berita lainnya
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
