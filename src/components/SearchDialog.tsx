"use client";

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search, FileText, Briefcase, LayoutDashboard, MessageSquare } from 'lucide-react';

const SearchDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Escribe para buscar..." />
        <CommandList className="bg-[#020617] text-slate-200 border-white/10">
          <CommandEmpty>No se encontraron resultados.</CommandEmpty>
          <CommandGroup heading="Navegación">
            <CommandItem onSelect={() => runCommand(() => navigate('/servicios'))}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Servicios y Módulos</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate('/casos'))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Casos de Éxito</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => navigate('/blog'))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Blog y Recursos</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="bg-white/10" />
          <CommandGroup heading="Ayuda">
            <CommandItem onSelect={() => runCommand(() => navigate('/contacto'))}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Hablar con un experto</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchDialog;