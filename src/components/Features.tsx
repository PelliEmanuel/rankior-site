"use client";

import React from 'react';
import { Receipt, Package, Landmark } from "lucide-react";

const features = [
  {
    title: "CFDI + SAT",
    description: "Facturación 4.0 nativa y conciliación bancaria automática con el SAT.",
    icon: Receipt,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Inventario Real",
    description: "Control multi-sucursal con reorden automático basado en demanda.",
    icon: Package,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Integraciones",
    description: "Conecta Shopify, WooCommerce y los principales bancos de México.",
    icon: Landmark,
    color: "from-emerald-500 to-teal-500"
  }
];

const Features = () => {
  return (
    <section id="oferta" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;