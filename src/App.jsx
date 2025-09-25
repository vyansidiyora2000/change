
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";


import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ServicesGrid from "./components/ServicesGrid";
import Principal from "./components/Principal";
import TrustedSection from "./components/TrustedSection";
import PlatformsGrid from "./components/Platforms";
export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
     <About />
      
      <ServicesGrid />
    
         <Team />
              
      <TrustedSection />
      <Principal/>
      <PlatformsGrid/>    
     
   
      <ContactUs />
      
      <Footer />
    </div>
  );
}
