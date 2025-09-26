import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2 } from "lucide-react";

const team = [
  {
    name: "Swetha Kannan",
    role: "Owner & Principal",
    company: "Change Architects Inc.",
    email: "swetha@change-architects.com",
    phone: "425.326.2529",
    location: "Halifax, Nova Scotia",
  },
  {
    name: "Nandita Kannan",
    role: "Lead Designer",
    company: "Change Architects Inc.",
    email: null, // optional
    phone: null, // optional
    location: "Halifax, Nova Scotia",
  },
];

export default function Principal() {
  return (
    <section
      id="principal"
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-[#3B0CA3]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Team
        </motion.h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((person, idx) => (
            <motion.div
              key={person.name}
              className="bg-purple-50 border border-purple-200 rounded-2xl p-10 shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {person.name}
              </h3>
              <p className="mt-2 text-lg text-[#3B0CA3] font-medium">
                {person.role}
              </p>
              <p className="mt-1 text-gray-600">{person.company}</p>

              {/* Contact Info (only if available) */}
              <div className="mt-6 space-y-3 text-gray-700">
                {person.email && (
                  <div className="flex justify-center items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span>{person.email}</span>
                  </div>
                )}
                {person.phone && (
                  <div className="flex justify-center items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span>{person.phone}</span>
                  </div>
                )}
                {person.location && (
                  <div className="flex justify-center items-center space-x-3">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    <span>{person.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
