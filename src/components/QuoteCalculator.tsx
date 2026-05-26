"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  Zap,
} from "lucide-react";

const productCategories = [
  {
    id: "banners",
    label: "Banners",
    desc: "Vinyl banners, mesh banners, pull-up banners",
    icon: "🏴",
  },
  {
    id: "vehicle-wraps",
    label: "Vehicle Wraps",
    desc: "Full wraps, partial wraps, decals, fleet graphics",
    icon: "🚗",
  },
  {
    id: "signboards",
    label: "Sign Boards",
    desc: "PVC boards, aluminium composite, acrylic signs",
    icon: "🪧",
  },
  {
    id: "channel-letters",
    label: "Channel Letters",
    desc: "3D letters, illuminated, non-illuminated, stainless",
    icon: "✨",
  },
  {
    id: "neon-led",
    label: "Neon & LED Signs",
    desc: "Custom neon flex, lightboxes, backlit displays",
    icon: "💡",
  },
  {
    id: "window-graphics",
    label: "Window Graphics",
    desc: "Frosted film, perf vinyl, decorative window wraps",
    icon: "🪟",
  },
];

const sizeOptions = [
  { value: "small", label: "Small", desc: "Up to 1m² (e.g. desk sign, small banner)" },
  { value: "medium", label: "Medium", desc: "1–5m² (e.g. standard signboard, vehicle door)" },
  { value: "large", label: "Large", desc: "5–15m² (e.g. building sign, full vehicle side)" },
  { value: "xlarge", label: "X-Large", desc: "15m²+ (e.g. billboard, full fleet wrap)" },
];

const placementOptions = [
  { value: "indoor", label: "Indoor", desc: "Protected environment, standard materials" },
  { value: "outdoor", label: "Outdoor", desc: "Weather-resistant, UV-stable materials" },
];

const steps = [
  { id: 1, label: "Category" },
  { id: 2, label: "Size & Placement" },
  { id: 3, label: "Parameters" },
  { id: 4, label: "Contact" },
];

interface FormData {
  category: string;
  size: string;
  placement: string;
  illumination: boolean;
  permitting: boolean;
  quantity: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const initialForm: FormData = {
  category: "",
  size: "",
  placement: "",
  illumination: false,
  permitting: false,
  quantity: 1,
  name: "",
  email: "",
  phone: "",
  notes: "",
};

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [estimatedRange, setEstimatedRange] = useState("");

  const update = (field: keyof FormData, value: string | boolean | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return !!form.category;
    if (step === 2) return !!form.size && !!form.placement;
    if (step === 3) return true;
    if (step === 4) return !!form.name && !!form.email && !!form.phone;
    return false;
  };

