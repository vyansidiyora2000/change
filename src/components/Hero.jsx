
// import React from "react";
// import { motion } from "framer-motion";
// import Logo from "../assets/sharp_logo-removebg-preview.png"; // <- use your logo file

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="bg-[#3B0CA3] text-white py-20 md:py-32 relative"
//     >
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
//         {/* Left Text */}
//         <div className="text-center md:text-left max-w-xl">
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold leading-tight"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             The Change Architects Advantage
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-lg md:text-2xl text-gray-200"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//           >
//             Enabling The Future Of Care
//           </motion.p>
//           <motion.a
//             href="#about"
//             className="mt-8 inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-100 transition"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1 }}
//           >
//             Learn More
//           </motion.a>
//         </div>

//         {/* Right Logo */}
//         <motion.div
//           className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           <img src={Logo} alt="Change Architects Logo" className="max-w-xs" />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/sharp_logo-removebg-preview.png";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="hero"
      className="bg-[#3B0CA3] text-white py-16 md:py-24 relative overflow-hidden"
    >
      <motion.div
        className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={item}
          >
            The <span className="text-yellow-300 whitespace-nowrap">Change Architects</span> Advantage
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl text-gray-200"
            variants={item}
          >
            Enabling The Future Of Care
          </motion.p>
          <motion.a
            href="#about"
            className="mt-6 inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-100 transition"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>

        {/* Right Logo */}
        <motion.div
          className="md:w-1/4 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0], // floating
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img src={Logo} alt="Change Architects Logo" className="max-w-[180px]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
