"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, ShieldCheck, Compass, ArrowRight } from "lucide-react";

export default function UnderConstruction() {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    if (
      process.env.NODE_ENV === "development" ||
      (typeof window !== "undefined" &&
        (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"))
    ) {
      setIsLocalhost(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#002365] text-white flex flex-col justify-between relative overflow-hidden font-sans">
      {/* Background Video & Crisp Contrast Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.01] brightness-105"
        >
          <source src="/assets/13998175_3840_2160_60fps (1)_compressed.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark tint to preserve video clarity while enhancing text contrast */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002365] via-transparent to-[#001744]/65" />
      </div>

      {/* Header Bar with Logo */}
      <header className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6 h-24 flex items-center justify-between">
        <div className="relative w-[180px] sm:w-[200px] h-[55px] sm:h-[60px] flex items-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] mt-2">
          <Image
            src="/assets/ocean9-logo.png"
            alt="Ocean 9 Logo"
            fill
            className="object-contain object-left scale-100 origin-left"
            priority
          />
        </div>

        {/* Show preview link ONLY on localhost/development environment */}
        {isLocalhost && (
          <Link
            href="/?preview=true"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#002365]/85 hover:bg-[#002365] border border-white/25 text-white text-xs sm:text-sm font-medium transition-all shadow-xl backdrop-blur-md group cursor-pointer"
          >
            <span className="font-dm-sans">Preview Full Site</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#002365] transition-all">
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </Link>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col items-center justify-center flex-1">
        {/* Premium Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#002365]/85 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-roboto font-medium tracking-wide mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#20c9d2"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 animate-pulse"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span className="uppercase text-[12px] sm:text-[13px] tracking-wider text-[#20c9d2] font-bold">
            Site Under Construction
          </span>
        </div>

        {/* Main Headline with Razor-Sharp Contrast Shadow */}
        <h1 className="font-poppins font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 max-w-3xl [text-shadow:_0_4px_30px_rgba(0,0,0,0.95),_0_2px_10px_rgba(0,0,0,0.95)]">
          We Are Upgrading The <br />
          <span className="text-[#20c9d2] [text-shadow:_0_4px_30px_rgba(0,0,0,0.9)]">
            Subsea & Marine Portal
          </span>
        </h1>

        <p className="font-roboto font-medium text-slate-100 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed [text-shadow:_0_2px_16px_rgba(0,0,0,0.95),_0_1px_4px_rgba(0,0,0,0.9)]">
          Ocean 9 Offshore Services is currently enhancing our digital platform to deliver a faster, safer, and more comprehensive subsea engineering experience.
        </p>

        {/* Floating Glassmorphic Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl text-left">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-[#002365]/80 border border-white/20 backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[#002365]/95 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.5)] group hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all shadow-inner">
                <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Offshore Safety
              </h3>
              <p className="font-roboto text-xs sm:text-sm text-slate-200 mt-1.5 leading-relaxed">
                Certified subsea & commercial diving compliance.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-[#002365]/80 border border-white/20 backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[#002365]/95 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.5)] group hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all shadow-inner">
                <Compass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Subsea Solutions
              </h3>
              <p className="font-roboto text-xs sm:text-sm text-slate-200 mt-1.5 leading-relaxed">
                Inspection, salvage, subsea repair & marine support.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-[#002365]/80 border border-white/20 backdrop-blur-xl hover:border-cyan-400/60 hover:bg-[#002365]/95 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.5)] group hover:-translate-y-1.5 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all shadow-inner">
                <Wrench className="w-5 h-5 stroke-[2.2]" />
              </div>
              <h3 className="font-poppins font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Active Build
              </h3>
              <p className="font-roboto text-xs sm:text-sm text-slate-200 mt-1.5 leading-relaxed">
                Upgrading core services & digital portal assets.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Professional Footer */}
      <footer className="relative z-10 border-t border-white/15 py-6 px-4 text-center text-xs text-slate-300 backdrop-blur-md bg-[#002365]/60">
        <div className="max-w-[1536px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-roboto">
          <p>© {new Date().getFullYear()} Ocean 9 Offshore Services Pvt. Ltd. All rights reserved.</p>
          <p className="text-slate-300 font-medium">Reliable Underwater Diving, Marine & Offshore Services</p>
        </div>
      </footer>
    </div>
  );
}
