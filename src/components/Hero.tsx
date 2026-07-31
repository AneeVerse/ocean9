import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] w-full flex flex-col justify-between bg-[#020917] overflow-hidden">
      {/* Crisp Full Viewport Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home-hero-bg2.png"
          alt="Ocean 9 Offshore Diver & Marine Operations"
          fill
          priority
          className="object-cover object-center lg:object-right"
        />

        {/* Balanced bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020917]/90 via-[#020917]/50 to-transparent z-0 pointer-events-none" />
      </div>

      {/* Main Hero Content - Vertically centered inside 100vh single fold */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-24 sm:pt-28 pb-12">
        <div className="max-w-[950px]">
          {/* Badge matching exact Figma specs (h-34px, px-12px, py-2px, rounded-50px, #003D82) */}
          <div className="inline-flex items-center justify-center h-[34px] px-[12px] py-[2px] rounded-[50px] bg-[#003D82] text-white text-xs font-bold tracking-wider uppercase mb-5 shadow-md">
            FROM SEABED TO SURFACE
          </div>

          {/* Headline strictly in 2 lines breaking after Diving, */}
          <h1 className="text-[32px] sm:text-[46px] lg:text-[60px] leading-[40px] sm:leading-[54px] lg:leading-[70px] font-semibold text-white tracking-normal mb-5 max-w-[950px]">
            Reliable Underwater Diving,<br className="hidden sm:inline" />
            Marine and Offshore Services
          </h1>

          {/* Description formatted in 2 lines */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-[17px] max-w-3xl mb-8 leading-relaxed font-normal">
            Ocean 9 provides safe and practical solutions for diving, subsea, marine and <br className="hidden sm:inline" />
            underwater projects.
          </p>

          {/* Contact Us White Pill CTA */}
          <div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 p-1.5 pl-6 rounded-full transition-all duration-300 shadow-xl group transform hover:scale-[1.02]"
            >
              <span className="text-[#081935] font-semibold text-xs sm:text-sm">Contact Us</span>
              <div className="w-9 h-9 rounded-full bg-[#003D82] flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
