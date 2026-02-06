"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ScrollReveal from '@/components/ScrollReveal';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Términos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Servicio</span>
            </h1>
            
            <div className="prose prose-invert prose-indigo max-w-none space-y-8 text-slate-400">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de Términos</h2>
                <p className="leading-relaxed">
                  Al acceder a este sitio web y solicitar un diagnóstico, aceptas cumplir con estos términos y condiciones. Rankior se compromete a brindar servicios de consultoría de Odoo con la más alta ética profesional.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Propiedad Intelectual</h2>
                <p className="leading-relaxed">
                  Todo el contenido, diseño y metodologías presentadas en este sitio son propiedad de Rankior. El uso de Odoo está sujeto a las licencias correspondientes de Odoo S.A.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Responsabilidad en la Seguridad</h2>
                <p className="leading-relaxed">
                  Rankior asume la responsabilidad de proteger la integridad de los datos proporcionados durante el proceso de consultoría. No nos hacemos responsables por brechas de seguridad causadas por negligencia del usuario en el manejo de sus propias credenciales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. No Divulgación</h2>
                <p className="leading-relaxed">
                  Mantenemos un compromiso estricto de no divulgación. Tu información operativa y financiera es tratada como confidencial y nunca será compartida con terceros ajenos al proceso de implementación sin tu consentimiento expreso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Modificaciones</h2>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de actualizar estos términos para reflejar mejoras en nuestros procesos de seguridad o cambios legislativos en México.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;