"use client";

import React from 'react';
import { LucideIcon, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, features, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 group h-full flex flex-col"
    >
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
        <Icon className="text-indigo-400" size={28} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 mb-2">
        {features.map((feat, j) => (
          <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
            <Zap size={14} className="text-indigo-500 shrink-0" />
            {feat}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;