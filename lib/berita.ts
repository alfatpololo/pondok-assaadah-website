export type BeritaItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  image: string;
  category: string;
  imagePosition?: 'center' | 'bottom';
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
    slug: 'pembelajaran-teknisi-komputer',
    title: 'Pembelajaran Teknisi Komputer Siswa Pondok PPA Assaadah',
    excerpt: 'Pelaksanaan pembelajaran teknisi komputer untuk melatih warga dan santri dengan keterampilan yang bermanfaat.',
    content: `Kegiatan ini bertujuan untuk memberikan pemahaman dasar hingga praktik langsung terkait perakitan, perawatan, dan troubleshooting perangkat komputer. Para santri dibimbing untuk mengenal komponen hardware, instalasi sistem operasi, serta dasar-dasar jaringan komputer.

Program ini menjadi bagian dari upaya PPA dalam mengintegrasikan pendidikan tahfidz Al-Qur'an dengan penguatan kompetensi teknologi, sehingga para santri tidak hanya unggul dalam hafalan, tetapi juga memiliki keahlian teknis yang relevan dengan kebutuhan era digital.`,
    date: '10 Des 2024',
    image: '/pemberdayaan.jpg',
    category: 'Pelatihan',
    imagePosition: 'bottom',
  },
  {
    id: 3,
    slug: 'penyerahan-sertifikat-tahfiz',
    title: 'Penyerahan Sertifikat Tahfiz',
    excerpt: 'Acara penyerahan sertifikat hafalan kepada santri yang telah menyelesaikan target juz tertentu. Apresiasi atas kesungguhan menghafal.',
    content: 'Acara penyerahan sertifikat hafalan kepada santri yang telah menyelesaikan target juz tertentu. Momen apresiasi atas kesungguhan dan ketekunan santri dalam menghafal Al-Qur\'an. Sertifikat diserahkan sebagai pengakuan formal atas pencapaian hafalan.',
    date: '5 Des 2024',
    image: '/penyerahan sertifikat.jpg',
    category: 'Acara',
  },
];

export function getBeritaBySlug(slug: string) {
  return beritaData.find((b) => b.slug === slug);
}
