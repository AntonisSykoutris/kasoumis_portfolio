'use client';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { TbCertificate } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import useMobileDetect from '@/hook/useMobileDetect';
import { CERTIFICATIONS_SUBTITLE, CERTIFICATIONS_TITLE, certificationsData } from '@/public/data/certifications';

const containerTitle = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const projectItem = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const Project = () => {
  const { isMobile, isTablet } = useMobileDetect();

  return (
    <section id='certifications' className='py-5 md:mt-5 space-y-8 container'>
      <motion.div variants={containerTitle} initial='hidden' whileInView='visible'>
        <h1 className='text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl'>{CERTIFICATIONS_TITLE}</h1>
        <h2 className='pb-2 mt-5 text-3xl font-semibold tracking-tight transition-colors border-b md:mt-10 scroll-m-20 first:mt-0'>
          {CERTIFICATIONS_SUBTITLE}
        </h2>
      </motion.div>
      <motion.div variants={projectItem} initial='hidden' whileInView='visible' className=' cursor-grab'>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
        >
          <CarouselContent>
            {certificationsData
              .slice()
              .reverse()
              .map((cert, index) => (
                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
                  <Card className='h-full dark:bg-cardBg transition-colors duration-1000 ease-primary hover:shadow-lg dark:hover:border-[#8b5cf6] hover:border-gray-300 group flex flex-col'>
                    <div className='flex justify-center -translate-y-[1px]'>
                      <div className='w-3/4'>
                        <div className='w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent'></div>
                      </div>
                    </div>
                    <div className='overflow-hidden rounded-2xl scale-105 border'>
                      <Image
                        src={cert.image}
                        width={400}
                        height={300}
                        alt={cert.name}
                        className='object-cover rounded-2xl w-full aspect-[4/3] group-hover:scale-105 transition-all duration-300'
                      />
                    </div>
                    <CardHeader className='flex-grow'>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='text-left cursor-text'>
                            <CardTitle className='text-lg line-clamp-2'>{cert.name}</CardTitle> {/* Set fixed height */}
                          </TooltipTrigger>
                          <TooltipContent className='z-50 relative' side='bottom'>
                            <span>{cert.name}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </CardHeader>
                    <CardContent className='h-16 flex flex-col justify-center'>
                      <p className='text-sm'>{cert.organization}</p>
                      <p className='text-xs text-muted-foreground'>{cert.date}</p>
                    </CardContent>
                    <CardFooter className='mt-auto'>
                      <Button asChild size='sm' className='bg-card'>
                        {isMobile ? (
                          <a
                            href={`/certificates/${cert.file}.pdf`}
                            download
                            rel='noopener'
                            className='relative dark:bg-cardBg overflow-hidden transition-all border-2 border-accent-foreground group'
                            aria-label={`Download ${cert.name} Certificate`}
                          >
                            <span className='absolute z-10 w-full h-full transition-all duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 bg-accent-foreground'></span>
                            <div className='z-20 flex items-center justify-center gap-1 text-base font-bold tracking-widest uppercase md:gap-3 md:text-xl text-primary group-hover:text-muted font-oswald'>
                              Get Certificate
                              <div className='relative w-6 h-6 '>
                                <span className='absolute w-12 h-12 -top-1/2 -left-1/2 border rounded-full opacity-0 pointer-events-none border-primary group-hover:border-muted animate-ringOne -z-10'></span>
                                <span className='absolute w-12 h-12 -top-1/2 -left-1/2 border rounded-full opacity-0 pointer-events-none border-primary group-hover:border-muted animate-ringTwo -z-10'></span>
                                <span className='absolute w-12 h-12 -top-1/2 -left-1/2 border rounded-full opacity-0 pointer-events-none border-primary group-hover:border-muted animate-ringThree -z-10'></span>
                                <TbCertificate className='w-6 h-6 bg-card rounded-full z-40 group-hover:bg-accent-foreground' />
                              </div>
                            </div>
                          </a>
                        ) : (
                          <Link
                            href={`/certificates/${cert.id}`}
                            className='relative dark:bg-cardBg overflow-hidden transition-all border-2 border-accent-foreground group'
                            aria-label={`Download ${cert.name} Certificate`}
                          >
                            <span className='absolute z-10 w-full h-full transition-all duration-300 ease-in-out -translate-x-full group-hover:translate-x-0 bg-accent-foreground'></span>
                            <div className='z-20 flex items-center justify-center gap-1 text-base font-bold tracking-widest uppercase md:gap-3 md:text-xl text-primary group-hover:text-muted font-oswald'>
                              Get Certificate
                              <div className='relative w-6 h-6 '>
                                <span className='absolute w-12 h-12 -top-1/2 -left-1/2 border rounded-full opacity-0 pointer-events-none border-primary group-hover:border-muted animate-ringOne -z-10'></span>
                                <span className='absolute w-12 h-12 -top-1/2 -left-1/2 border rounded-full opacity-0 pointer-events-none border-primary group-hover:border-muted animate-ringTwo -z-10'></span>
                                <span className='absolute w-12 h-12 -top-1/2 -left-1/2 border rounded-full opacity-0 pointer-events-none border-primary group-hover:border-muted animate-ringThree -z-10'></span>
                                <TbCertificate className='w-6 h-6 bg-card rounded-full z-40 group-hover:bg-accent-foreground' />
                              </div>
                            </div>
                          </Link>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Project;
