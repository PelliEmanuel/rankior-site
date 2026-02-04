"use client";

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, TrendingUp, Clock, CheckCircle2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DiagnosticDialog from '@/components/DiagnosticDialog';
import { getCaseStudyById } from '@/lib/cms';

const CaseStudyPost = () => {
  const { id } = useParams();
  const [story, setStory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      if (id) {
        const data = await getCaseStudyById(id);
        if (data) {
          setStory(data);
        } else {
          // Fallback for demo purposes if CMS is not connected
          setStory({
            fields: {
              companyName: "Distribuidora Norte",
              industry: "Logística & Distribución",
              challenge: "Distribuidora Norte operaba con múltiples almacenes y un sistema de facturación desconectado. Esto generaba errores constantes en las existencias, ventas de productos agotados y una carga administrativa masiva para conciliar las facturas con el SAT al final de cada mes.",
              solution: "Implementamos Odoo Enterprise con los módulos de Inventario, Ventas y Contabilidad (Localización Mexicana). Configuramos rutas de logística avanzadas para el traspaso entre sucursales y automatizamos el timbrado de facturas en el momento de la validación del pedido.",
              efficiencyMetric: "+45%",
              timeSavedMetric: "15h/sem",
              errorReductionMetric: "0%",
              featuredImage: { fields: { file: { url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" } } }
            }
          });
        }
      }
      setLoading(false);
    };
    fetchStory();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Cargando...</div>;
  if (!story) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Caso no encontrado</div>;

  const { companyName, industry, challenge, solution, efficiencyMetric, timeSavedMetric, errorReductionMetric, featuredImage } = story.fields;
  const imageUrl = featuredImage?.fields?.file?.url || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/casos" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
            <ArrowLeft size={20} /> Volver a casos de éxito
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <header className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                  {industry}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {companyName}: Transformación Digital con Odoo
                </h1>
              </header>

              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={imageUrl} 
                  alt={companyName} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-invert prose-indigo max-w-none">
                <h2 className="text-2xl font-bold text-white">El Reto</h2>
                <p className="text-slate-400 leading-relaxed whitespace-pre-wrap">
                  {challenge}
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12">La Solución</h2>
                <p className="text-slate-400 leading-relaxed whitespace-pre-wrap">
                  {solution}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 my-12">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500" size={20} /> 
                      Implementación Ágil
                    </h4>
                    <p className="text-sm text-slate-400">Configuración completa de la localización mexicana en tiempo récord.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500" size={20} /> 
                      Capacitación
                    </h4>
                    <p className="text-sm text-slate-400">Entrenamiento intensivo a usuarios clave en todas las áreas operativas.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Resultados Clave</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <TrendingUp className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{efficiencyMetric || "+45%"}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Eficiencia Operativa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <Clock className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{timeSavedMetric || "15h/sem"}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Tiempo Ahorrado</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <BarChart3 className="text-indigo-400" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{errorReductionMetric || "0%"}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Errores de Inventario</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-6">
                    ¿Quieres resultados similares para tu empresa?
                  </p>
                  <DiagnosticDialog>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 rounded-xl font-bold">
                      Agendar diagnóstico
                    </Button>
                  </DiagnosticDialog>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CaseStudyPost;