import React from "react";
import diny2 from "../assets/diny2.jpg";

const ContactUs = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative w-full h-60 sm:h-72 md:h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-20fc1f9d4b1e?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white relative z-10 drop-shadow-lg text-center px-4">
          Contact FolksFurniture
        </h1>
      </section>

      {/* Contact Form Section */}
      <section
        className="relative w-full py-14 md:py-20 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${diny2})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Form Container */}
        <div className="relative z-10 w-[90%] sm:w-[80%] md:max-w-xl bg-gray-600/90 rounded-lg shadow-lg p-6 md:p-8">

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
            Get in Touch
          </h2>

          <p className="text-center text-white mb-6 md:mb-8 text-sm md:text-base">
            If you have any questions or need assistance, feel free to reach out to us
          </p>

          <form className="space-y-5 md:space-y-6">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-white font-medium mb-2 text-sm md:text-base"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-white font-medium mb-2 text-sm md:text-base"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-white font-medium mb-2 text-sm md:text-base"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 md:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            {/* Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="bg-white text-gray-600 font-semibold px-6 py-2 md:py-3 rounded-lg hover:bg-blue-700 hover:text-white transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-700 py-10 md:py-12 mb-4">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3 md:space-y-4">

          <h3 className="text-xl md:text-2xl font-bold text-white">
            Our Contact Info
          </h3>

          <p className="text-white text-sm md:text-base">
            Email: folksfurniture@gmail.com
          </p>

          <p className="text-white text-sm md:text-base">
            Phone: +234 703 445 9435
          </p>

          <p className="text-white text-sm md:text-base">
            Address: 7, Imam Yakubu Street, Sangotedo, Aja, Lagos, Nigeria
          </p>

        </div>
      </section>

    </div>
  );
};

export default ContactUs;