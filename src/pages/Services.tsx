"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import SolutionFinder from '@/components/SolutionFinder';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  Factory, 
  ShieldCheck, 
  BarChart3,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import DiagnosticDialog from '@/components/DiagnosticDialog';

const services = [
  {
    title: "Odoo ERP Core",
    description: "Implementación integral de los módulos base: Ventas, Compras, Inventario y Contabilidad.",
    icon: LayoutDashboard,
    features: ["Configuración de flujos", "Migración de datos", "Capacitación de equipo"]
  },
  {
    title: "Localización Mexicana",
    description: "Adaptación total al SAT: CFDI 4.0, complementos de pago y contabilidad electrónica.",
    icon: ShieldCheck,
    features: ["Timbrado ilimitado", "Conciliación bancaria", "Reportes fiscales"]
  },
  {
    title: "E-commerce & Omnicanalidad",
    description: "Sincronización de ventas online y físicas con inventario centralizado.",
    icon: ShoppingCart,
    features: ["Shopify / WooCommerce", "Mercado Libre / Amazon", "Punto de Venta (POS)"]
  },
  {
    title: "Manufactura (MRP)",
    description: "Control total de la cadena de producción, desde materia prima hasta producto terminado.",
    icon: Factory,
    features: ["Listas de materiales", "Órdenes de trabajo", "Control de calidad"]
  },
  {
    title: "CRM & Marketing",
    description: "Automatización de fuerza de ventas y campañas de marketing segmentadas.",
    icon: Users,
    features: ["Pipeline de ventas", "Email marketing", "Automatización de leads"]
  },
  {
    title: "Business Intelligence",
    description: "Dashboards personalizados para la toma de decisiones basada en datos reales.",
    icon: BarChart3,
    features: ["Reportes a medida", "KPIs en tiempo real", "Análisis predictivo"]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mb-20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Soluciones <span className="text-indigo-400">modulares</span> para cada etapa
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                No implementamos software, diseñamos el sistema operativo que tu negocio necesita para escalar sin fricciones en el mercado mexicano.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, i) => (
              <ServiceCard 
                key={i}
                {...service}
                delay={i * 0.1}
              />
            ))}
          </div>

          {/* Solution Finder Section */}
          <section className="mb-32 py-24 bg-indigo-950/20 rounded-[3rem] border border-white/5">
            <SectionHeader 
              subtitle="Descubrimiento"
              title="¿No sabes por dónde empezar?"
              description="Responde dos preguntas y te recomendaremos el paquete ideal para tu situación actual."
            />
            <SolutionFinder />
          </section>

          {/* Service Process Section */}
          <section className="mb-32">
            <SectionHeader 
              subtitle="Metodología"
              title="Cómo transformamos tu empresa"
              description="Un proceso estructurado para asegurar que tu inversión en tecnología se traduzca en rentabilidad real."
            />
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Análisis", desc: "Entendemos tus procesos actuales y detectamos ineficiencias." },
                { step: "02", title: "Diseño", desc: "Creamos el roadmap técnico y funcional de tu nueva operación." },
                { step: "03", title: "Ejecución", desc: "Configuramos Odoo y migramos tus datos de forma segura." },
                { step: "04", title: "Soporte", desc: "Acompañamos a tu equipo en el go-live y optimización continua." }
              ].map((item, i) => (
                <div key={i} className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                  <span className="text-4xl font-bold text-indigo-500/20 absolute top-4 right-6">{item.step}</span>
                  <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="p-12 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-blue-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">¿Listo para dar el salto?</h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Nuestros consultores expertos te ayudan a priorizar los módulos que generarán el mayor impacto inmediato en tu rentabilidad.
                </p>
                <div className="flex flex-wrap gap-4">
                  <DiagnosticDialog>
                    <Button size="lg" className="bg-white text-indigo-900 hover:bg-slate-100 rounded-full px-8 font-bold h-14">
                      Hablar con un experto
                    </Button>
                  </DiagnosticDialog>
                  <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-full px-8 font-bold backdrop-blur-sm h-14">
                    <a href="/casos">Ver casos de éxito <ArrowRight className="ml-2" size={18} /></a>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-64 h-64 rounded-full border-4 border-white/20 flex items-center justify-center animate-pulse">
                  <MessageSquare size={80} className="text-white" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;