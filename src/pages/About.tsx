"use client";

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import Partners from '@/components/Partners';
import { Shield, Target, Zap, Award, Users2, Building2, Linkedin, Star } from 'lucide-react';

const values = [
  {
    title: "Transparencia",
    description: "Sin costos ocultos ni promesas vacías. Hablamos claro sobre lo que Odoo puede y no puede hacer por ti.",
    icon: Shield
  },
  {
    title: "Agilidad",
    description: "Nuestra metodología Fast-Track permite implementaciones en semanas, no en años.",
    icon: Zap
  },
  {
    title: "Enfoque en Resultados",
    description: "No solo instalamos software; optimizamos procesos para que tu rentabilidad crezca.",
    icon: Target
  }
];

const team = [
  {
    name: "Ing. Ricardo Méndez",
    role: "CEO & Fundador",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo",
    bio: "Especialista en arquitectura de sistemas con más de 12 años de experiencia en ERPs."
  },
  {
    name: "Lic. Sofía Garza",
    role: "Directora de Consultoría",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia",
    bio: "Experta en localización mexicana y procesos contables ante el SAT."
  },
  {
    name: "Mtro. Alejandro Ruiz",
    role: "Head of Implementation",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alejandro",
    bio: "Líder de proyectos con enfoque en manufactura y logística avanzada."
  }
];

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mb-24">
            <ScrollReveal>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Transformando la <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">operación</span> de las empresas mexicanas
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                En Rankior, nacimos con una misión clara: democratizar la tecnología de clase mundial para las empresas en México. Somos especialistas en Odoo, el ERP más flexible y potente del mercado.
              </p>
            </ScrollReveal>
          </div>

          <Partners />

          {/* Mission Section */}
          <section id="mision" className="my-32 scroll-mt-32">
            <ScrollReveal>
              <div className="p-10 md:p-16 rounded-[3rem] bg-indigo-600/10 border border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Star size={120} className="text-indigo-400" />
                </div>
                <div className="max-w-4xl relative z-10">
                  <h2 className="text-indigo-400 font-bold text-sm uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
                    <span className="w-8 h-px bg-indigo-500" /> Nuestra Misión
                  </h2>
                  <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed italic">
                    "Para nosotros, dar un servicio con la más alta ética profesional, atención a los detalles e intencionalidad detrás de todo lo que creamos es fundamental. Pensamos siempre en el mejor interés de nuestros clientes y de todas las personas que entran en contacto con cada uno de nuestros expertos, buscando establecer vínculos y el bienestar a largo plazo. Estamos innovando constantemente, mejorando nuestras prácticas e iterando diariamente para proveer el mejor servicio posible. Nos enorgullece dar una atención de 5 estrellas; cada trabajo que presentamos y cada cosa que creamos habla de nosotros y nuestro compromiso inquebrantable con el éxito de nuestros clientes."
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* Stats/Impact */}
          <div className="grid md:grid-cols-3 gap-8 my-32">
            {[
              { label: "Años de Experiencia", value: "8+", icon: Award },
              { label: "Proyectos Exitosos", value: "150+", icon: Building2 },
              { label: "Consultores Certificados", value: "25+", icon: Users2 },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="text-indigo-400" size={24} />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mission & Values */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nuestros Valores</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Lo que nos guía en cada implementación y nos diferencia de las consultoras tradicionales.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-indigo-500/50 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6">
                      <value.icon className="text-indigo-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">El Equipo Rankior</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Consultores apasionados por la tecnología y el crecimiento de los negocios en México.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all text-center">
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full group-hover:bg-indigo-500/40 transition-colors" />
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="relative z-10 w-full h-full rounded-full bg-slate-800 border-2 border-white/10"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-indigo-400 text-sm font-medium mb-4">{member.role}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.bio}</p>
                    <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;