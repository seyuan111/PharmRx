import React, { useState } from "react";
import Medications from "../assets/Medications.jpg";
import NavBar from "../components/Navbar";

const Vaccination = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment scheduled for ${formData.name} on ${formData.date}`);
    setFormData({ name: "", email: "", phone: "", date: "" });
  };

  return (
    <div className="relative w-full min-h-screen">
      <NavBar />

      {/* Background Image with Overlay */}
      <div className="relative w-full h-screen flex items-center justify-center px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10" />

        {/* Form Section */}
        <div className="bg-white/60 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg text-center mt-10">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Schedule Your Vaccination</h1>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">Fill in the details below to book your appointment.</p>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-2 sm:p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-teal-500 w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-2 sm:p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-teal-500 w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-2 sm:p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-teal-500 w-full"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-2 sm:p-3 border rounded-md text-gray-900 focus:ring-2 focus:ring-teal-500 w-full"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-b from-black to-gray-900 hover:bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium hover:bg-teal-700 transition duration-300 w-full"
            >
              Schedule Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vaccination;
