"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Settings, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tus procesos actuales y detectamos cuellos de botella operativos.",
    color: "bg-blue-500"
  },
  {
    icon: Settings,
    title: "Implementación",
    description: "Configuramos Odoo con las mejores prácticas para el mercado mexicano y CFDI 4.0.",
    color: "bg-indigo-500"
  },
  {
    icon: Rocket,
    title: "Go-live",
    description: "Migración de datos segura y capacitación intensiva a todo tu equipo de trabajo.",
    color: "bg-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    description: "Acompañamiento continuo y soporte técnico para escalar tu operación sin límites.",
    color: "bg-cyan-500"
  }
];

const Process = () => {
  return (
    <section id="proceso" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Nuestra Metodología</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Un camino estructurado y probado para llevar tu empresa al siguiente nivel digital.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative group text-center"
            >
              <div className={`w-24 h-24 rounded-3xl ${step.color} mx-auto flex items-center justify-center mb-8 shadow-2xl shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="text-white" size={40} />
              </div>
              <div className="space-y-4">
                <span className="text-indigo-500 font-bold text-sm uppercase tracking-widest">Paso 0{i + 1}</span>
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;