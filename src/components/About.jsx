import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>
      <motion.p
        className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Change Architects Inc. is a Nova Scotian company that understands your
        challenges and supports the need for better value-for-money in
        healthcare. Our mission is to transform the way we deliver change in
        Canada.
      </motion.p>
    </section>
  );
}
