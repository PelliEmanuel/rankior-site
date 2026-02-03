"use client";

import React from 'react';
import DiagnosticForm from './DiagnosticForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">¿Listo para dar el siguiente paso?</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Agenda una sesión de 30 minutos con nuestros consultores expertos. Analizaremos tus retos actuales y te propondremos una ruta clara de implementación.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Escríbenos</p>
                  <p className="font-medium">hola@rankior.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Llámanos</p>
                  <p className="font-medium">+52 (55) 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="text-indigo-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Ubicación</p>
                  <p className="font-medium">CDMX, México</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
            <DiagnosticForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;