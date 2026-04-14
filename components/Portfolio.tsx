"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section className="px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover Stylish Spaces and <br /> Inspiring Details
          </h2>
          <button className="hidden md:flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition">
            View Listings
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Large Image - Top Left */}
          <div className="md:col-span-2 md:row-span-2 relative h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1706808849803-f61304e024ab?w=800&h=600&fit=crop"
              alt="Modern luxury home exterior"
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                View Details
              </button>
            </div>
          </div>

          {/* Top Right Small */}
          <div className="relative h-48 md:h-44 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=400&fit=crop"
              alt="Contemporary home design"
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                View Details
              </button>
            </div>
          </div>

          {/* Middle Right Small */}
          <div className="relative h-48 md:h-44 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1771366260867-7e07094579d7?w=500&h=400&fit=crop"
              alt="Modern architectural design"
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div className="relative h-56 md:h-48 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1760067537293-6b30141d6a52?w=500&h=400&fit=crop"
              alt="Luxury home interior"
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                View Details
              </button>
            </div>
          </div>

          <div className="relative h-56 md:h-48 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop"
              alt="Residential property"
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                View Details
              </button>
            </div>
          </div>

          <div className="relative h-56 md:h-48 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1769780265587-037ee842c0b0?w=500&h=400&fit=crop"
              alt="Contemporary home"
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
              <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Featured Property Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center rounded-2xl overflow-hidden bg-gray-100">
          {/* Image */}
          <div className="relative h-80 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=500&fit=crop"
              alt="Featured luxury property"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Your Ideal Real Estate Partner?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our team features trusted expertise for seasoned guidance,
              ensuring your real estate needs and demonstrating proven success
              with a strong track record of client satisfaction.
            </p>
            <button className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile View Listing Button */}
        <div className="flex md:hidden justify-center mt-12">
          <button className="flex items-center gap-2 text-gray-900 font-semibold hover:text-blue-600 transition">
            View Listings
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
