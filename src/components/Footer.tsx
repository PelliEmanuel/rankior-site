import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return <footer className="bg-ink text-white">
    <div className="container-page py-16">
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div><Link to="/" aria-label="Rankior — Inicio" className="inline-block rounded-xl"><BrandLogo inverse/></Link><p className="mt-5 max-w-xs text-sm leading-7 text-slate-300">Diseño, tecnología y estrategia para construir ecommerce preparados para crecer.</p></div>
        <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-mint">Servicios</h3><ul className="space-y-3 text-sm text-slate-300"><li><Link to="/servicios/shopify" className="hover:text-white">Tiendas Shopify</Link></li><li><Link to="/servicios/migracion-shopify" className="hover:text-white">Migración a Shopify</Link></li><li><Link to="/servicios/optimizacion-ecommerce" className="hover:text-white">Optimización & Growth</Link></li><li><Link to="/servicios/integraciones" className="hover:text-white">Integraciones</Link></li></ul></div>
        <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-mint">Explora</h3><ul className="space-y-3 text-sm text-slate-300"><li><Link to="/nosotros" className="hover:text-white">Nosotros</Link></li><li><Link to="/recursos" className="hover:text-white">Recursos</Link></li><li><Link to="/contacto" className="hover:text-white">Contacto</Link></li><li><Link to="/privacidad" className="hover:text-white">Privacidad</Link></li><li><Link to="/terminos" className="hover:text-white">Términos de servicio</Link></li></ul></div>
        <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-mint">Contacto</h3><a href="mailto:hola@rankior.com" className="text-sm text-slate-300 hover:text-white">hola@rankior.com</a><p className="mt-4 text-sm leading-6 text-slate-300">México · Servicios para marcas en crecimiento</p></div>
      </div>
      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Rankior. Todos los derechos reservados.</span><span>Diseñamos para avanzar.</span></div>
    </div>
  </footer>;
}
