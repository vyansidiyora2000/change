import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Deliver() {
  const items = [
    "Business Transformation Services",
    "Specialized Operations Services",
    "Next-Generation Digital Enablement Services",
    "Business Augmentation",
  ];

  return (
    <section id="deliver" className="py-20 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        What We Deliver
      </motion.h2>
      <div className="mt-8 grid gap-6 max-w-4xl mx-auto md:grid-cols-2">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white border rounded-lg shadow hover:shadow-lg flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <CheckCircle className="h-6 w-6 text-green-500" />
            <span className="text-gray-700 font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
