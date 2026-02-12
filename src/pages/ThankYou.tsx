"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import { CheckCircle2, ArrowRight, Calendar, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-40 pb-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <CheckCircle2 className="text-emerald-500" size={48} />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">¡Solicitud Recibida!</h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Gracias por confiar en Rankior. Un consultor experto revisará tu información y se pondrá en contacto contigo en las próximas <span className="text-white font-bold">24 horas</span>.
          </p>
          
          {/* Lead Magnet Section */}
          <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-[2.5rem] p-8 mb-12 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText size={120} className="text-indigo-400" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Mientras esperas...</h3>
              <p className="text-slate-400 mb-6 max-w-lg">
                Hemos preparado una guía exclusiva: <strong>"Los 5 errores críticos al implementar un ERP en México"</strong>. Descárgala ahora y empieza a optimizar tu visión.
              </p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 font-bold">
                <Download className="mr-2" size={18} /> Descargar Guía PDF
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
              <Calendar className="text-indigo-400 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2">Próximo Paso</h4>
              <p className="text-sm text-slate-500">Recibirás un correo con opciones de horario para nuestra sesión de 30 minutos.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
              <ArrowRight className="text-indigo-400 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2">Casos de Éxito</h4>
              <p className="text-sm text-slate-500">Te invitamos a ver cómo transformamos otras empresas similares a la tuya.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-950 hover:bg-slate-100 rounded-full px-8">
              <Link to="/casos">Ver Casos de Éxito</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-8">
              <Link to="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;