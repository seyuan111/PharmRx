import React from 'react';
import Medications from '../assets/Medications.jpg';
import NavBar from '../components/Navbar';

const About = () => {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      
      {/* Centered Box Layout */}
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row animate-fade-in">
          
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img 
              src={Medications} 
              alt="Medications" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center text-gray-800">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600">Welcome to PharmRx</h1>
            <p className="text-lg leading-relaxed">
              At <span className="font-semibold text-teal-500">PharmRx</span>, we have been proudly serving our patients for years, providing top-quality **medications** and **over-the-counter** products.  
              <br /><br />
              We offer flu shots and shingles vaccines, and you can schedule an appointment at your convenience. Our professional team is dedicated to **ensuring the best healthcare experience** for every patient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
