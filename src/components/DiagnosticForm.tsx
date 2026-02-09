"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { showSuccess, showError } from "@/utils/toast";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Loader2, Mail, Check } from 'lucide-react';
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
    currentSystems: [] as string[],
    otherSystemName: '',
    timeline: '',
    challenge: '',
    subscribeNewsletter: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    
    if (id === 'phone') {
      const filteredValue = value.replace(/[^0-9+]/g, '');
      setFormData(prev => ({ ...prev, [id]: filteredValue }));
      return;
    }

    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const toggleSystem = (system: string) => {
    setFormData(prev => {
      const current = prev.currentSystems;
      if (current.includes(system)) {
        return { ...prev, currentSystems: current.filter(s => s !== system) };
      } else {
        return { ...prev, currentSystems: [...current, system] };
      }
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, subscribeNewsletter: checked }));
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
      // Preparamos la lista de sistemas para el envío
      let systemsList = formData.currentSystems.map(s => {
        if (s === 'other' && formData.otherSystemName) {
          return `Otro (${formData.otherSystemName})`;
        }
        return s;
      }).join(', ');

      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          ...formData,
          currentSystems: systemsList,
          to: 'info@test51.odoo.com'
        },
      });

      if (error) throw error;
      
      showSuccess("¡Diagnóstico solicitado con éxito!");
      navigate('/gracias');
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      showError("No pudimos enviar tu solicitud. Por favor, intenta de nuevo.");
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
      case 3: 
        const hasSystems = formData.currentSystems.length > 0;
        const otherValid = !formData.currentSystems.includes('other') || !!formData.otherSystemName;
        return hasSystems && otherValid && !!formData.timeline;
      case 4: return !!formData.challenge;
      default: return false;
    }
  };

  const systemOptions = [
    { id: 'excel', label: 'Excel / Hojas de cálculo' },
    { id: 'aspel', label: 'Aspel / SAE' },
    { id: 'contpaqi', label: 'CONTPAQi' },
    { id: 'sap', label: 'SAP / Oracle / MS' },
    { id: 'other', label: 'Otro sistema' },
    { id: 'none', label: 'Ninguno' }
  ];

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
              <div className="space-y-3">
                <Label className="text-slate-300">Sistemas actuales (Selección múltiple)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {systemOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleSystem(opt.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl border text-xs font-medium transition-all ${
                        formData.currentSystems.includes(opt.id)
                        ? 'bg-indigo-600/20 border-indigo-500 text-white'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {opt.label}
                      {formData.currentSystems.includes(opt.id) && <Check size={14} className="text-indigo-400" />}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {formData.currentSystems.includes('other') && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <Label htmlFor="otherSystemName" className="text-slate-300">¿Qué sistema utilizas?</Label>
                    <Input 
                      id="otherSystemName" 
                      value={formData.otherSystemName} 
                      onChange={handleInputChange} 
                      placeholder="Nombre del sistema..." 
                      className="bg-white/5 border-white/10 text-white h-12" 
                      required 
                    />
                  </motion.div>
                )}
              </AnimatePresence>

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
                <Textarea id="challenge" value={formData.challenge} onChange={handleInputChange} placeholder="Ej: Mi inventario no coincide con mis ventas y pierdo dinero..." className="bg-white/5 border-white/10 text-white min-h-[120px]" required />
              </div>
              
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Checkbox 
                  id="subscribeNewsletter" 
                  checked={formData.subscribeNewsletter} 
                  onCheckedChange={(checked) => handleCheckboxChange(checked as boolean)}
                  className="mt-1 border-white/20 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="subscribeNewsletter"
                    className="text-sm font-medium text-white leading-none cursor-pointer flex items-center gap-2"
                  >
                    <Mail size={14} className="text-indigo-400" />
                    Recibir estrategias para escalar mi empresa
                  </label>
                  <p className="text-xs text-slate-500">
                    Solo enviamos contenido de alto valor. Cero spam, garantizado.
                  </p>
                </div>
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