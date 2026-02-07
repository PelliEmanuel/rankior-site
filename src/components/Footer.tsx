"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
              Rankior<span className="text-indigo-500">.</span>
            </Link>
            <p className="text-slate-400 max-w-xs">
              Expertos en implementación de Odoo ERP para el mercado mexicano. Transformamos empresas con tecnología de clase mundial.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6">Compañía</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/nosotros#mision" className="hover:text-white transition-colors">Nuestra Misión</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/casos" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/vacantes" className="hover:text-white transition-colors">Vacantes</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Recursos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Rankior. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;