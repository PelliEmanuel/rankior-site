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
import { Skeleton } from '@/components/ui/skeleton';

const CaseStudies = () => {
  const [stories, setStories] = useState<any[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
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
      setLoading(false);
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
        
        {loading ? (
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-[400px] w-full rounded-3xl bg-white/5 border border-white/10 p-8 flex gap-8">
                <Skeleton className="w-1/2 h-full rounded-2xl bg-white/10" />
                <div className="w-1/2 space-y-4">
                  <Skeleton className="h-4 w-1/4 bg-white/10" />
                  <Skeleton className="h-8 w-3/4 bg-white/10" />
                  <Skeleton className="h-20 w-full bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <SuccessStories stories={stories} />
        )}
        
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