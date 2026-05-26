"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-card to-brand-dark" />

      {/* Geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradients for accent glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-amber/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber border border-brand-amber/30 rounded-full bg-brand-amber/5">
            Harare&apos;s Premier Signage Partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight text-white"
        >
          Turning Spaces Into{" "}
          <span className="bg-gradient-to-r from-brand-amber via-brand-orange to-brand-amber bg-clip-text text-transparent glow-amber">
            Landmarks
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-zinc-300 tracking-wide">
            Premium Architectural Signage
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed"
        >
          From precision 3D fabricated lettering to illuminated monument signs and
          comprehensive wayfinding systems — we engineer brand identities that demand
          attention across Zimbabwe and beyond.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#quote"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-zinc-600 text-zinc-300 font-medium text-sm uppercase tracking-wider rounded-xl hover:border-brand-cyan hover:text-brand-cyan transition-all duration-300"
          >
            Explore Our Work
            <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "12+", label: "Years Experience" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "ZW", label: "Nationwide Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
