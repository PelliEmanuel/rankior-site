"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
            <ArrowLeft size={20} /> Volver al blog
          </Link>

          <article className="space-y-8">
            <header className="space-y-6">
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1"><Calendar size={16} /> Octubre 12, 2023</span>
                <span className="flex items-center gap-1"><User size={16} /> Ing. Carlos Ruiz</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Guía definitiva: CFDI 4.0 en Odoo 17 para el mercado mexicano
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Descubre cómo configurar la localización mexicana oficial y automatizar tu facturación electrónica sin errores ante el SAT.
              </p>
            </header>

            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
                alt="CFDI 4.0 Odoo" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert prose-indigo max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                La transición al CFDI 4.0 ha representado un reto significativo para muchas empresas en México. Sin embargo, con Odoo 17, este proceso se vuelve no solo manejable, sino una ventaja competitiva gracias a la automatización.
              </p>
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">¿Qué ha cambiado en el CFDI 4.0?</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                El SAT ahora requiere información mucho más precisa sobre el emisor y el receptor, incluyendo el nombre o razón social exacto como aparece en la constancia de situación fiscal, el código postal del domicilio fiscal y el régimen fiscal.
              </p>
              <ul className="space-y-4 text-slate-400 list-disc pl-6 mb-8">
                <li>Validación estricta de RFC y Nombre.</li>
                <li>Inclusión obligatoria del Código Postal.</li>
                <li>Nuevos campos para exportaciones y pagos a terceros.</li>
              </ul>
              <h2 className="text-2xl font-bold text-white mt-12 mb-6">Configuración en Odoo</h2>
              <p className="text-slate-400 leading-relaxed">
                Para habilitar estas funciones, es necesario instalar el módulo de Localización Mexicana (l10n_mx). Una vez instalado, Odoo permite configurar los certificados de sello digital (CSD) y conectar con un PAC autorizado para el timbrado ilimitado.
              </p>
            </div>

            <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2">
                  <Share2 size={18} /> Compartir
                </Button>
              </div>
              <div className="text-slate-500 text-sm">
                Categoría: <span className="text-indigo-400 font-medium">Fiscal & Tecnología</span>
              </div>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;