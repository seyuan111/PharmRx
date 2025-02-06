import React from 'react';
import NavBar from '../components/Navbar';
import Medications from '../assets/Medications.jpg'

const Contact = () => {
  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="w-full min-h-screen flex flex-col justify-center items-center px-6 pt-24">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Contact for Help</h1>
        
        <div className="bg-neutral-300 shadow-lg rounded-lg p-6 max-w-md w-full text-center">
          <p className="text-lg font-semibold text-gray-700">📞 Phone: <span className="text-blue-600">444-555-6666</span></p>
          <p className="text-lg font-semibold text-gray-700 mt-3">📠 Fax: <span className="text-blue-600">222-333-4444</span></p>
          <p className="text-lg font-semibold text-gray-700 mt-3">🕒 Store Hours:</p>
          <p className="text-gray-600">Monday - Saturday: <span className="font-bold">10AM - 5PM</span></p>
          <p className="text-gray-600">Sunday: <span className="font-bold">10AM - 3PM</span></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;