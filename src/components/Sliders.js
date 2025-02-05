import React, { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
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
    const goBack = current === 0;
    const prevSlide = goBack ? slides.length - 1 : current - 1;
    setCurrent(prevSlide);
  };

  const nextSlide = () => {
    const forward = current === slides.length - 1;
    const nextSlide = forward ? 0 : current + 1;
    setCurrent(nextSlide);
  };

  const dotSlides = (sushi) => {
    setCurrent(sushi);
  };

  return (
    <div className="bg-neutral-600">
      <div className="h-[600px] py-10 w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[current].src})` }}
          className="w-full h-full bg-contain bg-no-repeat bg-center duration-300"
        ></div>

        <div
          onClick={prevSlide}
          className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] text-white left-10"
        >
          <BsArrowLeftCircle size={30} />
        </div>

        <div
          onClick={nextSlide}
          className="cursor-pointer absolute transition-x-0 transition-y-[50%] top-[50%] text-white right-10"
        >
          <BsArrowRightCircle size={30} />
        </div>

        <div className="flex justify-center text-white my-2">
          {slides.map((slide, index) => (
            <div key={index} onClick={() => dotSlides(index)} className="text-2xl cursor-pointer">
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sliders;