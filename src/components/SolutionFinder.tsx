"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, RefreshCcw, Factory, ShoppingCart, Users, BarChart3 } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: "¿Cuál es tu principal objetivo este trimestre?",
    options: [
      { label: "Optimizar producción", value: "mrp", icon: Factory },
      { label: "Vender más en línea", value: "ecommerce", icon: ShoppingCart },
      { label: "Mejorar atención al cliente", value: "crm", icon: Users },
      { label: "Tener reportes claros", value: "bi", icon: BarChart3 }
    ]
  },
  {
    id: 2,
    text: "¿Cuántos empleados tiene tu empresa?",
    options: [
      { label: "1 - 10", value: "small" },
      { label: "11 - 50", value: "medium" },
      { label: "51 - 200", value: "large" },
      { label: "200+", value: "enterprise" }
    ]
  }
];

const recommendations: Record<string, any> = {
  mrp: {
    title: "Paquete Manufactura Pro",
    modules: ["MRP", "Inventario", "Calidad", "Mantenimiento"],
    desc: "Ideal para plantas que buscan trazabilidad total y control de costos de producción."
  },
  ecommerce: {
    title: "Omnicanalidad Total",
    modules: ["E-commerce", "Ventas", "Inventario", "Conectores (Shopify/Amazon)"],
    desc: "Perfecto para retailers que quieren sincronizar sus tiendas físicas y digitales."
  },
  crm: {
    title: "Acelerador de Ventas",
    modules: ["CRM", "Marketing Automation", "Ventas", "Firmas Digitales"],
    desc: "Diseñado para equipos comerciales que necesitan cerrar tratos más rápido."
  },
  bi: {
    title: "Inteligencia de Negocios",
    modules: ["Contabilidad", "Dashboards", "Consolidación", "Gastos"],
    desc: "Para directivos que necesitan visibilidad financiera en tiempo real."
  }
};

const SolutionFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const result = recommendations[answers[0]] || recommendations.mrp;

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Paso {step + 1} de {questions.length}</span>
              <h3 className="text-2xl font-bold text-white">{questions[step].text}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.value)}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all text-left group"
                >
                  {opt.icon && <opt.icon className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={24} />}
                  <span className="text-white font-medium">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="text-emerald-500" size={40} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white">Tu solución ideal:</h3>
              <p className="text-indigo-400 text-xl font-bold">{result.title}</p>
            </div>

            <p className="text-slate-400 leading-relaxed">
              {result.desc}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {result.modules.map((mod: string, i: number) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                  {mod}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white h-12 rounded-xl font-bold">
                Obtener cotización <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="ghost" onClick={reset} className="text-slate-500 hover:text-white">
                <RefreshCcw className="mr-2" size={16} /> Reiniciar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SolutionFinder;