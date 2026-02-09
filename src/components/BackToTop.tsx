"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.pageYOffset > 500;
      setIsVisible(prev => {
        if (prev !== shouldBeVisible) return shouldBeVisible;
        return prev;
      });
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-28 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white backdrop-blur-md shadow-xl"
            aria-label="Volver al inicio de la página"
          >
            <ChevronUp size={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;