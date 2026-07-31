import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ReadyToDive() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-36 min-h-[420px] lg:min-h-[480px] overflow-hidden bg-[#002365] text-center flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home-ready-to-dive.png"
          alt="Underwater Deep Sea Background"
          fill
          className="object-cover object-[center_32%]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="font-poppins font-normal text-5xl sm:text-6xl lg:text-[72px] text-white tracking-tight drop-shadow-xl leading-tight">
          Ready to Dive In?
        </h2>

        <p className="font-roboto font-light text-slate-200 text-sm sm:text-base lg:text-[17px] max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Embark on an unforgettable underwater adventure with DiveIn. Book your dive today
          <br className="hidden sm:inline" /> and explore the breathtaking wonders beneath the deep sea!
        </p>

        <div className="pt-3">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#002365] font-semibold text-sm sm:text-base px-7 py-3.5 rounded-[12px] transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <span>Book Your Dive</span>
            <ArrowRight className="w-4 h-4 text-[#002365] stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
