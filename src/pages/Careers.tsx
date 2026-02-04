"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Coffee, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { title: "Trabajo Híbrido", icon: Globe, desc: "Flexibilidad para trabajar desde casa o en nuestras oficinas en CDMX." },
  { title: "Crecimiento", icon: Zap, desc: "Planes de carrera claros y certificaciones oficiales de Odoo pagadas." },
  { title: "Cultura", icon: Heart, desc: "Un equipo joven, dinámico y apasionado por la tecnología." },
  { title: "Balance", icon: Coffee, desc: "Respetamos tu tiempo personal con horarios flexibles y días extra." }
];

const jobs = [
  {
    title: "Consultor Funcional Odoo",
    dept: "Consultoría",
    location: "CDMX / Remoto",
    type: "Full-time",
    id: "consultor-odoo"
  },
  {
    title: "Desarrollador Python / Odoo",
    dept: "Ingeniería",
    location: "Remoto",
    type: "Full-time",
    id: "dev-python"
  },
  {
    title: "Ejecutivo de Cuentas (Sales)",
    dept: "Ventas",
    location: "CDMX",
    type: "Full-time",
    id: "sales-exec"
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-20">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Únete al equipo que está <span className="text-indigo-400">digitalizando</span> México
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Buscamos mentes curiosas y apasionadas por resolver problemas complejos a través de la tecnología. Si te emociona el impacto real en las empresas, este es tu lugar.
              </p>
            </ScrollReveal>
          </div>

          {/* Benefits */}
          <section className="mb-32">
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6">
                      <benefit.icon className="text-indigo-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Posiciones Abiertas</h2>
                <p className="text-slate-400">Encuentra el rol perfecto para tu siguiente gran paso profesional.</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold">
                {jobs.length} Vacantes actuales
              </div>
            </div>

            <div className="space-y-4">
              {jobs.map((job, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-indigo-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1"><Briefcase size={14} /> {job.dept}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <Button className="bg-white text-indigo-950 hover:bg-slate-100 rounded-full px-8 font-bold group-hover:gap-3 transition-all">
                      Postularme <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Culture CTA */}
          <section className="p-12 rounded-[3rem] bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-white/10 relative overflow-hidden text-center">
            <div className="max-w-2xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿No encuentras el rol ideal?</h2>
              <p className="text-slate-400 text-lg mb-10">
                Siempre estamos buscando talento excepcional. Envíanos tu CV y cuéntanos cómo puedes ayudarnos a transformar el futuro de las empresas en México.
              </p>
              <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full px-10 h-14 text-lg font-bold backdrop-blur-sm">
                Enviar CV General
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Careers;