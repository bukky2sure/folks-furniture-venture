import React from "react";
import { Link } from "react-router-dom";
import { products } from "./ProductGallery";

import chair2 from "../assets/chair2.webp";
import chair7 from "../assets/chair7.webp";
import chair5 from "../assets/chair5.jpg";
import chair6 from "../assets/chair6.webp";
import bed1 from "../assets/bed1.webp";
import cup3 from "../assets/cup3.jpg";
import diny1 from "../assets/diny1.webp";

const Home = () => {

  const categories = [
    {
      img: chair7,
      title: "Modern Chair",
      desc: "Comfortable and stylish Chair.",
      product: products.find((p) => p.image === chair7),
    },
    {
      img: chair5,
      title: "Stylish Sets of Sofas",
      desc: "Stylish sofas, coffee tables, and more.",
      product: products.find((p) => p.image === chair5),
    },
    {
      img: chair6,
      title: "Office Furniture",
      desc: "Ergonomic desks, chairs, and office essentials.",
      product: products.find((p) => p.image === chair6),
    },
    {
      img: bed1,
      title: "Bedroom Sets",
      desc: "Comfortable and stylish bedroom furniture.",
      product: products.find((p) => p.image === bed1),
    },
    {
      img: cup3,
      title: "Kitchen Wardrobe",
      desc: "Stylish Kitchen Wardrobe",
      product: products.find((p) => p.image === cup3),
    },
    {
      img: diny1,
      title: "Beautiful Set of Dining Table",
      desc: "Stylish set of dining table.",
      product: products.find((p) => p.image === diny1),
    },
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] md:h-screen flex items-center"
        style={{ backgroundImage: `url(${chair2})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="md:w-1/2 mx-auto">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Welcome to Folks Furniture Venture
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200 drop-shadow">
              Bringing comfort, style, and quality furniture for homes and offices.
            </p>

            <Link
              to="/productgallery"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Products
            </Link>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">
          Our Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.product ? `/products/${item.product.id}` : "/products"}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 block"
            >

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 sm:h-72 md:h-80 object-cover"
              />

              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg md:text-xl mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base">
                  {item.desc}
                </p>
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-12 md:py-16">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-gray-900">
            Why Choose Folks Furniture?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            <div className="bg-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-3xl font-semibold mb-2 text-blue-400">
                Premium Quality
              </h3>
              <p className="text-white text-base md:text-lg">
                We source durable materials to create long-lasting furniture.
              </p>
            </div>

            <div className="bg-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-3xl font-semibold mb-2 text-blue-400">
                Affordable Prices
              </h3>
              <p className="text-white text-base md:text-lg">
                Quality furniture without breaking the bank.
              </p>
            </div>

            <div className="bg-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl md:text-3xl font-semibold mb-2 text-blue-400">
                Modern Designs
              </h3>
              <p className="text-white text-base md:text-lg">
                Stylish pieces that fit any home or office interior.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gray-600 rounded-2xl mb-14 mx-auto w-[90%] md:w-[700px] py-12 md:py-16 text-white text-center shadow-lg px-6">

        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-blue-400">
          Ready to Furnish Your Home?
        </h2>

        <p className="mb-6 text-base md:text-2xl">
          Explore our exclusive collection and transform your space.
        </p>

        <Link
          to="/productgallery"
          className="bg-white text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Shop Now
        </Link>

      </section>

    </div>
  );
};

export default Home;