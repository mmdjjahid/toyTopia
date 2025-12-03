import React, { useState } from "react";
import { Link } from "react-router"; 
import { toast } from "react-toastify"; 
import { 
  FaSearch, 
  FaBoxOpen, 
  FaUndo, 
  FaShippingFast, 
  FaUserShield, 
  FaChevronDown, 
  FaChevronUp, 
  FaHeadset, 
  FaEnvelope 
} from "react-icons/fa";

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  const handleChat = () => {
    toast.info("Connecting to a live agent...");
  };

  // Mapped categories to actual routes in your app
  const categories = [
    { 
      icon: FaBoxOpen, 
      title: "Orders & Tracking", 
      desc: "Track, modify, or cancel an order.", 
      color: "text-blue-500", 
      bg: "bg-blue-50",
      link: "/my-orders" 
    },
    { 
      icon: FaUndo, 
      title: "Returns & Refunds", 
      desc: "Start a return or check status.", 
      color: "text-orange-500", 
      bg: "bg-orange-50",
      link: "/toyreturn" 
    },
    { 
      icon: FaShippingFast, 
      title: "Shipping & Delivery", 
      desc: "Delivery times and costs.", 
      color: "text-green-500", 
      bg: "bg-green-50",
      link: "/shipping" // You can create this page later
    },
    { 
      icon: FaUserShield, 
      title: "Account & Security", 
      desc: "Manage password and payments.", 
      color: "text-purple-500", 
      bg: "bg-purple-50",
      link: "/profile" 
    },
  ];

  const faqs = [
    { question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout." },
    { question: "Are your toys non-toxic?", answer: "Yes! Safety is our #1 priority. All our toys meet or exceed ASTM F963 safety standards and are BPA/Phthalate free." },
    { question: "What is your return policy?", answer: "We offer a 30-day happiness guarantee. If the toy is unopened, you can return it for a full refund. We also cover return shipping on defective items." },
    { question: "Can I cancel my order?", answer: "Orders can be cancelled within 1 hour of placement via your 'My Orders' dashboard. After that, they enter our processing queue." },
    { question: "Do you offer gift wrapping?", answer: "Absolutely! You can select gift wrapping and add a personalized note at checkout for a small fee." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <div className="bg-indigo-700 py-20 px-4 text-center relative overflow-hidden">
        {/* Decorative Background Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-indigo-200 font-bold tracking-wider uppercase text-sm mb-4 block">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">How can we help you today?</h1>
          
       
        </div>
      </div>

      {/* --- CATEGORY GRID (Now using Link) --- */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              to={cat.link} 
              key={idx} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer border border-gray-100 group block"
            >
              <div className={`w-14 h-14 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                <cat.icon />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
              <p className="text-sm text-gray-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2">Quick answers to common questions.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <span className={`font-bold text-lg ${openFaq === index ? "text-indigo-600" : "text-gray-700"}`}>
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <FaChevronUp className="text-indigo-600" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out ${
                  openFaq === index ? "max-h-40 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- STILL NEED HELP CTA --- */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            <FaHeadset />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Our support team is available Mon-Fri, 9am to 6pm EST. We usually respond within 2 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Functional Chat Button */}
            <button 
              onClick={handleChat}
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 active:scale-95"
            >
               Chat with us
            </button>
            
            {/* Functional Email Link */}
            <a 
              href="mailto:support@toytopia.com"
              className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold hover:border-indigo-600 hover:text-indigo-600 transition-colors active:scale-95"
            >
              <FaEnvelope /> Email Support
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Support;