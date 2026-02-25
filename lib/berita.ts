export type BeritaItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  category: string;
  imagePosition?: 'center' | 'bottom' | 'top';
};

export const beritaData: BeritaItem[] = [
  {
    id: 1,
    slug: 'pelatihan-pengembangan-santri',
    title: 'Pelatihan Pengembangan Santri',
    excerpt: 'Pelatihan keterampilan dan pengembangan diri bagi santri PPA Assa\'adah untuk mendukung kemampuan di luar hafalan Al-Qur\'an.',
    content: 'Pelatihan keterampilan dan pengembangan diri bagi santri PPA Assa\'adah untuk mendukung kemampuan di luar hafalan Al-Qur\'an. Program ini dirancang untuk mengembangkan potensi santri secara holistik.',
    date: '15 Des 2024',
    image: '/pelatihan.jpg',
    category: 'Pelatihan',
  },
  {
    id: 2,
    slug: 'gathering-ppa-assaadah',
    title: 'Gathering PPA Assa\'adah',
    excerpt: 'Acara gathering bersama santri, dan pengurus untuk mempererat silaturahmi dan kebersamaan di lingkungan pondok.',
    content: `Gathering PPA Baitul Qur'an As-Sa'adah digelar untuk mempererat silaturahmi antara pengurus, santri, ustadz/ustadzah. Acara ini menjadi momen berkumpul yang penuh barakah di tengah kesibukan kegiatan tahfidz dan pendidikan.

Selain silaturahmi, gathering juga dimanfaatkan untuk berbagi informasi perkembangan pondok, program-program ke depan, serta apresiasi kepada semua pihak yang mendukung perjalanan PPA Assa'adah. Semoga dengan acara seperti ini, ikatan kekeluargaan dan semangat bersama dalam mendukung generasi penghafal Al-Qur'an semakin kuat.`,
    date: '24 Feb 2026',
    image: '/WhatsApp Image 2026-02-24 at 13.14.08.jpeg',
    category: 'Acara',
    imagePosition: 'bottom',
  },
  {
    id: 3,
    slug: 'penyerahan-sertifikat-teknisi-komputer',
    title: 'Penyerahan Sertifikat Teknisi Komputer',
    excerpt: 'Acara penyerahan sertifikat kepada peserta yang telah menyelesaikan program pembelajaran teknisi komputer. Apresiasi atas kelulusan dan keterampilan yang diraih.',
    content: `Penyerahan sertifikat Teknisi Komputer ini menjadi simbol apresiasi atas kesungguhan dan komitmen para siswa dalam mengikuti program pelatihan, mulai dari pengenalan perangkat keras (hardware), instalasi sistem operasi, perawatan komputer, hingga troubleshooting dasar.

Program ini bertujuan membekali para santri dengan keterampilan teknis yang aplikatif, sehingga selain memiliki kekuatan spiritual, mereka juga memiliki kompetensi profesional yang siap diterapkan di dunia kerja maupun kewirausahaan di bidang teknologi.`,
    date: '5 Des 2024',
    image: '/penyerahan sertifikat.jpg',
    category: 'Acara',
  },
];

export function getBeritaBySlug(slug: string) {
  return beritaData.find((b) => b.slug === slug);
}
