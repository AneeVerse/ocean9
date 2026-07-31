import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const baseServices = [
    {
      title: "Air Diving",
      description:
        "Safe and reliable diving support for inspection, repair, maintenance and construction work.",
      image: "/assets/home-air-diving-card.png",
    },
    {
      title: "Mixed Gas Diving",
      description:
        "Special diving support for deeper and more demanding underwater operations.",
      image: "/assets/home-mixed-gas-diving-card.png",
    },
    {
      title: "Saturation Diving",
      description:
        "Long-duration diving support for deep-water offshore and subsea projects.",
      image: "/assets/home-saturation-diving-card.png",
    },
    {
      title: "Offshore Operations",
      description:
        "Inspection, installation, repair and maintenance support for offshore structures and pipelines.",
      image: "/assets/home-offshore-operations-card.png",
    },
    {
      title: "Onshore Operations",
      description:
        "Underwater services for ports, docks, dams, intake wells, rivers and inland projects.",
      image: "/assets/home-onshore-operations-card.png",
    },
  ];

  // Duplicate set to enable smooth horizontal scrolling
  const services = [...baseServices, ...baseServices];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#002365] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="relative text-center">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight">
            Services We Provide
          </h2>
          <p className="font-roboto font-normal text-slate-200 text-sm sm:text-base lg:text-[17px] mt-2 max-w-2xl mx-auto">
            Complete support for underwater, offshore and marine projects.
          </p>

          {/* Top Right "View All Services" Button: Figma exact spec */}
          <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
            <Link
              href="#services"
              className="inline-flex items-center gap-4 bg-[#002365] border border-white/40 hover:border-white text-white pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer"
            >
              <span className="font-dm-sans font-medium text-[15px] leading-[24px] tracking-normal text-white whitespace-nowrap">
                View All Services
              </span>
              <div className="w-[38px] h-[38px] rounded-full bg-white flex items-center justify-center text-[#002365] group-hover:scale-105 transition-transform shrink-0">
                <ArrowUpRight className="w-5 h-5 stroke-[2] text-[#002365]" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Track */}
      <div className="w-full overflow-x-auto scrollbar-none pb-8 pt-2">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-4.5 lg:gap-5 w-max pr-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[235px] sm:w-[250px] lg:w-[260px] xl:w-[265px] h-auto rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-xl flex flex-col shrink-0 snap-start transition-transform duration-300 hover:-translate-y-1.5 group"
            >
              {/* Card Top Image */}
              <div className="relative h-[175px] sm:h-[185px] lg:h-[195px] w-full overflow-hidden bg-slate-900 rounded-t-[20px] sm:rounded-t-[24px] shrink-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Bottom White Content Box - Height according to content */}
              <div className="bg-white p-4 sm:p-5 rounded-b-[20px] sm:rounded-b-[24px] text-center flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-[#081935] mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="font-roboto font-normal text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-block font-dm-sans font-bold text-xs sm:text-sm text-[#0055ff] hover:text-[#0038b8] transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
}
