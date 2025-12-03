import React from "react";

const WhyUs = () => {
  return (
    <div className="relative py-24 px-4 md:px-12 bg-white overflow-hidden">
      

      <div className="relative z-10 w-11/12 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-wider uppercase text-sm">
            Our Promise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
              Local Toys?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            ToyTopia believes in the magic of handmade. Our toys are built with
            love, safety, and endless imagination by creators who care.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1: Handmade Quality */}
          <div
            data-aos="fade-up"
            className="group bg-white p-8 rounded-[2rem] border border-pink-100 shadow-xl shadow-pink-100/50 hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
              Handmade Quality
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Crafted with precision by skilled artisans. We ensure a unique and
              durable play experience that mass-produced brands simply can’t
              replicate.
            </p>
          </div>

          {/* Card 2: Eco & Kid Safe */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group bg-white p-8 rounded-[2rem] border border-green-100 shadow-xl shadow-green-100/50 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors">
              Eco & Kid Safe
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Non-toxic, planet-friendly materials are our priority. Every
              single product meets strict safety standards to protect both your
              kids and their future.
            </p>
          </div>

          {/* Card 3: Support Local */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group bg-white p-8 rounded-[2rem] border border-amber-100 shadow-xl shadow-amber-100/50 hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-600 transition-colors">
              Support Local Makers
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Every purchase fuels a dream. Help sustain small businesses,
              support local families, and encourage creative innovation right in
              your community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
