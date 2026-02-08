"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showSuccess, showError } from "@/utils/toast";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const DiagnosticForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    revenue: '',
    currentSystem: '',
    timeline: '',
    challenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);

    try {
      // 1. Intentar enviar vía Edge Function
      const { error: functionError } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          ...formData,
          to: 'info@test51.odoo.com'
        },
      });

      if (functionError) {
        console.warn("Edge Function no disponible, intentando guardar en tabla 'leads'...");
        
        // 2. Fallback: Intentar guardar en tabla 'leads'
        const { error: dbError } = await supabase
          .from('leads')
          .insert([{ 
            ...formData, 
            created_at: new Date().toISOString() 
          }]);

        if (dbError) {
          console.error("Error en base de datos:", dbError);
          throw new Error("No se pudo procesar la solicitud. Verifica que la tabla 'leads' exista en Supabase.");
        }
      }
      
      showSuccess("¡Diagnóstico solicitado con éxito!");
      navigate('/gracias');
    } catch (error: any) {
      console.error("Error detallado:", error);
      showError(error.message || "Error de conexión con Supabase. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { title: "Contacto", desc: "Datos básicos" },
    { title: "Empresa", desc: "Tamaño y alcance" },
    { title: "Contexto", desc: "Sistemas y tiempos" },
    { title: "Retos", desc: "Necesidades" }
  ];

  const isStepValid = () => {
    switch (step) {
      case 1: return !!(formData.name && formData.email && formData.phone);
      case 2: return !!(formData.company && formData.revenue && formData.employees);
      case 3: return !!(formData.currentSystem && formData.timeline);
      case 4: return !!formData.challenge;
      default: return false;
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
      <div className="flex justify-between mb-10 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 -z-10" />
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
              step > i + 1 ? 'bg-emerald-500 text-white' : 
              step === i + 1 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-500'
            }`}>
              {step > i + 1 ? <CheckCircle2 size={16} /> : i + 1}
            </div>
            <span className={`text-[10px] uppercase tracking-widest font-bold hidden sm:block ${
              step === i + 1 ? 'text-indigo-400' : 'text-slate-500'
            }`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="min-h-[350px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 flex-grow"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">Nombre completo</Label>
                <Input id="name" value={formData.name} onChange={handleInputChange} placeholder="Juan Pérez" className="bg-white/5 border-white/10 text-white h-12" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Correo corporativo</Label>
                  <Input id="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="juan@empresa.com" className="bg-white/5 border-white/10 text-white h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-300">WhatsApp / Teléfono</Label>
                  <Input id="phone" value={formData.phone} onChange={handleInputChange} placeholder="+52..." className="bg-white/5 border-white/10 text-white h-12" required />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 flex-grow"
            >
              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-300">Nombre de la empresa</Label>
                <Input id="company" value={formData.company} onChange={handleInputChange} placeholder="Mi Empresa S.A." className="bg-white/5 border-white/10 text-white h-12" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Número de empleados</Label>
                  <Select onValueChange={(v) => handleSelectChange('employees', v)} value={formData.employees}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                      <SelectItem value="1-10">1 - 10</SelectItem>
                      <SelectItem value="11-50">11 - 50</SelectItem>
                      <SelectItem value="51-200">51 - 200</SelectItem>
                      <SelectItem value="200+">Más de 200</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Facturación anual (MXN)</Label>
                  <Select onValueChange={(v) => handleSelectChange('revenue', v)} value={formData.revenue}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                      <SelectItem value="under-1m">Menos de $1M</SelectItem>
                      <SelectItem value="1m-10m">$1M - $10M</SelectItem>
                      <SelectItem value="10m-50m">$10M - $50M</SelectItem>
                      <SelectItem value="50m+">Más de $50M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 flex-grow"
            >
              <div className="space-y-2">
                <Label className="text-slate-300">Sistema actual (ERP/Software)</Label>
                <Select onValueChange={(v) => handleSelectChange('currentSystem', v)} value={formData.currentSystem}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                    <SelectValue placeholder="¿Qué usas hoy?" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/10 text-white">
                    <SelectItem value="excel">Excel / Hojas de cálculo</SelectItem>
                    <SelectItem value="aspel">Aspel / SAE</SelectItem>
                    <SelectItem value="contpaqi">CONTPAQi</SelectItem>
                    <SelectItem value="sap">SAP / Oracle / Microsoft</SelectItem>
                    <SelectItem value="other">Otro sistema</SelectItem>
                    <SelectItem value="none">Ninguno (Empresa nueva)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-slate-300">Plazo de implementación</Label>
                <Select onValueChange={(v) => handleSelectChange('timeline', v)} value={formData.timeline}>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                    <SelectValue placeholder="¿Cuándo empezar?" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-white/10 text-white">
                    <SelectItem value="immediate">Inmediato</SelectItem>
                    <SelectItem value="1-3-months">1 a 3 meses</SelectItem>
                    <SelectItem value="3-6-months">3 a 6 meses</SelectItem>
                    <SelectItem value="planning">Solo planeación</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6 flex-grow"
            >
              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-slate-300">Describe tu principal cuello de botella</Label>
                <Textarea id="challenge" value={formData.challenge} onChange={handleInputChange} placeholder="Ej: Mi inventario no coincide con mis ventas y pierdo dinero..." className="bg-white/5 border-white/10 text-white min-h-[150px]" required />
              </div>
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex gap-3">
                <AlertCircle className="text-indigo-400 shrink-0" size={20} />
                <p className="text-xs text-slate-400 leading-relaxed">
                  Al enviar este formulario, aceptas que un consultor senior analice tu caso para la sesión de diagnóstico.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 mt-10">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={prevStep} disabled={isSubmitting} className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 text-white h-14 rounded-xl">
              <ChevronLeft className="mr-2" size={18} /> Anterior
            </Button>
          )}
          
          <Button 
            type="submit" 
            disabled={!isStepValid() || isSubmitting}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white h-14 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={24} />
            ) : step < 4 ? (
              <>Siguiente <ChevronRight className="ml-2" size={18} /></>
            ) : (
              "Solicitar Diagnóstico Senior"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DiagnosticForm;