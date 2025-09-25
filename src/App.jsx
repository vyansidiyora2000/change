// import { useState } from "react";
// import {
//   Menu,
//   X,
//   Target,
//   BarChart,
//   Lightbulb,
//   Users,
//   ChevronRight,
//   Facebook,
//   Twitter,
//   Linkedin,
// } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed w-full z-50 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Logo />
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#services" className="text-gray-700 hover:text-purple-600">
//               Services
//             </a>
//             <a href="#about" className="text-gray-700 hover:text-purple-600">
//               About
//             </a>
//             <a href="#contact" className="text-gray-700 hover:text-purple-600">
//               Contact
//             </a>
//             <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
//               {isOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t">
//           <div className="px-2 pt-2 pb-3 space-y-1">
//             <a
//               href="#services"
//               className="block px-3 py-2 text-gray-700 hover:text-purple-600"
//             >
//               Services
//             </a>
//             <a
//               href="#about"
//               className="block px-3 py-2 text-gray-700 hover:text-purple-600"
//             >
//               About
//             </a>
//             <a
//               href="#contact"
//               className="block px-3 py-2 text-gray-700 hover:text-purple-600"
//             >
//               Contact
//             </a>
//             <button className="w-full text-left px-3 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
//               Get Started
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const Logo = ({ className = "h-10 w-10" }) => (
//   <div
//     className={`${className} bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg`}
//   >
//     CA
//   </div>
// );

// const Hero = () => (
//   <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//       <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
//         <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//           <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
//             Empower Your <span className="text-purple-600">Business</span>{" "}
//             with Strategic Consulting
//           </h1>
//           <p className="mt-6 text-lg text-gray-600">
//             We help companies navigate complex challenges and achieve sustainable
//             growth through innovative solutions and expert guidance.
//           </p>
//           <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
//             <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition flex items-center">
//               Get Started <ChevronRight className="ml-2 h-5 w-5" />
//             </button>
//             <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div className="relative mt-12 lg:mt-0 lg:col-span-6">
//           <div className="relative mx-auto w-full">
//             <div className="rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-8 shadow-xl">
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978"
//                 alt="Consulting Team"
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* Background decoration */}
//     <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//     <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//   </section>
// );

// const Services = () => {
//   const services = [
//     {
//       icon: <Target className="h-8 w-8" />,
//       title: "Strategic Planning",
//       description:
//         "Develop comprehensive strategies to achieve long-term business objectives.",
//     },
//     {
//       icon: <BarChart className="h-8 w-8" />,
//       title: "Market Analysis",
//       description:
//         "Gain insights into market trends and make data-driven decisions.",
//     },
//     {
//       icon: <Lightbulb className="h-8 w-8" />,
//       title: "Innovation Consulting",
//       description:
//         "Drive innovation and digital transformation within your organization.",
//     },
//     {
//       icon: <Users className="h-8 w-8" />,
//       title: "Team Development",
//       description:
//         "Enhance team performance and leadership capabilities.",
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             Our Services
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Comprehensive consulting solutions tailored to your needs.
//           </p>
//         </div>
//         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-md hover:shadow-lg transition"
//             >
//               <div className="text-purple-600 mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {service.title}
//               </h3>
//               <p className="mt-2 text-gray-600">{service.description}</p>
//               <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium flex items-center">
//                 Learn More <ChevronRight className="ml-1 h-4 w-4" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const About = () => (
//   <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//             About Our Company
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             With years of experience and a team of dedicated professionals, we
//             provide expert consulting services that help businesses thrive in an
//             ever-changing market landscape.
//           </p>
//           <ul className="mt-8 space-y-4">
//             <li className="flex items-center">
//               <ChevronRight className="h-5 w-5 text-purple-600" />
//               <span className="ml-2 text-gray-700">Expertise across 15+ industries</span>
//             </li>
//             <li className="flex items-center">
//               <ChevronRight className="h-5 w-5 text-purple-600" />
//               <span className="ml-2 text-gray-700">Proven track record of success</span>
//             </li>
//             <li className="flex items-center">
//               <ChevronRight className="h-5 w-5 text-purple-600" />
//               <span className="ml-2 text-gray-700">Global network of consultants</span>
//             </li>
//           </ul>
//         </div>
//         <div className="mt-12 lg:mt-0">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//             alt="Team working"
//             className="rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const Footer = () => (
//   <footer className="bg-gray-900 text-gray-300">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div>
//           <Logo />
//           <p className="mt-4 text-sm">
//             Empowering businesses through strategic consulting and innovative
//             solutions.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold">Quick Links</h3>
//           <ul className="mt-4 space-y-2">
//             <li><a href="#services" className="hover:text-white">Services</a></li>
//             <li><a href="#about" className="hover:text-white">About</a></li>
//             <li><a href="#contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold">Contact</h3>
//           <ul className="mt-4 space-y-2">
//             <li>Email: info@consultingagency.com</li>
//             <li>Phone: (123) 456-7890</li>
//             <li>Location: New York, NY</li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-white font-semibold">Follow Us</h3>
//           <div className="mt-4 flex space-x-4">
//             <a href="#"><Facebook className="h-6 w-6 hover:text-white" /></a>
//             <a href="#"><Twitter className="h-6 w-6 hover:text-white" /></a>
//             <a href="#"><Linkedin className="h-6 w-6 hover:text-white" /></a>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
//         © 2024 Consulting Agency. All rights reserved.
//       </div>
//     </div>
//   </footer>
// );

// export default function App() {
//   return (
//     <div className="font-sans antialiased text-gray-900">
//       <Navbar />
//       <Hero />
//       <Services />
//       <About />
//       <section id="contact" className="py-20 bg-white">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//               Get in Touch
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               Ready to take your business to the next level? Contact us today.
//             </p>
//           </div>
//           <form className="mt-12 space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 rows="4"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Deliver from "./components/Deliver";
import Solutions from "./components/Solution";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Deliver />
      <ContactUs/>
      <Solutions />
      <Footer />
    </div>
  );
}
