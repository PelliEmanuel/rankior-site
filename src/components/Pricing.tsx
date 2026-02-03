"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Launch",
    price: "$25,000",
    duration: "30 días",
    description: "Ideal para startups y micro-empresas.",
    features: ["Ventas y CRM", "Facturación CFDI 4.0", "Inventario básico", "1-3 usuarios"],
    popular: false
  },
  {
    name: "Growth",
    price: "$55,000",
    duration: "45 días",
    description: "Para empresas en expansión con e-commerce.",
    features: ["Todo lo de Launch", "Integración Shopify/Woo", "Dashboards BI", "Hasta 10 usuarios", "Soporte prioritario"],
    popular: true
  },
  {
    name: "Scale",
    price: "$120,000",
    duration: "60-90 días",
    description: "Solución completa para medianas empresas.",
    features: ["Todo lo de Growth", "Multi-sucursal", "Manufactura (MRP)", "Automatización avanzada", "Usuarios ilimitados"],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="precios" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Paquetes para empresas que quieren escalar
          </h2>
          <p className="text-slate-400 text-lg">
            Precios transparentes en MXN. Sin costos ocultos, solo resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular 
                ? 'bg-indigo-600/10 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Más Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-slate-400">MXN</span>
                </div>
                <p className="text-indigo-400 font-medium mt-2">{pkg.duration}</p>
              </div>

              <p className="text-slate-400 mb-8 text-sm">{pkg.description}</p>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check className="text-indigo-500 shrink-0" size={18} />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full h-12 rounded-xl font-bold ${
                  pkg.popular 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Seleccionar {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;