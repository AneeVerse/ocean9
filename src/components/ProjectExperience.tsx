import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectExperience() {
  const projects = [
    {
      title: "Underwater Salvage",
      description: "Recovery of sunken pontoons, gates, anchors and marine structures.",
      image: "/assets/home-under-water-savage.jpg",
    },
    {
      title: "Cable Repair and Protection",
      description: "Underwater cable repair, trenching, burial and protection work.",
      image: "/assets/home-cable-repair-and-protection.jpg",
    },
    {
      title: "Dock and Gate Operations",
      description: "Inspection, cleaning, installation and repair support for dock gates.",
      image: "/assets/home-dock-and-gate-operation.jpg",
    },
    {
      title: "Industrial Diving Support",
      description: "Inspection, cleaning, desilting and repair work for intake wells and industrial sites.",
      image: "/assets/contact_diver_panel.png",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-transparent relative overflow-hidden text-white">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <h2 className="font-poppins font-normal text-white text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] leading-tight lg:leading-[1.25] tracking-normal">
              Our Project <br className="hidden sm:inline" />
              Experience
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="font-roboto text-slate-200 text-sm sm:text-base leading-relaxed">
              We have completed underwater and marine work for ports, docks, industries, vessels and offshore projects.
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

        {/* Project Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch lg:h-[620px]">
          {/* Main Featured Project Card (Left) */}
          <div className="lg:col-span-6 group relative rounded-[24px] overflow-hidden aspect-[549/650] lg:aspect-auto lg:h-full w-full border border-white/10 shadow-2xl bg-slate-900">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
              <h3 className="font-poppins font-bold text-xl sm:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                {projects[0].title}
              </h3>
              <p className="font-roboto text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md">
                {projects[0].description}
              </p>
            </div>
          </div>

          {/* Right Column Stacked Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-4 lg:h-full">
            {projects.slice(1).map((proj, idx) => (
              <div
                key={idx}
                className="flex-1 group relative rounded-[20px] sm:rounded-[24px] overflow-hidden min-h-[160px] sm:min-h-[180px] w-full border border-white/10 shadow-xl bg-slate-900"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-5 right-5 z-10 space-y-1">
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-roboto text-slate-200 text-xs leading-relaxed max-w-md">
                    {proj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
