import React from "react";
import { Link } from "react-router"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Toys", path: "/toys" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white font-sans relative">
      
      {/* Decorative Top Border Gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* --- Column 1: Brand Info --- */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              {/* Optional Logo Icon */}
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-xl font-bold group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                T
              </div>
              <span className="text-2xl font-bold tracking-tight">ToyTopia</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Curating joy for the next generation. Sustainable, handmade, and educational toys designed to spark imagination.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* --- Column 2: Quick Links (Your Specific Links) --- */}
          <div className="md:pl-10">
            <h3 className="text-lg font-bold mb-6 text-indigo-400">Explore</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Newsletter --- */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-indigo-400">Stay in the loop</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Join 5,000+ parents getting the latest toy drops and creative play ideas.
            </p>
            
          </div>

        </div>

        {/* --- Bottom Copyright --- */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;