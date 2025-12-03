import React from 'react';
import { FaQuoteRight, FaStar } from "react-icons/fa";
const Testimonials = () => {
    return (
        <div className="relative py-20 px-4 md:px-12 bg-gradient-to-b from-yellow-50/50 to-white overflow-hidden">
      
      {/* Decorative Background Elements (Optional dots/blobs) */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse animation-delay-2000"></div>

      <div className="w-11/12 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider uppercase text-xs bg-orange-100 px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-4 text-gray-900">
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Families</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            See what parents, teachers, and toy lovers are saying about their ToyTopia experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <div
            data-aos="fade-up"
            className="group relative bg-white p-8 rounded-3xl border border-yellow-100 shadow-xl shadow-yellow-100/50 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Watermark Quote Icon */}
            <div className="absolute top-6 right-8 text-yellow-50 text-6xl opacity-50 pointer-events-none group-hover:text-yellow-100 transition-colors">
              <FaQuoteRight />
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm mb-6 gap-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              {/* Quote Text */}
              <p className="text-gray-600 mb-8 leading-relaxed font-serif italic text-lg">
                “ToyTopia has become our family’s favorite! The toys are beautifully made and safe. 
                My kids love the wooden trains — it’s the perfect mix of fun and learning.”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src="https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg"
                  alt="Sophia Turner"
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-yellow-50 group-hover:ring-yellow-100 transition-all"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Sophia Turner</h3>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">Mom of 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="group relative bg-white p-8 rounded-3xl border border-yellow-100 shadow-xl shadow-yellow-100/50 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 transform hover:-translate-y-2"
          >
             <div className="absolute top-6 right-8 text-yellow-50 text-6xl opacity-50 pointer-events-none group-hover:text-yellow-100 transition-colors">
              <FaQuoteRight />
            </div>

            <div className="relative z-10">
              <div className="flex text-yellow-400 text-sm mb-6 gap-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed font-serif italic text-lg">
                “I love how easy it is to order from local sellers. The remote-control truck we got was 
                amazing — durable, fast, and fun for all ages.”
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/052/755/981/non_2x/a-man-profile-avatar-icon-with-a-white-background-free-vector.jpg"
                  alt="Michael Lee"
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-yellow-50 group-hover:ring-yellow-100 transition-all"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Michael Lee</h3>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">Dad & Techie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="group relative bg-white p-8 rounded-3xl border border-yellow-100 shadow-xl shadow-yellow-100/50 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300 transform hover:-translate-y-2"
          >
             <div className="absolute top-6 right-8 text-yellow-50 text-6xl opacity-50 pointer-events-none group-hover:text-yellow-100 transition-colors">
              <FaQuoteRight />
            </div>

            <div className="relative z-10">
              <div className="flex text-yellow-400 text-sm mb-6 gap-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed font-serif italic text-lg">
                “The educational toys are top-notch! My students and my own kids enjoy every piece. 
                I appreciate how ToyTopia highlights local craftsmanship.”
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src="https://img.freepik.com/premium-vector/vector-image-business-woman-shirt-suit_1213699-3043.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Emily Carter"
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-yellow-50 group-hover:ring-yellow-100 transition-all"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-base">Emily Carter</h3>
                  <p className="text-xs font-semibold text-orange-500 uppercase tracking-wide">Teacher</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Testimonials;