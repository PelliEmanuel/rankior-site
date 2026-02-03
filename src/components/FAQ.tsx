"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Odoo realmente cumple con el SAT y CFDI 4.0?",
    answer: "Sí, configuramos la localización mexicana oficial de Odoo que incluye facturación electrónica 4.0, complementos de pago, carta porte y contabilidad electrónica automatizada."
  },
  {
    question: "¿Cuánto tiempo toma la implementación?",
    answer: "Nuestros paquetes están diseñados para ser ágiles. El paquete Launch toma 30 días, mientras que proyectos más complejos pueden tomar entre 60 y 90 días dependiendo de las integraciones."
  },
  {
    question: "¿Puedo migrar mis datos de Excel o de otro ERP?",
    answer: "Totalmente. Incluimos un proceso de limpieza y migración de datos maestros (clientes, productos, proveedores) en todos nuestros paquetes para asegurar una transición fluida."
  },
  {
    question: "¿Ofrecen soporte después de la implementación?",
    answer: "Sí, todos nuestros proyectos incluyen un periodo de acompañamiento post-go-live y ofrecemos planes de soporte mensual para mejoras continuas y actualizaciones."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-950/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-slate-400">Todo lo que necesitas saber sobre Odoo en México.</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`} 
              className="border border-white/10 bg-white/5 rounded-2xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-white hover:no-underline text-left py-6 text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;