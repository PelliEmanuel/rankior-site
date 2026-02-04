"use client";

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundElements from '@/components/BackgroundElements';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPostById } from '@/lib/cms';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const data = await getBlogPostById(id);
        setPost(data);
      }
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  if (loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Cargando...</div>;
  if (!post && !loading) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Post no encontrado</div>;

  const { title, excerpt, content, author, featuredImage } = post.fields;
  const date = new Date(post.sys.createdAt).toLocaleDateString('es-MX', { month: 'long', day: 'numeric', year: 'numeric' });
  const imageUrl = featuredImage?.fields?.file?.url || "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200";

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
                <span className="flex items-center gap-1"><Calendar size={16} /> {date}</span>
                <span className="flex items-center gap-1"><User size={16} /> {author}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                {excerpt}
              </p>
            </header>

            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert prose-indigo max-w-none">
              {/* In a real app, you'd use a rich text renderer for Contentful content */}
              <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {typeof content === 'string' ? content : "Contenido disponible en el CMS."}
              </div>
            </div>

            <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex gap-4">
                <Button variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white gap-2">
                  <Share2 size={18} /> Compartir
                </Button>
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