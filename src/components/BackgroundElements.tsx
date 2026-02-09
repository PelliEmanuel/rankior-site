"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      style={{ contain: 'strict', width: '100vw', height: '100vh' }}
    >
      <motion.div 
        initial={{ scale: 1, opacity: 0.1 }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[60vw] h-[60vw] bg-indigo-600/20 blur-[120px] rounded-full will-change-transform"
        style={{ 
          top: 0, 
          left: 0, 
          transform: 'translate(-20%, -20%)',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}
      />
      <motion.div 
        initial={{ scale: 1, opacity: 0.05 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute w-[50vw] h-[50vw] bg-blue-500/10 blur-[100px] rounded-full will-change-transform"
        style={{ 
          bottom: 0, 
          right: 0, 
          transform: 'translate(20%, 20%)',
          backfaceVisibility: 'hidden',
          perspective: 1000
        }}
      />
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" 
        style={{ transform: 'translateZ(0)' }}
      />
    </div>
  );
};

export default BackgroundElements;