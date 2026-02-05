"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const DiagnosticForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    industry: '',
    challenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("¡Solicitud enviada! Nos pondremos en contacto en menos de 24 horas.");
    setTimeout(() => {
      navigate('/gracias');
    }, 1000);
  };

  const steps = [
    { title: "Información Personal", description: "Cuéntanos quién eres." },
    { title: "Tu Empresa", description: "Danos contexto de tu negocio." },
    { title: "Tus Retos", description: "¿Cómo podemos ayudarte?" }
  ];

  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
      {/* Progress Bar */}
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
            <span className={`text-[10px] uppercase tracking-widest font-bold ${
              step === i + 1 ? 'text-indigo-400' : 'text-slate-500'
            }`}>
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="min-h-[300px] flex flex-col">
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
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Juan Pérez" 
                  className="bg-white/5 border-white/10 text-white h-12 focus:ring-indigo-500" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Correo corporativo</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="juan@empresa.com" 
                  className="bg-white/5 border-white/10 text-white h-12 focus:ring-indigo-500" 
                  required 
                />
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
                <Input 
                  id="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Mi Empresa S.A. de C.V." 
                  className="bg-white/5 border-white/10 text-white h-12 focus:ring-indigo-500" 
                  required 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-slate-300">Industria</Label>
                  <Input 
                    id="industry" 
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="Retail, Logística..." 
                    className="bg-white/5 border-white/10 text-white h-12 focus:ring-indigo-500" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employees" className="text-slate-300">Empleados</Label>
                  <Input 
                    id="employees" 
                    value={formData.employees}
                    onChange={handleInputChange}
                    placeholder="10-50, 100+..." 
                    className="bg-white/5 border-white/10 text-white h-12 focus:ring-indigo-500" 
                  />
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
                <Label htmlFor="challenge" className="text-slate-300">¿Cuál es tu principal reto hoy?</Label>
                <Textarea 
                  id="challenge" 
                  value={formData.challenge}
                  onChange={handleInputChange}
                  placeholder="Ej: Mi inventario no coincide con mis ventas..." 
                  className="bg-white/5 border-white/10 text-white min-h-[150px] focus:ring-indigo-500" 
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-4 mt-10">
          {step > 1 && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
              className="flex-1 border-white/10 bg-white/5 hover:bg-white/10 text-white h-14 rounded-xl"
            >
              <ChevronLeft className="mr-2" size={18} /> Anterior
            </Button>
          )}
          
          {step < 3 ? (
            <Button 
              type="button" 
              onClick={nextStep}
              disabled={step === 1 ? !formData.name || !formData.email : !formData.company}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white h-14 rounded-xl font-bold"
            >
              Siguiente <ChevronRight className="ml-2" size={18} />
            </Button>
          ) : (
            <Button 
              type="submit" 
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white h-14 rounded-xl font-bold shadow-lg shadow-indigo-500/20"
            >
              Enviar solicitud
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default DiagnosticForm;