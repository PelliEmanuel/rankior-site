import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { trackEvent } from "@/lib/analytics";

const options = ["Nueva tienda", "Migración a Shopify", "Optimización", "Integración", "Diagnóstico de sistemas"];
type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", company: "", website: "", projectType: "", description: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [formStarted, setFormStarted] = useState(false);
  const update = (key: keyof typeof data, value: string) => setData((current) => ({ ...current, [key]: value }));
  const handleFormFocus = () => { if (!formStarted) { setFormStarted(true); trackEvent("form_start", { form: "contact" }); } };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    trackEvent("form_submit_start", { form: "contact" });
    try {
      const challenge = data.website ? `Sitio web: ${data.website}\n\n${data.description}` : data.description;
      const lead = { name: data.name, email: data.email, company: data.company, currentSystems: data.projectType, challenge, status: "nuevo" };
      const { error: dbError } = await supabase.from("leads").insert([lead]);
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", { body: { ...lead, website: data.website, projectType: data.projectType } });
      if (dbError || emailError) throw dbError || emailError;
      setStatus("success");
      trackEvent("form_submit_success", { form: "contact", project_type: data.projectType });
    } catch {
      setStatus("error");
      trackEvent("form_submit_error", { form: "contact" });
    }
  };

  if (status === "success") return <div className="flex min-h-[460px] flex-col items-center justify-center rounded-[2rem] bg-[#EAF7FB] p-8 text-center"><CheckCircle2 size={48} className="text-[#007EA8]" /><h2 className="mt-6 text-2xl font-black">Recibimos tu proyecto.</h2><p className="mt-3 max-w-sm leading-7 text-[#526174]">Gracias por escribirnos. Tu solicitud fue enviada correctamente. Revisaremos la información y te contactaremos para entender el siguiente paso.</p></div>;

  return <form onSubmit={submit} onFocus={() => status === "idle" && trackEvent("form_start", { form: "contact" })} className="soft-card p-6 sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">Nombre<input required value={data.name} onChange={(e) => update("name", e.target.value)} className="form-field" placeholder="Tu nombre" /></label><label className="text-sm font-bold">Email empresarial<input required type="email" value={data.email} onChange={(e) => update("email", e.target.value)} className="form-field" placeholder="tu@empresa.com" /></label><label className="text-sm font-bold">Empresa o marca<input required value={data.company} onChange={(e) => update("company", e.target.value)} className="form-field" placeholder="Nombre de tu negocio" /></label><label className="text-sm font-bold">Sitio web <span className="font-normal text-[#526174]">(opcional)</span><input type="url" value={data.website} onChange={(e) => update("website", e.target.value)} className="form-field" placeholder="https://tusitio.com" /></label><label className="text-sm font-bold sm:col-span-2">¿En qué podemos ayudarte?<select required value={data.projectType} onChange={(e) => update("projectType", e.target.value)} className="form-field"><option value="">Seleccionar...</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label><label className="text-sm font-bold sm:col-span-2">Principal reto del negocio<textarea required value={data.description} onChange={(e) => update("description", e.target.value)} className="form-field min-h-32 resize-y p-4" placeholder="¿Qué quieres construir, conectar o mejorar?" /></label></div>{status === "error" && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos directamente a hola@rankior.com.</p>}<button disabled={status === "loading"} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#007EA8] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#006d91] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101820] disabled:opacity-60">{status === "loading" ? <><Loader2 className="animate-spin" size={18} /> Enviando...</> : <>Solicitar evaluación inicial <ArrowRight size={17} /></>}</button><p className="mt-4 text-center text-xs leading-5 text-[#526174]">Al enviarnos tus datos aceptas nuestra <a href="/privacidad" className="font-bold text-[#007EA8] underline">política de privacidad</a>.</p></form>;
}
