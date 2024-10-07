'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useRef, useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { MdDateRange } from 'react-icons/md';
import icons from './icon/Skill';
import Link from 'next/link';
import { ABOUT_DESCRIPTION, ABOUT_SUBTITLE, ABOUT_TITLE } from '@/public/data/about';

import { educationData, experienceData, EXPERTIES } from '@/public/data/expertise';

const leftToRight = {
  initial: {
    x: -200,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 50,
    },
  },
};
const rightToLeft = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 50,
    },
  },
};

const About = () => {
  const divRef = useRef(null);
  const [divHeight, setDivHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setScreenHeight(window.innerHeight - 72);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateDimensions);

      updateDimensions();

      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []);

  useEffect(() => {
    if (divRef.current && screenHeight > divRef.current.clientHeight) {
      const height = divRef.current.clientHeight;
      setDivHeight(height / 2);
    }
  }, [divRef, screenHeight]);

  return (
    <section className='flex flex-wrap py-5 container' id='about'>
      <div className='w-full md:w-1/2'>
        <motion.h1
          variants={leftToRight}
          initial='initial'
          whileInView='animate'
          className='text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl'
        >
          {ABOUT_TITLE}
        </motion.h1>
        <motion.h2
          variants={leftToRight}
          initial='initial'
          whileInView='animate'
          className='pb-2 mt-8 text-3xl font-semibold tracking-tight transition-colors border-b md:mt-10 scroll-m-20 first:mt-0'
        >
          {ABOUT_SUBTITLE}
        </motion.h2>
        <motion.p
          variants={leftToRight}
          initial='initial'
          whileInView='animate'
          className='leading-7 [&:not(:first-child)]:mt-6'
          dangerouslySetInnerHTML={{ __html: ABOUT_DESCRIPTION }}
        ></motion.p>
        <motion.h2
          variants={leftToRight}
          initial='initial'
          whileInView='animate'
          className='pb-2 mt-10 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0'
        ></motion.h2>
        {EXPERTIES.map((item, index) => (
          <motion.div key={index} className='mt-6' variants={leftToRight} initial='initial' whileInView='animate'>
            <Card className=' dark:bg-cardBg'>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  <span className='flex flex-wrap gap-3 mt-1 text-lg'>
                    {item.icons.map((Icon, i) => (
                      <Icon key={i} />
                    ))}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>{item.description}</p>
              </CardContent>
            </Card>
            <BorderBeam />
          </motion.div>
        ))}
      </div>
      <div className='w-full mt-8 md:w-1/2 md:mt-0'>
        <div
          ref={divRef}
          className='sticky flex items-center justify-center overflow-hidden'
          style={{
            top: divHeight ? `calc(50% - ${divHeight}px + 32px)` : '80px',
          }}
        >
          <motion.div
            variants={rightToLeft}
            initial='initial'
            whileInView='animate'
            className='w-full space-y-5 md:w-4/5 '
          >
            <Marquee pauseOnHover>
              <ul className='flex gap-5 pr-5 text-5xl flex-nowrap cursor-grabbing'>
                {icons.map((IconSlider, iconIndex) => (
                  <li key={iconIndex}>
                    <IconSlider />
                  </li>
                ))}
              </ul>
            </Marquee>
            <Tabs defaultValue='experience'>
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='experience'>Experience</TabsTrigger>
                <TabsTrigger value='education'>Education</TabsTrigger>
              </TabsList>
              <TabsContent value='experience'>
                <Card>
                  <CardHeader>
                    <CardTitle>Experience</CardTitle>
                    <CardDescription>Gained valuable industry insights.</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-6'>
                    <div className='grid grid-cols-1 xl:grid-cols-2  gap-x-5 gap-y-5'>
                      {experienceData.map(exp => (
                        <Link
                          href={exp.companyLink}
                          key={exp.id}
                          className='flex flex-col flex-grow group items-stretch relative space-y-2   '
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={exp.companyName}
                        >
                          <p className='flex items-center gap-1 text-sm'>
                            <MdDateRange />
                            {exp.period}
                          </p>
                          <h3 className='flex-grow font-semibold leading-none tracking-wide line-clamp-1'>
                            {exp.role}
                          </h3>
                          <p className='line-clamp-1 text-muted-foreground'>{exp.companyName}</p>
                          {/* <ul className='list-disc ml-5'>
                            {exp.description.map((task, index) => (
                              <li key={index}>{task}</li>
                            ))}
                          </ul> */}
                          <div className='absolute w-0 transition-all duration-500 ease-primary group-hover:w-full h-0.5 bg-violet-500 rounded-md -bottom-2'></div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='education'>
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>Academic Background and Qualifications.</CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-6 flex flex-wrap'>
                    {educationData.map(edu => (
                      <Link
                        href={edu.institutionLink}
                        key={edu.id}
                        className='space-y-2 group relative'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={edu.institutionName}
                      >
                        <p className='flex items-center gap-1 text-sm'>
                          <MdDateRange /> {edu.period}
                        </p>
                        <h3 className='font-semibold leading-none tracking-wide'>{edu.degree}</h3>
                        <p className='line-clamp-1 text-muted-foreground'>{edu.institutionName}</p>
                        <div className='absolute w-0 transition-all duration-500 ease-primary group-hover:w-full h-0.5 bg-violet-500 rounded-md -bottom-2'></div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
