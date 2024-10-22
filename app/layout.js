import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Lato, Oswald, Playfair_Display } from 'next/font/google';
import './globals.css';
import { openGraphImage } from './shared-metadata';

const oswald = Oswald({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});

const lato = Lato({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

const playfair = Playfair_Display({
  weight: '700',
  style: ['italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'Kasoumis Giannis | Product Manager',
  description: 'Kasoumis Giannis is a passionate Product Manager.',
  keywords:
    'Kasoumis Giannis, Product Manager, Project Manager, Web Development.',
  author: 'Kasoumis Giannis',
  robots: 'index, follow',
  canonical: 'https://kasoumis-portfolio.vercel.app',
  openGraph: {
    ...openGraphImage,
    title: 'Kasoumis Giannis | Product Manager',
    type: 'website',
    url: 'https://kasoumis-portfolio.vercel.app/',
    description:
      'Kasoumis Giannis is a passionate Product Manager. Explore his portfolio to see his work.',
    site_name: 'Kasoumis Giannis Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Gkasoumis',
    title: 'Kasoumis Giannis | Product Manager',
    description:
      'Discover the work of Kasoumis Giannis, a dedicated Product Manager.',
    image: 'https://kasoumis-portfolio.vercel.app/img/ogImage.webp',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true} className='!scroll-smooth'>
      <body
        className={cn(
          'bg-background font-lato antialiased ',
          lato.variable,
          oswald.variable,
          playfair.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
