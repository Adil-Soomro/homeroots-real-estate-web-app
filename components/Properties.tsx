"use client";

import React, { useState } from "react";
import { MapPin, Bed, Bath, Ruler, ArrowRight } from "lucide-react";
import Image from "next/image";

interface PropertyCard {
  id: number;
  image: string;
  location: string;
  name: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
}

const properties: PropertyCard[] = [
  {
    id: 1,
    image:
      // "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      "/property_1.jpeg",
    location: "25 Sunnyville Rd",
    name: "Sunnyvale Retreat",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: 3800,
  },
  {
    id: 2,
    image: "/property_2.jpeg",
    location: "456 Aspire Heights",
    name: "Mountainview Villa",
    price: "$360,000",
    beds: 3,
    baths: 2,
    sqft: 2480,
  },
  {
    id: 3,
    image: "/property_3.jpeg",
    location: "Cape Cod, MA",
    name: "Seaside Cottage",
    price: "$570,000",
    beds: 3,
    baths: 2,
    sqft: 2700,
  },
  {
    id: 4,
    image: "/property_4.jpeg",
    location: "Olympia St, Chicago",
    name: "Urban Little Oasis",
    price: "$825,000",
    beds: 4,
    baths: 3,
    sqft: 4350,
  },
  {
    id: 5,
    image: "/property_5.jpeg",
    location: "Lakefront, Tahoe",
    name: "Lakeside Manor",
    price: "$575,000",
    beds: 5,
    baths: 4,
    sqft: 5600,
  },
  {
    id: 6,
    image: "/property_6.jpeg",
    location: "Ranch Rd, TX",
    name: "Country Charm",
    price: "$460,000",
    beds: 3,
    baths: 2,
    sqft: 3000,
  },
];

const filters = [
  "Featured",
  "Apartments",
  "Condominiums",
  "Residential",
  "Cottage",
];

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState("Featured");

  return (
    <section
      id="properties"
      className="scroll-mt-12 px-6 md:px-12 py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-balance">
            Explore Our Highly Rated Apartments & Buildings
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  // width={600}
                  // height={400}
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Property Details */}
              <div className="p-5">
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin size={16} className="shrink-0" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Name and Price */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-black">
                    {property.name}
                  </h3>
                  <span className="text-lg font-bold text-black whitespace-nowrap ml-2">
                    {property.price}
                  </span>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed size={16} />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={16} />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler size={16} />
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-colors duration-500 hover:cursor-pointer">
            View More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Properties;
