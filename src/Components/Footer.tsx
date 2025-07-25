// components/Footer.tsx

import React from "react";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 pt-30 pb-30 py-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">Contact</h3>
          <p className="text-sm">📧 info@example.com</p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-blue-900">About</h3>
          <p className="text-sm">Our mission is to connect people and causes.</p>
        </div>

        {/* Social Media Section */}
        <div className="flex items-end">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-900 hover:text-blue-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
