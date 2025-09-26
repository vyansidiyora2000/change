
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Target } from "lucide-react";
import Logo from "../assets/sharp_logo-removebg-preview.png";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Innovation", "Excellence", "Transformation", "Progress","Precision"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient (kept) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B0A66] to-[#3B0CA3]" />
      <div className="absolute inset-0 bg-purple-900/20" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Static Logo */}
          <div className="mb-12 flex justify-center">
            <img
              src={Logo}
              alt="Change Architects Logo"
              className="w-36 md:w-48 object-contain"
            />
          </div>

          {/* Dynamic Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The <span className="text-sky-400">Change Architects</span>
            <br />
            <span className="bg-gradient-to-r from-white via-purple-400 to-sky-400 text-transparent bg-clip-text transition duration-500">
              {words[currentWord]}
            </span>{" "}
            Advantage
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-12">
            Enabling The Future Of Care
          </p>

          {/* Feature Pills */}
        

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="group relative bg-white text-purple-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>Discover Our Story</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
