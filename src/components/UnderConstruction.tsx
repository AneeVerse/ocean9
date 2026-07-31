"use client";

import Image from "next/image";
import { Wrench, ShieldCheck, Compass } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-[#020917] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Decorative Glow & Waves */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#003D82]/20 to-transparent" />
      </div>

      {/* Header Bar with Home Page Sized Logo */}
      <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-24 flex items-center justify-between">
        <div className="relative w-[224px] h-[68px] overflow-visible flex items-center">
          <Image
            src="/assets/ocean9-logo-nav.png"
            alt="Ocean 9 Logo"
            fill
            className="object-contain object-left scale-[1.4] origin-left"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col items-center justify-center flex-1">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#003D82]/60 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-8 shadow-lg">
          <Wrench className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Site Under Construction</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-3xl">
          We Are Upgrading The <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-200 bg-clip-text text-transparent">
            Subsea & Marine Portal
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed font-normal">
          Ocean 9 Offshore Services is currently enhancing the web platform to deliver a faster, safer, and more comprehensive subsea engineering experience.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl text-left">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-semibold text-white">Offshore Safety</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              Certified subsea & commercial diving standards.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <Compass className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-semibold text-white">Subsea Solutions</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              Inspection, salvage, cable repair & marine support.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
            <Wrench className="w-6 h-6 text-cyan-400 mb-3" />
            <h3 className="text-base font-semibold text-white">Active Build</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
              Currently building & updating core services.
            </p>
          </div>
        </div>
      </main>

      {/* Clean Professional Footer */}
      <footer className="relative z-10 border-t border-white/10 py-6 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ocean 9 Offshore Services Pvt. Ltd. All rights reserved.</p>
          <p className="text-slate-400 font-medium">Reliable Underwater Diving, Marine & Offshore Services</p>
        </div>
      </footer>
    </div>
  );
}
