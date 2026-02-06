"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import MexicanLocalization from '@/components/MexicanLocalization';
import Comparison from '@/components/Comparison';
import Modules from '@/components/Modules';
import SuccessStories from '@/components/SuccessStories';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import SecurityCompliance from '@/components/SecurityCompliance';
import TrustBadges from '@/components/TrustBadges';
import ResourceCenter from '@/components/ResourceCenter';
import Newsletter from '@/components/Newsletter';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import DashboardPreview from '@/components/DashboardPreview';
import Partners from '@/components/Partners';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200">
      <BackgroundElements />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal><LogoCloud /></ScrollReveal>
        <ScrollReveal><Stats /></ScrollReveal>
        <ScrollReveal><DashboardPreview /></ScrollReveal>
        <ScrollReveal><Features /></ScrollReveal>
        <ScrollReveal><MexicanLocalization /></ScrollReveal>
        <ScrollReveal><Comparison /></ScrollReveal>
        <ScrollReveal><Modules /></ScrollReveal>
        <ScrollReveal><SuccessStories /></ScrollReveal>
        <ScrollReveal><Process /></ScrollReveal>
        <ScrollReveal><Pricing /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><SecurityCompliance /></ScrollReveal>
        <ScrollReveal><Partners /></ScrollReveal>
        <ScrollReveal><TrustBadges /></ScrollReveal>
        <ScrollReveal><ResourceCenter /></ScrollReveal>
        <ScrollReveal><Newsletter /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><ContactSection /></ScrollReveal>
        <ScrollReveal><FinalCTA /></ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;