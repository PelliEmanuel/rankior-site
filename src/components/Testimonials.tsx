"use client";

import React from 'react';
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto García",
    role: "CEO, Distribuidora Norte",
    content: "Rankior transformó nuestra operación. Pasamos de hojas de Excel a tener todo el inventario sincronizado con el SAT en tiempo real.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto"
  },
  {
    name: "Elena Martínez",
    role: "Directora de Operaciones, Retail MX",
    content: "La implementación fue sorprendentemente rápida. En 45 días ya estábamos operando al 100% con Odoo.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-4">Confianza</p>
          <h2 className="text-3xl font-bold text-white">Empresas que ya escalan con nosotros</h2>
        </div>

        {/* Logo Cloud Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale mb-20">
          {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5'].map((logo, i) => (
            <div key={i} className="text-2xl font-bold text-white tracking-tighter">{logo}</div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-indigo-500 text-indigo-500" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full bg-indigo-500/20" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;