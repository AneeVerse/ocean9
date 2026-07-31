import Image from "next/image";
import { ShieldCheck, Award, Compass } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      number: "1",
      title: "Expert Instructors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: ShieldCheck,
    },
    {
      number: "2",
      title: "Quality Equipment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: Award,
    },
    {
      number: "3",
      title: "Unforgettable Adventures",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      icon: Compass,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#002365] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image & Header Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[4/3]">
              <Image
                src="/assets/home-why-choose-us-for-your-dive.jpg"
                alt="Why Choose Us for Your Dive"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                WHY CHOOSE US
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Why Choose Us for Your Dive
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#001947] hover:bg-[#002d75] border border-white/10 rounded-2xl p-6 transition-all duration-300 flex items-start gap-5 shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00388a] flex items-center justify-center text-cyan-400 shrink-0 font-bold text-lg group-hover:scale-110 transition-transform">
                    {feature.number}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
