"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const services = [
  "Architectural Signage",
  "Illuminated & Neon",
  "Large Format & Graphics",
  "Wayfinding Systems",
  "Vehicle Branding",
  "Design & Consultation",
];

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Quote Calculator", href: "#quote" },
  { label: "Client Portal", href: "/portal" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-brand-dark">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-amber/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-zinc-400">
              Harare&apos;s premier architectural signage manufacturer. We transform
              spaces into landmarks with precision-crafted signage solutions.
            </p>
            <div className="mt-6 flex gap-3">
              {["FB", "IG", "LI", "X"].map((s) => (
                <span
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700 text-xs font-bold text-zinc-400 hover:border-brand-amber hover:text-brand-amber transition-all duration-300 cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-amber mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-amber mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-amber mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <MapPin className="w-4 h-4 text-brand-amber mt-0.5 shrink-0" />
                <span>
                  123 Samora Machel Ave
                  <br />
                  Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Phone className="w-4 h-4 text-brand-amber shrink-0" />
                <a
                  href="tel:+263777000000"
                  className="hover:text-white transition-colors"
                >
                  +263 777 000 000
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <Mail className="w-4 h-4 text-brand-amber shrink-0" />
                <a
                  href="mailto:info@signsforreal.co.zw"
                  className="hover:text-white transition-colors"
                >
                  info@signsforreal.co.zw
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <Clock className="w-4 h-4 text-brand-amber mt-0.5 shrink-0" />
                <span>
                  Mon–Fri: 8:00 AM – 5:00 PM
                  <br />
                  Sat: 8:00 AM – 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Signs For Real. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
