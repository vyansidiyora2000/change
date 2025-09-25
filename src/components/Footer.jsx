import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3B0CA3] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-2">Change Architects Inc.</h3>
          <p className="text-gray-200">
            Enabling the future of care through human-centric digital transformation.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-2">Services</h3>
          <ul className="text-gray-200 space-y-1">
            <li>Business Transformation</li>
            <li>Specialized Operations</li>
            <li>Digital Enablement</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-xl font-bold mb-2">Industries</h3>
          <ul className="text-gray-200 space-y-1">
            <li>Life Sciences</li>
            <li>Healthcare</li>
            <li>Pharmaceuticals</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-300 text-sm border-t border-white/20 pt-6">
        © 2025 Change Architects Inc. All rights reserved. | Confidential
      </div>
    </footer>
  );
};

export default Footer;
