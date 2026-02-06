"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import DiagnosticDialog from './DiagnosticDialog';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Agenda tu diagnóstico y recibe tu roadmap en 48 horas
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            No pierdas más tiempo con sistemas desconectados. Toma el control de tu empresa hoy mismo.
          </p>
          <DiagnosticDialog>
            <Button size="lg" className="bg-white text-indigo-950 hover:bg-slate-100 h-16 px-10 rounded-full text-xl font-bold shadow-2xl shadow-white/10">
              Agendar diagnóstico ahora
            </Button>
          </DiagnosticDialog>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;