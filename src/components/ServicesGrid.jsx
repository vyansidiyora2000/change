import React, { useState } from "react";

const services = [
  {
    title: "End-To-End Business Transformation",
    icon: "🔄",
    description:
      "Comprehensive transformation strategy, approach and execution plan development with organizational change management expertise.",
    points: [
      "Transformation Strategy & Execution Planning",
      "Organizational Change Management",
      "Business Process Design & Optimization",
      "Benefits Framework & ROI Calculators",
      "Communications & Campaign Management",
      "Stakeholder Mobilization",
      "Training Deployment & Instructional Design",
      "Procedural Documentation & Validation",
    ],
  },
  {
    title: "Specialized Operations Services",
    icon: "⚙️",
    description:
      "Business augmentation to fast-track outcomes with specialized expertise in AI strategy, data ecosystems, and rapid implementation recovery.",
    points: [
      "AI Strategy Design & Readiness Assessments",
      "Data Ecosystem & Interoperability Analysis",
      "Gaps Analysis - People, Process, Technology",
      "Risk & Cybersecurity Posture Evaluation",
      "Enterprise Architecture & Platform Selection",
      "Service Blueprinting & Journey Mapping",
      "Data Strategy & Governance Frameworks",
      "Fractional Leadership & Interim Support",
      "Implementation Recovery & Acceleration",
    ],
  },
  {
    title: "Next-Generation Digital Enablement",
    icon: "🚀",
    description:
      "Specialized business & technical services for Oracle Safety, Oracle Health, Veeva Products, and ArisGlobal platforms.",
    points: [
      "Oracle Safety & Health Implementation",
      "Veeva Platform Expertise & Configuration",
      "ArisGlobal Technical Services",
      "Pharmacovigilance Operations Setup",
      "End-to-end Digital Footprint Design",
      "PSMF Evaluation & Compliance",
      "Clinical Informatics & Data Migration",
      "System Validation & Analytics",
    ],
  },
  {
    title: "Business Augmentation",
    icon: "👥",
    description:
      "Enhance your team's capabilities with global experts in project management, analytics, validation, and AI pilots.",
    points: [
      "PMO & Change Management Expertise",
      "Rapid Prototyping for Transformation",
      "AI Pilot Implementation & Support",
      "Custom Solution Development",
      "Subject Matter Expertise Integration",
      "Fast-tracked Vendor Selection",
      "Analytics & Reporting Solutions",
      "Global Team Augmentation",
    ],
  },
];

export default function ServicesGrid() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-WHITE py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-purple-800/80 max-w-3xl mx-auto">
            Solutions designed for impact in healthcare and life sciences transformation
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => toggleCard(idx)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeIndex === idx ? "md:col-span-2" : ""
              }`}
            >
              {/* Card Container */}
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-500 ${
                activeIndex === idx 
                  ? "shadow-2xl shadow-purple-500/20 border-2 border-purple-300" 
                  : "shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 border border-purple-200/50"
              }`}>
                
                {/* Header Section */}
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl transition-all duration-300 ${
                      hoveredIndex === idx || activeIndex === idx ? "bg-purple-200 scale-110" : ""
                    }`}>
                      {service.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-purple-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-purple-800/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Expand Button */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === idx 
                        ? "bg-purple-600 text-white rotate-180" 
                        : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-purple-300 mb-6"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-xl bg-purple-50/80 border border-purple-200/50 hover:bg-purple-100/80 transition-all duration-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-purple-800 font-medium">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeIndex === idx && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse"></div>
                  </div>
                )}

                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-purple-600 transition-all duration-500 ${
                  activeIndex === idx || hoveredIndex === idx ? "opacity-100" : "opacity-0"
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </section>
  );
}