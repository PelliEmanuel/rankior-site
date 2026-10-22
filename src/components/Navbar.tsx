import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import BrandLogo from "./BrandLogo";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nuestro proceso", to: "/#proceso" },
  { label: "Recursos", to: "/recursos" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const active = (to: string) => to.includes("#") ? pathname === "/" && hash === "#proceso" : to === "/" ? pathname === "/" && !hash : pathname === to || pathname.startsWith(`${to}/`);
  return <>
    <a href="#contenido-principal" className="sr-only fixed left-4 top-3 z-[100] rounded-full bg-brand-600 px-5 py-3 font-bold text-white focus:not-sr-only">Saltar al contenido</a>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-100/70 bg-white/95 backdrop-blur-xl">
      <div className="container-page flex h-[76px] items-center justify-between gap-4">
        <Link to="/" aria-label="Rankior — Inicio" className="shrink-0 rounded-xl" onClick={() => setOpen(false)}><BrandLogo /></Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-1 xl:flex">
          {links.map((link) => <Link key={link.label} to={link.to} aria-current={active(link.to) ? "location" : undefined} className={cn("rounded-full px-3 py-2.5 text-[13px] font-semibold transition-colors", active(link.to) ? "bg-brand-50 text-brand-700" : "text-secondary-ink hover:bg-brand-50 hover:text-brand-700")}>{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contacto" className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-600/15 transition hover:bg-brand-700 sm:inline-flex">Hablemos de tu proyecto <ArrowUpRight size={16}/></Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild><Button variant="ghost" size="icon" className="h-11 w-11 rounded-full text-brand-700 hover:bg-brand-50 xl:hidden" aria-label="Abrir menú de navegación"><Menu size={23}/></Button></SheetTrigger>
            <SheetContent className="flex w-[min(90vw,380px)] flex-col border-brand-100 bg-white p-6 text-ink">
              <SheetHeader className="text-left"><SheetTitle><BrandLogo/></SheetTitle><SheetDescription className="pt-2 text-sm text-secondary-ink">Diseño, tecnología y crecimiento ecommerce.</SheetDescription></SheetHeader>
              <nav aria-label="Navegación móvil" className="mt-8 flex flex-col gap-2">{links.map((link) => <Link key={link.label} to={link.to} onClick={() => setOpen(false)} aria-current={active(link.to) ? "location" : undefined} className={cn("rounded-2xl px-4 py-3.5 text-base font-semibold transition-colors", active(link.to) ? "bg-brand-50 text-brand-700" : "text-secondary-ink hover:bg-brand-50 hover:text-brand-700")}>{link.label}</Link>)}</nav>
              <Link to="/contacto" onClick={() => setOpen(false)} className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-4 text-sm font-bold text-white hover:bg-brand-700">Hablemos de tu proyecto <ArrowUpRight size={17}/></Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  </>;
}
