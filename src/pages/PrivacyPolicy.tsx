"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ScrollReveal from '@/components/ScrollReveal';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Aviso de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Privacidad</span>
            </h1>
            
            <div className="prose prose-invert prose-indigo max-w-none space-y-8 text-slate-400">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Compromiso de Confidencialidad</h2>
                <p className="leading-relaxed">
                  En Rankior, entendemos que la información de tu empresa es tu activo más valioso. Por ello, manejamos tus datos con el máximo cuidado y bajo los más estrictos estándares de seguridad.
                </p>
                <p className="font-bold text-white mt-4">
                  Garantizamos que tus datos NUNCA serán compartidos, vendidos ni transferidos a anunciantes externos ni a otras empresas con fines comerciales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Seguridad de la Información</h2>
                <p className="leading-relaxed">
                  La seguridad es nuestra prioridad número uno. Implementamos protocolos de encriptación de grado bancario (SSL/TLS de 256 bits) y auditorías constantes para asegurar que tu información esté protegida contra cualquier acceso no autorizado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Uso de los Datos</h2>
                <p className="leading-relaxed">
                  Los datos recopilados a través de nuestros formularios de diagnóstico se utilizan exclusivamente para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Analizar tus necesidades operativas y proponer soluciones de Odoo.</li>
                  <li>Contactarte para agendar sesiones de consultoría solicitadas por ti.</li>
                  <li>Mejorar la calidad de nuestros servicios de implementación.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Tus Derechos (ARCO)</h2>
                <p className="leading-relaxed">
                  En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos en cualquier momento enviando un correo a <span className="text-indigo-400">privacidad@rankior.com</span>.
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

export default PrivacyPolicy;