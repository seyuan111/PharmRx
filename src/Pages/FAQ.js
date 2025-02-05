import React from 'react';
import Medications from '../assets/Medications.jpg';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

const FAQ = () => {
  return (
    <div className="relative w-full min-h-screen">
      <NavBar />

      {/* Background Image with Overlay */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img src={Medications} className="w-full h-full object-cover absolute top-0 left-0 -z-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10" />

        {/* Content Section */}
        <div className="text-center text-white px-6 md:px-12 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PharmRx</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            We offer medications, OTC products, and convenient home deliveries.
            We accept all insurances and OTC cards to make your experience seamless.
          </p>

          <p className="text-xl md:text-2xl font-semibold my-6 text-white">
            We also provide vaccinations! Schedule your appointment today and visit us without any hassle.
          </p>

          {/* CTA Button */}
          <Link to="/vaccination" className="hover:bg-tblack border-2 text-white px-6 py-3 rounded-lg text-lg font-medium transition duration-300">
            Schedule Vaccination
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
