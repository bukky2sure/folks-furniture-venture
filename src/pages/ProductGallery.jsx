import React from "react";
import { Link } from "react-router-dom";

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

// ✅ Export products array so ProductDetail can use it
export const products = [
  { id: 1, name: "Modern Chair", image: bed, price: "₦700,000", description: "Comfortable luxury sofa." },
  { id: 2, name: "Luxury Chair", image: chair6, price: "₦400,000", description: "Stylish modern chair." },
  { id: 3, name: "Classic Bed", image: bed, price: "₦300,000", description: "Elegant classic bed." },
  { id: 4, name: "Premium Bed Frame", image: bed1, price: "₦350,000", description: "Sturdy premium bed frame." },
  { id: 5, name: "Comfort Chair", image: chair2, price: "₦450,000", description: "Ergonomic comfort chair." },
  { id: 6, name: "Wooden Chair", image: chair3, price: "₦700,000", description: "Durable wooden chair." },
  { id: 7, name: "Luxury Stylish Chair", image: chair5, price: "₦750,000", description: "Luxury design chair." },
  { id: 8, name: "Modern Chair", image: chair7, price: "₦600,000", description: "Sleek modern chair." },
  { id: 9, name: "Classic Wardrobe", image: cup1, price: "₦350,000", description: "Spacious classic wardrobe." },
  { id: 10, name: "Stylish Wardrobe", image: cup2, price: "₦350,000", description: "Stylish storage wardrobe." },
  { id: 11, name: "Stylish Kitchen Wardrobe", image: cup3, price: "₦300,000", description: "Kitchen wardrobe organizer." },
  { id: 12, name: "Wooden Dining Table Chair", image: diny1, price: "₦400,000", description: "Dining table with chairs set." },
  { id: 13, name: "Luxury Dining Table Chair", image: diny2, price: "₦450,000", description: "Luxury dining table set." },
  { id: 14, name: "Luxury Office Chair and Table", image: office, price: "₦650,000", description: "Modern office setup." },
  { id: 15, name: "Beautiful Office Chair and Table", image: office2, price: "₦450,000", description: "Elegant office furniture." },
];

function ProductGallery() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 block"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;