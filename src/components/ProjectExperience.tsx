import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectExperience() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#030A16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Project Experience
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We have completed underwater and marine work for ports, docks, industries,
              vessels and offshore projects.
            </p>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2.5 bg-[#0066CC] hover:bg-[#0052A3] text-white font-medium text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all shadow-lg"
            >
              <span>View Our Projects</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Project Grid Layout matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Large Card (Left) */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden min-h-[380px] lg:min-h-[480px] border border-white/10 shadow-2xl">
            <Image
              src="/assets/home-under-water-savage.jpg"
              alt="Underwater Salvage Project"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030A16] via-[#030A16]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  Underwater Salvage
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Heavy salvage, subsea cutting and emergency retrieval operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (2 Stacked Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 2: Cable Repair */}
            <div className="group relative rounded-2xl overflow-hidden h-[228px] border border-white/10 shadow-2xl">
              <Image
                src="/assets/home-cable-repair-and-protection.jpg"
                alt="Cable Repair and Protection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A16] via-[#030A16]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Cable Repair and Protection
                </h3>
              </div>
            </div>

            {/* Card 3: Dock and Gate Operations */}
            <div className="group relative rounded-2xl overflow-hidden h-[228px] border border-white/10 shadow-2xl">
              <Image
                src="/assets/home-dock-and-gate-operation.jpg"
                alt="Dock and Gate Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A16] via-[#030A16]/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
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
