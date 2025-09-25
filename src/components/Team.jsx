import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function Team() {
  const skills = [
    "Organizational Change Management",
    "Project Management",
    "Digital Enablement",
    "Specialized Healthcare Services",
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Our Team
        </motion.h2>
        <p className="mt-2 text-gray-600">
          Our people are highly skilled and experienced in:
        </p>
      </div>
      <div className="mt-8 grid gap-6 max-w-4xl mx-auto md:grid-cols-2">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex items-center p-6 bg-purple-50 border border-purple-200 rounded-lg shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <Users className="h-6 w-6 text-purple-600 mr-3" />
            <span className="text-gray-700 font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
