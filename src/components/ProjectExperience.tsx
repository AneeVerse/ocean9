import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectExperience() {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#002365] relative overflow-hidden text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="space-y-4">
            {/* Tag / Badge */}
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
                Featured Projects
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-white leading-tight tracking-tight">
              Our Project <br className="hidden sm:inline" />
              Experience
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="font-roboto text-slate-200 text-sm sm:text-base leading-relaxed">
              We have completed underwater and marine work for ports, docks, industries,
              vessels and offshore projects.
            </p>
            <Link
              href="#projects"
              className="inline-flex items-center gap-4 bg-[#002365] border border-white/40 hover:border-white text-white pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span className="font-dm-sans font-medium text-[15px] leading-[24px] tracking-normal text-white whitespace-nowrap">
                View Our Projects
              </span>
              <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-[#002365] group-hover:scale-105 transition-transform shrink-0">
                <ArrowUpRight className="w-5 h-5 stroke-[2] text-[#002365]" />
              </div>
            </Link>
          </div>
        </div>

        {/* Project Grid Layout: Images section fits in one fold */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch lg:h-[560px]">
          {/* Main Large Card (Left): Vertical portrait image aligned top & bottom */}
          <div className="lg:col-span-6 group relative rounded-[24px] overflow-hidden aspect-[549/650] lg:aspect-auto lg:h-full w-full border border-white/10 shadow-2xl bg-slate-900">
            <Image
              src="/assets/home-under-water-savage.jpg"
              alt="Underwater Salvage Project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] group-hover:text-cyan-300 transition-colors">
                Underwater Salvage
              </h3>
            </div>
          </div>

          {/* Right Column (2 Stacked Cards): Perfectly aligned top & bottom with left card */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 lg:h-full">
            {/* Card 2: Cable Repair */}
            <div className="flex-1 group relative rounded-[24px] overflow-hidden aspect-[611/409] lg:aspect-auto min-h-[180px] sm:min-h-[220px] w-full border border-white/10 shadow-2xl bg-slate-900">
              <Image
                src="/assets/home-cable-repair-and-protection.jpg"
                alt="Cable Repair and Protection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 z-10">
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] group-hover:text-cyan-300 transition-colors">
                  Cable Repair and Protection
                </h3>
              </div>
            </div>

            {/* Card 3: Dock and Gate Operations */}
            <div className="flex-1 group relative rounded-[24px] overflow-hidden aspect-[611/409] lg:aspect-auto min-h-[180px] sm:min-h-[220px] w-full border border-white/10 shadow-2xl bg-slate-900">
              <Image
                src="/assets/home-dock-and-gate-operation.jpg"
                alt="Dock and Gate Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 z-10">
                <h3 className="font-poppins font-bold text-lg sm:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] group-hover:text-cyan-300 transition-colors">
                  Dock and Gate Operations
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
