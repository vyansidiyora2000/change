import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/sharp_logo-removebg-preview.png"; // 👈 import your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
  { name: "About", href: "#about" },           // works
  { name: "Team", href: "#principal" },       // goes to Principal
  { name: "Deliver", href: "#team" },         // goes to Team
  { name: "Services", href: "#services"} // goes to ServicesGrid
];


  return (
    <nav className="sticky top-0 w-full text-white shadow-lg z-50">
      {/* Gradient background matching Hero */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2B0A66] to-[#3B0CA3]"></div>
      <div className="absolute inset-0 -z-0 bg-purple-900/20"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Change Architects Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Change Architects Inc.
          </h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-sky-200 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 text-white relative z-10 bg-gradient-to-br from-[#2B0A66] to-[#3B0CA3]/95">
          <ul className="flex flex-col space-y-4 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-sky-200 transition-colors duration-200 block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
