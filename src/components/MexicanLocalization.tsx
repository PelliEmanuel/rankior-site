"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Landmark, Calculator } from 'lucide-react';

const features = [
  {
    title: "Facturación CFDI 4.0",
    description: "Emisión masiva de facturas, notas de crédito y complementos de pago con timbrado ilimitado.",
    icon: FileText
  },
  {
    title: "Contabilidad Electrónica",
    description: "Generación automática de archivos XML para el SAT (Catálogo de cuentas y Balanza de comprobación).",
    icon: Calculator
  },
  {
    title: "Conciliación Bancaria",
    description: "Conexión directa con los principales bancos mexicanos para conciliación en un clic.",
    icon: Landmark
  },
  {
    title: "Cumplimiento Legal",
    description: "Actualizaciones automáticas ante cambios en la miscelánea fiscal y leyes del trabajo (REPSE).",
    icon: ShieldCheck
  }
];

const MexicanLocalization = () => {
  return (
    <section className="py-24 bg-indigo-950/20 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              100% Localizado
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Odoo adaptado a las leyes de <span className="text-indigo-400">México</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Olvídate de los problemas con el SAT. Nuestra implementación incluye la localización oficial configurada por expertos para que tu contabilidad sea transparente y automática.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <f.icon className="text-indigo-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-50" />
            <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-2 shadow-2xl overflow-hidden min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000" 
                alt="Odoo Dashboard Mexico" 
                className="rounded-2xl w-full h-auto opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                decoding="async"
                width="1000"
                height="667"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-white font-medium italic">
                  "La tranquilidad de saber que cada factura timbrada está sincronizada con mi inventario y contabilidad no tiene precio."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MexicanLocalization;