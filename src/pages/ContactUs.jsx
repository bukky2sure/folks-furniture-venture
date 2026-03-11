import React from "react";
import diny2 from "../assets/diny2.jpg";

const ContactUs = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative w-full h-80 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581090700227-20fc1f9d4b1e?auto=format&fit=crop&w=1950&q=80')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 drop-shadow-lg text-center px-4">
          Contact FolksFurniture
        </h1>
      </section>

      {/* Contact Form Section with Background Image */}
      <section
        className="relative w-full py-20 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${diny2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Form Container */}
        <div className="relative z-10 max-w-xl w-full bg-gray-600 bg-opacity-90 rounded-lg shadow-lg p-8 mx-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">Get in Touch</h2>
          <p className="text-center text-white mb-8">
            If you have any questions or need assistance, feel free to reach out to us
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-gray-500 font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-700 py-12 mb-4">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold text-white">Our Contact Info</h3>
          <p className="text-white">Email: folksfurniture@gmail.com</p>
          <p className="text-white">Phone: +234 703 445 9435</p>
          <p className="text-white">Address: 7, Imam Yakubu Street, Sangotedo, Aja, Lagos, Nigeria</p>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;