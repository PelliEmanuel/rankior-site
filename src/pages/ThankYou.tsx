"use client";

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ResourceCenter from '@/components/ResourceCenter';
import { CheckCircle2, ArrowRight, Calendar, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPosts } from '@/lib/cms';

const ThankYou = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const cmsPosts = await getBlogPosts();
      let mappedPosts = [];
      
      if (cmsPosts && cmsPosts.length > 0) {
        mappedPosts = cmsPosts.map((item: any) => ({
          id: item.fields.slug,
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          category: item.fields.category,
          date: new Date(item.sys.createdAt).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' }),
          author: item.fields.author,
          image: item.fields.featuredImage?.fields?.file?.url || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
        }));
      } else {
        // Fallback data
        mappedPosts = [
          {
            id: "cfdi-4-0-odoo-17",
            title: "Guía definitiva: CFDI 4.0 en Odoo 17",
            excerpt: "Todo lo que necesitas saber para cumplir con las nuevas disposiciones del SAT sin complicaciones.",
            category: "Fiscal",
            date: "Oct 12, 2023",
            author: "Ing. Carlos Ruiz",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
          },
          {
            id: "inventario-multi-sucursal",
            title: "Cómo optimizar tu inventario multi-sucursal",
            excerpt: "Estrategias probadas para reducir mermas y mejorar el flujo de caja en empresas de distribución.",
            category: "Operaciones",
            date: "Sep 28, 2023",
            author: "Lic. Ana Valdés",
            image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
          },
          {
            id: "odoo-vs-sap-pyme",
            title: "Odoo vs SAP: ¿Cuál elegir para tu PYME?",
            excerpt: "Un análisis honesto sobre costos, tiempos de implementación y flexibilidad para el mercado mexicano.",
            category: "Tecnología",
            date: "Sep 15, 2023",
            author: "Consultor Senior",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
          }
        ];
      }
      setPosts(mappedPosts.slice(0, 3));
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-ink text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main id="contenido-principal" tabIndex={-1} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-20">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <CheckCircle2 className="text-emerald-500" size={48} />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">¡Solicitud Recibida!</h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Gracias por confiar en Rankior. Un consultor experto revisará tu información y se pondrá en contacto contigo en las próximas <span className="text-white font-bold">24 horas</span>.
          </p>
          
          <div className="bg-brand-600/10 border border-brand-500/20 rounded-[2.5rem] p-8 mb-12 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText size={120} className="text-brand-400" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Mientras esperas...</h3>
              <p className="text-slate-400 mb-6 max-w-lg">
                Hemos preparado una guía exclusiva: <strong>"Los 5 errores críticos al implementar un ERP en México"</strong>. Descárgala ahora y empieza a optimizar tu visión.
              </p>
              <Button className="bg-brand-600 hover:bg-brand-700 text-white rounded-full px-8 h-12 font-bold">
                <Download className="mr-2" size={18} /> Descargar Guía PDF
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
              <Calendar className="text-brand-400 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2">Próximo Paso</h4>
              <p className="text-sm text-slate-500">Recibirás un correo con opciones de horario para nuestra sesión de 30 minutos.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left">
              <ArrowRight className="text-brand-400 mb-4" size={24} />
              <h4 className="text-white font-bold mb-2">Casos de Éxito</h4>
              <p className="text-sm text-slate-500">Te invitamos a ver cómo transformamos otras empresas similares a la tuya.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-brand-950 hover:bg-slate-100 rounded-full px-8">
              <Link to="/casos">Ver Casos de Éxito</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-8">
              <Link to="/">Volver al Inicio</Link>
            </Button>
          </div>
        </div>

        {/* Blog Section */}
        <section className="container mx-auto px-4 border-t border-white/10 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Contenido recomendado para ti</h2>
            <p className="text-slate-400">Aprende más sobre cómo optimizar tu empresa mientras agendamos tu sesión.</p>
          </div>
          <ResourceCenter posts={posts} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;