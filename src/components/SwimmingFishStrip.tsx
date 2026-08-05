"use client";

import React from "react";
import Image from "next/image";

export default function SwimmingFishStrip() {
  return (
    <div className="w-full relative min-h-[200px] sm:min-h-[250px] flex items-center justify-center my-4 z-20 pointer-events-none select-none">
      {/* Center Dashed Ocean Current Line - Commented out for cleaner look */}
      {/* <div className="w-full border-b-2 border-dashed border-cyan-400/40 relative z-0" /> */}

      {/* UPPER SWIM LANE: Single Fish 1 Swimming Left to Right (Sweet spot above line) */}
      <div className="absolute top-1/2 -translate-y-[82%] w-full left-0 pointer-events-none z-10">
        <div className="animate-swim-right flex items-center">
          <div id="swimming-fish-1" className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-50 lg:h-50 animate-fin-wobble shrink-0">
            <Image
              src="/assets/swimming-fish-1.png"
              alt="Swimming Ocean Fish 1"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* LOWER SWIM LANE: Single Fish 2 Swimming Right to Left (Sweet spot below line) */}
      <div className="absolute top-1/2 -translate-y-[18%] w-full left-0 pointer-events-none z-10">
        <div className="animate-swim-left flex items-center">
          <div id="swimming-fish-2" className="relative w-32 h-32 sm:w-44 sm:h-44 lg:w-50 lg:h-50 animate-fin-wobble-reverse shrink-0">
            <Image
              src="/assets/swimming-fish-2.png"
              alt="Swimming Ocean Fish 2"
              fill
              className="object-contain p-1"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
