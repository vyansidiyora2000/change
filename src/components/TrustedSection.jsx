import React from "react";
import { motion } from "framer-motion";
import DaiichiLogo from "../assets/Daiichi_Sankyo.png";
import NovaScotiaLogo from "../assets/novascotia.png";

const organizations = [
  { name: "Daiichi Sankyo", logo: DaiichiLogo },
  { name: "Nova Scotia Health Authority", logo: NovaScotiaLogo },
];

const TrustedSection = () => {
  return (
    <section id="trusted" className="bg-gradient-to-b from-[#F3F0FF] to-[#E0D7FF] py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#3B0CA3]">
          Trusted by Leading Organizations
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're proud to partner with innovative companies transforming healthcare and life sciences.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-12">
          {organizations.map((org, idx) => (
            <motion.div
              key={org.name}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition cursor-default flex flex-col items-center"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
