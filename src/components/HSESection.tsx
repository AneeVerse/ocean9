"use client";

import Link from "next/link";
import {
  ShieldCheck,
  HeartPulse,
  Leaf,
  Users,
  ClipboardCheck,
  ArrowUpRight,
} from "lucide-react";

export default function HSESection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Risk Assessment & Mitigation",
      desc: "Comprehensive hazard identification and safety protocols prior to every operation.",
    },
    {
      icon: HeartPulse,
      title: "Health & Diver Well-being",
      desc: "Certified medical standards, chamber readiness, and strict diver safety limits.",
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      desc: "Eco-friendly underwater practices protecting marine ecosystems and subsea flora.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "IMCA & ISO\nSafety Compliant",
    },
    {
      icon: Users,
      title: "Zero-Incident\nOperational Mindset",
    },
    {
      icon: ClipboardCheck,
      title: "Rigorous Risk\nAudits & Toolboxes",
    },
    {
      icon: Leaf,
      title: "Eco-Conscious\nSubsea Procedures",
    },
  ];

  return (
    <section id="hse" className="py-6 sm:py-8 lg:py-10 bg-white relative overflow-hidden text-[#002365] flex items-center min-h-[calc(100vh-80px)] max-h-[840px]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Column: Content (Strict 1-Fold Fit & Equal Height Alignment) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-0.5 space-y-3.5 lg:space-y-4">
            <div className="space-y-3 lg:space-y-3.5">
              {/* Tag / Badge: Brand Navy Badge matching site-wide design system */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#002365] border border-[#205b9e]/80 shadow-[0_0_15px_rgba(32,91,158,0.2)] w-fit">
                <ShieldCheck className="w-4 h-4 text-[#20c9d2] shrink-0" />
                <span className="font-roboto text-xs sm:text-[13px] font-semibold text-white tracking-normal">
                  Health, Safety and Environment
                </span>
              </div>

              {/* Subhead Kicker below Section Badge */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003D82]"></span>
                <span className="font-dm-sans font-bold text-xs uppercase tracking-widest text-[#003D82]">
                  Safety Comes First
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-[#002365] leading-[1.14] tracking-tight">
                Safe Work.<br />
                Responsible Operations<span className="text-[#20c9d2]">.</span>
              </h2>

              {/* Highlight Quote Box */}
              <div className="flex items-start gap-3 bg-[#eef5fe] border-l-[3.5px] border-[#003D82] rounded-r-xl p-3 sm:p-3.5 shadow-2xs">
                <span className="font-serif font-black text-2xl text-[#0055ff] leading-none select-none shrink-0 mt-0.5">
                  “
                </span>
                <p className="font-poppins font-semibold text-[#002365] text-xs sm:text-sm leading-snug">
                  &ldquo;No job is more important than the safety of our team, clients and the environment.&rdquo;
                </p>
              </div>

              {/* Detailed Content Paragraphs */}
              <div className="space-y-1.5 font-roboto text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                <p>
                  We plan every operation carefully, identify risks and follow safe working methods throughout the project.
                </p>
                <p>
                  Ocean 9&apos;s profile places safety, health and environmental responsibility at the centre of its operations.
                </p>
              </div>

              {/* 4 Feature Badges Grid (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {features.map((feat, idx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[#edf4ff]/40 border border-[#d2e4ff]/60 hover:bg-[#edf4ff]/80 transition-colors"
                    >
                      <div className="w-8.5 h-8.5 rounded-full bg-[#edf4ff] border border-[#d2e4ff] text-[#003D82] flex items-center justify-center shrink-0 shadow-xs">
                        <FeatIcon className="w-4 h-4" />
                      </div>
                      <span className="font-poppins font-bold text-xs sm:text-[12.5px] text-[#002365] leading-tight whitespace-pre-line">
                        {feat.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button (Horizontally aligned with right side bottom banner) */}
            <div className="mt-auto min-h-[58px] flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 bg-[#002365] border border-[#002365] hover:border-[#003D82] text-white pl-5 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-md group cursor-pointer hover:bg-[#003D82]"
              >
                <span className="font-dm-sans font-medium text-[14px] leading-[22px] tracking-normal text-white whitespace-nowrap">
                  View Our HSE Policy
                </span>
                <div className="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center text-[#002365] group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 stroke-[2] text-[#002365]" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Equalized Height Card Container (Strict 1-Fold Fit) */}
          <div className="lg:col-span-5 h-full">
            <div className="bg-white border border-[#d2e4ff] rounded-[22px] p-4.5 sm:p-5 lg:p-6 flex flex-col justify-between h-full shadow-[0_6px_25px_rgba(0,35,101,0.05)] relative overflow-hidden">
              {/* Card Header & Accent Bar */}
              <div>
                <h3 className="font-poppins font-bold text-lg sm:text-xl lg:text-2xl text-[#002365]">
                  Our Core HSE Pillars
                </h3>
                <div className="w-8 h-[3px] bg-[#003D82] mt-1.5 rounded-full" />
              </div>

              {/* 3 Pillar Cards (Evenly Spaced to Fill Container Height) */}
              <div className="space-y-3.5 sm:space-y-4 lg:space-y-4.5 my-auto py-2 sm:py-3">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-[#d2e4ff] rounded-[16px] p-4 sm:p-4.5 flex items-center gap-4 shadow-xs hover:border-[#003D82] hover:shadow-md transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#edf4ff] border border-[#d2e4ff] text-[#003D82] group-hover:bg-[#003D82] group-hover:border-[#003D82] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-xs">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="font-poppins font-bold text-xs sm:text-sm lg:text-[15px] text-[#002365] group-hover:text-[#003D82] transition-colors leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="font-roboto text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Navy Shield Banner */}
              <div className="bg-gradient-to-r from-[#00173e] via-[#002365] to-[#003378] border border-[#205b9e]/40 rounded-[16px] p-4 text-white flex items-center gap-3.5 shadow-md relative overflow-hidden mt-auto">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-dm-sans font-bold text-xs tracking-wider text-cyan-300 uppercase">
                    SAFETY • HEALTH • ENVIRONMENT
                  </p>
                  <p className="font-roboto text-[11px] sm:text-xs text-slate-200 leading-snug">
                    Integrity & Protection in Every Subsea Operation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




