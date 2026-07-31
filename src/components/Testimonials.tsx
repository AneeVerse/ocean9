import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#020814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Diver Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] sm:aspect-[4/3]">
              <Image
                src="/assets/home-what-our-clients-are-saying.png"
                alt="Client Testimonial Diver"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side: Copy & Testimonial Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                TESTIMONIAL
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                What Our Clients Are Saying
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Testimonial Quote Card */}
            <div className="relative bg-[#061833] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden mt-6">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed relative z-10 italic">
                &ldquo;The diving experience with this company was outstanding! The instructors
                were highly professional and made sure everyone felt safe and comfortable. The
                equipment was top notch, and the underwater scenery was absolutely breathtaking. I
                highly recommend them for an unforgettable diving adventure!&rdquo;
              </p>

              {/* Author Row & Decorative Quote */}
              <div className="mt-8 flex items-center justify-between relative z-10 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400">
                    <Image
                      src="/assets/home-drew-fieg-client.jpg"
                      alt="Drew Feig"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Drew Feig</h4>
                    <p className="text-xs text-slate-400 font-medium">Client</p>
                  </div>
                </div>

                {/* Decorative Quotation Mark Graphic */}
                <div className="opacity-30 text-cyan-400 font-serif text-6xl font-bold select-none">
                  99
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
