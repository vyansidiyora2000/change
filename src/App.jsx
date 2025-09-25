
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";

import Solutions from "./components/Solution";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ServicesGrid from "./components/ServicesGrid";
import Principal from "./components/Principal";
import TrustedSection from "./components/TrustedSection";
export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
    
      <ServicesGrid />
      <TrustedSection />
       
      <Principal/>
      <Team />
    
     
      <Solutions />
      <ContactUs />
       <About />
      <Footer />
    </div>
  );
}
