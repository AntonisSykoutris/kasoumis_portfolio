'use client';

import { useEffect, useState } from 'react';
import projects from '@/public/data/projects';
import { useParams, notFound } from 'next/navigation';
import ResumeViewer from '@/components/ResumeViewer';

export default function CertificateDetail() {
  const [certificate, setCertificate] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const cert = projects.find(cert => cert.id === Number(id)); // Find certificate by id
      setCertificate(cert);
    }
  }, [id]); // Add id as a dependency for useEffect

  if (!certificate) {
    return (
      <h1 className='grid w-full pt-16 h-[87dvh] md:pt-5 overflow-auto text-8xl bg-background place-items-center'>
        Certificate not found!
      </h1>
    );
  }

  return (
    <div className='grid w-full pt-16 md:pt-5 overflow-auto bg-background place-items-center'>
      <ResumeViewer file={`/certificates/${certificate.file}.pdf`} downloadName={certificate.file} />
    </div>
  );
}
