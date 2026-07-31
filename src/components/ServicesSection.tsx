import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
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
        "Long duration diving support for deep water offshore and subsea projects.",
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

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#020917] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Services We Provide
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3">
              Complete support for underwater, offshore and marine projects.
            </p>
          </div>

          <div>
            <Link
              href="#services"
              className="inline-flex items-center gap-2.5 bg-[#061833] hover:bg-[#0A264F] border border-white/15 text-white font-medium text-xs tracking-wider uppercase px-5 py-3 rounded-full transition-all"
            >
              <span>View All Services</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#061833] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061833] via-transparent to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-xs font-semibold text-cyan-400 hover:text-cyan-300 gap-1 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
