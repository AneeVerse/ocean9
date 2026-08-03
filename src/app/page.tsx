"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientStrip from "@/components/ClientStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import Testimonials from "@/components/Testimonials";
import ProjectExperience from "@/components/ProjectExperience";
import WorkHistory from "@/components/WorkHistory";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import HSESection from "@/components/HSESection";
import ProjectGallerySection from "@/components/ProjectGallerySection";
import VideoGallerySection from "@/components/VideoGallerySection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import ReadyToDive from "@/components/ReadyToDive";
import Footer from "@/components/Footer";
import UnderConstruction from "@/components/UnderConstruction";

// Set to true to show Under Construction page by default, or false to show full website
const SHOW_UNDER_CONSTRUCTION_BY_DEFAULT = true;

function HomeContent() {
  const searchParams = useSearchParams();
  const isPreview = searchParams.get("preview") === "true";

  // Show Under Construction page by default unless preview mode is active
  if (SHOW_UNDER_CONSTRUCTION_BY_DEFAULT && !isPreview) {
    return <UnderConstruction />;
  }

  return (
    <main className="min-h-screen bg-[#002365] text-[#081935] flex flex-col font-sans">
      <Navbar />
      <Hero />

      {/* Single Continuous Background from ClientStrip / About Us to Services Provided */}
      <div className="relative bg-[#002365] overflow-hidden">
        <Image
          src="/assets/home-about-us-to-service-bg.png"
          alt="Ocean 9 Background"
          fill
          className="object-cover object-[center_top] pointer-events-none opacity-90"
          priority
        />
        <div className="relative z-10">
          <ClientStrip />
          <AboutSection />
          <ServicesSection />
        </div>
      </div>

      <WhyChooseUs />
      <CapabilitiesSection />
      <Testimonials />

      {/* Single Continuous Background from Project Experience to FAQs */}
      <div className="relative bg-[#002365] overflow-hidden">
        <Image
          src="/assets/home-our-project-to-faq-bg4.png"
          alt="Ocean 9 Projects to FAQ Background"
          fill
          className="object-cover object-top pointer-events-none opacity-90"
          priority
        />
        <div className="relative z-10">
          <ProjectExperience />
          <WorkHistory />
          <ReviewsSection />
          <BlogSection />
          <FAQSection />
        </div>
      </div>

      <HSESection />

      {/* Single Continuous Ocean Background for Project Gallery & Video Gallery */}
      <div className="relative bg-[#002365] overflow-hidden">
        <Image
          src="/assets/home-about-us-to-service-bg.png"
          alt="Ocean 9 Media Background"
          fill
          className="object-cover object-[center_top] pointer-events-none opacity-90"
          priority
        />
        <div className="relative z-10">
          <ProjectGallerySection />
          <VideoGallerySection />
        </div>
      </div>

      <ContactSection />
      <CareersSection />
      {/* Single Continuous Ocean Background for Ready to Dive & Footer */}
      <div className="relative bg-[#00173e] overflow-hidden">
        <Image
          src="/images/footer-and-above-section-bg.png"
          alt="Ocean Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10">
          <ReadyToDive />
          <Footer />
        </div>
      </div>
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
