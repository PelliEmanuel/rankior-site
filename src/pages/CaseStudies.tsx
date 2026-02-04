"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import SuccessStories from '@/components/SuccessStories';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import { getCaseStudies } from '@/lib/cms';
import { TrendingUp, Clock, BarChart } from 'lucide-react';

const CaseStudies = () => {
  const [stories, setStories] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const fetchStories = async () => {
      const cmsStories = await getCaseStudies();
      if (cmsStories && cmsStories.length > 0) {
        const mappedStories = cmsStories.map((item: any) => ({
          id: item.fields.slug,
          company: item.fields.companyName,
          industry: item.fields.industry,
          challenge: item.fields.challenge,
          result: item.fields.result,
          image: item.fields.featuredImage?.fields?.file?.url || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
          metrics: [
            { label: "Eficiencia", value: item.fields.efficiencyMetric || "+45%", icon: TrendingUp },
            { label: "Tiempo Ahorrado", value: item.fields.timeSavedMetric || "15h/sem", icon: Clock }
          ]
        }));
        setStories(mappedStories);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Resultados que <span className="text-indigo-400">hablan</span> por nosotros
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Explora cómo hemos transformado la operación de diversas empresas mexicanas, desde la optimización de inventarios hasta la automatización fiscal completa.
              </p>
            </div>
          </ScrollReveal>
        </div>
        
        <SuccessStories stories={stories} />
        
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">¿Listo para ser nuestra próxima historia de éxito?</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
              Agenda un diagnóstico gratuito y descubre el potencial de crecimiento de tu empresa con Odoo.
            </p>
            <div className="flex justify-center">
              <a href="/#contacto" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                Empezar ahora
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudies;