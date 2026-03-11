import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./ProductGallery";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-blue-500 underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-xl text-gray-700 mb-4">{product.price}</p>
      <p className="text-gray-600 mb-6">{product.description}</p>
      <Link
        to="/productgallery"
        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Back to ProductGallery
      </Link>
    </div>
  );
}

export default ProductDetail;