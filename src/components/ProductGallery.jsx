import React from "react";

function ProductGallery() {
  const products = [
    {
      id: 1,
      name: "Luxury Sofa",
      price: "$500",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    },
    {
      id: 2,
      name: "Wooden Chair",
      price: "$120",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    },
    {
      id: 3,
      name: "Dining Table",
      price: "$700",
      image: "https://images.unsplash.com/photo-1616627450039-1d75e3a7f3c2",
    },
    {
      id: 4,
      name: "Office Desk",
      price: "$350",
      image: "https://images.unsplash.com/photo-1582582494700-50f90b5e5f1b",
    },
    {
      id: 5,
      name: "Bed Frame",
      price: "$600",
      image: "https://images.unsplash.com/photo-1582582185786-f0de0d9fce30",
    },
    {
      id: 6,
      name: "Wardrobe",
      price: "$450",
      image: "https://images.unsplash.com/photo-1598300057991-80509ab1de4b",
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;