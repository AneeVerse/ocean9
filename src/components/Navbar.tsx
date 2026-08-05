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
      if (window.scrollY > 40) {
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
        isScrolled ? "py-2 sm:py-2.5 shadow-md" : "py-4 sm:py-5"
      }`}
    >
      {/* Dark Transparent Gradient Background Layer */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#020917]/85 via-[#020917]/45 to-transparent transition-opacity duration-500 ease-in-out pointer-events-none ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Solid White Blurred Background Layer */}
      <div
        className={`absolute inset-0 bg-white/95 backdrop-blur-md transition-opacity duration-500 ease-in-out pointer-events-none ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
        }`}
      >
        {/* Ocean 9 Logo */}
        <Link href="/" className="flex items-center gap-1 sm:gap-1.5 group">
          <div
            className={`relative transition-all duration-500 ease-in-out shrink-0 ${
              isScrolled
                ? "w-8 sm:w-10 h-8 sm:h-10"
                : "w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14"
            }`}
          >
            <Image
              src="/assets/ocean9-logo.png"
              alt="Ocean 9 Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span
            className={`font-bold tracking-tight leading-none transition-all duration-500 ease-in-out select-none flex items-center ${
              isScrolled
                ? "text-2xl sm:text-3xl"
                : "text-3xl sm:text-4xl lg:text-[42px]"
            }`}
          >
            <span className="text-[#034d8c]">Ocean</span>
            <span className="text-[#ba1319]">9</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[34px]">
          <Link
            href="/"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-500 ${
              isScrolled
                ? "text-[#002365] hover:text-[#0055ff]"
                : "text-white hover:text-cyan-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-500 ${
              isScrolled
                ? "text-[#002365]/90 hover:text-[#0055ff]"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/#services"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-500 ${
              isScrolled
                ? "text-[#002365]/90 hover:text-[#0055ff]"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            Service
          </Link>
          <Link
            href="/#projects"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-500 ${
              isScrolled
                ? "text-[#002365]/90 hover:text-[#0055ff]"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/#blog"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-500 ${
              isScrolled
                ? "text-[#002365]/90 hover:text-[#0055ff]"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/#faq"
            className={`font-semibold text-[16px] leading-[22px] tracking-normal transition-colors duration-500 ${
              isScrolled
                ? "text-[#002365]/90 hover:text-[#0055ff]"
                : "text-slate-200 hover:text-cyan-400"
            }`}
          >
            HSE
          </Link>
        </nav>

        {/* Proportioned CONTACT NOW Navbar Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center h-[46px] px-6 bg-[#003D82] hover:bg-[#002855] text-white font-bold text-xs tracking-wider uppercase rounded-full transition-all shadow-md transform hover:scale-[1.02]"
          >
            CONTACT NOW
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? "text-[#002365] hover:text-[#0055ff]" : "text-white hover:text-cyan-400"
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 pt-4 pb-6 space-y-4 shadow-xl border-b transition-all ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border-slate-200 text-[#002365]"
              : "bg-[#002365]/95 backdrop-blur-xl border-white/10 text-white"
          }`}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-[16px] py-1.5"
          >
            Home
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] py-1.5 opacity-90 hover:opacity-100"
          >
            About Us
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] py-1.5 opacity-90 hover:opacity-100"
          >
            Service
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] py-1.5 opacity-90 hover:opacity-100"
          >
            Projects
          </Link>
          <Link
            href="/#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] py-1.5 opacity-90 hover:opacity-100"
          >
            Gallery
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[16px] py-1.5 opacity-90 hover:opacity-100"
          >
            HSE
          </Link>
          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full h-[46px] bg-[#003D82] hover:bg-[#002855] text-white font-bold text-xs tracking-wider uppercase px-6 rounded-full shadow-md"
            >
              CONTACT NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
