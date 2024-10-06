import ResumeViewer from '@/components/ResumeViewer';
export const metadata = {
  title: 'Resume | Kasoumis Giannis',
  description:
    'Explore the professional resume of Kasoumis Giannis, a passionate Frontend Developer with expertise in React and Next.js.',
  robots: 'index, follow',
  canonical: 'https://kasoumis-portfolio.vercel.app/resume',
  openGraph: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resume',
    url: 'https://kasoumis-portfolio.vercel.app/resume',
    image: {
      url: 'https://kasoumis-portfolio.vercel.app/img/ogImage.webp',
      alt: "Kasoumis Giannis's Resume",
    },
    description:
      'Explore the professional resume of Kasoumis Giannis, a passionate Frontend Developer with expertise in React and Next.js.',
  },
};
export default function Resume() {
  return (
    <div className='grid w-full pt-16 md:pt-5 overflow-auto bg-background place-items-center'>
      <ResumeViewer file='/resume/Resume_Kasoumis_Giannis.pdf' downloadName='Kasoumis_Giannis_Resume' />
    </div>
  );
}
