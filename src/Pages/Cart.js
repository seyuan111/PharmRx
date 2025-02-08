import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Cart = ({ isOpen, onClose }) => {

    const cartItems = [
        { id: 1, name: "Aspirin", price: 10 },
        { id: 2, name: "Cough Syrup", price: 15 },
        { id: 3, name: "Vitamin C", price: 20 },
      ];

  return (
        <div
      className={`fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50 p-4`}
    >
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <AiOutlineClose size={24} className="cursor-pointer" onClick={onClose} />
      </div>
      <ul className="mt-4 space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <span>{item.name}</span>
              <span className="font-bold">${item.price}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty</p>
        )}
      </ul>
      {cartItems.length > 0 && (
        <div className="mt-6 text-center">
          <Link
            to="/checkout"
            className="block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  )
}

export default Cart