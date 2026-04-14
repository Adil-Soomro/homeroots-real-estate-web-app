"use client";

import React from "react";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title:
      "Legal Essentials: Understanding Documentation In Real Estate Transactions",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title:
      "The Importance Of Property Valuation: Getting The Best Price For Your Home",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "How To Choose The Right Partner For Your Needs",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
  },
];
const BlogSection = () => {
  return (
    <section id="blogs" className="px-6 md:px-12 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Latest Blogs & Articles
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Blog Image */}
              <div className="relative h-64 md:h-72 overflow-hidden rounded-2xl bg-gray-200 mb-4">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Read Article Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                    Read Article
                  </button>
                </div>
              </div>

              {/* Read Time Badge */}
              <div className="mb-3">
                <span className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  {blog.readTime}
                </span>
              </div>

              {/* Blog Title */}
              <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
