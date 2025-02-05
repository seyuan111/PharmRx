import React, { useState } from "react";
import NavBar from "../components/Navbar";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="bg-neutral-600">
      <NavBar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>

        {/* Billing & Shipping Information */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Payment Section */}
          <h2 className="text-xl font-bold text-gray-800 mt-6 md:col-span-2">Payment Details</h2>

          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-1">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Order Summary */}
          <div className="md:col-span-2 p-6 bg-gray-100 rounded-lg mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <p className="text-gray-700">Item 1: $20</p>
            <p className="text-gray-700">Item 2: $30</p>
            <p className="text-gray-700 font-semibold mt-2">Total: $50</p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 md:col-span-2"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
