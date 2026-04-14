"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const sections = ["home", "properties", "about", "contact", "blogs"];

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActive(entry.target.id); // ✅ FIXED
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.6,
  //       rootMargin: "-80px 0px 0px 0px", // better with sticky nav
  //     },
  //   );

  //   sections.forEach((id) => {
  //     const element = document.getElementById(id);
  //     if (element) observer.observe(element); // ✅ FIXED
  //   });

  //   return () => observer.disconnect();
  // }, []);
  const smoothScroll = (targetId: any) => {
    const element = document.getElementById(targetId);
    const offset = 80;

    if (!element) return;

    const start = window.scrollY;
    const end =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    const duration = 600;

    let startTime: any = null;

    const easeInOut = (t: any) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (currentTime: any) => {
      if (!startTime) startTime = currentTime;

      const time = currentTime - startTime;
      const progress = Math.min(time / duration, 1);

      const eased = easeInOut(progress);

      window.scrollTo(0, start + (end - start) * eased);

      if (time < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 backdrop-blur shadow">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-black flex items-center justify-center rounded">
          <span className="text-white text-lg font-bold">📊</span>
        </div>
        <span className="text-xl font-bold text-black">HomeRoots</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            onClick={(e) => {
              e.preventDefault(); // ❗ stops default jump
              smoothScroll(sec); // ✅ custom smooth scroll
              setOpen(false); // close mobile menu
            }}
            className={`capitalize transition ${
              active === sec
                ? "font-bold text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {sec}
          </a>
        ))}

        {/* Property Dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-1 text-gray-600 hover:text-black transition">
            Property
            <ChevronDown
              size={16}
              className="group-hover:rotate-180 transition-transform"
            />
          </button>

          <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <a className="block px-4 py-2 hover:bg-gray-900 hover:cursor-pointer text-gray-700 hover:text-gray-100 rounded transition-all duration-400">
              Residential
            </a>
            <a className="block px-4 py-2 hover:bg-gray-900 hover:cursor-pointer text-gray-700 hover:text-gray-100 rounded transition-all duration-400">
              Commercial
            </a>
            <a className="block px-4 py-2 hover:bg-gray-900 hover:cursor-pointer text-gray-700 hover:text-gray-100 rounded transition-all duration-400">
              Industrial
            </a>
          </div>
        </div>

        <a className="text-gray-600 hover:text-black transition">Blogs</a>
      </div>

      {/* CTA Button */}
      <button className="hidden md:flex items-center gap-2 bg-gray-900 hover:bg-white hover:text-black border-2 border-gray-900 text-white px-6 py-2.5 rounded-full transition duration-500">
        Let's Talk
        <ArrowRight size={18} />
      </button>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={() => setOpen(false)}
              className={`capitalize ${
                active === sec ? "font-bold text-black" : "text-gray-600"
              }`}
            >
              {sec}
            </a>
          ))}

          <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-full">
            Let's Talk
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
