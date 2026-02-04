"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import SuccessStories from '@/components/SuccessStories';
import WhatsAppButton from '@/components/WhatsAppButton';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Casos de Éxito</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Descubre cómo hemos ayudado a empresas mexicanas a transformar su operación con Odoo.
          </p>
        </div>
        <SuccessStories />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudies;