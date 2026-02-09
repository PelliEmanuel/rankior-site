"use client";

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ contain: 'strict' }}
    >
      <motion.div 
        initial={{ scale: 1, opacity: 0.1 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full will-change-transform"
      />
      <motion.div 
        initial={{ scale: 1, opacity: 0.05 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full will-change-transform"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>
  );
};

export default BackgroundElements;