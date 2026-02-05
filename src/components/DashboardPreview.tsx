"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Package, 
  ArrowUpRight,
  DollarSign,
  ShoppingCart
} from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Control total en un solo vistazo</h2>
          <p className="text-slate-400 text-lg">
            Visualiza el pulso de tu empresa con tableros en tiempo real. Desde ventas hasta niveles de inventario, todo conectado.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Glow */}
          <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-[2.5rem] -z-10" />
          
          <div className="bg-[#0f172a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Mock Header */}
            <div className="bg-white/5 border-b border-white/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="h-4 w-32 bg-white/10 rounded-full ml-4" />
              </div>
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10" />
                <div className="h-8 w-24 rounded-lg bg-indigo-600/20 border border-indigo-500/30" />
              </div>
            </div>

            {/* Mock Content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <DollarSign size={20} />
                  </div>
                  <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                    +12.5% <ArrowUpRight size={12} />
                  </span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">Ventas Mensuales</p>
                  <p className="text-2xl font-bold text-white mt-1">$1,240,500 MXN</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <ShoppingCart size={20} />
                  </div>
                  <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                    +8.2% <ArrowUpRight size={12} />
                  </span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">Órdenes Nuevas</p>
                  <p className="text-2xl font-bold text-white mt-1">452</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Package size={20} />
                  </div>
                  <span className="text-amber-400 text-xs font-bold flex items-center gap-1">
                    Bajo Stock
                  </span>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-wider font-bold">Productos Críticos</p>
                  <p className="text-2xl font-bold text-white mt-1">12 SKUs</p>
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 min-h-[300px] flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white font-bold">Rendimiento de Ventas</h3>
                  <div className="flex gap-2">
                    <div className="h-2 w-8 bg-indigo-500 rounded-full" />
                    <div className="h-2 w-8 bg-white/10 rounded-full" />
                  </div>
                </div>
                <div className="flex-grow flex items-end gap-4">
                  {[40, 70, 45, 90, 65, 80, 100, 85, 60, 75, 95, 110].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 1 }}
                      className="flex-1 bg-gradient-to-t from-indigo-600/20 to-indigo-500 rounded-t-md"
                    />
                  ))}
                </div>
              </div>

              {/* Side List */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                <h3 className="text-white font-bold text-sm">Actividad Reciente</h3>
                <div className="space-y-4">
                  {[
                    { user: "Carlos R.", action: "Factura timbrada", time: "2m ago" },
                    { user: "Ana V.", action: "Stock actualizado", time: "15m ago" },
                    { user: "Soporte", action: "Ticket resuelto", time: "1h ago" },
                    { user: "Sistema", action: "Backup completo", time: "3h ago" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
                        {item.user[0]}
                      </div>
                      <div className="flex-grow">
                        <p className="text-white text-xs font-medium">{item.action}</p>
                        <p className="text-slate-500 text-[10px]">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;