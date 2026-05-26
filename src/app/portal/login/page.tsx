"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function PortalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // This will be connected to Supabase Auth in production
    alert(
      "Client Portal authentication will be connected to Supabase Auth. Demo mode.",
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-amber/10 border border-brand-amber/30 mb-6">
            <Lock className="w-8 h-8 text-brand-amber" />
          </div>
          <h1 className="text-3xl font-black text-white">Client Portal</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Sign in to view quotes, job status, and invoices.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="rounded-2xl border border-white/5 bg-brand-card/80 backdrop-blur-sm p-8 space-y-5"
        >
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.co.zw"
                className="w-full pl-10 pr-4 p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 p-3.5 text-sm bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-brand-amber/50 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-amber text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-amber/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-center text-xs text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Forgot your password?
            </a>
          </p>
        </form>

        <p className="mt-6 text-center text-xs text-zinc-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-brand-amber hover:underline">
            Request access
          </a>
        </p>
      </motion.div>
    </div>
  );
}
