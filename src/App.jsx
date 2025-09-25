
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Deliver from "./components/Deliver";
import Solutions from "./components/Solution";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ServicesGrid from "./components/ServicesGrid";
import Principal from "./components/Principal";
export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <ServicesGrid />
      <Principal/>
      <Team />
      <Deliver />
      
      <Solutions />
      <ContactUs />
      <Footer />
    </div>
  );
}
