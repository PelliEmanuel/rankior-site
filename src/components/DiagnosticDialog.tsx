"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DiagnosticForm from './DiagnosticForm';

interface DiagnosticDialogProps {
  children: React.ReactNode;
}

const DiagnosticDialog = ({ children }: DiagnosticDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-[#020617] border-white/10 p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-3xl font-bold text-white">Agendar Diagnóstico</DialogTitle>
            <p className="text-slate-400">
              Completa el formulario y un consultor experto te contactará en menos de 24 horas.
            </p>
          </DialogHeader>
          <DiagnosticForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DiagnosticDialog;