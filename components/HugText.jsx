import React from 'react';
import HeroText from './HeroText';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

function Hero() {
  return (
    <section
      id='contact'
      className=' h-fit lg:overflow-visible  rounded-xl relative flex flex-col justify-start lg:justify-center  items-center mt-10 lg:mt-[4rem] pb-20 font-bold  '
    >
      <div className=' hidden absolute pointer-events-none inset-0 z-10 lg:flex items-center justify-center rounded-xl'></div>
      <HeroText />
      <DotPattern className={cn('[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]')} />
    </section>
  );
}

export default Hero;
