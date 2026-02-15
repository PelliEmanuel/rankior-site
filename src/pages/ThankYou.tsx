"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import BookingCalendar from '@/components/BookingCalendar';
import { CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <CheckCircle2 className="text-emerald-500" size={40} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">¡Datos recibidos!</h1>
            <p className="text-xl text-slate-400 mb-8">
              Para acelerar tu proceso, <span className="text-white font-bold">elige una fecha y hora</span> para tu sesión de diagnóstico inicial ahora mismo.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <BookingCalendar />
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-indigo-600/10 border border-indigo-500/20">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Calendar className="text-indigo-400" size={20} />
                    ¿Por qué agendar ya?
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-400">
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      Aseguras tu lugar en nuestra agenda semanal.
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      Recibes el enlace de Zoom/Meet al instante.
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      Empezamos a trabajar en tu roadmap antes de la llamada.
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <p className="text-sm text-slate-400 mb-4">
                    ¿Prefieres que nosotros te llamemos?
                  </p>
                  <p className="text-xs text-slate-500 mb-6">
                    No te preocupes, si no agendas ahora, un consultor te contactará en menos de 24 horas.
                  </p>
                  <Button asChild variant="link" className="text-indigo-400 p-0 h-auto hover:text-indigo-300">
                    <Link to="/" className="flex items-center gap-2">
                      Volver al inicio <ArrowRight size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;