// import React from "react";

// export default function Navbar() {
//   const links = [
//     { name: "About", href: "#about" },
//     { name: "Team", href: "#team" },
//     { name: "Deliver", href: "#deliver" },
//     { name: "Solutions", href: "#solutions" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-purple-700">
//           Change Architects Inc.
//         </h1>
//         <ul className="flex space-x-6 text-gray-700 font-medium">
//           {links.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="hover:text-purple-600 transition"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Deliver", href: "#deliver" },
    { name: "Solutions", href: "#solutions" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full bg-[#3B0CA3] text-white shadow-lg z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <motion.h1
          className="text-xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Change Architects Inc.
        </motion.h1>

        {/* Links */}
        <motion.ul
          className="flex space-x-6 font-medium"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.href}
                className="hover:text-gray-200 transition"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
