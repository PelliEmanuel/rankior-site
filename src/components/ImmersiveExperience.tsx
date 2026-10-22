import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Check, Layers3, Smartphone } from "lucide-react";
import EcommerceMockup from "./EcommerceMockup";

export default function ImmersiveExperience() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rotateX = useTransform(scrollYProgress, [0, .55, 1], [18, 3, -3]);
  const rotateY = useTransform(scrollYProgress, [0, .55, 1], [-16, -6, 0]);
  const scale = useTransform(scrollYProgress, [0, .7, 1], [.86, 1, 1]);
  const phoneX = useTransform(scrollYProgress, [0, .6, 1], [0, 28, 32]);
  const phoneY = useTransform(scrollYProgress, [0, .6, 1], [45, -10, -30]);
  const layerY = useTransform(scrollYProgress, [0, .65, 1], [0, -65, -90]);
  const firstOpacity = useTransform(scrollYProgress, [0, .32, .48, 1], [1, 1, 0, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0, .42, .58, 1], [0, 0, 1, 1]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <section ref={ref} id="experiencia" aria-labelledby="experience-title" className={`relative scroll-mt-[76px] bg-ink text-white ${reduced ? "" : "lg:h-[240svh]"}`}>
    <div className={`${reduced ? "" : "lg:sticky lg:top-[76px] lg:flex lg:min-h-[680px] lg:h-[calc(100svh-76px)] lg:flex-col lg:justify-center"} overflow-clip py-20 lg:py-12`}>
      <div className="container-page relative w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
          <div className="relative z-10"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-mint">Diseño visible. Inteligencia detrás.</p>
            <h2 id="experience-title" className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-5xl lg:text-[3.6rem]">Cada detalle.<br/>En su lugar.</h2>
            <div className="relative mt-6 lg:min-h-40">
              <motion.div className="cinema-copy" style={reduced ? {} : { opacity: firstOpacity }}><p className="max-w-sm text-base leading-8 text-slate-300">Una marca que se reconoce. Un producto que se entiende. Una experiencia que invita a seguir.</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-mint"><Layers3 size={15}/>01 / Diseño con intención</span></motion.div>
              {!reduced && <motion.div style={{ opacity: secondOpacity }} className="cinema-next absolute inset-0 hidden lg:block"><p className="max-w-sm text-base leading-8 text-slate-300">Lo que ves es solo el principio. Conectamos la experiencia móvil con la tecnología y la operación de tu negocio.</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-mint"><Smartphone size={15}/>02 / Una experiencia conectada</span></motion.div>}
            </div>
            <p className="mt-4 flex items-center gap-2 text-[10px] text-slate-400"><ArrowDownRight size={13}/>Continúa para descubrir lo que hay detrás.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[670px] pb-16 pl-2 pr-14 sm:pr-20 lg:pb-14 lg:pl-0 lg:pr-14" style={{ perspective: 1600 }}>
            <div className="absolute -inset-4 rounded-[3rem] border border-white/5 sm:-inset-8" aria-hidden="true"/>
            <motion.div className="cinema-stage relative" style={reduced ? {} : { rotateX, rotateY, scale, transformStyle: "preserve-3d" }}>
              <div className="absolute inset-0 rounded-2xl border border-brand-400/25 bg-brand-900/50" style={{ transform: "translateZ(-60px) translate(18px, 18px)" }} aria-hidden="true"/>
              <div className="relative rounded-2xl border-[5px] border-slate-600 bg-slate-600 shadow-[0_35px_75px_rgba(0,0,0,.28)]"><EcommerceMockup concept="botanica"/></div>
              <motion.div style={reduced ? {} : { x: phoneX, y: phoneY, translateZ: 90 }} className="cinema-phone absolute -bottom-12 -right-6 w-[110px] sm:w-[160px] lg:w-[175px]"><EcommerceMockup concept="botanica" mobile/></motion.div>
              <motion.div style={reduced ? {} : { y: layerY, translateZ: 120 }} className="cinema-detail absolute -left-4 bottom-5 hidden rounded-2xl border border-white/30 bg-white/95 p-4 text-ink shadow-xl sm:block"><span className="flex items-center gap-2 text-[10px] font-semibold"><Check size={13} className="text-brand-700"/>Marca + experiencia + operación</span><div className="mt-3 flex gap-1.5"><span className="h-1 w-12 rounded-full bg-brand-600"/><span className="h-1 w-8 rounded-full bg-mint"/><span className="h-1 w-5 rounded-full bg-slate-200"/></div></motion.div>
            </motion.div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[9px] font-medium uppercase tracking-[.12em] text-slate-400 sm:flex-row lg:mt-9"><span>Botánica / Demostración conceptual · No es un proyecto de cliente</span><span className="text-slate-300">Sin transacciones reales</span></div>
      </div>
      {!reduced && <div className="absolute inset-x-0 bottom-0 hidden h-px bg-white/10 lg:block"><motion.div className="h-full bg-mint" style={{ width: progress }}/></div>}
    </div>
  </section>;
}