  const nextStep = () => {
    if (step < 4 && canProceed()) setStep((s) => s + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const calculateEstimate = () => {
    const basePrices: Record<string, number> = {
      banners: 25,
      "vehicle-wraps": 120,
      signboards: 60,
      "channel-letters": 180,
      "neon-led": 200,
      "window-graphics": 35,
    };
    const sizeMultipliers: Record<string, number> = {
      small: 1,
      medium: 2.5,
      large: 5,
      xlarge: 10,
    };
    const placementMultiplier = form.placement === "outdoor" ? 1.3 : 1;
    const illuminationCost = form.illumination ? 150 : 0;
    const permittingCost = form.permitting ? 80 : 0;

    const base = basePrices[form.category] || 50;
    const sizeM = sizeMultipliers[form.size] || 1;
    const unitPrice = base * sizeM * placementMultiplier;
    const total = (unitPrice + illuminationCost + permittingCost) * form.quantity;

    const low = Math.round(total * 0.85);
    const high = Math.round(total * 1.15);
    return `$${low} – $${high}`;
  };

  const handleSubmit = async () => {
    const range = calculateEstimate();
    setEstimatedRange(range);
    setSubmitted(true);

    // POST to API endpoint
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, estimatedRange: range }),
      });
    } catch {
      // silent fail — form submission still shows estimate
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setStep(1);
    setSubmitted(false);
    setEstimatedRange("");
  };

  return (
    <section id="quote" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 metal-brushed" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-amber border border-brand-amber/30 rounded-full bg-brand-amber/5">
            Instant Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Quote Calculator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-sm sm:text-base">
            Get a ballpark price in under 60 seconds. No commitment required.
          </p>
        </motion.div>

        {/* Step indicators */}
        <div className="mb-10 flex items-center justify-center gap-2 sm:gap-4">
          {steps.map((s, i) => (
            <React.Fragment key={s.id}>
              <div className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                    step > s.id
                      ? "bg-brand-amber text-black"
                      : step === s.id
                        ? "bg-brand-amber/20 text-brand-amber border border-brand-amber/50"
                        : "bg-zinc-800 text-zinc-500 border border-zinc-700"
                  }`}
                >
                  {step > s.id ? <Check className="w-4 h-4" /> : s.id}
                </div>
                <span
                  className={`hidden sm:inline text-xs font-medium uppercase tracking-wider ${
                    step >= s.id ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-px w-8 sm:w-12 transition-colors duration-300 ${
                    step > s.id ? "bg-brand-amber/50" : "bg-zinc-800"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="submitted"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-brand-amber/30 bg-brand-card/80 backdrop-blur-sm p-8 sm:p-12 text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-amber/10 border border-brand-amber/30">
                <Zap className="w-8 h-8 text-brand-amber" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Your Estimated Range
              </h3>
              <div className="text-3xl sm:text-4xl font-black text-brand-amber glow-amber mb-4">
                {estimatedRange}
              </div>
              <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto">
                This is a preliminary estimate based on the details provided. A
                team member will follow up within 24 hours with a formal quote.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-3 border border-zinc-600 text-zinc-300 text-sm font-bold uppercase tracking-wider rounded-xl hover:border-brand-amber hover:text-brand-amber transition-all duration-300"
              >
                Get Another Estimate
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/5 bg-brand-card/80 backdrop-blur-sm p-6 sm:p-10"
            >
              {/* Step 1: Category */}
              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">
                    Select Product Category
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {productCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          update("category", cat.id);
                          setTimeout(nextStep, 200);
                        }}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          form.category === cat.id
                            ? "border-brand-amber bg-brand-amber/10"
                            : "border-zinc-700 bg-zinc-900/50 hover:border-zinc-500"
                        }`}
                      >
                        <span className="text-2xl mb-2 block">{cat.icon}</span>
                        <div className="text-sm font-bold text-white">
                          {cat.label}
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-0.5">
                          {cat.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Size & Placement */}
              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">
                    Size &amp; Placement
                  </h3>
                  {/* Size */}
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 block">
                    Estimate Size
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {sizeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => update("size", opt.value)}
                        className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                          form.size === opt.value
                            ? "border-brand-amber bg-brand-amber/10"
                            : "border-zinc-700 bg-zinc-900/50 hover:border-zinc-500"
                        }`}
                      >
                        <div className="text-sm font-bold text-white">
                          {opt.label}
                        </div>
                        <div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Placement */}
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 block">
                    Placement Location
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {placementOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => update("placement", opt.value)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          form.placement === opt.value
                            ? "border-brand-amber bg-brand-amber/10"
                            : "border-zinc-700 bg-zinc-900/50 hover:border-zinc-500"
                        }`}
                      >
                        <div className="text-sm font-bold text-white">
                          {opt.label}
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-0.5">
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Parameters */}
              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">
                    Project Parameters
                  </h3>

                  {/* Quantity */}
                  <div className="mb-8">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 block">
                      Quantity
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          update("quantity", Math.max(1, form.quantity - 1))
                        }
                        className="w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center text-white hover:border-zinc-500 transition-colors"
                      >
                        –
                      </button>
                      <span className="text-2xl font-bold text-white w-8 text-center">
                        {form.quantity}
                      </span>
                      <button
                        onClick={() =>
                          update("quantity", Math.min(100, form.quantity + 1))
                        }
                        className="w-10 h-10 rounded-lg border border-zinc-700 flex items-center justify-center text-white hover:border-zinc-500 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Toggles */}
                  <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-900/50 cursor-pointer hover:border-zinc-500 transition-colors">
                      <div>
                        <div className="text-sm font-bold text-white">
                          Illumination Required
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          LED backlight, neon flex, or internal illumination
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={form.illumination}
                        onChange={(e) =>
                          update("illumination", e.target.checked)
                        }
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-zinc-700 rounded-full peer-checked:bg-brand-amber after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
                    </label>

                    <label className="flex items-center justify-between p-4 rounded-xl border border-zinc-700 bg-zinc-900/50 cursor-pointer hover:border-zinc-500 transition-colors">
                      <div>
                        <div className="text-sm font-bold text-white">
                          Permitting Assistance
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Council approvals, landlord compliance, structural sign permits
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={form.permitting}
                        onChange={(e) => update("permitting", e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-zinc-700 rounded-full peer-checked:bg-brand-amber after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
                    </label>
                  </div>
                </div>
              )}

              {/* Step 4: Contact */}
              {step === 4 && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">
                    Your Contact Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                        Full Name <span className="text-brand-amber">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="John Doe"
                        className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                          Email <span className="text-brand-amber">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          placeholder="john@company.co.zw"
                          className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                          Phone <span className="text-brand-amber">*</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="+263 77 000 0000"
                          className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
                        Project Notes
                      </label>
                      <textarea
                        value={form.notes}
                        onChange={(e) => update("notes", e.target.value)}
                        placeholder="Any specific requirements, deadlines, or references..."
                        rows={3}
                        className="w-full p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={prevStep}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                    step > 1
                      ? "text-zinc-400 hover:text-white"
                      : "text-zinc-700 cursor-not-allowed"
                  }`}
                  disabled={step === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>

                {step < 4 ? (
                  <button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber/90 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Get My Estimate
                    <Zap className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
