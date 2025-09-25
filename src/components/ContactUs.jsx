import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#3B0CA3] via-purple-800 to-[#1E0B57] py-20 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Build the Future Together
          </h2>
          <p className="text-gray-200 text-lg">
            Have questions or ideas? Reach out to us and our team will connect
            with you shortly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-yellow-300" />
              <span>123 Innovation Drive, Halifax, NS</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-yellow-300" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-yellow-300" />
              <span>info@changearchitects.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-gray-900 space-y-6"
        >
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3B0CA3] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3B0CA3] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3B0CA3] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3B0CA3] outline-none resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#3B0CA3] text-white py-3 px-6 rounded-full font-semibold shadow hover:bg-purple-900 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
