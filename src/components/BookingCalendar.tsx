"use client";

import React from 'react';

const BookingCalendar = () => {
  // Reemplaza esta URL con tu link de Calendly u Odoo Appointments
  const calendarUrl = "https://calendly.com/tu-usuario/diagnostico-rankior?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4f46e5";

  return (
    <div className="w-full rounded-3xl overflow-hidden bg-white border border-white/10 shadow-2xl min-h-[600px]">
      <iframe
        src={calendarUrl}
        width="100%"
        height="600"
        frameBorder="0"
        title="Agenda tu diagnóstico"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default BookingCalendar;