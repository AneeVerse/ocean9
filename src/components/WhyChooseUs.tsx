import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      number: "1",
      title: "Experienced Team",
      description:
        "Skilled divers, marine crew and project professionals.",
    },
    {
      number: "2",
      title: "Complete Support",
      description:
        "Personnel, equipment and marine support from one team.",
    },
    {
      number: "3",
      title: "Safety First",
      description:
        "Every job is planned and completed with safety as the main priority.",
    },
    {
      number: "4",
      title: "Practical Solutions",
      description:
        "We provide clear and cost-effective solutions for each project.",
    },
    {
      number: "5",
      title: "Reliable Execution",
      description:
        "We focus on quality work, clear communication and timely completion.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Image & Copy Below (Aligned with top & bottom of right cards track) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:space-y-0">
            {/* Top Image */}
            <div className="relative rounded-[24px] overflow-hidden shadow-md border border-slate-200/60 aspect-[16/9] lg:aspect-[16/10] w-full bg-slate-100 shrink-0">
              <Image
                src="/assets/home-why-choose-us-for-your-dive.jpg"
                alt="Why Choose Ocean 9"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Copy: Subheader, Main Heading (2 lines), Paragraph */}
            <div className="space-y-3 pt-4 sm:pt-5">
              <span className="font-dm-sans font-bold text-xs sm:text-sm text-[#0055ff] tracking-wider uppercase block mt-2.5 mb-2.5">
                WHY CHOOSE OCEAN 9
              </span>

              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#002365] leading-[1.2] tracking-tight">
                Why Work <br className="hidden sm:inline" />
                With Us
              </h2>

              <p className="font-roboto text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Ocean 9 provides complete underwater, subsea and marine support with a focus on safety, reliability, and practical engineering solutions for every project.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-3.5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#002365] hover:bg-[#001947] border border-[#205b9e]/30 rounded-[18px] sm:rounded-[20px] p-4.5 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-4 sm:gap-5 shadow-lg group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0055ff] text-white flex items-center justify-center shrink-0 font-poppins font-bold text-base sm:text-lg shadow-md mt-0.5 group-hover:scale-105 transition-transform">
                  {feature.number}
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-roboto text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
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
