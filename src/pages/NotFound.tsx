import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BrandMark } from "@/components/BrandLogo";

export default function NotFound() {
  return <div className="min-h-screen bg-canvas text-ink"><Navbar/><main id="contenido-principal" tabIndex={-1} className="container-page flex min-h-[75vh] flex-col items-center justify-center pb-16 pt-36 text-center"><BrandMark className="mb-7 h-20 w-20"/><p className="eyebrow">Error 404</p><h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-[-.05em] sm:text-5xl">Esta página no está en el mapa.</h1><p className="mt-5 max-w-lg text-base leading-7 text-secondary-ink">El enlace puede haber cambiado o la página ya no está disponible. Tu siguiente paso empieza aquí.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700"><ArrowLeft size={17}/>Volver al inicio</Link><Link to="/servicios" className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50">Explorar servicios<ArrowRight size={17}/></Link></div></main><Footer/></div>;
}
