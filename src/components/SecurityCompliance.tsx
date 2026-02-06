"use client";

import React from 'react';
import { ShieldCheck, Lock, Server, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const securityFeatures = [
  {
    title: "Encriptación Bancaria",
    description: "Tus datos están protegidos con protocolos SSL/TLS de 256 bits, el mismo estándar que usan los bancos.",
    icon: Lock
  },
  {
    title: "Infraestructura Cloud",
    description: "Alojamiento en servidores de alta disponibilidad con respaldos automáticos cada 24 horas.",
    icon: Server
  },
  {
    title: "Privacidad Total",
    description: "Cumplimos estrictamente con la LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares).",
    icon: EyeOff
  },
  {
    title: "Auditoría de Accesos",
    description: "Control granular de permisos y registro detallado de cada acción realizada en el sistema.",
    icon: ShieldCheck
  }
];

const SecurityCompliance = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-[#020617] border border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Seguridad y Confianza de Clase Mundial</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Sabemos que la información de tu empresa es tu activo más valioso. Por eso, implementamos Odoo bajo los más altos estándares de seguridad y cumplimiento legal en México.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {securityFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                      <feature.icon className="text-indigo-400" size={20} />
                    </div>
                    <h3 className="text-white font-bold text-sm">{feature.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 bg-indigo-600/20 rounded-full border border-indigo-500/30 flex items-center justify-center backdrop-blur-sm"
              >
                <ShieldCheck size={120} className="text-indigo-400" />
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800 border border-white/10 rounded-xl flex items-center justify-center">
                    <Lock size={20} className="text-indigo-400" />
                  </div>
                </div>
              </motion.div>
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;