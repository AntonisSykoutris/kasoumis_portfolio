'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Test from '@/components/Test';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Project />
      <Test />
      <Contact />
    </main>
  );
}
