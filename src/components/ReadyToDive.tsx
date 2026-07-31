import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ReadyToDive() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#020A17] text-center flex items-center justify-center">
      {/* Background Image & Deep Ocean Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/ready_to_dive_bg.png"
          alt="Underwater Deep Sea Background"
          fill
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030A16] via-transparent to-[#030A16]" />
        <div className="absolute inset-0 bg-[#020A17]/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Ready to Dive In?
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Embark on an unforgettable underwater adventure with DiveIn. Book your dive today
          and explore the breathtaking wonders beneath the deep sea!
        </p>

        <div className="pt-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#031530] font-bold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            <span>Book Your Dive</span>
            <ArrowRight className="w-4 h-4 text-[#031530]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
