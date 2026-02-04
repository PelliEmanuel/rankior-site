"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import ResourceCenter from '@/components/ResourceCenter';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';
import { getBlogPosts } from '@/lib/cms';

const Blog = () => {
  const [posts, setPosts] = useState<any[] | undefined>(undefined);

  useEffect(() => {
    const fetchPosts = async () => {
      const cmsPosts = await getBlogPosts();
      if (cmsPosts && cmsPosts.length > 0) {
        // Map Contentful fields to our component structure
        const mappedPosts = cmsPosts.map((item: any) => ({
          id: item.fields.slug,
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          category: item.fields.category,
          date: new Date(item.sys.createdAt).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' }),
          author: item.fields.author,
          image: item.fields.featuredImage?.fields?.file?.url || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
        }));
        setPosts(mappedPosts);
      }
    };

    fetchPosts();
  }, []);

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
            {['Todos', 'Fiscal', 'Operaciones', 'Tecnología', 'E-commerce'].map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-indigo-600 hover:border-indigo-600 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <ResourceCenter posts={posts} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;