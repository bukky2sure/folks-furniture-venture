import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="pr-8 text-sm md:text-base">
              Folks Furniture Venture is a leading furniture company providing
              high-quality furniture for homes and offices. Our mission is to
              deliver stylish, durable, and affordable furniture to our
              customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
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
                  ProductGallery
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-sm md:text-base">
              Email: info@folksfurniture.com
            </p>
            <p className="text-sm md:text-base">Phone: +234 703 445 9435</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-2"></div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base">
            &copy; 2025 Folks Furniture Venture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
