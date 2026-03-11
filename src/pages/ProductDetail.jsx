import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./ProductGallery";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="px-4 py-10 text-center">
        <h2 className="text-xl md:text-2xl font-bold">Product not found</h2>

        <Link
          to="/productgallery"
          className="text-blue-500 underline mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto">

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg mb-6"
      />

      {/* Product Name */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        {product.name}
      </h2>

      {/* Price */}
      <p className="text-lg md:text-xl text-gray-700 mb-4">
        {product.price}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base mb-6">
        {product.description}
      </p>

      {/* Back Button */}
      <Link
        to="/productgallery"
        className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
        Back to ProductGallery
      </Link>

    </div>
  );
}

export default ProductDetail;