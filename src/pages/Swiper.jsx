import React, { useState, useEffect } from 'react'

const WBSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      img: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bnnrsdmn/image/1472x600/ca5f1c40-49aa-439f-83dc-02c8f3b04b5e.webp'
    },
    {
      img: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bnnrsdmn/image/1472x600/61531b57-f93d-4ac8-8928-82d1902d7dec.webp'
    },
    {
      img: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bnnrsdmn/image/1472x600/17300ea8-4f15-43ff-895f-caae15a5bbc0.webp'
    },
    {
      img: 'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bnnrsdmn/image/1472x600/bc7a8119-2a10-4a97-9e34-464f15166e15.webp'
    }
  ];

  // Auto-play swiper
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="w-full bg-white py-4">
      <div className="container mx-auto px-4">
        {/* Main Swiper */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
            {images.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentSlide
                    ? 'opacity-100 translate-x-0 z-10'
                    : index < currentSlide
                      ? 'opacity-0 -translate-x-full z-0'
                      : 'opacity-0 translate-x-full z-0'
                  }`}
              >
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide
                    ? 'w-6 sm:w-8 h-2 bg-purple-600'
                    : 'w-2 h-2 bg-white/60 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation - Yonma-yon joylashgan rasmlar */}
        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-[16/6] rounded-lg overflow-hidden transition-all duration-300 ${index === currentSlide
                  ? 'ring-2 sm:ring-4 ring-purple-600 scale-105 shadow-lg'
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
            >
              <img
                src={slide.img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === currentSlide && (
                <div className="absolute inset-0 bg-purple-600/20" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WBSwiper;