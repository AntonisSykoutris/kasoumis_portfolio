import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';
import socialIcons from './icon/Social';

const Footer = () => {
  return (
    <>
      <div className='flex justify-center translate-y-[1px]'>
        <div className='w-3/4'>
          <div className='w-full h-[1px] bg-gradient-to-r from-transparent  via-[#8b5cf6] to-transparent'></div>
        </div>
      </div>
      <footer className='container flex flex-col-reverse md:flex-row items-center justify-center gap-3 py-3 text-sm border-t md:justify-between border-t-border'>
        <div className='flex items-center gap-1 flex-nowrap '>
          <FaRegCopyright className='w-4 h-4' /> 2024 Created By
          <span className=' text-base font-bold underline underline-offset-1 bg-gradient-to-r from-[#8b5cf6] via-[#ffaa40] to-[#8b5cf6] bg-clip-text text-transparent  decoration-foreground transition-all duration-300 hover:decoration-[#8b5cf6]'>
            <Link
              href='https://sykoutris-portfolio-eight.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Sykoutris Antonis Linkedin Via Credit'
            >
              Sykoutris Antonis.
            </Link>{' '}
          </span>
          All rights reserved.
        </div>
        <div>
          <ul className='flex gap-3'>
            {socialIcons.map((item, index) => (
              <li key={index}>
                <Link href={item.link} target='_blank' rel='noopener noreferrer' aria-label={item.label}>
                  <item.Icon className='md:w-6 md:h-6 w-5 h-5 transition-all duration-300 ease-in-out hover:rotate-[360deg]' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
