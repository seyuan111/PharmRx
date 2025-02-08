import React from 'react';
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={Medications} className="w-full h-full object-cover" alt="Medications" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center text-white px-6 md:px-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text">
          Welcome to PharmRx
        </h1>
        <h2 className="text-2xl md:text-3xl mt-6 opacity-90 animate-slide-up">
          Get your medications easily & safely
        </h2>
        <p className="text-lg md:text-xl mt-4 font-medium animate-fade-in">
          We offer fast medication delivery & convenient vaccinations. Take control of your health today!
        </p>
        <p className="mt-2 font-semibold animate-pulse">
          Schedule your vaccination appointment now
        </p>

        {/* Buttons */}
        <div className="mt-8 justify-center flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <Link
            to="/vaccination"
            className="px-8 py-3 text-lg font-semibold rounded-lg bg-gray-800 hover:bg-gray-900 transition duration-300 shadow-lg">
            Schedule Vaccination
          </Link>
          <Link
            to="/faq"
            className="px-8 py-3 text-lg font-semibold rounded-lg border-2 hover:bg-black transition duration-300 shadow-lg">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
