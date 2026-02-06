"use client";

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, TrendingUp, Clock, CheckCircle2, BarChart3, Factory, ShoppingCart } from 'lucide-react';
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
        const data: any = await getCaseStudyById(id);
        if (data) {
          setStory({
            title: data.fields.companyName,
            industry: data.fields.industry,
            challenge: data.fields.challenge,
            solution: data.fields.result,
            image: data.fields.featuredImage?.fields?.file?.url,
            metrics: [
              { label: "Eficiencia", value: data.fields.efficiencyMetric || "+45%", icon: TrendingUp },
              { label: "Tiempo Ahorrado", value: data.fields.timeSavedMetric || "15h/sem", icon: Clock },
              { label: "Precisión", value: "100%", icon: BarChart3 }
            ]
          });
        } else {
          // Fallback for demo purposes if CMS is not connected
          const fallbacks: Record<string, any> = {
            "distribuidora-norte": {
              title: "Distribuidora Norte",
              industry: "Logística & Distribución",
              challenge: "Distribuidora Norte operaba con múltiples almacenes y un sistema de facturación desconectado. Esto generaba errores constantes en las existencias y una carga administrativa masiva.",
              solution: "Implementamos Odoo Enterprise con los módulos de Inventario, Ventas y Contabilidad. Automatizamos el timbrado de facturas y sincronizamos el stock en tiempo real.",
              image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
              metrics: [
                { label: "Eficiencia", value: "+45%", icon: TrendingUp },
                { label: "Tiempo Ahorrado", value: "15h/sem", icon: Clock },
                { label: "Errores", value: "0%", icon: BarChart3 }
              ]
            },
            "retail-mx": {
              title: "Retail MX",
              industry: "Comercio Electrónico",
              challenge: "Retail MX sufría por la falta de integración entre su tienda Shopify y su contabilidad local, lo que retrasaba los cierres mensuales por semanas.",
              solution: "Conectamos Shopify con Odoo de forma nativa, permitiendo que cada venta genere automáticamente una factura CFDI y actualice el inventario contable.",
              image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
              metrics: [
                { label: "Ventas", value: "10k+", icon: ShoppingCart },
                { label: "Cierre", value: "2 días", icon: Clock },
                { label: "Crecimiento", value: "3x", icon: TrendingUp }
              ]
            }
          };
          setStory(fallbacks[id || ""] || fallbacks["distribuidora-norte"]);
        }
      }
      setLoading(false);
    };
    fetchStory();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Cargando...</div>;
  if (!story) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Caso no encontrado</div>;

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
                  {story.industry}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {story.title}: Transformación Digital Completa
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                  Descubre cómo logramos optimizar la operación de {story.title} mediante la implementación estratégica de Odoo.
                </p>
              </header>

              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-invert prose-indigo max-w-none">
                <h2 className="text-2xl font-bold text-white">El Reto</h2>
                <p className="text-slate-400 leading-relaxed">
                  {story.challenge}
                </p>
                
                <h2 className="text-2xl font-bold text-white mt-12">La Solución</h2>
                <p className="text-slate-400 leading-relaxed">
                  {story.solution}
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
                      Resultados Medibles
                    </h4>
                    <p className="text-sm text-slate-400">Impacto directo en el flujo de caja y la eficiencia del equipo.</p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 sticky top-32">
                <h3 className="text-xl font-bold text-white mb-6">Resultados Clave</h3>
                <div className="space-y-6">
                  {story.metrics.map((metric: any, i: number) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <metric.icon className="text-indigo-400" size={24} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{metric.value}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">{metric.label}</p>
                      </div>
                    </div>
                  ))}
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