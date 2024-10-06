'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import useScrollSpy from '@/hook/useScrollSpy';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { BiLogoGmail } from 'react-icons/bi';
import { TbFileCv } from 'react-icons/tb';
import NavbarItem from './NavbarItem';
import { AnimatedHamburgerButton } from './AnimatedHamburgerButton';
import navData from '../public/data/navData.json';
import useMobileDetect from '@/hook/useMobileDetect';

const ulVariants = {
  open: {
    display: 'block',
    visibility: 'visible',
    transition: {
      staggerChildren: 0.17,
      delayChildren: 0.2,
    },
  },
  closed: {
    display: 'none',
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Navbar = () => {
  const { activeSection, scrollToSection } = useScrollSpy();
  const { isMobile, isTablet } = useMobileDetect();
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  useEffect(() => {
    // Add overflow-hidden to body when the div is opened
    if (active) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Clean up the class when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [active]);

  const handleClick = item => {
    scrollToSection(item);
    setActive(false);
  };
  return (
    <header
      initial='initial'
      animate='animate'
      className='sticky top-0 z-50 flex items-center justify-around w-full h-16 shadow-md shadow-ring/10 backdrop-blur-md '
    >
      <Link href='/' scroll={false} onClick={() => handleClick('home')}>
        <span className=' font-bold text-lg md:text-2xl'>Giannis Kasoumis</span>
      </Link>
      <div className='absolute top-[70px]  justify-center w-full hidden md:w-fit md:block md:static left-0 '>
        <NavbarItem />
      </div>
      <div className='flex items-center justify-center gap-1 md:gap-3'>
        <Button asChild variant='ghost' size='icon'>
          {isMobile ? (
            <a href='/resume/Resume_Kasoumis_Giannis.pdf' download rel='noopener' aria-label='Download Resume'>
              <TbFileCv className='w-6 h-6' />
            </a>
          ) : (
            <Link href='/resume' aria-label='Read more about me in Resume'>
              <TbFileCv className='w-6 h-6' />
            </Link>
          )}
        </Button>
        <Button asChild variant='ghost' size='icon'>
          <Link href='mailto:johnkasoumi@gmail.com' aria-label='Contact with me via mail'>
            <BiLogoGmail className='w-6 h-6' />
          </Link>
        </Button>
        <Button variant='ghost' size='icon' onClick={toggleTheme}>
          <SunIcon className='block w-6 h-6 transition-all duration-1000 scale-100 rotate-0 dark:hidden dark:-rotate-90 dark:scale-0' />
          <MoonIcon className='hidden w-6 h-6 transition-all duration-1000 scale-0 rotate-90 dark:block dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
        <AnimatedHamburgerButton active={active} setActive={setActive} />
        <motion.div
          className={`absolute inset-0 h-screen w-screen flex justify-center items-center z-30  bg-background ${
            active ? 'block' : 'hidden'
          }`}
        >
          <motion.ul variants={ulVariants} animate={active ? 'open' : 'closed'} className='flex space-y-8 uppercase'>
            {navData.map((item, index) => (
              <motion.li
                key={index}
                variants={liVariants}
                animate={active ? 'open' : 'closed'}
                className='relative h-full text-4xl'
              >
                <Link
                  href='/'
                  className={`relative grid h-full place-items-center ${
                    item.text === activeSection
                      ? 'dark:text-white text-black font-bold underline'
                      : 'dark:text-slate-300 text-gray-800 hover:text-black dark:hover:text-white'
                  }`}
                  onClick={() => handleClick(item.text)}
                  scroll={false}
                >
                  {item.text}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
