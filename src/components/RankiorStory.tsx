import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Braces, Check, Compass, Layers3, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import EcommerceMockup from "./EcommerceMockup";
import { BrandMark } from "./BrandLogo";

const chapters = [
  { number: "01", label: "Nuestro punto de partida", title: "Entender lo que hay detrás de cada negocio.", accent: "No empezamos por una pantalla.", text: "Rankior nace de la combinación de marketing digital, tecnología y procesos empresariales. Esa mirada nos lleva a pensar más allá de una tienda: en las personas que compran y en la operación que la hace posible.", tags: ["Marketing digital", "Tecnología", "Procesos empresariales"] },
  { number: "02", label: "Nuestra evolución", title: "De conectar sistemas a conectar experiencias.", accent: "La tecnología cobra sentido cuando todo encaja.", text: "Nuestra evolución desde las implementaciones ERP hacia Shopify y ecommerce conserva algo esencial: entender cómo funciona un negocio. Hoy unimos esa perspectiva con diseño, desarrollo y estrategia comercial.", tags: ["Diseño ecommerce", "Desarrollo Shopify", "Integraciones"] },
  { number: "03", label: "Lo que queremos construir", title: "Una tienda es el comienzo. No el destino.", accent: "Diseñamos para la siguiente etapa.", text: "Queremos ayudar a marcas y empresas a lanzar, operar y escalar su comercio electrónico. Con bases mantenibles, decisiones claras y acompañamiento según lo que cada negocio necesita.", tags: ["Lanzar", "Operar", "Evolucionar"] },
];

function OriginScene() {
  return <div className="relative mx-auto h-[340px] w-full max-w-[430px] sm:h-[410px]" style={{ transformStyle: "preserve-3d" }}>
    <div className="absolute inset-x-7 bottom-8 h-48 rounded-[2rem] border border-brand-600/20 bg-brand-50" style={{ transform: "translateZ(-45px) rotateX(48deg) rotateZ(-20deg)", boxShadow: "0 35px 50px rgba(0,126,168,.12)" }}/>
    {[{Icon: Compass,title:"Estrategia",sub:"Entender antes de construir",className:"left-0 top-4",z:30},{Icon: Braces,title:"Tecnología",sub:"Convertir ideas en soluciones",className:"right-0 top-28",z:70},{Icon: Layers3,title:"Operación",sub:"Mirar el negocio completo",className:"bottom-5 left-5",z:110}].map(({Icon,title,sub,className,z},i) => <div key={title} className={`absolute w-[72%] rounded-2xl border border-white bg-white p-5 shadow-[0_20px_50px_rgba(0,76,100,.12)] sm:p-6 ${className}`} style={{ transform: `translateZ(${z}px) rotateZ(${i === 1 ? 5 : -4}deg)` }}><div className="flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon size={22}/></span><div><p className="text-base font-semibold text-ink">{title}</p><p className="mt-1 text-[10px] text-secondary-ink">{sub}</p></div></div><div className="mt-4 flex gap-1.5">{[1,2,3,4,5].map((n)=><span key={n} className={`h-1 rounded-full ${n < 4 ? "bg-brand-600/40" : "bg-slate-100"}`} style={{ width: `${n * 12}%` }}/>)}</div></div>)}
    <span className="absolute -right-1 bottom-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 text-3xl font-semibold text-white shadow-xl" style={{ transform: "translateZ(140px) rotateZ(10deg)" }}><BrandMark className="h-full w-full"/></span>
  </div>;
}

function ConnectionScene() {
  return <div className="relative mx-auto h-[350px] w-full max-w-[460px] sm:h-[410px]" style={{ transformStyle: "preserve-3d" }}>
    <div className="absolute inset-x-8 top-8 h-64 rounded-[2rem] border border-brand-600/20 bg-white/70" style={{ transform: "translateZ(-40px) rotateZ(-8deg)", boxShadow: "0 30px 60px rgba(0,126,168,.10)" }}/>
    <svg viewBox="0 0 460 400" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true"><path d="M95 90H230V300M230 190H375M95 300H375V90" stroke="#007EA8" strokeOpacity=".35" strokeWidth="2" strokeDasharray="5 7"/><circle cx="230" cy="190" r="90" stroke="#007EA8" strokeOpacity=".15"/></svg>
    <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-white/30 bg-brand-600 text-white shadow-[0_25px_50px_rgba(0,126,168,.3)]"><ShoppingBag size={30}/><span className="mt-3 text-xs font-bold">Tu ecommerce</span></div>
    {[{title:"Diseño",sub:"Experiencia de marca",position:"left-0 top-4"},{title:"SEO & Growth",sub:"Descubrir y mejorar",position:"right-0 top-8"},{title:"Inventario / ERP",sub:"Operación conectada",position:"bottom-5 left-0"},{title:"Automatización",sub:"Procesos más claros",position:"bottom-0 right-0"}].map(({title,sub,position},i)=><div key={title} className={`absolute rounded-2xl border border-slate-200 bg-white p-4 shadow-xl ${position}`} style={{ transform: `translateZ(${40 + i * 10}px)` }}><span className="mb-2 block h-1.5 w-6 rounded-full bg-mint"/><p className="text-xs font-semibold text-ink">{title}</p><p className="mt-1 text-[9px] text-secondary-ink">{sub}</p></div>)}
  </div>;
}

function FutureScene() {
  return <div className="relative mx-auto w-full max-w-[490px] pb-8 pr-12 sm:pr-16" style={{ transformStyle: "preserve-3d" }}><div className="absolute -inset-3 rounded-[2rem] border border-brand-600/15" style={{ transform: "translateZ(-35px) rotateZ(-4deg)" }}/><div style={{ transform: "translateZ(20px)" }}><EcommerceMockup concept="botanica"/></div><div className="absolute -bottom-2 right-0 w-[120px] sm:w-[145px]" style={{ transform: "translateZ(85px) rotateZ(6deg)" }}><EcommerceMockup concept="botanica" mobile/></div><span className="absolute -left-3 bottom-10 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-[10px] font-bold text-brand-600 shadow-lg" style={{ transform: "translateZ(110px)" }}><Check size={14}/>Una base para evolucionar</span></div>;
}

function StoryChapter({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, .5, 1], [12, 0, -8]);
  const rotateY = useTransform(scrollYProgress, [0, .5, 1], [index % 2 ? 12 : -12, 0, index % 2 ? -8 : 8]);
  const y = useTransform(scrollYProgress, [0, .5, 1], [35, 0, -25]);
  const chapter = chapters[index];
  return <div ref={ref} className={`relative grid items-center gap-12 border-t border-brand-600/15 py-16 lg:min-h-[70vh] lg:grid-cols-2 lg:gap-24 lg:py-24 ${index % 2 ? "" : ""}`}>
    <motion.div initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6 }} className={index % 2 ? "lg:order-2" : ""}><p className="eyebrow flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-600/25">{chapter.number}</span>{chapter.label}</p><h3 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-.05em] text-ink sm:text-5xl">{chapter.title}</h3><p className="mt-6 text-lg font-semibold leading-7 text-brand-600">{chapter.accent}</p><p className="mt-4 text-base leading-8 text-secondary-ink">{chapter.text}</p><div className="mt-7 flex flex-wrap gap-2">{chapter.tags.map(tag=><span key={tag} className="rounded-full border border-brand-600/15 bg-white px-3 py-2 text-[11px] font-semibold text-secondary-ink">{tag}</span>)}</div></motion.div>
    <div className={`relative px-4 py-7 sm:px-8 ${index % 2 ? "lg:order-1" : ""}`} style={{ perspective: 1200 }}><div className="absolute inset-3 rounded-[3rem] bg-brand-50/80"/><motion.div style={reduced ? {} : { rotateX, rotateY, y, transformStyle: "preserve-3d" }} className="relative">{index === 0 ? <OriginScene/> : index === 1 ? <ConnectionScene/> : <FutureScene/>}</motion.div></div>
  </div>;
}

