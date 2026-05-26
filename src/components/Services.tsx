"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Lightbulb,
  Image,
  Signpost,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architectural Signage",
    subtitle: "3D Fabrication, Metalwork & Exterior Branding",
    description:
      "Precision-engineered monument signs, channel letters, and dimensional logos fabricated from aluminum, stainless steel, brass, and acrylic — built to anchor your brand in the physical world.",
    accent: "amber",
    items: [
      "Custom channel letters",
      "Monument & pylon signs",
      "Metal fabrication & welding",
      "Branded wall treatments",
    ],
  },
  {
    icon: Lightbulb,
    title: "Illuminated & Neon",
    subtitle: "LED Engineering, Backlighting & Custom Glow",
    description:
      "Forward-lit, halo-lit, and reverse-lit signage with precision RGB LED integration. Custom neon flex for that unmistakable luminous edge — indoors or out.",
    accent: "cyan",
    items: [
      "LED channel letters",
      "Neon flex signs",
      "Lightbox displays",
      "Backlit acrylic panels",
    ],
  },
  {
    icon: Image,
    title: "Large Format & Graphics",
    subtitle: "Corporate Wraps, Window Graphics & Wall Displays",
    description:
      "High-resolution full-color print, vinyl wrapping, frosted window perf, and large-format wall murals that transform corporate environments and retail spaces.",
    accent: "orange",
    items: [
      "Vehicle wraps & decals",
      "Window perf & frosted glass",
      "Wall murals & graphics",
      "Trade show displays",
    ],
  },
  {
    icon: Signpost,
    title: "Wayfinding Systems",
    subtitle: "Interior Directories, Compliance & Minimal Aesthetics",
    description:
      "Comprehensive campus directionals, interior sign families, ADA compliance, and parking lot identifiers designed with a clean, minimal aesthetic that complements modern architecture.",
    accent: "amber",
    items: [
      "Directional sign systems",
      "Room & suite identifiers",
      "Parking & lot signage",
      "Compliance & safety signs",
    ],
  },
];

const accentMap: Record<string, string> = {
  amber: "border-brand-amber/20 group-hover:border-brand-amber/60 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
  cyan: "border-brand-cyan/20 group-hover:border-brand-cyan/60 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]",
  orange: "border-brand-orange/20 group-hover:border-brand-orange/60 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.2)]",
};

const glowMap: Record<string, string> = {
  amber: "glow-amber",
  cyan: "glow-cyan",
  orange: "glow-orange",
};

const iconColorMap: Record<string, string> = {
  amber: "text-brand-amber group-hover:text-brand-amber",
  cyan: "text-brand-cyan group-hover:text-brand-cyan",
  orange: "text-brand-orange group-hover:text-brand-orange",
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 metal-brushed" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber border border-brand-amber/30 rounded-full bg-brand-amber/5">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Capabilities &amp; Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base">
            From concept to installation — we handle every phase of signage
            production with precision and care.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border ${accentMap[service.accent]} bg-brand-card/80 backdrop-blur-sm p-8 transition-all duration-500`}
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-700/50 bg-black/40 ${iconColorMap[service.accent]} transition-colors duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title block */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p className={`text-sm font-medium ${glowMap[service.accent]} opacity-80 mb-4`}>
                  {service.subtitle}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-zinc-500"
                    >
                      <span
                        className={`h-1 w-1 rounded-full ${
                          service.accent === "cyan"
                            ? "bg-brand-cyan"
                            : service.accent === "orange"
                              ? "bg-brand-orange"
                              : "bg-brand-amber"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom arrow */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-zinc-500 group-hover:text-white transition-colors duration-300">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>

                {/* Hover corner accent */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border-[1px] border-white/5 group-hover:border-brand-amber/20 group-hover:scale-[3] transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
