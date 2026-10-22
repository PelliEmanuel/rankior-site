import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Boxes, Check, LayoutTemplate, RefreshCw, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EcommerceShowcase from "@/components/EcommerceShowcase";
import RankiorStory, { StoryClosing } from "@/components/RankiorStory";
import CraftProcess from "@/components/CraftProcess";
import PremiumHero from "@/components/PremiumHero";
import ImmersiveExperience from "@/components/ImmersiveExperience";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: LayoutTemplate, title: "Una primera impresión. Inolvidable.", name: "Creación de tiendas Shopify", text: "Diseño responsive, catálogo, pagos y envíos. Una tienda que expresa tu marca y deja espacio para lo que sigue.", link: "/servicios/shopify", image: "/assets/nomada-interior.png", alt: "Dirección editorial para una tienda conceptual de mobiliario" },
  { icon: RefreshCw, title: "Cambia de plataforma. No de ambición.", name: "Migración a Shopify", text: "Cuidamos tus datos, estructura y SEO, con redirecciones y validaciones dentro del alcance contratado.", link: "/servicios/migracion-shopify", image: "/assets/botanica-skincare.png", alt: "Fotografía de producto para la tienda conceptual Botánica" },
  { icon: Zap, title: "Todo puede funcionar mejor.", name: "Optimización & Growth", text: "Experiencia de compra, SEO, analítica y rendimiento. Mejoras con intención, sin promesas porcentuales garantizadas.", link: "/servicios/optimizacion-ecommerce" },
  { icon: Boxes, title: "Cuando todo conecta, todo cambia.", name: "Integraciones & Automatización", text: "Conectamos Shopify con ERP, inventario, CRM y procesos compatibles. Tecnología al servicio de tu operación.", link: "/servicios/integraciones" },
];
const faqs = [
  ["¿Cuánto cuesta crear una tienda Shopify?", "El costo depende de tu catálogo, funcionalidades, diseño e integraciones. Primero entendemos tus necesidades y después definimos una propuesta con alcance claro. La suscripción de Shopify y los servicios de terceros se evalúan por separado."],
  ["¿Puedo migrar mi tienda actual?", "Sí. Revisamos tu plataforma, catálogo, estructura, SEO y dependencias para planear una transición ordenada, con redirecciones y validaciones dentro del alcance contratado."],
  ["¿Necesito conocimientos técnicos para administrar Shopify?", "Shopify permite gestionar productos, pedidos y contenido sin programar. Definimos la configuración y el acompañamiento que necesita tu equipo para operar con mayor autonomía."],
  ["¿Pueden ayudarme con SEO y conversión?", "Sí. Trabajamos estructura, contenidos, rendimiento, analítica y experiencia de compra para identificar y priorizar oportunidades. No garantizamos posiciones ni porcentajes de mejora."],
  ["¿Pueden conectar Shopify con un ERP?", "Evaluamos la compatibilidad técnica y viabilidad de conectar tu tienda con ERP, inventario, CRM u otras herramientas. Las integraciones se cotizan según su alcance."],
  ["¿Ofrecen soporte después del lanzamiento?", "Podemos definir acompañamiento posterior según tus necesidades. El tipo de soporte, alcance y condiciones se acuerdan en la propuesta."],
];

