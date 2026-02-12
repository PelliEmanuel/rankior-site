"use client";

import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="36" 
        height="36" 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Fondo del icono con gradiente suave */}
        <rect width="36" height="36" rx="10" fill="#6366f1" />
        <path 
          d="M11 9V27M11 9H20C22.7614 9 25 11.2386 25 14C25 16.7614 22.7614 19 20 19H11M20 19L25 27" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* Detalle decorativo */}
        <circle cx="28" cy="8" r="3" fill="white" fillOpacity="0.2" />
      </svg>
      <span className="text-2xl font-bold tracking-tighter text-white">
        Rankior<span className="text-indigo-500">.</span>
      </span>
    </div>
  );
};

export default Logo;