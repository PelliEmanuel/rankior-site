"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState([20]);
  const [avgSalary, setAvgSalary] = useState([35000]);
  const [inefficiency, setInefficiency] = useState([20]); // % of time wasted on manual tasks

  const [savings, setSavings] = useState({
    monthly: 0,
    yearly: 0,
    hoursSaved: 0
  });

  useEffect(() => {
    const totalMonthlyPayroll = employees[0] * avgSalary[0];
    const wastedCost = totalMonthlyPayroll * (inefficiency[0] / 100);
    const potentialSavingsMonthly = wastedCost * 0.6; // Assuming Odoo fixes 60% of inefficiencies
    const hoursPerMonth = employees[0] * 160;
    const hoursSaved = hoursPerMonth * (inefficiency[0] / 100) * 0.6;

    setSavings({
      monthly: potentialSavingsMonthly,
      yearly: potentialSavingsMonthly * 12,
      hoursSaved: Math.round(hoursSaved)
    });
  }, [employees, avgSalary, inefficiency]);

  return (
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-10 p-8 rounded-3xl bg-white/5 border border-white/10">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-white font-bold">Número de Empleados</Label>
              <span className="text-indigo-400 font-bold">{employees[0]}</span>
            </div>
            <Slider 
              value={employees} 
              onValueChange={setEmployees} 
              max={200} 
              step={1} 
              className="py-4"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-white font-bold">Salario Mensual Promedio (MXN)</Label>
              <span className="text-indigo-400 font-bold">${avgSalary[0].toLocaleString()}</span>
            </div>
            <Slider 
              value={avgSalary} 
              onValueChange={setAvgSalary} 
              min={10000}
              max={150000} 
              step={1000} 
              className="py-4"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-white font-bold">Ineficiencia Operativa Est. (%)</Label>
              <span className="text-indigo-400 font-bold">{inefficiency[0]}%</span>
            </div>
            <Slider 
              value={inefficiency} 
              onValueChange={setInefficiency} 
              max={50} 
              step={1} 
              className="py-4"
            />
            <p className="text-[10px] text-slate-500 italic">
              *Tiempo perdido en hojas de cálculo, retrabajos y falta de comunicación.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-[2.5rem] -z-10" />
        <div className="p-10 rounded-[2.5rem] bg-indigo-600 text-white space-y-8 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Impacto Estimado</h3>
            <p className="text-indigo-100 text-sm">Basado en implementaciones similares en México.</p>
          </div>

          <div className="grid gap-6">
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <DollarSign size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold">${savings.yearly.toLocaleString()}</p>
                <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Ahorro Anual Potencial</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/10 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-3xl font-bold">{savings.hoursSaved}h</p>
                <p className="text-xs text-indigo-200 uppercase tracking-widest font-bold">Horas Liberadas / Mes</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 h-14 rounded-xl font-bold text-lg shadow-xl">
              Obtener reporte detallado <Zap className="ml-2" size={18} />
            </Button>
            <p className="text-center text-[10px] text-indigo-200 mt-4">
              Este cálculo es una estimación basada en promedios de la industria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;