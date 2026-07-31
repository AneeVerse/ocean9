"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientStrip from "@/components/ClientStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ProjectExperience from "@/components/ProjectExperience";
import WorkHistory from "@/components/WorkHistory";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import ReadyToDive from "@/components/ReadyToDive";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

// Set to true to show Under Construction page by default, or false to show full website
const SHOW_UNDER_CONSTRUCTION_BY_DEFAULT = true;

function HomeContent() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get("preview") === "true";

  // Show Under Construction by default. Pass ?preview=true in URL to view full site.
  if (!isPreview) {
    return <UnderConstruction />;
  }

  return (
    <main className="min-h-screen bg-[#002365] text-white flex flex-col font-sans">
      <Navbar />
      <Hero />
      <ClientStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ProjectExperience />
      <WorkHistory />
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <ReadyToDive />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#002365]" />}>
      <HomeContent />
    </Suspense>
  );
}
