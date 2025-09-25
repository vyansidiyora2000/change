// import React from "react";

// const services = [
//   {
//     title: "Business Transformation Services",
//     content: [
//       "Transformation strategy and execution planning",
//       "Organizational change management",
//       "Business process documentation, simulation, and optimization",
//       "Benefits frameworks and ROI measurement",
//       "Communications branding, design, and campaign management",
//       "Stakeholder mobilization and engagement",
//       "Training deployment and instructional design",
//       "Procedural documentation and validation",
//     ],
//   },
//   {
//     title: "Specialized Operations Services",
//     content: [
//       "Fractional leadership & interim executive support",
//       "Clinical informatics, pharmacovigilance, and safety operations expertise",
//       "Vendor and platform selection support",
//       "Implementation recovery and acceleration",
//       "Specialized services for Oracle, Veeva, and ArisGlobal products",
//       "Rapid prototyping to streamline repeatable processes",
//       "End-to-end digital footprint design for emerging pharma",
//     ],
//   },
//   {
//     title: "Next-Generation Digital Enablement",
//     content: [
//       "AI strategy design and readiness assessments",
//       "Data ecosystem and interoperability analysis",
//       "People, process, and technology gap analysis",
//       "Cybersecurity and risk posture evaluations",
//       "Enterprise architecture and platform selection",
//       "Service blueprinting (patient/customer journey mapping)",
//       "Data strategy and governance frameworks",
//       "AI-to-automation implementation and support",
//       "Custom-built solution development",
//     ],
//   },
//   {
//     title: "Business Augmentation",
//     content: [
//       "On-demand subject matter expertise",
//       "PMO & change management support",
//       "Data migration, validation, analytics, and reporting",
//       "Systems configuration, design, and management",
//       "Rapid prototyping for AI pilots and digital initiatives",
//       "Global talent to fast-track outcomes",
//     ],
//   },
// ];

// export default function ServicesPage() {
//   return (
//     <section className="bg-gray-50 py-20 px-6 text-gray-900">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#3B0CA3] text-center">
//           Our Services
//         </h1>
//         <p className="mt-4 text-lg text-gray-600 text-center">
//           At Change Architects Inc., we deliver business transformation,
//           specialized operations, digital enablement, and business augmentation
//           services tailored for healthcare and life sciences organizations.
//         </p>

//         <div className="mt-16 space-y-12">
//           {services.map((service, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-2xl font-semibold text-[#3B0CA3] mb-4">
//                 {service.title}
//               </h2>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 {service.content.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-16">
//           <a
//             href="/contact"
//             className="bg-[#3B0CA3] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-purple-900 transition"
//           >
//             Let’s Build the Future Together
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
