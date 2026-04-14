"use client";
import React from "react";

import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="px-6 py-12 md:py-16">
      <div className="bg-linear-to-r from-blue-500 via-blue-450 to-blue-400 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-96">
          {/* Left Content */}
          <div className="flex flex-col justify-center z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Designing Your Next Chapter.
            </h1>

            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-md leading-relaxed">
              Where Dreams Become Apartments: Transforming Visions into Vibrant
              Living Spaces.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button className="flex items-center gap-2 bg-white text-blue-900 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition shadow-lg">
                Explore Projects
                <ArrowRight size={20} />
              </button>

              <button className="flex items-center gap-2 bg-white/25 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/35 transition backdrop-blur-sm border border-white/30">
                <Play size={20} fill="white" />
                Our Process
              </button>
            </div>
          </div>

          {/* Right - Building Image with Testimonial */}
          <div className="relative h-96 md:h-full min-h-96 flex items-end">
            <Image
              src="/apartment-building.jpg"
              alt="Modern apartment building"
              width={600}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
              priority
            />

            {/* Client Testimonial - Positioned at bottom right of image */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-xl">
              <div className="flex items-center gap-3">
                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white flex-shrink-0">
                    👨
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white flex-shrink-0">
                    👩
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white flex-shrink-0">
                    👨
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white flex-shrink-0">
                    👩
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-base font-bold text-gray-900">
                    50k+ Happy Clients
                  </p>
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="text-xs md:text-sm font-semibold text-gray-800 ml-1">
                      4.5/5
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
