"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#02102b]/90 backdrop-blur-xl py-2 sm:py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div
        className={`max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
        }`}
      >
        {/* Ocean 9 Logo */}
        <Link href="/" className="flex items-center group">
          <div
            className={`relative flex items-center transition-all duration-500 ease-in-out ${
              isScrolled
                ? "w-[170px] sm:w-[190px] h-[46px] sm:h-[52px]"
                : "w-[190px] sm:w-[210px] h-[52px] sm:h-[60px]"
            }`}
          >
            <Image
              src="/assets/ocean9-logo.png"
              alt="Ocean 9 Logo"
              fill
              className="object-contain object-left scale-100 origin-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links: Exact Figma properties (SemiBold 600, 16px, line-height 22px) */}
        <nav className="hidden md:flex items-center gap-[34px]">
          <Link
            href="/"
            className="text-white font-semibold text-[16px] leading-[22px] tracking-normal hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-slate-200 font-semibold text-[16px] leading-[22px] tracking-normal hover:text-cyan-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/#services"
            className="text-slate-200 font-semibold text-[16px] leading-[22px] tracking-normal hover:text-cyan-400 transition-colors"
          >
            Service
          </Link>
          <Link
            href="/#projects"
            className="text-slate-200 font-semibold text-[16px] leading-[22px] tracking-normal hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#blog"
            className="text-slate-200 font-semibold text-[16px] leading-[22px] tracking-normal hover:text-cyan-400 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/#faq"
            className="text-slate-200 font-semibold text-[16px] leading-[22px] tracking-normal hover:text-cyan-400 transition-colors"
          >
            HSE
          </Link>
        </nav>

        {/* Proportioned CONTACT NOW Navbar Button (#003D82, h-46px, px-6, text-xs uppercase bold) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center h-[46px] px-6 bg-[#003D82] hover:bg-[#003169] text-white font-bold text-xs tracking-wider uppercase rounded-full transition-all shadow-md transform hover:scale-[1.02]"
          >
            CONTACT NOW
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-200 hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#002365]/95 backdrop-blur-xl border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white font-semibold text-[16px] py-1.5"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 text-[16px] py-1.5"
          >
            About Us
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 text-[16px] py-1.5"
          >
            Service
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 text-[16px] py-1.5"
          >
            Projects
          </Link>
          <Link
            href="/#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 text-[16px] py-1.5"
          >
            Gallery
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-cyan-400 text-[16px] py-1.5"
          >
            HSE
          </Link>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full h-[46px] bg-[#003D82] hover:bg-[#003169] text-white font-bold text-xs tracking-wider uppercase px-6 rounded-full"
            >
              CONTACT NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
