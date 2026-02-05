"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { 
    name: "AWS Certified", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png" 
  },
  { 
    name: "Shopify Expert", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png" 
  }
];

const Partners = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-12">
          Certificaciones y Alianzas Estratégicas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-12 md:h-16 grayscale invert opacity-60 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;