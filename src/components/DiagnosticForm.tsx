"use client";

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";

const DiagnosticForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("¡Solicitud enviada! Nos pondremos en contacto en menos de 24 horas.");
    // Simulate a small delay for better UX before redirecting
    setTimeout(() => {
      navigate('/gracias');
    }, 1000);
  };

  return (
    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300">Nombre completo</Label>
            <Input id="name" placeholder="Juan Pérez" className="bg-white/5 border-white/10 text-white h-12" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">Correo corporativo</Label>
            <Input id="email" type="email" placeholder="juan@empresa.com" className="bg-white/5 border-white/10 text-white h-12" required />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company" className="text-slate-300">Nombre de la empresa</Label>
          <Input id="company" placeholder="Mi Empresa S.A. de C.V." className="bg-white/5 border-white/10 text-white h-12" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-300">¿Cuál es tu principal reto hoy?</Label>
          <Textarea 
            id="message" 
            placeholder="Ej: Mi inventario no coincide con mis ventas..." 
            className="bg-white/5 border-white/10 text-white min-h-[100px]" 
          />
        </div>

        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-14 text-lg font-bold rounded-xl">
          Enviar solicitud de diagnóstico
        </Button>
      </form>
    </div>
  );
};

export default DiagnosticForm;