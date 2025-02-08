import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { BiTransfer } from 'react-icons/bi';
import { FcPhoneAndroid } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Prescriptions = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-6 py-16 text-black text-center">
      <h1 className="text-4xl font-extrabold animate-fade-in">
        Get Your Prescriptions The Way You Want
      </h1>
      <p className="text-xl mt-4 opacity-90 animate-slide-up">Choose the option that works best for you</p>

      {/* Cards */}
      <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Delivery Card */}
        <div className="relative bg-neutral-600/90 border border-gray-600 rounded-xl p-8 text-center shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="justify-center items-center text-[50px] text-teal-400 mx-auto">
            <CiDeliveryTruck />
          </div>
          <h2 className="text-white text-2xl font-bold mt-4">Home Delivery</h2>
          <p className="mt-3 text-gray-300">
            Get your medications delivered right to your doorstep with ease.
          </p>
          <Link
            to="/delivery"
            className="inline-block mt-6 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-b from-black to-gray-900 hover:bg-black text-white transition duration-300 shadow-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Over-the-Counter Card */}
        <div className="relative bg-neutral-600/90 border border-gray-600 rounded-xl p-8 text-center shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-[50px] text-blue-400 mx-auto">
            <FcPhoneAndroid />
          </div>
          <h2 className="text-white text-2xl font-bold mt-4">Over-the-Counter</h2>
          <p className="mt-3 text-gray-300">
            Order non-prescription medications quickly and conveniently.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-6 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-b from-black to-gray-900 hover:bg-black text-white transition duration-300 shadow-lg"
          >
            Order Now
          </Link>
        </div>

        {/* Transfer Prescription Card */}
        <div className="relative bg-neutral-600/90 border border-gray-600 rounded-xl p-8 text-center shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
          <div className="text-[50px] text-yellow-400 mx-auto">
            <BiTransfer />
          </div>
          <h2 className="text-white text-2xl font-bold mt-4">Transfer Prescription</h2>
          <p className="mt-3 text-gray-300">
            Easily transfer your prescriptions to our pharmacy hassle-free.
          </p>
          <Link
            to="/transfer"
            className="inline-block mt-6 px-6 py-3 text-lg font-semibold rounded-lg bg-gradient-to-b from-black to-gray-900 hover:bg-black text-white transition duration-300 shadow-lg"
          >
            Transfer Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Prescriptions;
