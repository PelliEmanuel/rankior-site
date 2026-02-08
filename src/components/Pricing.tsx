"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import DiagnosticDialog from './DiagnosticDialog';

const packages = [
  {
    name: "Lanzamiento",
    description: "Ideal para startups y micro-empresas que buscan digitalizar su operación base.",
    features: ["Ventas y CRM", "Facturación CFDI 4.0", "Inventario básico", "1-3 usuarios"],
    popular: false
  },
  {
    name: "Crecimiento",
    description: "Para empresas en expansión que requieren integración con e-commerce y BI.",
    features: ["Todo lo de Lanzamiento", "Integración Shopify/Woo", "Dashboards BI", "Hasta 10 usuarios", "Soporte prioritario"],
    popular: true
  },
  {
    name: "Escalamiento",
    description: "Solución completa para medianas empresas con necesidades de manufactura.",
    features: ["Todo lo de Crecimiento", "Multi-sucursal", "Manufactura (MRP)", "Automatización avanzada", "Usuarios ilimitados"],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="precios" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Paquetes diseñados para escalar
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Soluciones modulares que crecen al ritmo de tu empresa. Selecciona el punto de partida ideal para tu transformación.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
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
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Check className="text-indigo-500 shrink-0" size={18} />
                    {feat}
                  </li>
                ))}
              </ul>

              <DiagnosticDialog>
                <Button 
                  className={`w-full h-12 rounded-xl font-bold ${
                    pkg.popular 
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Consultar {pkg.name}
                </Button>
              </DiagnosticDialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;