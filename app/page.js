'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Certifications from '@/components/Certifications';
import HugText from '@/components/HugText';

export default function Home() {
  return (
    <main className=' max-sm:overflow-x-hidden'>
      <Hero />
      <About />
      <Certifications />
      <HugText />
      <Contact />
    </main>
  );
}
