import React from "react";
import office from "../assets/office.webp";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section with Fullscreen Background */}
      <section
        className="relative w-full h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${office})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-white relative z-10 drop-shadow-lg text-center px-4">
          About FolksFurniture
        </h1>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center space-y-6 bg-gray-600 rounded-xl p-3">
          <h2 className="text-3xl font-bold text-white">Who We Are</h2>
          <p className="text-white text-lg">
            Welcome to <span className="font-semibold text-blue-600">FolksFurniture</span>. We are passionate about providing high-quality, stylish, and affordable furniture for your home and office. Our team is dedicated to creating a perfect blend of comfort, elegance, and durability in every product we offer.
          </p>
          <p className="text-white text-lg">
            Our mission is to transform your spaces into beautiful, functional, and welcoming environments. We believe that furniture is not just about utility, but also about creating a vibe that inspires and enhances your everyday life.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-600 p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">Our Mission</h3>
              <p className="text-white">
                To deliver high-quality furniture that combines style, comfort, and affordability for every home and office.
              </p>
            </div>
            <div className="bg-gray-600 p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">Our Vision</h3>
              <p className="text-white">
                To be the most trusted furniture brand known for elegance, innovation, and exceptional customer experience.
              </p>
            </div>
            <div className="bg-gray-600 p-8 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">Our Values</h3>
              <p className="text-white">
                Quality, Integrity, Customer Satisfaction, and Sustainability in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-600 rounded-2xl py-16 text-white text-center shadow-lg mx-auto w-full md:w-3/4 px-6 my-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-600">Ready to Furnish Your Space?</h2>
        <p className="mb-6 text-lg md:text-2xl">
          Explore our exclusive collection of furniture and transform your home or office today.
        </p>
        <a
          href="/productgallery"
          className="bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </a>
      </section>
    </div>
  );
};

export default AboutUs;