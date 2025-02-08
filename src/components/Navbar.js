import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMedicineBox } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Cart from '../Pages/Cart';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartItemCount = 3; // Example count, replace with actual state

  const handleNav = () => setNav(!nav);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <nav className="w-full border-b-2 border-black bg-neutral-200 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="flex items-center">
          <AiOutlineMedicineBox className="w-6 h-6 mr-2" />
          <h1 className="text-2xl font-bold">
            <Link to="/">PharmRx</Link>
          </h1>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 font-medium">
          <Link to="/about" className="hover:text-white transition duration-300">About</Link>
          <Link to="/shop" className="hover:text-white transition duration-300">Shop</Link>
          <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
        </div>

        {/* Right Side (Login & Cart) */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/login" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
            Sign In
          </Link>
          <button 
            onClick={toggleCart} 
            className="relative bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300 flex items-center justify-center"
          >
            <FaShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-[70%] h-full bg-white shadow-lg transform ${nav ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        <div className="flex justify-end p-4">
          <AiOutlineClose size={30} className="text-gray-700" onClick={handleNav} />
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-8 text-lg font-medium text-gray-700">
          <li><Link to="/about" onClick={handleNav}>About</Link></li>
          <li><Link to="/shop" onClick={handleNav}>Shop</Link></li>
          <li><Link to="/contact" onClick={handleNav}>Contact</Link></li>
          <li><Link to="/login" onClick={handleNav}>Sign In</Link></li>
          <li>
            <button 
              onClick={toggleCart} 
              className="relative flex items-center justify-center"
            >
              <FaShoppingCart className="w-6 h-6 text-black" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </li>
        </ul>
      </div>

      {/* Cart Sidebar */}
      <Cart isOpen={cartOpen} onClose={toggleCart} />
    </nav>
  );
};

export default Navbar;

