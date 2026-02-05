"use client";

import React from 'react';
import { ShieldCheck, Award, Zap, Users } from 'lucide-react';

const badges = [
  {
    icon: ShieldCheck,
    title: "Partner Oficial",
    desc: "Certificados por Odoo"
  },
  {
    icon: Award,
    title: "Localización MX",
    desc: "Expertos en CFDI 4.0"
  },
  {
    icon: Zap,
    title: "Fast-Track",
    desc: "Implementación ágil"
  },
  {
    icon: Users,
    title: "Soporte Local",
    desc: "Atención en tu zona horaria"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3 group">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                <badge.icon className="text-indigo-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{badge.title}</h4>
                <p className="text-slate-400 text-xs">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;