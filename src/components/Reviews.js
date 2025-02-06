import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    quote: "Amazing service! The staff is incredibly friendly and helpful.",
    name: "John Doe"
  },
  {
    quote: "Very professional and great selection of medications.",
    name: "Emily Smith"
  },
  {
    quote: "Fast and efficient service, I highly recommend this pharmacy.",
    name: "Michael Brown"
  },
  {
    quote: "They always have what I need. Customer service is top-notch!",
    name: "Sarah Wilson"
  }
];

const Reviews = () => {
  return (
    <div className="w-full py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Reviews</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="w-full max-w-2xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 shadow-md rounded-lg text-center">
              <p className="text-lg italic text-gray-700 mb-4">“{review.quote}”</p>
              <h3 className="text-md font-semibold text-gray-900">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
