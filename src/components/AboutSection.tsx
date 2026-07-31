"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, X } from "lucide-react";

export default function AboutSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#030A16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/home-about-us.jpg"
                alt="Underwater Operations & Marine Engineering"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A16]/60 via-transparent to-transparent" />

              {/* Floating Video Preview Card */}
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-72 bg-[#061833]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/15 shadow-2xl flex items-center gap-3">
                <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 group">
                  <Image
                    src="/assets/home-about-us-video-thumbnail.jpg"
                    alt="About Ocean 9 Video Preview"
                    fill
                    className="object-cover"
                  />
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </button>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-white">About Ocean 9</p>
                  <p className="text-[11px] text-slate-300">Watch Intro Video</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Your Partner for Underwater <br className="hidden sm:inline" />
              Operations
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Ocean 9 Offshore Services Pvt. Ltd. provides underwater diving, marine and subsea
              engineering services.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We support offshore and onshore projects with trained teams, diving equipment and
              marine support. Our focus is simple: complete every job safely, properly and on time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#about"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white font-medium text-sm px-6 py-3 rounded-full transition-all shadow-md"
              >
                About Ocean 9
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-full transition-all"
              >
                <span>Contact Us</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center lg:text-left">
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              38<span className="text-cyan-400">+</span>
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Project Assignments</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              14<span className="text-cyan-400">+</span>
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Clients Served</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              6<span className="text-cyan-400">+</span>
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Years of Experience</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              247T
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Caisson Gate Salvaged</p>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#061833] rounded-2xl overflow-hidden border border-cyan-500/30 p-2">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-cyan-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full relative rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Ocean 9 Operations Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
