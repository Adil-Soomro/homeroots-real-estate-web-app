"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  {
    number: "100k+",
    label: "Property Constructed",
  },
  {
    number: "100+",
    label: "Award Winning",
  },
  {
    number: "50k+",
    label: "Satisfied Clients",
  },
  {
    number: "5+",
    label: "Years of Experience",
  },
];

const Stats = () => {
  return (
    <section className="px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Image */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/modern-appartment-building.jpeg"
              alt="Modern apartment building"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Find Your Dream Property At The Best Price
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              We support our clients at every stage of the buying and selling
              process, ensuring a seamless and stress-free experience from start
              to finish.
            </p>

            <button className="flex items-center gap-2 bg-white text-gray-900 border-2 border-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition duration-500 hover:cursor-pointer mb-12">
              Learn More
              <ArrowRight size={18} />
            </button>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
