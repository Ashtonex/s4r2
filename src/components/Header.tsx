"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium tracking-wider text-zinc-300 hover:text-white transition-colors duration-300 uppercase after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-brand-amber after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#quote"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-brand-amber/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group"
        >
          Get a Quote
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-zinc-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-2 border-t border-white/5 bg-black/90 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-4 text-sm font-medium tracking-wider text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-brand-amber/90 transition-all"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
