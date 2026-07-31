"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002365] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/15">
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

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Highlight the magical and breathtaking experiences awaiting underwater, making
              visitors eager to join.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>hello@diveinscuba.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-semibold text-white tracking-normal">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Dive Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-base font-semibold text-white tracking-normal">
              Newsletter
            </h4>

            {/* Email Input Field with Underline matching screenshot */}
            <form onSubmit={(e) => e.preventDefault()} className="relative max-w-sm pt-1">
              <div className="relative border-b border-white/40 pb-2 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full bg-transparent text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none pr-8"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="text-white hover:text-cyan-300 transition-colors shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Stay updated on new courses, events, and underwater adventures — join our ocean
              community today.
            </p>

            {/* Social Links matching white box buttons in screenshot */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white text-[#002365] text-xs font-black flex items-center justify-center hover:bg-cyan-300 transition-all shadow"
              >
                IG
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white text-[#002365] text-xs font-black flex items-center justify-center hover:bg-cyan-300 transition-all shadow"
              >
                FB
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-white text-[#002365] text-xs font-black flex items-center justify-center hover:bg-cyan-300 transition-all shadow"
              >
                YT
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs sm:text-sm text-slate-200 font-normal">
          © 2035 DiveIn. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
