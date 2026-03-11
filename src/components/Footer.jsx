import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

          {/* About Us Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm md:text-base leading-relaxed">
              Folks Furniture Venture is a leading furniture company providing
              high-quality furniture for homes and offices. Our mission is to
              deliver stylish, durable, and affordable furniture to our
              customers. We strive to create comfortable and elegant spaces for
              everyone.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home Page
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="hover:underline">
                  Product Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-sm md:text-base">Email: folksfurniture@gmail.com</p>
            <p className="text-sm md:text-base">Phone: +234 703 445 9435</p>
            <p className="text-sm md:text-base">Address: 7, Imam Yakubu Street, Sangotedo, Aja, Lagos, Nigeria</p>

            {/* Social Icons Placeholder */}
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 text-center border-t border-gray-700 pt-6 text-sm md:text-base">
          &copy; 2025 Folks Furniture Venture. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;