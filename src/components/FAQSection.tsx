"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are the basic scuba safety rules diving?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod luctus tempor incididunt ut labore magna.",
    },
    {
      question: "How to improve air consumption underwater?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proper buoyancy control and relaxed breathing techniques are key.",
    },
    {
      question: "What to consider when buying gear diving ?",
      answer:
        "Focus on fit, comfort, safety certification, and your specific diving environment when purchasing equipment.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#020814] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Call Us Now Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <Image
                src="/assets/home-FAQ.jpg"
                alt="Diver underwater with stingray"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020814]/80 via-transparent to-transparent" />

              {/* Call Us Now Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#061833]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white shrink-0 shadow-lg animate-bounce">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                    Call Us Now!
                  </p>
                  <p className="text-lg font-bold text-white tracking-wide">
                    +123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Questions
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Frequently Asked <br className="hidden sm:inline" />
                Questions
              </h2>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4 pt-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#061833] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 shadow-md"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition-colors text-base sm:text-lg"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-cyan-400 font-normal">{isOpen ? "—" : "+"}</span>
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-cyan-400 shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-300 text-sm leading-relaxed border-t border-white/5 bg-[#041226]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
