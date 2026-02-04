"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle2 } from "lucide-react";
import { showSuccess } from "@/utils/toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showSuccess("¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.");
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative bg-indigo-600 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-indigo-500/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {!subscribed ? (
              <>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Recibe estrategias para escalar tu empresa
                </h2>
                <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
                  Únete a más de 500 directivos que reciben mensualmente consejos sobre Odoo, optimización de procesos y cumplimiento fiscal en México.
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input 
                    type="email" 
                    placeholder="tu@empresa.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-indigo-200 rounded-full px-6 focus:ring-white/30"
                    required
                  />
                  <Button type="submit" className="h-14 bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8 font-bold text-lg shadow-xl">
                    Suscribirme <Send className="ml-2" size={18} />
                  </Button>
                </form>
                <p className="text-indigo-200 text-xs mt-6">
                  Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
                </p>
              </>
            ) : (
              <div className="py-8 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-white" size={40} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¡Ya estás en la lista!</h2>
                <p className="text-indigo-100 text-lg">
                  Revisa tu bandeja de entrada para confirmar tu suscripción.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;