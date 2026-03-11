import React from "react";

import bed from "../assets/bed.webp";
import bed1 from "../assets/bed1.webp";
import chair2 from "../assets/chair2.webp";
import chair3 from "../assets/chair3.webp";
import chair5 from "../assets/chair5.jpg";
import chair6 from "../assets/chair6.webp";
import chair7 from "../assets/chair7.webp";
import cup1 from "../assets/cup1.jpg";
import cup2 from "../assets/cup2.jpg";
import cup3 from "../assets/cup3.jpg";
import diny1 from "../assets/diny1.webp";
import diny2 from "../assets/diny2.jpg";
import office from "../assets/office.webp";
import office2 from "../assets/office2.webp";


function ProductGallery() {
  const products = [
    {
      id: 1,
      name: "Luxury Sofa",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      name: "Modern Chair",
      image: chair6,
    },
    {
      id: 3,
      name: "Classic Bed",
      image: bed,
    },
    {
      id: 4,
      name: "Premium Bed Frame",
      image: bed1,
    },
    {
      id: 5,
      name: "Comfort Chair",
      image: chair2,
    },
    {
      id: 6,
      name: "Wooden Chair",
      image: chair3,
    },
    {
      id: 7,
      name: "Luxury Chair",
      image: chair5,
    },
    {
      id: 8,
      name: "Modern Chair",
      image: chair7,
    },
    {
      id: 9,
      name: "Classic Bed",
      image: cup1,
    },
    {
      id: 10,
      name: "Premium Bed Frame",
      image: cup2,
    },
    {
      id: 11,
      name: "Comfort Chair",
      image: cup3,
    },
    {
      id: 12,
      name: "Wooden Chair",
      image: diny1,
    },
    {
      id: 13,
      name: "Luxury Chair",
      image: diny2,
    },
    {
      id: 14,
      name: "Luxury Chair",
      image: office,
    },
    {
      id: 15,
      name: "Luxury Chair",
      image: office2,
    },
   
  ];

  return (
    <div className="p-10">
      {" "}
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
