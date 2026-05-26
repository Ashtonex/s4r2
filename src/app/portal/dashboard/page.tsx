"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ClipboardList,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  Package,
  Users,
} from "lucide-react";

const stats = [
  { icon: ClipboardList, label: "Active Quotes", value: "3", accent: "amber" },
  { icon: Package, label: "Jobs In Progress", value: "2", accent: "cyan" },
  { icon: CheckCircle, label: "Completed", value: "12", accent: "green" },
  { icon: Clock, label: "Pending Approval", value: "1", accent: "orange" },
];

const recentJobs = [
  {
    id: "JOB-2026-0042",
    project: "Eagle Insurance - Monument Sign",
    status: "In Production",
    statusColor: "text-brand-cyan",
    statusBg: "bg-brand-cyan/10 border-brand-cyan/20",
    updated: "2 days ago",
  },
  {
    id: "JOB-2026-0041",
    project: "Meikles Boutique - Neon Installation",
    status: "Awaiting Approval",
    statusColor: "text-brand-orange",
    statusBg: "bg-brand-orange/10 border-brand-orange/20",
    updated: "5 days ago",
  },
  {
    id: "JOB-2026-0038",
    project: "ZimTel - Lobby Signage",
    status: "Completed",
    statusColor: "text-emerald-400",
    statusBg: "bg-emerald-400/10 border-emerald-400/20",
    updated: "2 weeks ago",
  },
];

export default function PortalDashboard() {
  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Dashboard Header */}
      <div className="border-b border-white/5 bg-brand-card/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white">Client Portal</h1>
            <p className="text-xs text-zinc-500">Welcome back, John</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-xs text-zinc-400 hover:text-white transition-colors">
              Settings
            </button>
            <button className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-zinc-800 text-zinc-400 rounded-lg hover:bg-zinc-700 hover:text-white transition-all">
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-5 h-5 text-zinc-400" />
                <span className="text-2xl font-black text-white">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Jobs */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
              Recent Jobs
            </h2>
            <div className="space-y-3">
              {recentJobs.map((job) => (
                <div
                  key={job.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:border-zinc-700 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-zinc-500">
                          {job.id}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full border ${job.statusBg} ${job.statusColor}`}
                        >
                          <AlertCircle className="w-2.5 h-2.5" />
                          {job.status}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-white">
                        {job.project}
                      </h3>
                    </div>
                    <span className="text-[10px] text-zinc-600 shrink-0">
                      {job.updated}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
              Quick Actions
            </h2>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 space-y-3">
              {[
                { icon: FileText, label: "Request New Quote" },
                { icon: Users, label: "Update Contact Info" },
                { icon: ClipboardList, label: "View Order History" },
                { icon: BarChart3, label: "Download Invoices" },
              ].map((action) => (
                <button
                  key={action.label}
                  className="w-full flex items-center gap-3 p-3 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                >
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
