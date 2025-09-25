import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    {
      title: "Nova Scotia Base, Global Reach",
      icon: "🏢",
      description: "Headquartered in Halifax with expert teams across the globe",
      color: "bg-purple-300 text-purple-800",
    },
    {
      title: "AI Transformation Leadership",
      icon: "🤖",
      description: "Leading the way in AI strategy design and implementation",
      color: "bg-yellow-300 text-yellow-800",
    },
    {
      title: "Human-Centric Approach",
      icon: "👥",
      description: "Balancing technology innovation with human experience",
      color: "bg-sky-300 text-sky-800",
    },
    {
      title: "Rapid Prototyping",
      icon: "⚡",
      description: "Fast-track outcomes with proven methodologies",
      color: "bg-green-300 text-green-800",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#F3F0FF] to-[#E0D7FF] text-center"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[#5C1BD9]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Change Architects Inc.
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        className="w-24 h-1 bg-purple-600 rounded-full mx-auto mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Intro Paragraph */}
      <motion.p
        className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A Nova Scotian company providing consulting and advisory services for
        Life Sciences and Healthcare organizations globally. Our mission is to
        architect successful human-centric digital and cultural change in these
        ever-evolving times of AI transformation.
      </motion.p>

      {/* Highlights Grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-md ${item.color} text-2xl`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#3B0CA3] text-center">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2 text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
