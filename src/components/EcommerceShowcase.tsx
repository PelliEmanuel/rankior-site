import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Monitor, MousePointer2, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EcommerceMockup, { Concept, concepts, StoreView } from "./EcommerceMockup";

export function HeroStoreVisual() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotateY = useTransform(scrollYProgress, [0, 1], [-7, 9]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -8]);
  const depthY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  return <motion.div ref={ref} initial={reduced ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[640px] pb-12 pl-2 pr-12 sm:pl-4 sm:pr-16 lg:-mr-8" style={{ perspective: 1300 }}>
    <div className="absolute -left-5 -top-9 h-32 w-32 rounded-full border border-[#007EA8]/10 sm:h-48 sm:w-48"/>
    <motion.div style={reduced ? {} : { rotateX, rotateY, y: depthY }} transition={{ duration: .4 }} className="relative"><EcommerceMockup eager/></motion.div>
    <motion.div initial={reduced ? false : { opacity: 0, y: 40, rotate: 5 }} animate={{ opacity: 1, y: 0, rotate: 4 }} transition={{ duration: .8, delay: .45 }} whileHover={reduced ? undefined : { rotate: 0, y: -8 }} className="absolute -bottom-2 right-0 w-[125px] sm:w-[172px]"><EcommerceMockup mobile eager/></motion.div>
    <motion.div initial={reduced ? false : { opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .7 }} className="absolute -left-1 bottom-8 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-xl sm:-left-5"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF7FB] text-[#007EA8]"><Check size={16}/></span><div><p className="text-[10px] font-bold text-[#101820]">Cada pantalla cuenta.</p><p className="mt-0.5 text-[9px] text-[#526174]">Diseño desktop + mobile</p></div></motion.div>
    <p className="mt-4 text-[10px] font-medium tracking-wide text-[#526174]">NÓMADA · CONCEPTO VISUAL / NO ES UN PROYECTO DE CLIENTE</p>
  </motion.div>;
}

export default function EcommerceShowcase() {
  const [concept, setConcept] = useState<Concept>("nomada");
  const [view, setView] = useState<StoreView>("tienda");
  const [added, setAdded] = useState(false);
  const reduced = useReducedMotion();
  const choose = (next: Concept) => { setConcept(next); setAdded(false); };
  return <section className="bg-[#101820] py-20 text-white lg:py-28" aria-labelledby="showcase-title"><div className="container-page">
    <motion.div initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }} className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div className="max-w-2xl"><p className="eyebrow text-[#95E9C6]">Del concepto a la experiencia</p><h2 id="showcase-title" className="mt-4 text-4xl font-black leading-[1.06] tracking-[-.05em] sm:text-5xl lg:text-6xl">No solo te lo contamos.<br/><span className="text-[#95E9C6]">Te lo mostramos.</span></h2></div><p className="max-w-sm text-sm leading-7 text-slate-300">Dos universos de marca. Una misma atención al detalle. Explora cómo podría sentirse una tienda Shopify diseñada para tu negocio.</p></motion.div>
    <div className="mt-10 flex flex-wrap gap-3" aria-label="Seleccionar concepto de tienda">{(Object.keys(concepts) as Concept[]).map((key) => <Button key={key} type="button" onClick={() => choose(key)} aria-pressed={concept === key} className={`h-auto rounded-full border px-5 py-3 text-sm transition ${concept === key ? "border-[#95E9C6] bg-[#95E9C6] text-[#101820] hover:bg-[#95E9C6]/90" : "border-white/20 bg-transparent text-white hover:bg-white/10"}`}><span className="mr-2 font-serif text-lg">{concepts[key].name}</span><span className="hidden text-xs sm:inline">/ {concepts[key].category}</span></Button>)}</div>
    <div className="mt-7 overflow-hidden rounded-[2rem] border border-white/10 bg-[#1B2931] p-5 sm:p-8 lg:p-12"><div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div className="inline-flex w-fit flex-wrap gap-1 rounded-full bg-[#101820] p-1" aria-label="Seleccionar vista del mockup">{([['tienda','Inicio'],['producto','Producto'],['carrito','Carrito']] as const).map(([key,label]) => <button key={key} type="button" aria-pressed={view === key} onClick={() => setView(key)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${view === key ? "bg-white text-[#101820]" : "text-slate-300 hover:text-white"}`}>{label}</button>)}</div><span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-[#95E9C6]"/>Demostración interactiva</span></div>
    <AnimatePresence mode="wait"><motion.div key={concept + view} initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .3 }} className="grid items-center gap-7 md:grid-cols-[1fr_180px] lg:grid-cols-[1fr_225px]"><div><div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-300"><Monitor size={13}/>Diseño de escritorio</div><EcommerceMockup concept={concept} view={view} added={added} onAdd={() => { setAdded(true); setView("carrito"); }}/></div><div className="mx-auto w-[180px] md:w-full"><div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-widest text-slate-300"><Smartphone size={13}/>Mobile first</div><motion.div whileHover={reduced ? undefined : { y: -7 }}><EcommerceMockup concept={concept} mobile view={view} added={added} onAdd={() => { setAdded(true); setView("carrito"); }}/></motion.div></div></motion.div></AnimatePresence>
    <div className="mt-7 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-xs text-slate-300 sm:flex-row"><span className="flex items-center gap-2"><MousePointer2 size={14} className="text-[#95E9C6]"/>Explora las vistas y prueba añadir un producto.</span><span>Marcas ficticias · Sin transacciones reales</span></div></div>
    <div className="mt-8 grid gap-4 sm:grid-cols-3">{[["01 / Dirección visual","Una identidad que se reconoce."],["02 / Experiencia de compra","De descubrir a elegir, sin fricción."],["03 / Diseño responsive","Tu marca, en cualquier pantalla."]].map(([label,title],i) => <motion.div key={label} initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .1 }} className="rounded-2xl border border-white/10 p-6"><p className="text-[10px] font-bold uppercase tracking-widest text-[#95E9C6]">{label}</p><h3 className="mt-3 text-lg font-semibold tracking-tight">{title}</h3></motion.div>)}</div>
    <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p className="max-w-lg text-sm leading-7 text-slate-300">Estas muestras ilustran una dirección de diseño. Tu tienda se define a partir de tu marca, catálogo y necesidades reales.</p><Link to="/contacto" className="inline-flex items-center gap-3 text-sm font-bold text-[#95E9C6]">Imaginemos tu próxima tienda <ArrowRight size={17}/></Link></div>
  </div></section>;
}
