"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar } from "lucide-react";
import DiagnosticDialog from './DiagnosticDialog';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Odoo listo para México
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Tu socio estratégico para <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">crecer</span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Implementamos Odoo adaptado a CFDI y bancos mexicanos. Conectamos ventas, inventario y facturación en un solo lugar en menos de 30 días.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <DiagnosticDialog>
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-14 px-8 text-lg font-semibold shadow-lg shadow-indigo-500/20">
                  Agendar diagnóstico 30 min
                </Button>
              </DiagnosticDialog>
              <Button size="lg" variant="outline" asChild className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full h-14 px-8 text-lg font-semibold backdrop-blur-sm">
                <a href="#precios">Ver paquetes</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur opacity-20"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="text-indigo-400" />
                Oferta rápida — Diagnóstico
              </h2>
              
              <ul className="space-y-6 mb-8">
                {[
                  "Mapa de procesos personalizado",
                  "Plan de implementación 30/60/90",
                  "Roadmap técnico + impacto esperado"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="text-indigo-500 mt-1 shrink-0" size={20} />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <DiagnosticDialog>
                <Button className="w-full bg-white text-indigo-950 hover:bg-slate-100 h-14 rounded-xl text-lg font-bold">
                  Solicitar diagnóstico gratuito
                </Button>
              </DiagnosticDialog>
              <p className="text-center text-slate-500 text-sm mt-4">
                Sin compromiso. Cupos limitados por mes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;