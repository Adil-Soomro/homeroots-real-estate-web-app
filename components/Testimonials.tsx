"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const testimonials = [
  {
    id: 1,
    name: "Tom Holland",
    location: "Seattle, WA",
    rating: 5,
    text: "Working with this team was a game-changer! Their expertise and personalized approach made buying my first home a breeze. They took the time to understand my needs and guided me through every step, making the process feel seamless. I felt confident and well-informed, and I couldn't have asked for a better experience.",
    signature: "Tom Holland",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Exceptional service from start to finish. The team's knowledge of the local market was invaluable. They found me the perfect property within my budget and timeline. Highly recommended!",
    signature: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "Outstanding professionalism and dedication. They handled all the complexities of my property transaction with ease. I appreciate their transparent communication throughout the entire process.",
    signature: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="px-6 md:px-12 py-12 md:py-20 bg-baseWhite">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-darkJungle mb-12 text-center">
          What Our Clients Are Saying
        </h2>

        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-full md:w-1/3 shrink-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-baseWhite">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {current.name}
                </h3>
                <p className="text-gray-600 mb-3">{current.location}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-darkJungle text-dimGray"
                    />
                  ))}
                </div>
              </div>

              <p className="text-darkJungle leading-relaxed mb-6 text-lg">
                {current.text}
              </p>

              <p
                className={`${allura.className} text-darkJungle font-bold text-2xl mb-8`}
              >
                {current.signature}
              </p>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={goToPrevious}
                  className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-darkJungle text-gray-900 hover:bg-gray-900 hover:cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-darkJungle text-white hover:bg-dimGray hover:cursor-pointer transition-colors duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
