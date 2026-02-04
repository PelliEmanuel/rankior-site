"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DiagnosticDialog from './DiagnosticDialog';

const Navbar = () => {
  const navLinks = [
    { name: "Servicios", href: "/servicios" },
    { name: "Casos", href: "/casos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-white">
            Rankior<span className="text-indigo-500">.</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <DiagnosticDialog>
            <Button className="hidden sm:flex bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6">
              Agendar diagnóstico
            </Button>
          </DiagnosticDialog>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#020617] border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-white text-left">Menú</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href} 
                      className="text-xl font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <DiagnosticDialog>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-full py-6 text-lg">
                      Agendar diagnóstico
                    </Button>
                  </DiagnosticDialog>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;