export default function RankiorStory() {
  return <section id="historia" className="relative bg-canvas py-16 lg:py-24" aria-labelledby="rankior-story-title"><div className="container-page"><div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div className="max-w-3xl"><p className="eyebrow">La historia detrás de lo que hacemos</p><h2 id="rankior-story-title" className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl">No construimos solo tiendas.<br/><span className="text-brand-600">Conectamos posibilidades.</span></h2></div><a href="#historia-capitulos" className="flex w-fit items-center gap-3 text-xs font-bold text-secondary-ink">Conoce nuestra evolución <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-600/25 text-brand-600"><ArrowDown size={17}/></span></a></div><div id="historia-capitulos" className="scroll-mt-24">{chapters.map((chapter,index)=><StoryChapter key={chapter.number} index={index}/>)}</div></div></section>;
}

export function StoryClosing() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0,1], [-18,18]);
  return <section ref={ref} className="relative overflow-hidden bg-brand-50 py-20 lg:py-28"><div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]"><div className="relative z-10"><p className="eyebrow">El próximo capítulo</p><h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-5xl">Nuestra historia sigue.<br/>Y puede conectar con la tuya.</h2><p className="mt-6 max-w-xl leading-8 text-secondary-ink">Un negocio nuevo. Una migración. Una experiencia que necesita mejorar. No importa el punto de partida: queremos entenderlo y ayudarte a avanzar con claridad.</p><Link to="/nosotros" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-600">Conoce la filosofía de Rankior <ArrowRight size={17}/></Link></div><div className="relative mx-auto flex h-64 w-full max-w-xs items-center justify-center sm:h-80" style={{ perspective: 900 }}><motion.div style={reduced ? {} : { rotateY: rotate, rotateX: 16, transformStyle: "preserve-3d" }} className="relative h-44 w-44 sm:h-56 sm:w-56"><div className="absolute inset-0 rounded-[2.5rem] border border-brand-600/25 bg-white/50" style={{ transform: "translateZ(-60px) rotateZ(-12deg)" }}/><div className="absolute inset-0 rounded-[2.5rem] border border-brand-600/25 bg-mint/50" style={{ transform: "translateZ(-30px) rotateZ(-6deg)" }}/><div className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] border border-white/30 bg-brand-600 text-7xl font-semibold tracking-tighter text-white shadow-2xl sm:text-8xl"><BrandMark className="h-full w-full"/></div><span className="absolute -right-7 -top-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-600 shadow-xl" style={{ transform: "translateZ(70px)" }}><Sparkles size={25}/></span><span className="absolute -bottom-5 -left-8 rounded-full bg-white px-5 py-3 text-xs font-bold text-brand-600 shadow-lg" style={{ transform: "translateZ(80px)" }}>Diseñamos para avanzar.</span></motion.div></div></div></section>;
}
