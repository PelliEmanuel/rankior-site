"use client";

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-20 left-0 right-0 h-1 bg-indigo-500 origin-left z-[60]"
      style={{ scaleX }}
    />
  );
};

export default ReadingProgress;