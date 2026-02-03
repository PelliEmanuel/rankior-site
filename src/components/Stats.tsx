"use client";

import React from 'react';

const stats = [
  { label: "Implementaciones", value: "50+" },
  { label: "Retorno de Inversión", value: "< 6 meses" },
  { label: "Soporte Técnico", value: "24/7" },
  { label: "Satisfacción", value: "99%" }
];

const Stats = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-indigo-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;