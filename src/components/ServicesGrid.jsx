import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Settings, Cpu, Users } from "lucide-react";

const services = [
  {
    title: "Business Transformation",
    icon: <RefreshCw className="w-10 h-10 text-yellow-300" />,
    description:
      "From change management to training and process optimization, we help organizations navigate transformation with clarity and confidence.",
  },
  {
    title: "Specialized Operations",
    icon: <Settings className="w-10 h-10 text-yellow-300" />,
    description:
      "Accelerate outcomes with targeted expertise including pharmacovigilance, clinical informatics, vendor selection, and rapid prototyping.",
  },
  {
    title: "Digital Enablement",
    icon: <Cpu className="w-10 h-10 text-yellow-300" />,
    description:
      "Embrace the future of care with AI strategies, data governance, interoperability, and automation solutions that drive innovation.",
  },
  {
    title: "Business Augmentation",
    icon: <Users className="w-10 h-10 text-yellow-300" />,
    description:
      "Extend your team with global experts in project management, analytics, validation, and AI pilots to accelerate transformation.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3B0CA3]">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Solutions designed for impact in healthcare and life sciences.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#3B0CA3]">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
