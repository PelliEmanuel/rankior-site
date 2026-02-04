"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ResourceCenter from '@/components/ResourceCenter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import { getBlogPosts } from '@/lib/cms';

const categories = ['Todos', 'Fiscal', 'Operaciones', 'Tecnología', 'E-commerce'];

const Blog = () => {
  const [posts, setPosts] = useState<any[] | undefined>(undefined);
  const [filteredPosts, setFilteredPosts] = useState<any[] | undefined>(undefined);
  const [activeCategory, setActiveCategory] = useState('Todos');

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
        // Fallback to default posts if CMS is not configured
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
      setPosts(mappedPosts);
      setFilteredPosts(mappedPosts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (posts) {
      if (activeCategory === 'Todos') {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(posts.filter(post => post.category === activeCategory));
      }
    }
  }, [activeCategory, posts]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <BackgroundElements />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Conocimiento para <span className="text-indigo-400">escalar</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Guías, análisis y noticias sobre Odoo, el SAT y las mejores prácticas empresariales en México.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  activeCategory === cat 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                  : 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ResourceCenter posts={filteredPosts} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;