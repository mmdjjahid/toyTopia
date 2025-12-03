import React, { useEffect } from "react";
import { FaStar, FaStore, FaEnvelope, FaBoxOpen, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const CardInfo = ({ toyFind }) => {
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toyFind;

  // Handle Page Title Side Effect properly
  useEffect(() => {
    document.title = `Kids Toy: ${toyName}`;
  }, [toyName]);

  const handleTryNow = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    toast.success(`Success! Inquiry sent to ${name} (${email})`);
    e.target.reset(); // Clear form after submit
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-11/12 mx-auto">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          
          {/* --- LEFT COLUMN: Image & Details (Spans 2 columns on large screens) --- */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Image Container */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 group">
              <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={pictureURL}
                  alt={toyName}
                />
                {/* Category Badge Floating */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-indigo-600 font-bold rounded-full shadow-sm text-sm uppercase tracking-wider">
                    {subCategory}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {toyName}
                </h1>
                <div className="mt-4 md:mt-0 flex items-center bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                  <FaStar className="text-yellow-400 text-xl mr-2" />
                  <span className="text-lg font-bold text-gray-800">{rating}</span>
                  <span className="text-gray-400 text-sm ml-1">/ 5.0</span>
                </div>
              </div>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-4xl font-bold text-green-600">${price}</span>
                <span className="text-gray-400 mb-1 font-medium">USD</span>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm text-indigo-500"><FaStore /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Seller</p>
                    <p className="font-medium">{sellerName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm text-indigo-500"><FaEnvelope /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Contact</p>
                    <p className="font-medium truncate max-w-[150px]">{sellerEmail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm text-indigo-500"><FaBoxOpen /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Stock</p>
                    <p className="font-medium">{availableQuantity} units available</p>
                  </div>
                </div>
                 <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm text-green-500"><FaCheckCircle /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Status</p>
                    <p className="font-medium text-green-600">Verified Listing</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-8 text-lg">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Sidebar Form (Spans 1 column) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl shadow-xl border border-indigo-50 p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Interested?</h3>
                  <p className="text-gray-500 mt-2 text-sm">Fill out the form to contact the seller directly.</p>
                </div>

                <form onSubmit={handleTryNow} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
                    <input
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 bg-gray-900 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform active:scale-95"
                    >
                      <FaPaperPlane className="text-sm" /> Send Inquiry
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      By clicking send, you agree to our Terms of Service.
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardInfo;