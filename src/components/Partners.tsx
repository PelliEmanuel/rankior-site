"use client";

import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { 
    name: "Stripe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" 
  },
  { 
    name: "Mercado Pago", 
    logo: "https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/5.30.1/mercadopago/logo__large.png" 
  },
  { 
    name: "OpenPay", 
    logo: "https://www.openpay.mx/img/logos/openpay_logo.png" 
  },
  { 
    name: "PayPal", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" 
  },
  { 
    name: "Amazon Pay", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/1200px-Amazon_Pay_logo.svg.png" 
  },
  { 
    name: "SPEI / Bancos", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Logo_SPEI.png/1200px-Logo_SPEI.png" 
  }
];

const Partners = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-12">
          Integraciones estratégicas para tu empresa
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-8 md:h-10 flex items-center justify-center"
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="h-full w-auto object-contain brightness-0 invert opacity-60 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = "text-white font-bold text-lg";
                    span.innerText = item.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;