"use client";

import React from 'react';
import { Star, Quote } from "lucide-react";
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Roberto García",
    role: "CEO, Distribuidora Norte",
    content: "Rankior transformó nuestra operación. Pasamos de hojas de Excel a tener todo el inventario sincronizado con el SAT en tiempo real. La visibilidad que tenemos ahora es total.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto"
  },
  {
    name: "Elena Martínez",
    role: "Directora de Operaciones, Retail MX",
    content: "La implementación fue sorprendentemente rápida. En 45 días ya estábamos operando al 100% con Odoo. El soporte post-venta ha sido excepcional.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Ing. Arturo S.",
    role: "Gerente de Finanzas, Grupo Industrial",
    content: "La conciliación bancaria automática nos ahorra al menos 10 horas a la semana. Es la mejor inversión tecnológica que hemos hecho en años.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arturo"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-4">Testimonios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Empresas que ya escalan con nosotros</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Historias reales de transformación digital y crecimiento operativo en el mercado mexicano.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative group hover:bg-white/[0.05] transition-all"
            >
              <Quote className="absolute top-6 right-8 text-indigo-500/20 group-hover:text-indigo-500/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-indigo-500 text-indigo-500" />
                ))}
              </div>
              
              <p className="text-slate-300 italic mb-8 leading-relaxed relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-500 blur-md opacity-20 rounded-full" />
                  <img src={t.avatar} alt={t.name} className="relative w-12 h-12 rounded-full bg-slate-800 border border-white/10" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{t.name}</h3>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;