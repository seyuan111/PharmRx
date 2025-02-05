import React from 'react';
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/70 flex items-center justify-center">
      <img src={Medications} className="absolute inset-0 w-full h-full object-cover -z-10" alt="Medications" />
      <div className="mt-20 w-full max-w-3xl text-center text-white px-6 md:px-10">
        <h1 className="text-4xl md:text-5xl font-bold underline">Welcome to PharmRx</h1>
        <h2 className="text-2xl md:text-3xl mt-6">Get your medications here</h2>
        <p className="text-lg md:text-xl mt-4 font-semibold">
          Get started with getting your medications here. We offer delivery of medications and vaccinations.
        </p>
        <p className="mt-2 font-semibold underline">Schedule your vaccination appointment now</p>
        <div className="mt-6 flex flex-col justify-center sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <Link to="/vaccination" className="border-2 hover:bg-black text-white px-6 py-3 rounded-lg transition duration-300">
            Schedule Vaccination
          </Link>
          <Link to="/faq" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;