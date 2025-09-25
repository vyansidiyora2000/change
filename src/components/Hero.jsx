// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronDown, Sparkles, Zap, Target } from "lucide-react";
// import Logo from "../assets/sharp_logo-removebg-preview.png";

// // Butterfly SVG Component
// const Butterfly = ({ className }) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
//     <path d="M12 2c-1.1 0-2 .9-2 2v1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V4c0-1.1-.9-2-2-2s-2 .9-2 2c0 2.2 1.8 4 4 4h.5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H9c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2-.9 2-2v-1.5c0-.3.2-.5.5-.5s.5.2.5.5V20c0 1.1.9 2 2 2s2-.9 2-2c0-2.2-1.8-4-4-4h-.5c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5H15c2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.1 0-2 .9-2 2v1.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V4c0-1.1-.9-2-2-2z"/>
//   </svg>
// );

// export default function Hero() {
//   const [currentWord, setCurrentWord] = useState(0);
//   const words = ["Innovation", "Excellence", "Transformation", "Progress"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWord((prev) => (prev + 1) % words.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#2B0A66] to-[#3B0CA3]"></div>
//       <div className="absolute inset-0 bg-purple-900/20"></div>
      
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0">
//         <Butterfly className="absolute top-1/4 left-1/4 w-4 h-4 text-sky-400 animate-pulse" />
//         <Butterfly className="absolute top-1/3 right-1/3 w-3 h-3 text-white animate-pulse" style={{animationDelay: '1000ms'}} />
//         <Butterfly className="absolute bottom-1/4 left-1/3 w-5 h-5 text-sky-400 opacity-50 animate-pulse" style={{animationDelay: '500ms'}} />
//         <Butterfly className="absolute top-2/3 right-1/4 w-4 h-4 text-white opacity-70 animate-pulse" style={{animationDelay: '700ms'}} />
        
//         {/* Geometric shapes */}
//         <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45 rounded-lg"></div>
//         <div className="absolute bottom-32 left-16 w-24 h-24 border border-sky-400/20 rotate-12 rounded-full"></div>
//       </div>

//       <div className="relative z-10 container mx-auto px-6 text-center">
//         <div className="max-w-4xl mx-auto">
//           {/* Logo at top with floating animation */}
//           {/* Logo at top with scale animation */}
// <motion.div
//   className="mb-12 flex justify-center"
//   initial={{ scale: 0.8, opacity: 0 }}
//   animate={{ scale: [0.8, 1.1, 0.8], opacity: 1 }}
//   transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
// >
//   <img
//     src={Logo}
//     alt="Change Architects Logo"
//     className="w-24 md:w-32 object-contain" // medium size
//   />
// </motion.div>


//           {/* Dynamic Title */}
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
//             The <span className="text-sky-400">Change Architects</span>
//             <br />
//             <span className="inline-block min-w-[300px] text-left">
//               <span className="inline-block animate-pulse">{words[currentWord]}</span>
//             </span> Advantage
//           </h1>

//           {/* Subtitle with icons */}
//           <div className="flex items-center justify-center gap-4 mb-8">
//             <Butterfly className="w-6 h-6 text-sky-400 animate-pulse" />
//             <p className="text-xl md:text-3xl text-gray-200 font-light">
//               Enabling The Future Of Care
//             </p>
//             <Zap className="w-6 h-6 text-sky-400 animate-pulse delay-500" />
//           </div>

//           {/* Feature Pills */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-2">
//               <Target className="w-4 h-4 text-sky-400" />
//               <span className="text-white font-medium">Precision</span>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-2">
//               <Zap className="w-4 h-4 text-sky-400" />
//               <span className="text-white font-medium">Innovation</span>
//             </div>
//             <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 flex items-center gap-2">
//               <Sparkles className="w-4 h-4 text-sky-400" />
//               <span className="text-white font-medium">Excellence</span>
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
//             <a
//               href="#about"
//               className="group relative bg-white text-purple-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
//             >
//               <span>Discover Our Story</span>
//               <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
//             </a>
//             <a
//               href="#contact"
//               className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
//             >
//               Get Started Today
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Floating background elements */}
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
//         <div className="w-64 h-64 bg-gradient-to-r from-sky-400/10 to-white/5 rounded-full blur-3xl animate-pulse"></div>
//       </div>
//       <div className="absolute top-1/3 right-0 transform -translate-y-1/2 translate-x-1/2">
//         <div className="w-80 h-80 bg-gradient-to-l from-sky-400/10 to-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>
//     </section>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Zap, Target } from "lucide-react";
import Logo from "../assets/sharp_logo-removebg-preview.png";

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Innovation", "Excellence", "Transformation", "Progress","Precision","Agility"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient (kept) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B0A66] to-[#3B0CA3]" />
      <div className="absolute inset-0 bg-purple-900/20" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Static Logo */}
          <div className="mb-12 flex justify-center">
            <img
              src={Logo}
              alt="Change Architects Logo"
              className="w-28 md:w-36 object-contain"
            />
          </div>

          {/* Dynamic Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            The <span className="text-sky-400">Change Architects</span>
            <br />
            <span className="inline-block min-w-[300px] text-left">
              {words[currentWord]}
            </span>{" "}
            Advantage
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-12">
            Enabling The Future Of Care
          </p>

          {/* Feature Pills */}
        

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="group relative bg-white text-purple-700 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>Discover Our Story</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
