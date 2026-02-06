"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import { Check, X, Info, Zap, Shield, DollarSign, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DiagnosticDialog from '@/components/DiagnosticDialog';

const comparisonData = [
  {
    feature: "Costo de Licenciamiento",
    odoo: "Pago por usuario, todo incluido",
    legacy: "Costos ocultos por módulo y servidor",
    icon: DollarSign
  },
  {
    feature: "Implementación",
    odoo: "Semanas (Metodología Ágil)",
    legacy: "Meses o años (Cascada)",
    icon: Zap
  },
  {
    feature: "Localización SAT MX",
    odoo: "Nativa y actualizada (CFDI 4.0)",
    legacy: "Requiere parches o terceros costosos",
    icon: Shield
  },
  {
    feature: "Interfaz de Usuario",
    odoo: "Moderna, intuitiva y web-based",
    legacy: "Compleja, requiere capacitación extensa",
    icon: Info
  },
  {
    feature: "Flexibilidad",
    odoo: "Código abierto, altamente personalizable",
    legacy: "Rígida, cambios lentos y caros",
    icon: Globe
  }
];

const Comparison = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mb-20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Odoo vs. ERPs <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tradicionales</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                ¿Por qué las empresas mexicanas están migrando de sistemas legados a Odoo? Comparamos la eficiencia, el costo y la adaptabilidad al mercado local.
              </p>
            </div>
          </ScrollReveal>

          <div className="overflow-x-auto pb-8">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="p-6"></div>
                <div className="p-8 rounded-3xl bg-indigo-600 text-center shadow-2xl shadow-indigo-500/20">
                  <h3 className="text-2xl font-bold text-white">Rankior + Odoo</h3>
                  <p className="text-indigo-100 text-sm">La opción moderna</p>
                </div>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <h3 className="text-2xl font-bold text-white">Sistemas Legados</h3>
                  <p className="text-slate-500 text-sm">SAP, Oracle, Microsoft</p>
                </div>
              </div>

              <div className="space-y-4">
                {comparisonData.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="grid grid-cols-3 gap-4 items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                          <item.icon className="text-indigo-400" size={20} />
                        </div>
                        <span className="text-white font-bold">{item.feature}</span>
                      </div>
                      <div className="text-center px-4">
                        <div className="inline-flex items-center gap-2 text-indigo-100 font-medium">
                          <Check className="text-emerald-500" size={18} />
                          {item.odoo}
                        </div>
                      </div>
                      <div className="text-center px-4">
                        <div className="inline-flex items-center gap-2 text-slate-500">
                          <X className="text-red-500/50" size={18} />
                          {item.legacy}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-32 p-12 rounded-[3rem] bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Vale la pena el cambio?</h2>
                <p className="text-slate-400 text-lg mb-8">
                  La mayoría de nuestros clientes recuperan su inversión en menos de 6 meses gracias a la eliminación de licencias costosas y la automatización de procesos manuales.
                </p>
                <DiagnosticDialog>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-10 h-14 text-lg font-bold">
                    Solicitar análisis de migración
                  </Button>
                </DiagnosticDialog>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                  <p className="text-3xl font-bold text-white mb-1">-60%</p>
                  <p className="text-xs text-indigo-400 uppercase font-bold">Costo TCO</p>
                </div>
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <p className="text-3xl font-bold text-white mb-1">2x</p>
                  <p className="text-xs text-emerald-400 uppercase font-bold">Velocidad Operativa</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Comparison;