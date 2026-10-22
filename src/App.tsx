import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyPost = lazy(() => import("./pages/CaseStudyPost"));
const Careers = lazy(() => import("./pages/Careers"));
const ThankYou = lazy(() => import("./pages/ThankYou"));
const Comparison = lazy(() => import("./pages/Comparison"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const serviceProps = {
 shopify: { eyebrow: "Shopify / Launch", title: "Tu tienda Shopify empieza con una buena base.", intro: "Diseñamos y desarrollamos tiendas online adaptadas a tu marca, productos y objetivos comerciales, desde la arquitectura hasta la preparación para el lanzamiento.", bullets: ["Diseño responsive y experiencia de compra", "Configuración de catálogo, pagos y envíos", "Preparación y validación antes de publicar"], sections: [{ title: "Diseño con intención", text: "Una interfaz clara que ayuda a entender, explorar y comprar." }, { title: "Operación sencilla", text: "Configuramos una base que tu equipo pueda administrar en el día a día." }, { title: "Lista para crecer", text: "Tomamos decisiones que dejan espacio para evolucionar tu negocio." }, { title: "Acompañamiento", text: "Te guiamos en los puntos importantes del lanzamiento." }] },
 migration: { eyebrow: "Shopify / Migration", title: "Migra a Shopify sin perder de vista tu negocio.", intro: "Te ayudamos a trasladar tu tienda desde otra plataforma cuidando datos, estructura de navegación y los aspectos importantes de SEO.", bullets: ["Revisión de plataforma y alcance", "Plan de datos, navegación y contenido", "Redirecciones y validaciones dentro del alcance contratado"], sections: [{ title: "Diagnóstico previo", text: "Identificamos dependencias, riesgos y prioridades antes de mover nada." }, { title: "SEO en la migración", text: "Cuidamos URLs, redirecciones y estructura para una transición ordenada." }, { title: "Validaciones", text: "Revisamos navegación, productos y flujos clave antes del cambio." }, { title: "Cambio acompañado", text: "Definimos los pasos del lanzamiento con una comunicación clara." }] },
 optimization: { eyebrow: "Ecommerce / Growth", title: "Convierte mejor con una experiencia más clara.", intro: "Mejoramos tu ecommerce mediante análisis, SEO, rendimiento, analítica y optimización de conversiones, sin prometer resultados porcentuales garantizados.", bullets: ["Auditoría de experiencia y rendimiento", "SEO para ecommerce y analítica", "Priorización de mejoras accionables"], sections: [{ title: "Encontrar fricción", text: "Observamos qué puede dificultar que las personas encuentren y compren." }, { title: "Mejorar rendimiento", text: "Priorizamos velocidad, estabilidad y buenas prácticas técnicas." }, { title: "Entender datos", text: "Usamos analítica para tomar decisiones, no para llenar reportes." }, { title: "Iterar con foco", text: "Ordenamos oportunidades por impacto y esfuerzo real." }] },
 integrations: { eyebrow: "Operación / Integrations", title: "Conecta tu tienda con lo que hace funcionar tu operación.", intro: "Evaluamos y conectamos Shopify con herramientas comerciales y operativas cuando existan integraciones compatibles y viables para el negocio.", bullets: ["ERP e inventario", "CRM y marketplaces", "Automatización de procesos"], sections: [{ title: "Mapa de sistemas", text: "Entendemos qué herramientas usas y qué información debe circular." }, { title: "Integraciones viables", text: "Proponemos caminos compatibles con tu operación y alcance." }, { title: "Menos trabajo manual", text: "Automatizamos tareas repetitivas cuando tiene sentido hacerlo." }, { title: "ERP como complemento", text: "Odoo u otro ERP se evalúa según el contexto, no como requisito." }] },
};
export default function App(){return <TooltipProvider><Sonner/><BrowserRouter><ScrollToTop/><Suspense fallback={<main className="container-page min-h-screen pt-36" aria-busy="true"><p role="status" className="text-secondary-ink">Cargando página…</p></main>}><Routes><Route path="/" element={<Index/>}/><Route path="/servicios" element={<Services/>}/><Route path="/servicios/shopify" element={<ServiceDetail {...serviceProps.shopify}/>}/><Route path="/servicios/migracion-shopify" element={<ServiceDetail {...serviceProps.migration}/>}/><Route path="/servicios/optimizacion-ecommerce" element={<ServiceDetail {...serviceProps.optimization}/>}/><Route path="/servicios/integraciones" element={<ServiceDetail {...serviceProps.integrations}/>}/><Route path="/nosotros" element={<About/>}/><Route path="/contacto" element={<Contact/>}/><Route path="/recursos" element={<Resources/>}/><Route path="/blog" element={<Blog/>}/><Route path="/blog/:id" element={<BlogPost/>}/><Route path="/casos" element={<CaseStudies/>}/><Route path="/casos/:id" element={<CaseStudyPost/>}/><Route path="/vacantes" element={<Careers/>}/><Route path="/gracias" element={<ThankYou/>}/><Route path="/comparativa" element={<Comparison/>}/><Route path="/privacidad" element={<PrivacyPolicy/>}/><Route path="/terminos" element={<TermsOfService/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></BrowserRouter></TooltipProvider>}
