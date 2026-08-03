"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

export default function CareersSection() {
  return (
    <section id="careers" className="py-14 sm:py-16 lg:py-20 bg-white relative text-[#002365]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365] border border-[#205b9e]/80 shadow-[0_0_15px_rgba(32,91,158,0.2)] shrink-0 mx-auto">
            <Briefcase className="w-4 h-4 text-[#20c9d2] shrink-0" />
            <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
              Careers Section
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="font-poppins font-normal text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] text-[#002365] leading-tight lg:leading-[1.25] tracking-normal">
            Build Your Career With Ocean 9
          </h2>

          {/* Content Description */}
          <p className="font-roboto font-normal text-slate-600 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed">
            We welcome skilled divers, marine crew and technical professionals who value safety, teamwork and quality work.
          </p>

          {/* Action Button */}
          <div className="pt-2 flex justify-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-4 bg-[#002365] border border-[#002365] hover:border-[#003D82] text-white pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer hover:bg-[#003D82]"
            >
              <span className="font-dm-sans font-medium text-[15px] leading-[24px] tracking-normal text-white whitespace-nowrap">
                View Careers
              </span>
              <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-[#002365] group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-5 h-5 stroke-[2] text-[#002365]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
