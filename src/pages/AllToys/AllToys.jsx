import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter, FaTimes, FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const AllToys = () => {
  const allToyInfo = useLoaderData();
  const [toys, setToys] = useState(allToyInfo);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  console.log(toys)
  console.log(allToyInfo)

  useEffect(() => {
    let filtered = allToyInfo.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortOption === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setToys(filtered);
  }, [searchQuery, sortOption, allToyInfo]);
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* --- HEADER BANNER --- */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Toy Collection
        </h1>
        <p className="text-purple-100 text-lg">
          Browse our curated list of happiness.
        </p>
      </div>

      <div className="w-11/12 mx-auto px-4 md:px-8 py-8">
        {/* --- TOP CONTROL BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search toys..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            {/* Sort Dropdown */}
            <select
              className="select select-bordered w-full md:w-auto rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by: Recommended</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>

          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative">
        

          {/* --- MAIN PRODUCT GRID --- */}
          <div className="flex-1">
            {toys.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400">
                  No toys found!
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filters.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {toys.map((toy) => (
                  /* --- TOY CARD --- */
                  <div
                    key={toy.toyId}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative"
                  >
                    {/* Image Area */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Floating Badge */}
                      <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-gray-800 shadow-sm">
                        {toy.subCategory}
                      </span>
                      {/* Wishlist Button */}
                      <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors transform translate-x-10 group-hover:translate-x-0">
                        <FaHeart />
                      </button>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-gray-800 text-lg mb-1 truncate group-hover:text-purple-600 transition-colors">
                        {toy.toyName}
                      </h3>

                      <div className="flex items-center gap-1 text-yellow-400 text-sm mb-4">
                        <FaStar />{" "}
                        <span className="text-gray-400 font-medium">
                          ({toy.rating})
                        </span>
                      </div>

                      {/* Price & Action */}
                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xl font-extrabold text-green-600">
                          ${toy.price}
                        </span>
                        <Link to={`/toy/${toy.toyId}`} className="bg-gray-900 text-white p-2.5 rounded-lg hover:bg-purple-600 transition-colors shadow-lg active:scale-95">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
