"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

const industries = ["All", "Corporate", "Retail", "Hospitality", "Education", "Healthcare", "Industrial"];

const portfolioItems = [
  {
    id: 1,
    title: "Eagle Insurance HQ",
    industry: "Corporate",
    materials: "Stainless Steel, Acrylic, LED",
    location: "Harare, Zimbabwe",
    desc: "Monument sign with halo-lit channel letters and brushed stainless steel backing.",
    accent: "amber",
  },
  {
    id: 2,
    title: "Meikles Boutique Wing",
    industry: "Hospitality",
    materials: "Brass, Glass, Neon Flex",
    location: "Harare, Zimbabwe",
    desc: "Luxury facade signage with custom brass lettering and warm neon accent.",
    accent: "amber",
  },
  {
    id: 3,
    title: "ZimTel Innovation Centre",
    industry: "Corporate",
    materials: "Aluminum Composite, RGB LED",
    location: "Harare, Zimbabwe",
    desc: "Dynamic illuminated signage with programmable color-changing LEDs.",
    accent: "cyan",
  },
  {
    id: 4,
    title: "Sam Levy Village Wayfinding",
    industry: "Retail",
    materials: "Powder-coated Aluminum, Acrylic",
    location: "Harare, Zimbabwe",
    desc: "Comprehensive wayfinding system with modular directory units.",
    accent: "cyan",
  },
  {
    id: 5,
    title: "UZ Faculty of Engineering",
    industry: "Education",
    materials: "Brushed Aluminum, Vinyl Graphics",
    location: "Harare, Zimbabwe",
    desc: "Building identification suite with departmental directory boards.",
    accent: "orange",
  },
  {
    id: 6,
    title: "Avenues Clinic Campus",
    industry: "Healthcare",
    materials: "Acrylic, Digital Print, Aluminum",
    location: "Harare, Zimbabwe",
    desc: "ADA-compliant wayfinding and room identification system.",
    accent: "amber",
  },
  {
    id: 7,
    title: "Delta Beverages Fleet",
    industry: "Industrial",
    materials: "Cast Vinyl, Lamination",
    location: "Harare, Zimbabwe",
    desc: "Full fleet wrapping for 30+ delivery vehicles with company branding.",
    accent: "orange",
  },
  {
    id: 8,
    title: "First Mutual Park",
    industry: "Corporate",
    materials: "Composite Panel, LED Backlight",
    location: "Harare, Zimbabwe",
    desc: "Large-format pylon sign with premium backlit illumination.",
    accent: "cyan",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = portfolioItems.filter((item) => {
    const matchesIndustry =
      activeFilter === "All" || item.industry === activeFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber border border-brand-amber/30 rounded-full bg-brand-amber/5">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base">
            Browse our signature work across industries and applications.
          </p>
        </motion.div>

        {/* Filter & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Industry filters */}
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all duration-200 ${
                  activeFilter === industry
                    ? "bg-brand-amber text-black border-brand-amber"
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 text-sm bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 focus:ring-1 focus:ring-brand-amber/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filtered.map((item, index) => {
              const accentBorder =
                item.accent === "cyan"
                  ? "border-brand-cyan/30 group-hover:border-brand-cyan"
                  : item.accent === "orange"
                    ? "border-brand-orange/30 group-hover:border-brand-orange"
                    : "border-brand-amber/30 group-hover:border-brand-amber";

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-xl border ${accentBorder} bg-brand-card transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]`}
                >
                  {/* Image placeholder */}
                  <div className="relative h-44 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="text-4xl font-black text-zinc-700 select-none">
                      {item.title.charAt(0)}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20 flex items-center justify-center">
                      <span className="text-xs font-bold uppercase tracking-wider text-white border border-white/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-muted">
                      {item.industry}
                    </span>
                    <h3 className="mt-1.5 text-base font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 line-clamp-2">
                      {item.desc}
                    </p>

                    {/* Slide-in details on hover */}
                    <div className="mt-3 pt-3 border-t border-white/5 space-y-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-wider">
                        <span className="font-semibold text-zinc-400">Materials:</span>{" "}
                        {item.materials}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-wider">
                        <span className="font-semibold text-zinc-400">Location:</span>{" "}
                        {item.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-zinc-500 text-sm">
              No projects match your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
