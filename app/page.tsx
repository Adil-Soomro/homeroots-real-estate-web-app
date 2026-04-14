import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import BlogSection from "@/components/BlogSection";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Properties from "@/components/Properties";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-6xl mx-auto py-2  bg-white">
        <Stats />
        <Properties />
        <Expertise />
        <Portfolio />
        <BlogSection />
        <Faq />
        <Testimonials />
      </div>
    </>
  );
}
