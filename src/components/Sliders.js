import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Sliders = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      src: 'https://urgentcarelaguna.com/wp-content/uploads/2024/01/over-counter-medications.jpg',
    },
    {
      src: 'https://www.cnet.com/a/img/resize/7d3bb6a897a8e3d7bde0c2a737bb0891aadc7a8a/hub/2020/04/17/8e7dc813-03b2-4d3a-97b0-872d6f180440/gettyimages-464828560.jpg?auto=webp&width=1200',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsQfEm3FhRozg2DANqCLXqLG8L227eJuV2Q&s',
    },
  ];

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-gray-100 flex justify-center items-center py-10">
      <div className="relative w-full max-w-4xl h-[500px] rounded-lg overflow-hidden shadow-lg">
        
        {/* Slide Image */}
        <div
          style={{ backgroundImage: `url(${slides[current].src})` }}
          className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out"
        ></div>

        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <BsArrowLeftCircleFill size={20} />
        </button>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <BsArrowRightCircleFill size={20} />
        </button>

        {/* Dot Indicators - Back to Original Style */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {slides.map((_, index) => (
            <div 
              key={index} 
              onClick={() => setCurrent(index)} 
              className="text-lg text-white cursor-pointer"
            >
              <RxDotFilled className={current === index ? 'text-gray-100' : 'text-gray-400'} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sliders;
