"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import DiagnosticDialog from './DiagnosticDialog';

const ROICalculator = () => {
  const [revenue, setRevenue] = useState(500000);
  const [employees, setEmployees] = useState(10);
  const [manualHours, setManualHours] = useState(15);

  const [savings, setSavings] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  useEffect(() => {
    // Simple ROI Logic for demonstration
    // Savings = (Manual Hours * 52 weeks * Avg Hourly Rate ($250 MXN)) + (Revenue * 0.02 efficiency gain)
    const hourlyRate = 250;
    const timeSavings = manualHours * 52 * hourlyRate * (employees / 2);
    const operationalEfficiency = revenue * 12 * 0.03; // 3% gain on annual revenue
    
    setSavings(Math.round(timeSavings + operationalEfficiency));
    setEfficiency(Math.round((manualHours / 40) * 100));
  }, [revenue, employees, manualHours]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Calculadora de Impacto</h2>
            <p className="text-slate-400 text-lg">Estima cuánto puede ahorrar tu empresa al automatizar procesos con Odoo.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-sm">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <DollarSign size={18} className="text-indigo-400" />
                    Ingresos Mensuales (MXN)
                  </label>
                  <span className="text-indigo-400 font-bold">{formatCurrency(revenue)}</span>
                </div>
                <Slider 
                  value={[revenue]} 
                  onValueChange={(val) => setRevenue(val[0])} 
                  max={5000000} 
                  step={50000}
                  className="py-4"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Calculator size={18} className="text-indigo-400" />
                    Número de Empleados
                  </label>
                  <span className="text-indigo-400 font-bold">{employees}</span>
                </div>
                <Slider 
                  value={[employees]} 
                  onValueChange={(val) => setEmployees(val[0])} 
                  max={100} 
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Clock size={18} className="text-indigo-400" />
                    Horas manuales / semana (por emp.)
                  </label>
                  <span className="text-indigo-400 font-bold">{manualHours}h</span>
                </div>
                <Slider 
                  value={[manualHours]} 
                  onValueChange={(val) => setManualHours(val[0])} 
                  max={40} 
                  step={1}
                  className="py-4"
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
              <div className="bg-indigo-600 rounded-[2rem] p-8 text-white space-y-8 shadow-2xl shadow-indigo-500/20">
                <div>
                  <p className="text-indigo-100 text-sm uppercase tracking-widest font-bold mb-2">Ahorro Anual Estimado</p>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {formatCurrency(savings)}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  <div>
                    <p className="text-indigo-100 text-xs uppercase tracking-widest font-bold mb-1">Eficiencia</p>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={20} />
                      <span className="text-2xl font-bold">+{efficiency}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-indigo-100 text-xs uppercase tracking-widest font-bold mb-1">Payback</p>
                    <div className="flex items-center gap-2">
                      <Clock size={20} />
                      <span className="text-2xl font-bold">< 6 meses</span>
                    </div>
                  </div>
                </div>

                <DiagnosticDialog>
                  <Button className="w-full bg-white text-indigo-600 hover:bg-slate-100 h-14 rounded-xl font-bold text-lg">
                    Obtener reporte detallado
                  </Button>
                </DiagnosticDialog>
                
                <p className="text-indigo-200 text-xs text-center italic">
                  *Cálculo basado en promedios de la industria y optimización de procesos estándar de Odoo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;