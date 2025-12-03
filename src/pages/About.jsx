import React from "react";
import { FaShapes, FaLightbulb, FaHandsHelping, FaQuoteRight, FaGlobe, FaCogs, FaChild } from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      
      {/* --- SECTION 1: GIANT TYPOGRAPHIC HEADER --- */}
      <div className="relative bg-gradient-to-br from-indigo-800 to-purple-900 py-24 md:py-40 text-white overflow-hidden">
        {/* Abstract Geometric Overlay */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ 
          backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(0,0,0,.1) 50%), linear-gradient(180deg, transparent 50%, rgba(0,0,0,.1) 50%)',
          backgroundSize: '100px 100px'
        }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-indigo-300 font-bold tracking-widest uppercase text-sm mb-8">
            Our Core Vision
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold leading-tight tracking-tighter">
            Play. Create. <span className="text-indigo-400 italic">Inspire.</span>
          </h1>
          <p className="text-xl md:text-2xl text-indigo-200 mt-10 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to fostering limitless imagination through thoughtfully 
            designed, impactful play experiences.
          </p>
        </div>
      </div>

      {/* --- SECTION 2: VALUES GRID (Icon-focused) --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 group">
            <div className="mx-auto bg-indigo-50 w-20 h-20 rounded-full flex items-center justify-center text-indigo-600 mb-6 text-4xl group-hover:scale-110 transition-transform">
              <FaLightbulb />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Innovation in Play</h3>
            <p className="text-gray-600 leading-relaxed">
              We constantly seek out novel approaches to learning and development,
              integrating modern insights with timeless play principles.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 group">
            <div className="mx-auto bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center text-purple-600 mb-6 text-4xl group-hover:scale-110 transition-transform">
              <FaHandsHelping />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Community & Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Fostering a network of local makers and empowering parents with resources
              for enriched family engagement.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300 group">
            <div className="mx-auto bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center text-pink-600 mb-6 text-4xl group-hover:scale-110 transition-transform">
              <FaShapes />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">Form & Function</h3>
            <p className="text-gray-600 leading-relaxed">
              Prioritizing elegant design, durable materials, and intuitive usability
              in every product we offer.
            </p>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: PULL QUOTE / BRAND STATEMENT --- */}
      <div className="bg-gradient-to-r from-gray-100 to-white py-20 px-6 border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <FaQuoteRight className="text-6xl text-gray-300 mb-8 mx-auto transform rotate-180" />
          <p className="text-3xl md:text-4xl font-serif font-medium leading-snug text-gray-800 italic">
            "We are not just selling toys; we are investing in the architects of tomorrow. 
            Every choice, every material, every design serves a singular purpose: 
            to empower young minds."
          </p>
          <p className="text-lg font-bold text-gray-700 mt-10">— ToyTopia Leadership Team</p>
        </div>
      </div>

      {/* --- SECTION 4: KEY METRICS (Abstract Visuals) --- */}
      <div className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          <div className="p-8 border-l-4 border-indigo-500 rounded-lg bg-white shadow-md">
            <div className="text-6xl font-extrabold text-indigo-600 mb-3">5K+</div>
            <p className="text-gray-600 text-lg">Products Curated</p>
            <div className="w-16 h-1 bg-indigo-200 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="p-8 border-l-4 border-purple-500 rounded-lg bg-white shadow-md">
            <div className="text-6xl font-extrabold text-purple-600 mb-3">200+</div>
            <p className="text-gray-600 text-lg">Makers Supported</p>
            <div className="w-16 h-1 bg-purple-200 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="p-8 border-l-4 border-pink-500 rounded-lg bg-white shadow-md">
            <div className="text-6xl font-extrabold text-pink-600 mb-3">300K+</div>
            <p className="text-gray-600 text-lg">Joyful Moments</p>
            <div className="w-16 h-1 bg-pink-200 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* --- SECTION 5: "HOW WE WORK" (Process Flow with Icons) --- */}
      <div className="bg-indigo-900 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-200">Our Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative pb-10 md:pb-0">
              <div className="bg-indigo-700 w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 border-4 border-indigo-500 shadow-xl">
                <FaGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-100">Discover</h3>
              <p className="text-indigo-200 leading-relaxed max-w-xs">
                We seek out unique, high-quality, and ethically made toys from independent creators globally.
              </p>
              <div className="absolute bottom-0 md:bottom-auto md:top-1/2 md:right-0 w-full h-0.5 md:w-full md:h-0.5 bg-indigo-700 md:translate-x-[calc(100%+24px)] hidden md:block"></div> {/* Connector line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-indigo-700 md:hidden"></div> {/* Mobile connector */}
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative pb-10 md:pb-0 pt-10 md:pt-0">
              <div className="bg-purple-700 w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 border-4 border-purple-500 shadow-xl">
                <FaCogs />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-100">Refine</h3>
              <p className="text-purple-200 leading-relaxed max-w-xs">
                Each product undergoes rigorous testing for safety, durability, and play value, ensuring excellence.
              </p>
              <div className="absolute bottom-0 md:bottom-auto md:top-1/2 md:right-0 w-full h-0.5 md:w-full md:h-0.5 bg-purple-700 md:translate-x-[calc(100%+24px)] hidden md:block"></div> {/* Connector line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-purple-700 md:hidden"></div> {/* Mobile connector */}
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative pt-10 md:pt-0">
              <div className="bg-pink-700 w-24 h-24 rounded-full flex items-center justify-center text-5xl mb-6 border-4 border-pink-500 shadow-xl">
                <FaChild />
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-100">Deliver Joy</h3>
              <p className="text-pink-200 leading-relaxed max-w-xs">
                We connect these exceptional toys with families, fostering learning, creativity, and happiness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 6: CTA --- */}
      <div className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          Ready for a new kind of play?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Explore our handpicked collection and discover toys that truly make a difference.
        </p>
        <Link to={'/toys'} className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105">
          Browse Collection
        </Link>
      </div>

    </div>
  );
};

export default About;