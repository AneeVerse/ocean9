"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#020712] text-slate-300 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative w-40 h-12">
              <Image
                src="/assets/ocean9-logo-nav.png"
                alt="Ocean 9 Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Highlight the magical and breathtaking experiences awaiting underwater, making
              visitors eager to join.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>hello@divenscuba.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-cyan-400 transition-colors">
                  Dive Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Stay updated on new courses, events, and underwater adventures – join our ocean
              community today.
            </p>

            {/* Email Input */}
            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-sm">
              <input
                type="email"
                placeholder="Type your email"
                className="w-full px-4 py-3 bg-[#061833] border border-white/15 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-12 placeholder:text-slate-500"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#061833] border border-white/10 text-white text-xs font-bold flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-500 transition-all"
              >
                IG
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#061833] border border-white/10 text-white text-xs font-bold flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-500 transition-all"
              >
                FB
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#061833] border border-white/10 text-white text-xs font-bold flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-500 transition-all"
              >
                YT
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-medium">
          © 2025 DiveIn. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