export default function Index() {
  const reduced = useReducedMotion();
  return <div className="premium-home min-h-screen overflow-x-clip bg-canvas"><Navbar/><main id="contenido-principal" tabIndex={-1}>
    <PremiumHero/>
    <ImmersiveExperience/>
    <RankiorStory/>

    <section id="servicios" className="premium-section bg-white" aria-labelledby="services-title">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end"><div><p className="eyebrow">Nuestra especialidad</p><h2 id="services-title" className="premium-heading mt-5">Todo parte de tu negocio.<br/><span className="text-secondary-ink">Todo conecta con su futuro.</span></h2></div><p className="max-w-xs text-sm leading-7 text-secondary-ink">Diseño, desarrollo y evolución. Elige el punto de partida; nosotros te ayudamos a trazar el camino.</p></div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, name, title, text, link, image, alt }, index) => <motion.article key={link} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .65, delay: index % 2 * .08 }} className="group overflow-hidden rounded-[1.75rem] bg-canvas">
            {image && <div className="relative h-56 overflow-hidden sm:h-72"><img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.035]"/><span className="absolute bottom-4 left-5 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold text-ink backdrop-blur-sm">Dirección visual · Concepto de demostración</span></div>}
            <div className="p-7 sm:p-9"><p className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[.14em] text-brand-700"><Icon size={15}/>{name}</p><h3 className="mt-5 max-w-sm text-2xl font-semibold leading-tight tracking-[-.035em] sm:text-3xl">{title}</h3><p className="mt-4 max-w-md text-sm leading-7 text-secondary-ink">{text}</p><Link to={link} className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700">Explorar servicio <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></Link></div>
          </motion.article>)}
        </div>
      </div>
    </section>

    <EcommerceShowcase/>
    <CraftProcess/>

    <section className="premium-section bg-canvas" aria-labelledby="solutions-title"><div className="container-page">
      <div className="max-w-3xl"><p className="eyebrow">Una solución para cada etapa</p><h2 id="solutions-title" className="premium-heading mt-5">Tu siguiente paso.<br/>Con nombre propio.</h2></div>
      <div className="mt-12 grid gap-4 lg:grid-cols-3">{[
        {name:"Launch",tag:"Empezar bien",text:"Para negocios que necesitan crear su primera tienda Shopify.",items:["Diseño alineado con tu marca","Catálogo, pagos y envíos","Preparación para el lanzamiento"]},
        {name:"Migration",tag:"Dar el salto",text:"Para comercios que quieren llevar su tienda actual a Shopify.",items:["Plan de migración y estructura","Datos, navegación y SEO","Redirecciones y validaciones"]},
        {name:"Growth",tag:"Seguir evolucionando",text:"Para marcas que buscan optimización y mejora continua.",items:["Experiencia de compra y CRO","SEO, rendimiento y analítica","Priorización de mejoras"]},
      ].map(({name,tag,text,items},index)=><article key={name} className={`flex flex-col rounded-[1.75rem] p-7 sm:p-9 ${index===2 ? "bg-brand-800 text-white" : "border border-slate-200 bg-white text-ink"}`}><p className={`text-[10px] font-semibold uppercase tracking-[.16em] ${index===2 ? "text-mint" : "text-brand-700"}`}>{tag}</p><h3 className="mt-8 text-4xl font-semibold tracking-[-.045em]"><span className={`mb-1 block text-xs font-medium tracking-normal ${index===2 ? "text-slate-200" : "text-secondary-ink"}`}>Shopify</span>{name}</h3><p className={`mt-5 min-h-14 text-sm leading-7 ${index===2 ? "text-slate-200" : "text-secondary-ink"}`}>{text}</p><ul className="my-8 space-y-3">{items.map(item=><li key={item} className="flex items-start gap-2 text-xs leading-5"><Check size={14} className={`mt-0.5 shrink-0 ${index===2 ? "text-mint" : "text-brand-700"}`}/>{item}</li>)}</ul><Link to="/contacto" className={`mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold ${index===2 ? "text-white" : "text-brand-700"}`}>Solicitar propuesta <ArrowUpRight size={16}/></Link></article>)}</div>
      <p className="mt-6 text-center text-xs leading-6 text-secondary-ink">Alcances a medida. Integraciones ERP como servicio complementario, según viabilidad.</p>
    </div></section>

    <section className="premium-section bg-white"><div className="container-page"><div className="max-w-3xl"><p className="eyebrow">La diferencia está en cómo pensamos</p><h2 className="premium-heading mt-5">Menos complejidad.<br/><span className="text-brand-600">Más intención.</span></h2></div><div className="mt-14 grid gap-x-12 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">{[["Tu negocio, primero.","Cada decisión responde a una necesidad comercial."],["Una base que permanece.","Soluciones mantenibles y preparadas para evolucionar."],["Cuidado desde el inicio.","Buenas prácticas de velocidad, SEO y usabilidad."],["Claridad en cada paso.","Alcances definidos, comunicación y documentación."]].map(([title,text],index)=><div key={title} className="border-t border-slate-200 pt-6"><span className="text-[10px] font-semibold text-brand-700">0{index+1}</span><h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary-ink">{text}</p></div>)}</div></div></section>

    <StoryClosing/>

    <section className="premium-section bg-white"><div className="container-page"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Ideas para avanzar</p><h2 className="premium-heading mt-5">El conocimiento<br/>también impulsa.</h2></div><Link to="/recursos" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700">Explorar recursos <ArrowRight size={16}/></Link></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[["Shopify","Decisiones de plataforma, lanzamiento y operación."],["Ecommerce SEO","Estructura y contenido para ser más fácil de encontrar."],["Conversión","Experiencias que reducen fricción al comprar."]].map(([title,text],index)=><Link to="/recursos" key={title} className="group rounded-3xl border border-slate-200 p-7 transition-colors hover:border-brand-200 hover:bg-brand-50/40"><div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-wider text-secondary-ink">Línea editorial / 0{index+1}</span><ArrowUpRight size={17} className="text-brand-700"/></div><h3 className="mt-12 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary-ink">{text}</p><p className="mt-5 text-[10px] font-medium text-brand-700">Contenido en preparación</p></Link>)}</div><p className="mt-7 text-xs leading-6 text-secondary-ink">Estamos preparando una checklist para lanzar tu tienda Shopify. Estará disponible cuando esté terminada.</p></div></section>

    <section className="premium-section bg-canvas"><div className="container-page grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="eyebrow">Antes de empezar</p><h2 className="premium-heading mt-5">Buenas preguntas.<br/>Respuestas claras.</h2><p className="mt-5 text-sm leading-7 text-secondary-ink">Lo importante, sin letra pequeña.</p></div><Accordion type="single" collapsible className="border-t border-slate-200">{faqs.map(([question,answer],index)=><AccordionItem key={question} value={`faq-${index}`} className="border-slate-200"><AccordionTrigger className="py-6 text-left text-sm font-semibold leading-6 text-ink hover:text-brand-700 hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-6 pr-5 text-sm leading-7 text-secondary-ink">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="relative overflow-hidden bg-brand-900 py-24 text-white sm:py-32 lg:py-40"><div className="container-page relative text-center"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-mint">El próximo capítulo empieza contigo</p><h2 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-7xl">Hagamos que tu<br/>siguiente etapa suceda.</h2><p className="mx-auto mt-7 max-w-lg text-base leading-8 text-slate-200">Cuéntanos qué quieres construir o mejorar.<br/>El primer paso es una buena conversación.</p><Link to="/contacto" className="premium-button mt-9">Hablemos de tu proyecto <ArrowUpRight size={17}/></Link><p className="mt-8 text-[10px] text-slate-300">Diseño ecommerce · Shopify · Optimización · Integraciones</p></div></section>
  </main><Footer/></div>;
}
