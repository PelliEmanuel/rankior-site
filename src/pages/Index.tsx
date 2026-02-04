"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import MexicanLocalization from '@/components/MexicanLocalization';
import Modules from '@/components/Modules';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
      <BackgroundElements />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Stats />
        <Features />
        <MexicanLocalization />
        <Modules />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;