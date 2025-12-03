import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { FaUndo, FaBoxOpen, FaEnvelope, FaPen, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const ToyReturn = () => {
  
  // Set page title properly
  useEffect(() => {
    document.title = "Kids Toy | Returns Center";
  }, []);

  const handleReturn = (e) => {
    e.preventDefault();
    // Simulate API call
    toast.success("Return request submitted! Check your email for the shipping label.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      
      {/* Main Card */}
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* --- LEFT SIDE: Visual & Policy Info --- */}
        <div className="md:w-5/12 bg-indigo-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
          
          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500 opacity-20 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors text-sm font-bold mb-8">
              <FaArrowLeft /> Back to Shop
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">Hassle-free <br/> Returns.</h1>
            <p className="text-indigo-200 text-lg mb-8">
              We're sorry it didn't work out. Don't worry, we'll make the return process smooth and easy.
            </p>

            {/* Policy Highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                <span className="font-medium">30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                <span className="font-medium">Free return shipping label</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-400" />
                <span className="font-medium">No questions asked</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12">
             <div className="w-full h-40 bg-indigo-800/50 rounded-2xl flex items-center justify-center border border-indigo-700">
                <FaUndo className="text-6xl text-indigo-400 opacity-50" />
             </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: The Form --- */}
        <div className="md:w-7/12 p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Start your return</h2>
            <p className="text-gray-500">Please fill in the details below to generate your return label.</p>
          </div>

          <form onSubmit={handleReturn} className="space-y-6">
            
            {/* Toy Name Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Item Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaBoxOpen />
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Lego Classic Bricks" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Order Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input 
                  type="email" 
                  required
                  placeholder="you@example.com" 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                />
              </div>
            </div>

            {/* Reason Textarea */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Reason for Return</label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none text-gray-400">
                  <FaPen />
                </div>
                <textarea 
                  required
                  rows="4"
                  placeholder="Tell us what went wrong..." 
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
            >
              Submit Request
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ToyReturn;