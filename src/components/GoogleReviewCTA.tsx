"use client";

import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const GoogleReviewCTA = () => {
  // URL de ejemplo para reseñas de Google
  const googleReviewUrl = "https://search.google.com/local/writereview?placeid=TU_PLACE_ID_AQUI";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">¿Te ha gustado trabajar con nosotros?</h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Si has tenido una buena experiencia con Rankior, te invitamos a contárnoslo en Google. Tu opinión nos ayuda a seguir mejorando y a que más empresas nos conozcan.
            </p>
          </div>
          
          <Button 
            asChild
            variant="outline" 
            className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 h-14 text-lg font-bold shrink-0 group"
          >
            <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer">
              Dejar reseña <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewCTA;