import React, { useState } from "react";

const platforms = [
  {
    name: "Oracle Safety",
    icon: "🛡️",
    description:
      "Complete implementation, configuration, and optimization services for Oracle Argus Safety platform.",
    points: [
      "Implementation & Configuration",
      "Data Migration & Validation",
      "Workflow Optimization",
      "Training & Support",
    ],
  },
  {
    name: "Oracle Health",
    icon: "💊",
    description:
      "Expert services for Oracle Health Sciences applications including clinical trial management and regulatory solutions.",
    points: [
      "Clinical Trial Management",
      "Regulatory Submissions",
      "Data Analytics",
      "Compliance Management",
    ],
  },
  {
    name: "Veeva Systems",
    icon: "📦",
    description:
      "Comprehensive Veeva platform services covering CRM, Vault, and QualityOne applications.",
    points: [
      "Veeva CRM Implementation",
      "Vault Configuration",
      "QualityOne Setup",
      "Integration Services",
    ],
  },
  {
    name: "ArisGlobal",
    icon: "🌐",
    description:
      "Specialized technical services for ArisGlobal LifeSphere platform including safety and regulatory modules.",
    points: [
      "LifeSphere Implementation",
      "MultiVigilance Configuration",
      "Regulatory Intelligence",
      "Technical Support",
    ],
  },
];

export default function PlatformsTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#F3F0FF] to-[#E0D7FF] py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4">
            Platform Expertise
          </h2>
          <p className="text-xl text-purple-800/80 max-w-3xl mx-auto">
            Specialized technical services across leading healthcare and life sciences platforms
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Platform Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {platforms.map((platform, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeIndex === idx
                  ? "bg-white shadow-xl border-2 border-purple-300"
                  : "bg-white/70 shadow-lg border border-purple-200/50 hover:bg-white/90 hover:shadow-xl"
              }`}
            >
              {/* Icon */}
              <div className={`text-4xl mb-4 transition-all duration-300 ${
                activeIndex === idx || hoveredIndex === idx ? "scale-110" : ""
              }`}>
                {platform.icon}
              </div>
              
              {/* Platform Name */}
              <h3 className={`font-bold text-lg transition-colors duration-300 ${
                activeIndex === idx ? "text-purple-900" : "text-purple-800"
              }`}>
                {platform.name}
              </h3>
              
              {/* Active Indicator */}
              <div className={`mt-3 h-1 bg-purple-600 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-full opacity-100" : "w-0 opacity-0"
              }`}></div>
            </button>
          ))}
        </div>

        {/* Active Content Panel */}
        <div className="relative">
          <div
            key={activeIndex}
            className="bg-white/90 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-8 md:p-10 shadow-xl transition-all duration-500"
          >
            {/* Content Header */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                {platforms[activeIndex].icon}
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-purple-900 mb-2">
                  {platforms[activeIndex].name}
                </h3>
                <div className="h-1 w-20 bg-purple-600 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-purple-800/80 mb-8 leading-relaxed">
              {platforms[activeIndex].description}
            </p>

            {/* Service Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {platforms[activeIndex].points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-purple-50/80 border border-purple-200/50 hover:bg-purple-100/80 transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></div>
                  <span className="text-purple-800 font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Learn More About {platforms[activeIndex].name}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {platforms.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-purple-600 scale-125"
                  : "bg-purple-300 hover:bg-purple-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}