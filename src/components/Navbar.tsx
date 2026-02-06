"use client";

import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import DiagnosticDialog from './DiagnosticDialog';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Servicios", href: "/servicios" },
    { name: "Casos", href: "/casos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
            Rankior<span className="text-indigo-500">.</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name}
              to={link.href} 
              className={({ isActive }) => cn(
                "text-sm font-medium transition-colors relative py-2",
                isActive ? "text-white" : "text-slate-400 hover:text-white"
              )}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full" 
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <DiagnosticDialog>
            <Button className="hidden sm:flex bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 transition-all hover:scale-105 active:scale-95">
              Agendar diagnóstico
            </Button>
          </DiagnosticDialog>
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white" aria-label="Abrir menú de navegación">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#020617] border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="text-white text-left">Menú</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <NavLink 
                      key={link.name}
                      to={link.href} 
                      className={({ isActive }) => cn(
                        "text-xl font-medium transition-colors",
                        isActive ? "text-indigo-400" : "text-slate-300 hover:text-white"
                      )}
                    >
                      {link.name}
                    </NavLink>
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
    </motion.nav>
  );
};

export default Navbar;