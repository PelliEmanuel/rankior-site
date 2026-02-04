"use client";

import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/ui/slider";
import { Label } from "@/components/ui/ui/label";
import { Card } from "@/components/ui/ui/card";
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(250);
  const [hoursSaved, setHoursSaved] = useState(5);
  const [monthlySavings, setMonthlySavings] = useState(0);

  useEffect(() => {
    const savings = employees * hourlyRate * hoursSaved * 4; // 4 weeks per month
    setMonthlySavings(savings);
  }, [employees, hourlyRate, hoursSaved]);

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Calculadora de Impacto</h2>
          <p className="text-slate-400">Estima cuánto tiempo y dinero podrías ahorrar automatizando con Odoo.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-slate-300">Número de empleados administrativos</Label>
                <span className="text-indigo-400 font-bold">{employees}</span>
              </div>
              <Slider 
                value={[employees]} 
                onValueChange={(v) => setEmployees(v[0])} 
                max={100} 
                step={1} 
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-slate-300">Costo promedio por hora (MXN)</Label>
                <span className="text-indigo-400 font-bold">${hourlyRate}</span>
              </div>
              <Slider 
                value={[hourlyRate]} 
                onValueChange={(v) => setHourlyRate(v[0])} 
                max={1000} 
                step={10} 
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <Label className="text-slate-300">Horas ahorradas por semana por empleado</Label>
                <span className="text-indigo-400 font-bold">{hoursSaved}h</span>
              </div>
              <Slider 
                value={[hoursSaved]} 
                onValueChange={(v) => setHoursSaved(v[0])} 
                max={20} 
                step={1} 
                className="py-4"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full -z-10" />
            <Card className="p-8 bg-slate-900/50 border-white/10 backdrop-blur-xl rounded-[2rem] text-center space-y-8">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-2">Ahorro Mensual Estimado</p>
                <div className="text-5xl md:text-6xl font-bold text-white flex items-center justify-center gap-2">
                  <span className="text-indigo-500">$</span>
                  {monthlySavings.toLocaleString()}
                  <span className="text-xl text-slate-500">MXN</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="text-indigo-400 mx-auto mb-2" size={20} />
                  <p className="text-2xl font-bold text-white">{employees * hoursSaved * 4}h</p>
                  <p className="text-[10px] text-slate-500 uppercase">Horas Libres / Mes</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <TrendingUp className="text-indigo-400 mx-auto mb-2" size={20} />
                  <p className="text-2xl font-bold text-white">{(monthlySavings * 12 / 1000000).toFixed(1)}M</p>
                  <p className="text-[10px] text-slate-500 uppercase">Ahorro Anual (MXN)</p>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                *Este es un cálculo estimado basado en promedios de implementaciones previas.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;