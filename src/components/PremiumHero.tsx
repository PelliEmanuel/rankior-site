import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import EcommerceMockup from "./EcommerceMockup";

export default function PremiumHero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, .6], [9, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const rise = { initial: reduced ? false as const : { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 } };
  return <section ref={ref} className="relative overflow-clip bg-white pb-12 pt-36 sm:pt-40 lg:pt-44" aria-labelledby="premium-title">
    <div className="container-page relative z-10 text-center">
      <motion.p {...rise} transition={{ duration: .7 }} className="text-[10px] font-bold uppercase tracking-[.25em] text-brand-700 sm:text-xs">Rankior / Shopify & Ecommerce Growth</motion.p>
      <motion.h1 {...rise} transition={{ duration: .8, delay: .1 }} id="premium-title" className="mx-auto mt-6 max-w-5xl text-[clamp(2.9rem,7.5vw,6.8rem)] font-semibold leading-[.99] tracking-[-.065em] text-ink">No es solo una tienda.<br/><span className="text-brand-600">Es tu siguiente etapa.</span></motion.h1>
      <motion.p {...rise} transition={{ duration: .8, delay: .2 }} className="mx-auto mt-7 max-w-xl text-base leading-7 text-secondary-ink sm:text-lg sm:leading-8">Creamos tiendas Shopify donde el diseño, la tecnología y el negocio se sienten como una sola experiencia.</motion.p>
      <motion.div {...rise} transition={{ duration: .7, delay: .3 }} className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"><Link to="/contacto" className="premium-button">Hablemos de tu proyecto <ArrowUpRight size={17}/></Link><a href="#experiencia" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">Descubre la experiencia <ArrowRight size={16}/></a></motion.div>
    </div>
    <motion.div {...rise} transition={{ duration: 1, delay: .35 }} className="container-page relative mt-14 sm:mt-20">
      <div className="relative mx-auto max-w-[1000px] pb-16 pl-0 pr-10 sm:pr-20 lg:px-12" style={{ perspective: 1800 }}>
        <div className="absolute inset-x-4 bottom-16 top-16 rounded-[2rem] bg-brand-50 sm:inset-x-0 sm:rounded-[3rem]"/>
        <motion.div className="relative rounded-2xl border-[5px] border-[#34424D] bg-[#34424D] shadow-[0_35px_80px_rgba(16,24,32,.18)] sm:border-[8px]" style={reduced ? {} : { rotateX, y }}><EcommerceMockup eager/></motion.div>
        <motion.div initial={reduced ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .65 }} className="absolute bottom-5 right-0 w-[116px] sm:w-[170px] lg:right-0 lg:w-[195px]" style={{ transform: "rotate(5deg)" }}><EcommerceMockup mobile eager/></motion.div>
        <div className="absolute bottom-0 left-0 flex flex-col gap-1 sm:left-4"><span className="text-[9px] font-bold uppercase tracking-[.14em] text-secondary-ink">Nómada / Concepto de diseño</span><span className="text-[9px] text-secondary-ink">Marca ficticia. No es un proyecto de cliente.</span></div>
      </div>
    </motion.div>
    <div className="container-page mt-6"><div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-slate-200 py-6 text-[10px] font-medium tracking-wide text-secondary-ink sm:gap-x-12 sm:text-xs"><span>Diseño con intención.</span><span>Tecnología que conecta.</span><span>Preparado para evolucionar.</span><a href="#experiencia" aria-label="Continuar a la experiencia" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-brand-700 hover:bg-brand-50"><ArrowDown size={14}/></a></div></div>
  </section>;
}
