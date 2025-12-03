import React from "react";
import { Link } from "react-router";

const ProductGrid = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden flex flex-col">
      {/* Image Container with Zoom Effect */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <img
          src={product.pictureURL}
          alt={product.toyName}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Floating Category Badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {product.subCategory}
        </span>
        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
            {product.toyName}
          </h3>
          {/* Line Clamp limits description to 2 lines */}
          <p className="text-gray-500 text-sm line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        {/* Footer: Price and Action Button */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-400 block">Price</span>
            <span className="text-2xl font-extrabold text-gray-900">
              ${product.price}
            </span>
          </div>

          <Link to={`/toy/${product.toyId}`} className="bg-gray-900 text-white p-3 rounded-xl hover:bg-indigo-600 shadow-md hover:shadow-lg transition-all duration-300 active:scale-95">
            View Details
          </Link>
        </div>
      </div>
    </div>
    // --- STYLISH CARD END ---
  );
};

export default ProductGrid;
