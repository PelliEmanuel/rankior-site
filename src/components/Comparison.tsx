"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const points = [
    {
      feature: "Facturación CFDI 4.0",
      traditional: "Manual o vía portal externo",
      rankior: "Nativa y automática en Odoo",
      better: true
    },
    {
      feature: "Sincronización de Inventario",
      traditional: "Hojas de Excel desfasadas",
      rankior: "Tiempo real multi-sucursal",
      better: true
    },
    {
      feature: "Conciliación Bancaria",
      traditional: "Días de trabajo manual",
      rankior: "Automatizada con IA",
      better: true
    },
    {
      feature: "Costo de Mantenimiento",
      traditional: "Altos costos de servidores",
      rankior: "Cloud escalable y eficiente",
      better: true
    },
    {
      feature: "Implementación",
      traditional: "6-12 meses (o nunca)",
      rankior: "Desde 30 días garantizados",
      better: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">¿Por qué Rankior + Odoo?</h2>
          <p className="text-slate-400 text-lg">Compara la eficiencia de un sistema moderno frente a los métodos tradicionales.</p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
          <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10">
            <div className="text-slate-400 font-semibold">Característica</div>
            <div className="text-slate-400 font-semibold text-center">Sistemas Tradicionales</div>
            <div className="text-indigo-400 font-bold text-center">Rankior / Odoo</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {points.map((point, i) => (
              <div key={i} className="grid grid-cols-3 p-6 items-center hover:bg-white/[0.02] transition-colors">
                <div className="text-white font-medium">{point.feature}</div>
                <div className="flex justify-center items-center gap-2 text-slate-500 text-sm">
                  <X size={16} className="text-red-500/50" />
                  {point.traditional}
                </div>
                <div className="flex justify-center items-center gap-2 text-indigo-100 font-semibold">
                  <Check size={18} className="text-emerald-500" />
                  {point.rankior}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;