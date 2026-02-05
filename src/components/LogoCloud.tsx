"use client";

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Distribuidora Norte",
  "Retail MX",
  "Logística Global",
  "Manufacturas ABC",
  "Tech Solutions",
  "Grupo Industrial"
];

const LogoCloud = () => {
  return (
    <section className="py-12 overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-400 text-sm font-medium uppercase tracking-widest mb-8">
          Empresas que confían en nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-bold text-white tracking-tighter whitespace-nowrap"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;