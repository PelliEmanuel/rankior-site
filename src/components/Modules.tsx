"use client";

import React from 'react';
import { 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Factory, 
  ShieldCheck, 
  Globe 
} from "lucide-react";

const modules = [
  {
    title: "CRM & Ventas",
    description: "Seguimiento automatizado de prospectos y cierre de contratos digitales.",
    icon: Users
  },
  {
    title: "E-commerce",
    description: "Sincronización total con Shopify, Amazon y Mercado Libre.",
    icon: ShoppingCart
  },
  {
    title: "Contabilidad MX",
    description: "Localización completa: CFDI 4.0, DIOT y conciliación bancaria.",
    icon: BarChart3
  },
  {
    title: "Manufactura",
    description: "Control de órdenes de producción, rutas y listas de materiales (BOM).",
    icon: Factory
  },
  {
    title: "Inventarios",
    description: "Gestión multi-bodega con trazabilidad por lotes y números de serie.",
    icon: ShieldCheck
  },
  {
    title: "Multi-compañía",
    description: "Consolidación financiera para grupos empresariales con varias razones sociales.",
    icon: Globe
  }
];

const Modules = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Todo lo que tu empresa necesita en una sola plataforma
            </h2>
            <p className="text-slate-400 text-lg">
              Odoo es modular. Empezamos con lo crítico y escalamos conforme tu negocio crece.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <mod.icon className="text-indigo-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{mod.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {mod.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;