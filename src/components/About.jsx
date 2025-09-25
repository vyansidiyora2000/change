import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
        About Us
      </motion.h2>

      {/* Decorative line */}
      <motion.div
        className="w-24 h-1 bg-purple-600 rounded-full mx-auto mt-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />

      {/* Paragraph */}
      <motion.p
        className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Change Architects Inc. is a Nova Scotian company that understands your
        challenges and supports the need for better value-for-money in
        healthcare. Our mission is to transform the way we deliver change in
        Canada.
      </motion.p>
    </section>
  );
}
