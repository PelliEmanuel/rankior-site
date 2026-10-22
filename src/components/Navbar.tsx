import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-[-0.06em] text-[#101820]" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#007EA8] text-sm text-white">R</span>
          Rankior<span className="text-[#007EA8]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => <NavLink key={link.label} to={link.to} className="text-sm font-semibold text-[#526174] transition hover:text-[#007EA8]">{link.label}</NavLink>)}
        </nav>
        <Link to="/contacto" className="hidden items-center gap-2 rounded-full bg-[#007EA8] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#007EA8]/20 transition hover:-translate-y-0.5 hover:bg-[#006d91] sm:flex">
          Hablemos de tu proyecto <ArrowUpRight size={16} />
        </Link>
        <button className="rounded-xl p-2 text-[#101820] lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden"><nav className="flex flex-col gap-4">{links.map((link) => <NavLink key={link.label} to={link.to} onClick={() => setOpen(false)} className="text-base font-semibold text-[#526174]">{link.label}</NavLink>)}<Link to="/contacto" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#007EA8] px-5 py-3 text-center text-sm font-bold text-white">Hablemos de tu proyecto</Link></nav></div>}
    </header>
  );
}
