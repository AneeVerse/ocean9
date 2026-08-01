"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-[#002365] relative text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Form Container (Soft Light Blue Card) */}
          <div className="lg:col-span-6 bg-[#e6f3fe] rounded-[24px] lg:rounded-[28px] p-8 sm:p-10 lg:p-12 text-slate-900 shadow-2xl flex flex-col justify-between">
            <div className="space-y-3 mb-6 sm:mb-8">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#002365] leading-tight tracking-tight">
                Get in Touch
              </h2>
              <p className="font-roboto text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions about our courses or dives? Send us a message—we&apos;ll get back
                to you soon.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-900 p-6 rounded-[16px] text-center space-y-2 my-auto shadow-sm">
                <h3 className="font-poppins font-bold text-lg">Thank You!</h3>
                <p className="font-roboto text-sm">Your message has been sent successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-roboto font-semibold text-[#002365] text-sm block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-slate-200/80 rounded-[12px] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff] transition-all placeholder:text-slate-400 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-roboto font-semibold text-[#002365] text-sm block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-slate-200/80 rounded-[12px] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff] transition-all placeholder:text-slate-400 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-roboto font-semibold text-[#002365] text-sm block">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-slate-200/80 rounded-[12px] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff] transition-all appearance-none cursor-pointer pr-10 shadow-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="Diving Services">Diving Services</option>
                      <option value="Offshore Operations">Offshore Operations</option>
                      <option value="Salvage & Subsea">Salvage & Subsea</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#002365]">
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-roboto font-semibold text-[#002365] text-sm block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-slate-200/80 rounded-[12px] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055ff] transition-all placeholder:text-slate-400 resize-none shadow-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#002365] hover:bg-[#00173e] text-white font-dm-sans font-medium text-sm sm:text-base px-7 py-3.5 rounded-[12px] transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Diver Image Panel with Overlay Quote */}
          <div className="lg:col-span-6 relative rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-2xl min-h-[440px] lg:h-full border border-white/10 w-full bg-slate-900">
            <Image
              src="/assets/home-get-in-touch.png"
              alt="Get in Touch Diving Operations"
              fill
              className="object-cover"
            />
            {/* Bottom Glassmorphism Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/5 backdrop-blur-sm backdrop-saturate-150 px-4 sm:px-5 py-4.5 sm:py-5 rounded-[16px] shadow-2xl space-y-3.5">
              <p className="font-roboto font-normal text-white text-[18px] sm:text-[21.5px] lg:text-[23px] leading-relaxed drop-shadow-md tracking-tight">
                Dive beneath the surface and discover endless wonder,<br />
                where treasures await at every turn.
              </p>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                <span className="font-roboto font-medium text-white drop-shadow-sm">John Smith</span>
                <span className="text-slate-200 font-normal">•</span>
                <span className="font-roboto text-slate-200 font-normal drop-shadow-sm">Dive Instructor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
