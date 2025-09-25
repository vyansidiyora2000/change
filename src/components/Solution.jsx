import React from "react";
import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    {
      title: "End-to-End Business Transformation",
      desc: "Driving organizational change from strategy to execution.",
    },
    {
      title: "Specialized Operations",
      desc: "Delivering specialized healthcare and operational support.",
    },
    {
      title: "Business Augmentation",
      desc: "Enhancing your team’s capabilities with expert support.",
    },
    {
      title: "Next-Gen Digital Transformation",
      desc: "Leveraging digital tools to enable better care delivery.",
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold text-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Our Solutions
      </motion.h2>
      <div className="mt-8 grid gap-6 max-w-5xl mx-auto md:grid-cols-2">
        {solutions.map((s, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-purple-50 border border-purple-200 rounded-lg shadow hover:shadow-lg text-left"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-purple-700">{s.title}</h3>
            <p className="mt-3 text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
