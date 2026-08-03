"use client";

import Link from "next/link";
import {
  KeyRound,
  Network,
  Anchor,
  Flame,
  LifeBuoy,
  Droplets,
  Compass,
  Bot,
  Building2,
  UserCheck,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export default function CapabilitiesSection() {
  const capabilities = [
    {
      id: "01",
      title: "Underwater inspection and repair",
      icon: KeyRound,
    },
    {
      id: "02",
      title: "Pipeline and cable work",
      icon: Network,
    },
    {
      id: "03",
      title: "Hull and dock services",
      icon: Anchor,
    },
    {
      id: "04",
      title: "Underwater cutting and welding",
      icon: Flame,
    },
    {
      id: "05",
      title: "Salvage and recovery",
      icon: LifeBuoy,
    },
    {
      id: "06",
      title: "Desilting and cleaning",
      icon: Droplets,
    },
    {
      id: "07",
      title: "Marine surveys",
      icon: Compass,
    },
    {
      id: "08",
      title: "ROV support",
      icon: Bot,
    },
    {
      id: "09",
      title: "Offshore construction support",
      icon: Building2,
    },
    {
      id: "10",
      title: "Diving personnel and equipment supply",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          {/* Left: Badge, Heading, Subtitle */}
          <div className="space-y-4 max-w-3xl">
            {/* Tag / Badge: Exact About Us Badge Styling */}
            <div className="inline-flex items-center justify-center gap-2.5 px-5 h-[50.39px] rounded-full bg-[#002365] border border-[#205b9e]/80 shadow-[0_0_15px_rgba(32,91,158,0.2)] shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="-2 -2 28 28"
                fill="#20c9d2"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 overflow-visible"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <span className="font-roboto font-normal text-white text-[14px] tracking-normal">
                Our Capabilities
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#002365] leading-[1.18] tracking-tight">
              Built for Challenging Projects
            </h2>

            {/* Subtitle */}
            <p className="font-roboto text-slate-600 text-base sm:text-lg lg:text-[19px] leading-relaxed">
              Our teams support a wide range of underwater and marine operations, including:
            </p>
          </div>

          {/* Right: View/Explore Button matching reference UI */}
          <div className="shrink-0 self-start md:self-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-4 bg-[#002365] border border-[#002365] hover:border-[#003D82] text-white pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer hover:bg-[#003D82]"
            >
              <span className="font-dm-sans font-medium text-[15px] leading-[24px] tracking-normal text-white whitespace-nowrap">
                Explore Our Capabilities
              </span>
              <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-[#002365] group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                <ArrowUpRight className="w-5 h-5 stroke-[2] text-[#002365]" />
              </div>
            </Link>
          </div>
        </div>


        {/* 10 Executive Cards Grid (5 cols x 2 rows on large screen) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-[#85baf3] rounded-[22px] p-7 text-left flex flex-col justify-between shadow-[0_4px_20px_rgba(0,35,101,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,130,0.16)] hover:border-[#003D82] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer min-h-[225px]"
              >
                {/* Card Header: Number + Blue Bar on Left, Circular Light-Blue Icon Container on Right */}
                <div className="flex items-start justify-between gap-3">
                  {/* Left: Number + Short Blue Bar */}
                  <div className="flex flex-col items-start">
                    <span className="font-dm-sans font-bold text-base text-[#003D82] tracking-tight group-hover:text-[#002365] transition-colors">
                      {item.id}
                    </span>
                    <div className="w-6 h-[2.5px] bg-[#003D82] mt-1 rounded-full group-hover:w-9 transition-all duration-300" />
                  </div>

                  {/* Right: Circular Ocean 9 Light Blue Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#eaf3ff] border border-[#85baf3] text-[#003D82] group-hover:bg-[#003D82] group-hover:border-[#003D82] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0 group-hover:scale-105">
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Capability Title */}
                <div className="my-6">
                  <h3 className="font-poppins font-bold text-lg sm:text-[19px] text-[#002365] leading-[1.3] group-hover:text-[#003D82] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Left Blue Arrow */}
                <div className="mt-auto pt-1">
                  <ArrowRight className="w-5 h-5 text-[#003D82] group-hover:text-[#002365] group-hover:translate-x-1.5 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}





