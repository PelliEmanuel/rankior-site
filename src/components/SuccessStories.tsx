"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Clock, BarChart } from 'lucide-react';

const stories = [
  {
    company: "Distribuidora Norte",
    industry: "Logística y Distribución",
    challenge: "Inventarios desfasados y errores constantes en facturación CFDI.",
    result: "Sincronización total en 30 días y reducción del 40% en errores operativos.",
    metrics: [
      { label: "Eficiencia", value: "+45%", icon: TrendingUp },
      { label: "Tiempo Ahorrado", value: "15h/sem", icon: Clock }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    company: "Retail MX",
    industry: "Comercio Electrónico",
    challenge: "Falta de integración entre Shopify y su contabilidad local.",
    result: "Automatización completa de ventas y timbrado automático de facturas.",
    metrics: [
      { label: "Ventas Procesadas", value: "10k+", icon: BarChart },
      { label: "Cierre Mensual", value: "2 días", icon: Clock }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  }
];

const SuccessStories = () => {
  return (
    <section id="casos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">Historias de Éxito</h2>
            <p className="text-slate-400 text-lg">
              Resultados reales para empresas reales en el mercado mexicano.
            </p>
          </div>
          <button className="group flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
            Ver todos los casos <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.company} 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent md:block hidden" />
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{story.industry}</span>
                    <h3 className="text-2xl font-bold text-white mt-2">{story.company}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    <span className="text-white font-medium">Reto:</span> {story.challenge}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {story.metrics.map((metric, j) => (
                      <div key={j} className="space-y-1">
                        <div className="flex items-center gap-2 text-indigo-400">
                          <metric.icon size={16} />
                          <span className="text-xl font-bold text-white">{metric.value}</span>
                        </div>
                        <p className="text-slate-500 text-xs uppercase tracking-tighter">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;