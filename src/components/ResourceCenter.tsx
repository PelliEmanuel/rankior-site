"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
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

const ResourceCenter = () => {
  return (
    <section id="recursos" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Centro de Recursos</h2>
          <p className="text-slate-400 text-lg">Aprende a escalar tu empresa con contenido experto.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm group-hover:gap-3 transition-all">
                    Leer más <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;