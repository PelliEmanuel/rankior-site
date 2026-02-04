"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ResourceCenter from '@/components/ResourceCenter';
import WhatsAppButton from '@/components/WhatsAppButton';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Blog & Recursos</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Explora nuestras guías, análisis y noticias sobre Odoo y el ecosistema empresarial en México.
          </p>
        </div>
        <ResourceCenter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;