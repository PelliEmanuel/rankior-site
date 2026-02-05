"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { 
    name: "Odoo Gold Partner", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Odoo-logo.svg/512px-Odoo-logo.svg.png" 
  },
  { 
    name: "AWS Certified", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png" 
  },
  { 
    name: "SAT Autorizado", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Logo_del_SAT.svg/512px-Logo_del_SAT.svg.png" 
  },
  { 
    name: "Shopify Expert", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" 
  }
];

const Partners = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-12">
          Certificaciones y Alianzas Estratégicas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-10 md:h-12 flex items-center justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-500 cursor-default"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;