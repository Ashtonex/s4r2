"use client";

import React from "react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Visual Signage Icon Placeholder */}
      <div className="relative w-10 h-10 flex items-center justify-center border-2 border-brand-amber bg-black/40 rounded-lg overflow-hidden transition-all duration-300 group-hover:border-brand-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent" />
        {/* Geometric sign letters icon */}
        <span className="font-mono text-lg font-bold text-brand-amber group-hover:text-brand-cyan transition-colors duration-300">
          S4R
        </span>
        {/* Sign fixture lines (resembling neon mounting brackets) */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-zinc-600 rounded-full" />
        <div className="absolute top-1 right-1 w-1 h-1 bg-zinc-600 rounded-full" />
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-zinc-600 rounded-full" />
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-zinc-600 rounded-full" />
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-black tracking-wider text-white uppercase font-sans leading-none flex items-center gap-1">
          SIGNS <span className="text-brand-amber group-hover:text-brand-cyan transition-colors duration-300">FOR</span> REAL
        </span>
        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-semibold leading-none mt-1">
          Architectural Signage
        </span>
      </div>
    </div>
  );
}
