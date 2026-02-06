"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-12">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">futuro</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Estamos aquí para resolver tus dudas y ayudarte a trazar el camino hacia una operación más eficiente.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;