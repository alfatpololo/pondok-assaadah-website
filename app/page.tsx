'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Berita from '@/components/Berita';
import Galeri from '@/components/Galeri';
import Donation from '@/components/Donation';
import KataSambutan from '@/components/KataSambutan';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />
      <Hero />
      <About />
      <KataSambutan />
      <Programs />
      <Berita />
      <Galeri />
      <Donation />
      <Testimonials />
      <Footer />
    </div>
  );
}
