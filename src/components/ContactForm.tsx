"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // silent
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-amber/30 bg-brand-card/80 backdrop-blur-sm p-8 sm:p-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30">
          <Check className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-2xl font-black text-white mb-2">
          Message Received!
        </h3>
        <p className="text-sm text-zinc-400 max-w-md mx-auto">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber border border-brand-amber/30 rounded-full bg-brand-amber/5">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Let&apos;s Build Something Iconic
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base">
            Ready to elevate your brand presence? Reach out and we&apos;ll
            schedule a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: MapPin,
                label: "Visit Us",
                value: "123 Samora Machel Ave\nHarare, Zimbabwe",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+263 777 000 000",
                href: "tel:+263777000000",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "info@signsforreal.co.zw",
                href: "mailto:info@signsforreal.co.zw",
              },
              {
                icon: Clock,
                label: "Office Hours",
                value: "Mon–Fri: 8:00 AM – 5:00 PM\nSat: 8:00 AM – 1:00 PM",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-amber/10 border border-brand-amber/20">
                  <item.icon className="w-5 h-5 text-brand-amber" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-zinc-300 whitespace-pre-line">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="h-48 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <span className="text-xs text-zinc-600 uppercase tracking-wider font-medium">
                Map Embed – Harare, Zimbabwe
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-white/5 bg-brand-card/80 backdrop-blur-sm p-6 sm:p-10 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                  Name <span className="text-brand-amber">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                  Email <span className="text-brand-amber">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                  Phone <span className="text-brand-amber">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+263 77 000 0000"
                  className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 focus:outline-none focus:border-brand-amber/50 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="architectural-signage">Architectural Signage</option>
                  <option value="illuminated-neon">Illuminated &amp; Neon</option>
                  <option value="large-format">Large Format &amp; Graphics</option>
                  <option value="wayfinding">Wayfinding Systems</option>
                  <option value="vehicle-branding">Vehicle Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group"
            >
              Send Message
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
