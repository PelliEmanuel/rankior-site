import { ArrowUpRight, Check, Menu, Search, ShoppingBag } from "lucide-react";
import EcommerceImage from "./EcommerceImage";

export const concepts = {
  nomada: {
    name: "nómada.", category: "Hogar & lifestyle",
    title: "Habitar con intención.", subtitle: "Piezas que transforman espacios en historias.",
    product: "Sillón Origen", price: "$8,900 MXN", color: "#5E493C", background: "#F6F1EA",
  },
  botanica: {
    name: "botánica", category: "Belleza & cuidado personal",
    title: "Tu naturaleza, en equilibrio.", subtitle: "Un ritual consciente. Una piel que se siente bien.",
    product: "Ritual esencial", price: "$980 MXN", color: "#354C3E", background: "#EDF1E9",
  },
};
export type Concept = keyof typeof concepts;
export type StoreView = "tienda" | "producto" | "carrito";
type Props = { concept?: Concept; mobile?: boolean; view?: StoreView; onAdd?: () => void; added?: boolean; eager?: boolean; sizes?: string };

export default function EcommerceMockup({ concept = "nomada", mobile = false, view = "tienda", onAdd, added, eager = false, sizes = "(max-width: 639px) 80vw, (max-width: 1023px) 70vw, 700px" }: Props) {
  const store = concepts[concept];
  const alt = concept === "nomada" ? "Sillón de diseño y mesa de travertino en un interior cálido" : "Productos de cuidado de piel sobre una base de travertino";
  const purchaseButton = <button type="button" onClick={onAdd} disabled={view === "carrito" || !onAdd} className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full px-2 py-2.5 text-[9px] font-semibold text-white transition enabled:hover:opacity-80 disabled:cursor-default" style={{ background: store.color }}>{added || view === "carrito" ? <><Check size={11}/>Añadido · Demo</> : <>Añadir al carrito <ShoppingBag size={11}/></>}</button>;

  if (mobile) return <div className="relative flex aspect-[393/852] flex-col overflow-hidden rounded-[1.9rem] border-[6px] border-[#243039] bg-white shadow-2xl" style={{ color: store.color }}>
    <div className="relative flex h-[6%] shrink-0 items-center justify-between px-3 text-[8px] font-semibold text-slate-800"><span>9:41</span><span aria-hidden="true" className="absolute left-1/2 h-3 w-[29%] -translate-x-1/2 rounded-full bg-[#243039]"/><span aria-hidden="true">▰</span></div>
    <div className="flex shrink-0 items-center justify-between px-3 py-2.5"><span className="font-serif text-lg leading-none">{store.name}</span><div className="flex gap-2" aria-hidden="true"><ShoppingBag size={11}/><Menu size={12}/></div></div>
    <div className="min-h-0 flex-1 overflow-hidden" style={{ background: store.background }}>
      {view === "tienda" ? <>
        <div className="relative h-[61%]"><EcommerceImage name={concept} alt={`${alt} · vista móvil`} sizes="(max-width: 639px) 160px, 240px" eager={eager} className="h-full w-full object-cover"/><div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 p-2.5"><p className="text-[6px] font-semibold uppercase tracking-widest">La nueva colección</p><p className="mt-1.5 font-serif text-[22px] leading-[1.05]">{store.title}</p><span className="mt-2 inline-flex items-center gap-2 text-[7px] font-semibold">Descubrir <ArrowUpRight size={9}/></span></div></div>
        <div className="p-3"><p className="text-[8px] font-semibold">Diseño para todos los días.</p><div className="mt-2 grid grid-cols-2 gap-2">{[0,1].map(i=><EcommerceImage key={i} name={concept} alt={`${store.name} · detalle conceptual ${i+1}`} sizes="90px" className="aspect-square w-full rounded object-cover" style={{ objectPosition: i ? "80% 50%" : "20% 50%" }}/>)}</div></div>
      </> : <div className="h-full p-3"><EcommerceImage name={concept} alt={store.product} sizes="240px" className="h-[43%] w-full rounded-lg object-cover"/><p className="mt-3 text-[7px] uppercase tracking-widest">{view === "carrito" ? "Tu selección / 01" : "Colección esencial"}</p><p className="mt-2 font-serif text-lg leading-tight">{store.product}</p><p className="mt-2 text-[9px]">{store.price}</p>{purchaseButton}<p className="mt-2 text-[7px] text-slate-600">Demostración · Sin compras reales</p></div>}
    </div>
    <div aria-hidden="true" className="flex h-[4%] shrink-0 items-center justify-center bg-white"><span className="h-1 w-[35%] rounded-full bg-slate-800"/></div>
  </div>;

  return <div className="relative overflow-hidden rounded-xl border border-slate-200/80 shadow-[0_25px_70px_rgba(16,24,32,.16)]" style={{ background: store.background, color: store.color }}>
    <div className="flex h-8 items-center gap-1.5 border-b border-slate-200 bg-white px-3"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-300"/><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-300"/><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-300"/><span className="mx-auto rounded bg-slate-50 px-3 py-0.5 text-[8px] text-slate-600">{concept}.example · Demostración</span></div>
    <div className="bg-white/80 py-1.5 text-center text-[7px] font-medium tracking-[.16em]">DISEÑO CONSCIENTE · HECHO PARA DURAR</div>
    <div className="flex items-center justify-between bg-white/80 px-4 py-4 sm:px-6"><span className="font-serif text-2xl">{store.name}</span><div className="hidden gap-5 text-[8px] sm:flex"><span>Colección</span><span>Nuestra historia</span><span>El journal</span></div><div className="flex gap-3" aria-hidden="true"><Search size={13}/><ShoppingBag size={13}/></div></div>
    {view === "tienda" ? <>
      <div className="relative h-[270px] sm:h-[300px]"><EcommerceImage name={concept} alt={alt} sizes={sizes} eager={eager} priority={eager} className="h-full w-full object-cover"/><div className="absolute left-4 top-7 max-w-[62%] sm:left-6 sm:max-w-[52%]"><div className="w-fit rounded-xl bg-white/95 p-3 sm:p-4"><p className="text-[7px] uppercase tracking-[.16em]">La nueva colección / 01</p><p className="mt-2 font-serif text-[28px] leading-[1.05] sm:text-[34px]">{store.title}</p><p className="mt-2 max-w-36 text-[9px] leading-relaxed">{store.subtitle}</p><span className="mt-3 inline-flex items-center gap-3 border-b pb-1 text-[8px] font-bold">Descubrir colección <ArrowUpRight size={10}/></span></div></div></div>
      <div className="bg-white px-4 py-5 sm:px-6"><div className="flex justify-between text-[8px]"><span>Objetos extraordinarios. Todos los días.</span><span>01 — 03</span></div><div className="mt-3 grid grid-cols-3 gap-2">{[0,1,2].map(item=><div key={item}><EcommerceImage name={concept} alt={`${store.name} · detalle de la colección conceptual`} sizes="(max-width: 639px) 100px, 240px" className="h-20 w-full rounded-sm object-cover" style={{ objectPosition: ["80% 50%", "15% 65%", "55% 85%"][item] }}/><p className="mt-1 text-[7px]">{[store.product,"La colección","Diseño esencial"][item]}</p></div>)}</div></div>
    </> : <div className="grid min-h-[412px] grid-cols-2 items-center gap-4 bg-white p-4 sm:gap-6 sm:p-6"><EcommerceImage name={concept} alt={store.product} sizes="(max-width: 639px) 40vw, 360px" className="h-[320px] w-full rounded-lg object-cover"/><div><p className="text-[8px] uppercase tracking-widest">{view === "carrito" ? "Tu selección / 01" : "La colección esencial"}</p><p className="mt-3 font-serif text-2xl">{view === "carrito" ? "Una gran elección." : store.product}</p><p className="mt-3 text-xs">{store.price}</p><p className="mt-4 text-[10px] leading-5">{view === "carrito" ? `${store.product} · Cantidad: 1. Envío calculado al continuar.` : "Materiales elegidos con cuidado. Diseño que se siente tan bien como se ve."}</p>{purchaseButton}<p className="mt-3 text-center text-[8px] text-slate-600">Concepto de diseño · No realiza compras reales</p></div></div>}
  </div>;
}
