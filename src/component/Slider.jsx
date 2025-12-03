import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Link } from 'react-router';

const Slider = ({ toys }) => {

  if (!Array.isArray(toys) || toys.length <= 0) {
    return <div className="text-center p-10 text-gray-500">No toy data available</div>;
  }

  
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <div className="w-11/12 mx-auto relative px-4 py-8">
      <Swiper
        spaceBetween={30}
        effect={'fade'} 
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, 
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper h-[600px] w-full rounded-2xl shadow-2xl 
        [&_.swiper-button-next]:text-white [&_.swiper-button-next]:opacity-50 hover:[&_.swiper-button-next]:opacity-100 
        [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:opacity-50 hover:[&_.swiper-button-prev]:opacity-100
        [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:bg-orange-500"
      >
        {toys.map((toy) => (
          <SwiperSlide key={toy.toyId} className="relative bg-gray-900 overflow-hidden rounded-2xl">
            
            {/* Background Image */}
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>

            {/* Content Container */}
            <div className="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2 max-w-lg w-full z-10 p-4">
              
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-orange-500 rounded-full text-white shadow-md">
                {toy.subCategory}
              </span>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-lg">
                {toy.toyName}
              </h2>

              {/* Rating */}
              <div className="flex items-center mb-4 text-yellow-400">
                <span className="text-xl">{'★'.repeat(Math.floor(toy.rating))}</span>
                <span className="ml-2 text-sm text-gray-300 font-medium">({toy.rating})</span>
              </div>

              {/* Description */}
              <p className="text-gray-200 text-sm md:text-base mb-8 leading-relaxed line-clamp-3 md:line-clamp-4">
                {truncateText(toy.description, 200)}
              </p>

              {/* Price & Button */}
              <div className="flex items-center gap-6">
                <span className="text-3xl md:text-4xl font-bold text-green-400">
                  ${toy.price.toFixed(2)}
                </span>
                <Link to={`/toy/${toy.toyId}`} className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  View Details
                </Link>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;