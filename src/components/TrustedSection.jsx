import React from "react";
import { motion } from "framer-motion";
import DaiichiLogo from "../assets/Daiichi_Sankyo.png";
import NovaScotiaLogo from "../assets/novascotia.png";

// Data
const flagshipCustomers = [
  {
    name: "Daiichi Sankyo",
    logo: DaiichiLogo,
    desc: "Digital Strategy & Innovation, Global Oncology Medical Affairs Organization",
  },
  {
    name: "Nova Scotia Health Authority",
    logo: NovaScotiaLogo,
    desc: "One Person One Record Program",
  },
];

const partnerOrgs = [
  { name: "Ardentivis" },
  { name: "Mariner Innovations" },
  { name: "Recruit Professional Services" },
  { name: "Kalki Konnective" },
];

const TrustedSection = () => {
  return (
    <section
      id="trusted"
      className="bg-gradient-to-b from-[#F3F0FF] to-[#E0D7FF] py-24"
    >
      <div className="max-w-5xl mx-auto text-center px-6">
        {/* Flagship Customers */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#3B0CA3]">
          Flagship Customers
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're proud to work with visionary organizations driving innovation in
          healthcare and life sciences.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-12">
          {flagshipCustomers.map((org, idx) => (
            <motion.div
              key={org.name}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition cursor-default flex flex-col items-center max-w-xs"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={org.logo}
                alt={org.name}
                className="h-20 object-contain mb-4"
              />
              <span className="text-gray-800 font-semibold text-center">
                {org.name}
              </span>
              <p className="mt-2 text-sm text-gray-600 text-center">
                {org.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Organizations */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#3B0CA3] mt-20">
          Partner Organizations
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {partnerOrgs.map((partner, idx) => (
            <motion.span
              key={partner.name}
              className="px-6 py-3 bg-white border border-purple-200 rounded-full shadow-sm text-gray-800 font-medium hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {partner.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
