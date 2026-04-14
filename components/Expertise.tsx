"use client";

import React from "react";
import {
  BarChart3,
  Shield,
  Truck,
  Users,
  Briefcase,
  Megaphone,
} from "lucide-react";

interface ExpertiseItem {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    id: 1,
    icon: <BarChart3 size={32} className="text-black" />,
    title: "Market Analysis",
    description:
      "In-depth understanding of market trends to guide pricing and strategy.",
  },
  {
    id: 2,
    icon: <Shield size={32} className="text-black" />,
    title: "Property Valuation",
    description:
      "Accurate assessments to determine the true value of your favourite apartment, cottage etc.",
  },
  {
    id: 3,
    icon: <Truck size={32} className="text-black" />,
    title: "Legal Assistance",
    description:
      "Helping clients navigate the complexities of legal paperwork to ensure a smooth transaction.",
  },
  {
    id: 4,
    icon: <Users size={32} className="text-black" />,
    title: "Post-Sale Support",
    description:
      "Providing assistance even after the sale, ensuring clients feel supported throughout their journey.",
  },
  {
    id: 5,
    icon: <Briefcase size={32} className="text-black" />,
    title: "Negotiation Skills",
    description:
      "In-depth understanding of market trends to guide pricing and strategy.",
  },
  {
    id: 6,
    icon: <Megaphone size={32} className="text-black" />,
    title: "Tailored Marketing Plans",
    description:
      "Developing customized strategies to showcase properties and attract buyers.",
  },
];

const Expertise = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-balance">
            Highlights of Our Real-Estate Expertise
          </h2>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="mb-5">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
