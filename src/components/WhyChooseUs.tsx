import Image from "next/image";

export default function WhyChooseUs() {
  const features = [
    {
      number: "1",
      title: "Expert Instructors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      number: "2",
      title: "Quality Equipment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      number: "3",
      title: "Unforgettable Adventures",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Reduced Height Image & Copy Below (Aligned top to bottom with right cards) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 lg:space-y-0">
            {/* Top: Reduced Height Image */}
            <div className="relative rounded-[24px] overflow-hidden shadow-md border border-slate-200/60 aspect-[16/6] w-full bg-slate-100 shrink-0">
              <Image
                src="/assets/home-why-choose-us-for-your-dive.jpg"
                alt="Why Choose Us for Your Dive"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Copy: Subheader, Main Heading, Paragraph */}
            <div className="space-y-2.5 pt-2">
              <span className="font-dm-sans font-bold text-xs sm:text-sm text-[#0055ff] tracking-wider uppercase block">
                WHY CHOOSE US
              </span>

              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#002365] leading-tight tracking-tight">
                Why Choose Us for <br className="hidden sm:inline" />
                Your Dive
              </h2>

              <p className="font-roboto text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Stacked Cards (Matching Website Ocean 9 Navy & Poppins Font) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#002365] hover:bg-[#001947] border border-[#205b9e]/30 rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4 sm:gap-5 shadow-xl group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0055ff] text-white flex items-center justify-center shrink-0 font-poppins font-bold text-lg sm:text-xl shadow-md mt-0.5 group-hover:scale-105 transition-transform">
                  {feature.number}
                </div>
                <div className="space-y-1">
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
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
