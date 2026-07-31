"use client";

import { useState } from "react";
import Image from "next/image";

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
    <section id="contact" className="py-20 lg:py-28 bg-[#030A16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Form Container (Light Soft Blue Card) */}
          <div className="lg:col-span-7 bg-[#E8F2FD] rounded-3xl p-8 sm:p-12 text-slate-900 shadow-2xl flex flex-col justify-between">
            <div className="space-y-3 mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031530] tracking-tight">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Have questions about our courses or dives? Send us a message—we&apos;ll get back
                to you soon.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 p-6 rounded-2xl text-center space-y-2 my-auto">
                <h3 className="text-lg font-bold">Thank You!</h3>
                <p className="text-sm">Your message has been sent successfully. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#031530] uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#031530] uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#031530] uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="Diving Services">Diving Services</option>
                    <option value="Offshore Operations">Offshore Operations</option>
                    <option value="Salvage & Subsea">Salvage & Subsea</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#031530] uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066CC] transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#031530] hover:bg-[#062450] text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Diver Image Panel with Overlay Quote */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px] lg:min-h-full border border-white/10">
            <Image
              src="/assets/contact_diver_panel.png"
              alt="Diver instructor underwater"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030A16] via-[#030A16]/40 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8 space-y-3">
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
                &ldquo;Dive beneath the surface and discover endless wonder, where treasures await
                at every turn.&rdquo;
              </p>
              <p className="text-xs font-semibold text-cyan-300 tracking-wider">
                John Smith - <span className="text-slate-300 font-normal">Dive Instructor</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
