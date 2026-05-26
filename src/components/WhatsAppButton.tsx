"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+263777000000"; // Target Zimbabwe number
  const message = encodeURIComponent(
    "Hi Signs For Real! I'm interested in premium architectural signage. I'd like to get a quote."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:shadow-[0_8px_40px_rgb(16,185,129,0.5)] transition-all duration-300 hover:scale-110 group"
      aria-label="Contact Signs For Real on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
      <div className="relative flex items-center gap-2">
        <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs font-bold text-sm transition-all duration-300 ease-out">
          Chat With Us
        </span>
      </div>
      {/* Pulsing Notification Dot */}
      <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-amber border-2 border-zinc-950 rounded-full" />
    </a>
  );
}
