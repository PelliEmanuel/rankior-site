"use client";

import React from 'react';

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos tus procesos actuales y detectamos cuellos de botella."
  },
  {
    number: "02",
    title: "Implementación",
    description: "Configuramos Odoo con las mejores prácticas para el mercado mexicano."
  },
  {
    number: "03",
    title: "Go-live",
    description: "Migración de datos y capacitación intensiva a tu equipo."
  },
  {
    number: "04",
    title: "Optimización",
    description: "Acompañamiento continuo para escalar tu operación."
  }
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Cómo lo logramos</h2>
          <p className="text-slate-400">Un camino claro hacia la transformación digital.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-white/5 absolute -top-6 -left-2 group-hover:text-indigo-500/10 transition-colors">
                {step.number}
              </div>
              <div className="relative pt-4">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;