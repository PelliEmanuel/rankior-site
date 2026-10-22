import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import EcommerceMockup from "./EcommerceMockup";

export default function PremiumHero() {
  return <section className="relative overflow-clip bg-white pb-12 pt-32 sm:pt-36 lg:pt-40" aria-labelledby="premium-title">
    <div className="container-page relative z-10 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[.25em] text-brand-700 sm:text-xs">Rankior / Shopify & Ecommerce Growth</p>
      <h1 id="premium-title" className="hero-title mx-auto mt-6 max-w-6xl text-ink">No es solo una tienda.<br/><span className="text-brand-600">Es tu siguiente etapa.</span></h1>
      <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-secondary-ink sm:text-lg sm:leading-8">Creamos tiendas Shopify donde el diseño, la tecnología y el negocio se sienten como una sola experiencia.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"><Link to="/contacto" className="premium-button">Hablemos de tu proyecto <ArrowUpRight size={17}/></Link><a href="#experiencia" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">Descubre la experiencia <ArrowRight size={16}/></a></div>
    </div>
    <div className="container-page relative mt-12 sm:mt-16">
      <div className="relative mx-auto max-w-[1000px] pb-16 pl-0 pr-12 sm:pr-24 lg:px-12">
        <div className="absolute inset-x-4 bottom-16 top-16 rounded-[2rem] bg-brand-50 sm:inset-x-0 sm:rounded-[3rem]"/>
        <div className="relative rounded-2xl border-[5px] border-[#34424D] bg-[#34424D] shadow-[0_35px_80px_rgba(16,24,32,.18)] sm:border-[8px]"><EcommerceMockup eager sizes="(max-width: 639px) calc(100vw - 100px), (max-width: 1023px) calc(100vw - 160px), 886px"/></div>
        <div className="absolute bottom-5 right-0 w-[146px] sm:w-[210px] lg:w-[240px]" style={{ transform: "rotate(4deg)" }}><EcommerceMockup mobile eager/></div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-1 sm:left-4"><span className="text-[9px] font-bold uppercase tracking-[.14em] text-secondary-ink">Nómada / Concepto de diseño</span><span className="text-[9px] text-secondary-ink">Marca ficticia. No es un proyecto de cliente.</span></div>
      </div>
    </div>
    <div className="container-page mt-6"><div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-slate-200 py-6 text-[10px] font-medium tracking-wide text-secondary-ink sm:gap-x-12 sm:text-xs"><span>Diseño con intención.</span><span>Tecnología que conecta.</span><span>Preparado para evolucionar.</span><a href="#experiencia" aria-label="Continuar a la experiencia" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-brand-700 hover:bg-brand-50"><ArrowDown size={14}/></a></div></div>
  </section>;
}
