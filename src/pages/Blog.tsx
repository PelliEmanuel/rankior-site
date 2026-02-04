"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ResourceCenter from '@/components/ResourceCenter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Conocimiento para <span className="text-indigo-400">escalar</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Guías, análisis y noticias sobre Odoo, el SAT y las mejores prácticas empresariales en México.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap gap-4">
            {['Todos', 'Fiscal', 'Operaciones', 'Tecnología', 'E-commerce'].map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-indigo-600 hover:border-indigo-600 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ResourceCenter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;