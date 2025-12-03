import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {  toast } from "react-toastify";


const Contact = () => {

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Logic to send data to backend would go here
    
    // Show success toast
    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset the form
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">


      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
        
        {/* --- LEFT SIDE: Contact Info (Dark/Gradient) --- */}
        <div className="relative bg-gray-900 p-10 md:p-16 flex flex-col justify-between overflow-hidden text-white">
          
          {/* Decorative Blobs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's craft something <br/> <span className="text-indigo-400">amazing.</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-sm">
              Whether you're a parent, a maker, or just curious—we'd love to hear your story.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Call Us</h3>
                  <p className="text-gray-400">+880 123-456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Email Us</h3>
                  <p className="text-gray-400">hello@toytopia.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Visit HQ</h3>
                  <p className="text-gray-400">Mirpur, Dhaka-12, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="relative z-10 flex gap-4 mt-12">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: Form (Clean White) --- */}
        <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
          <form onSubmit={handleSendMessage} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">First Name</label>
                <input required type="text" className="w-full border-b-2 border-gray-200 py-3 text-gray-900 focus:outline-none focus:border-indigo-600 transition-colors bg-transparent placeholder-transparent" placeholder="John" />
              </div>
              <div className="relative">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Last Name</label>
                <input required type="text" className="w-full border-b-2 border-gray-200 py-3 text-gray-900 focus:outline-none focus:border-indigo-600 transition-colors bg-transparent" placeholder="Doe" />
              </div>
            </div>

            <div className="relative">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Email Address</label>
              <input required type="email" className="w-full border-b-2 border-gray-200 py-3 text-gray-900 focus:outline-none focus:border-indigo-600 transition-colors bg-transparent" placeholder="john@example.com" />
            </div>

            <div className="relative">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Select Topic</label>
              <select className="w-full border-b-2 border-gray-200 py-3 text-gray-900 focus:outline-none focus:border-indigo-600 transition-colors bg-transparent">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Become a Seller</option>
              </select>
            </div>

            <div className="relative">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
              <textarea required rows="4" className="w-full border-2 border-gray-100 rounded-xl p-4 text-gray-900 focus:outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 transition-all bg-gray-50" placeholder="Tell us what's on your mind..."></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white font-bold text-lg py-4 rounded-xl shadow-xl hover:bg-indigo-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;