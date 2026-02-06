"use client";

import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      "max-w-3xl mb-16",
      centered ? "mx-auto text-center" : "text-left",
      className
    )}>
      {subtitle && (
        <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-lg mt-6 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;