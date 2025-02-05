import React, { useState } from "react";
import NavBar from "../components/Navbar";

const Delivery = () => {
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Delivery request sent to: ${address}`);
  };

  return (
    <div className="bg-neutral-600 min-h-screen">
      <NavBar />

      <div className="w-full min-h-screen flex flex-col justify-center items-center px-6 pt-24">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Enter Your Address for Delivery</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Request Delivery
          </button>
        </form>
      </div>
    </div>
  );
};

export default Delivery;
