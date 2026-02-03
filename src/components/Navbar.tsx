"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white">
            Rankior<span className="text-indigo-500">.</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#oferta" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Oferta</a>
          <a href="#proceso" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Cómo funciona</a>
          <a href="#precios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Precios</a>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
            Agendar diagnóstico
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;