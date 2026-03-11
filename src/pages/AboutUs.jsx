import React from "react";
import office from "../assets/office.webp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] md:h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${office})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white relative z-10 drop-shadow-lg text-center px-4">
          About FolksFurniture
        </h1>
      </section>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center space-y-6 bg-gray-600 rounded-xl p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Who We Are
          </h2>

          <p className="text-white text-base md:text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-blue-400">
              FolksFurniture
            </span>
            . We are passionate about providing high-quality, stylish, and
            affordable furniture for your home and office. Our team is dedicated
            to creating a perfect blend of comfort, elegance, and durability in
            every product we offer.
          </p>

          <p className="text-white text-base md:text-lg leading-relaxed">
            Our mission is to transform your spaces into beautiful, functional,
            and welcoming environments. We believe that furniture is not just
            about utility, but also about creating a vibe that inspires and
            enhances your everyday life.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">

            <div className="bg-gray-600 p-6 md:p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400">
                Our Mission
              </h3>
              <p className="text-white text-sm md:text-base">
                To deliver high-quality furniture that combines style,
                comfort, and affordability for every home and office.
              </p>
            </div>

            <div className="bg-gray-600 p-6 md:p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400">
                Our Vision
              </h3>
              <p className="text-white text-sm md:text-base">
                To be the most trusted furniture brand known for elegance,
                innovation, and exceptional customer experience.
              </p>
            </div>

            <div className="bg-gray-600 p-6 md:p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-400">
                Our Values
              </h3>
              <p className="text-white text-sm md:text-base">
                Quality, Integrity, Customer Satisfaction, and Sustainability
                in everything we do.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-600 rounded-2xl py-12 md:py-16 text-white text-center shadow-lg mx-auto w-[90%] md:w-3/4 px-6 my-12">

        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-blue-400">
          Ready to Furnish Your Space?
        </h2>

        <p className="mb-6 text-base md:text-xl">
          Explore our exclusive collection of furniture and transform your
          home or office today.
        </p>

        <Link
          to="/productgallery"
          className="inline-block bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>

      </section>

    </div>
  );
};

export default AboutUs;