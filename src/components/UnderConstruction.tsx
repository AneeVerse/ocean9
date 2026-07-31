"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      {/* Full-Bleed Background Video */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-[1.01] brightness-105"
        >
          <source src="/assets/underconstruction-bg-video2.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002365]/80 via-transparent to-[#001744]/65" />
      </div>

      {/* Header Bar */}
      <header className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-6 h-24 flex items-center justify-end">
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

      {/* Centered Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center flex flex-col items-center justify-center flex-1">
        {/* Centered Logo with Optimized Hero Size */}
        <div className="relative w-[280px] sm:w-[350px] h-[90px] sm:h-[110px] mb-8 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
          <Image
            src="/assets/ocean9-logo.png"
            alt="Ocean 9 Logo"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Status Badge - Increased Size & Glow */}
        <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-[#002365]/90 border border-cyan-400/60 text-cyan-300 text-sm sm:text-base font-roboto font-semibold tracking-wider mb-8 shadow-[0_0_25px_rgba(0,210,255,0.3)] backdrop-blur-lg">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#00d2ff"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 animate-pulse"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span className="uppercase text-sm sm:text-base tracking-widest text-[#00d2ff] font-bold">
            Site Under Construction
          </span>
        </div>

        {/* Headline: We Are Under Construction with Maximum Visibility */}
        <h1 className="font-poppins font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white leading-tight tracking-tight max-w-4xl [text-shadow:_0_6px_36px_rgba(0,0,0,0.98),_0_2px_12px_rgba(0,0,0,0.98)]">
          We Are <span className="text-[#00d2ff] [text-shadow:_0_6px_36px_rgba(0,0,0,0.98),_0_0_25px_rgba(0,210,255,0.8)]">Under Construction</span>
        </h1>
      </main>

      {/* Spacer to keep main content vertically centered without footer */}
      <div className="h-20" />
    </div>
  );
}
