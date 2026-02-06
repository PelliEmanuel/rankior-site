"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#020617]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Mission Section */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <Link to="/" className="text-2xl font-bold tracking-tighter text-white mb-6 block">
                Rankior<span className="text-indigo-500">.</span>
              </Link>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Star size={40} className="text-indigo-400" />
                </div>
                <h3 className="text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  Nuestra Misión
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "Brindamos un servicio con la más alta ética profesional, atención a los detalles e intencionalidad en todo lo que creamos. Pensamos siempre en el mejor interés de nuestros clientes y de todas las personas que interactúan con nuestros expertos, buscando establecer vínculos y bienestar a largo plazo. Innovamos constantemente, mejorando nuestras prácticas e iterando diariamente para proveer el mejor servicio posible. Nos enorgullece dar una atención de 5 estrellas; cada trabajo que presentamos y cada cosa que creamos habla de nuestro compromiso inquebrantable con el éxito de nuestros clientes."
                </p>
              </div>
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Compañía</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/casos" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
              <li><Link to="/vacantes" className="hover:text-white transition-colors">Vacantes</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Recursos</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
              <li><Link to="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Rankior. Todos los derechos reservados. Hecho con intencionalidad en México.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Sistemas Operativos al 100%
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;