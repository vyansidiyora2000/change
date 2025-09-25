import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2 } from "lucide-react";

export default function Principal() {
  return (
    <section
      id="principal"
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background Map/Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-[#3B0CA3]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Principal
        </motion.h2>

        {/* Name + Role */}
        <motion.div
          className="mt-10 bg-purple-50 border border-purple-200 rounded-2xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            Swetha Kannan
          </h3>
          <p className="mt-2 text-lg text-[#3B0CA3] font-medium">
            Owner & Principal
          </p>
          <p className="mt-1 text-gray-600">Change Architects Inc.</p>

          {/* Contact Info */}
          <div className="mt-6 space-y-3 text-gray-700">
            <div className="flex justify-center items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-600" />
              <span>swetha@change-architects.com</span>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-600" />
              <span>425.326.2529</span>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <Building2 className="w-5 h-5 text-purple-600" />
              <span>Halifax, Nova Scotia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
