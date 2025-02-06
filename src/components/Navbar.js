import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMedicineBox } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <nav className="w-full border-b-2 border-black bg-neutral-200 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-[1240px] mx-auto px-6 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <div className="flex items-center">
            <AiOutlineMedicineBox className="text-2xl mr-2" />
            <h1 className="text-2xl font-bold">
            <Link to="/">PharmRx</Link>
            </h1>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 font-medium">
          <Link to="/about" className="hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/shop" className="hover:text-white transition duration-300">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-white transition duration-300">
            Contact
          </Link>
        </div>

        {/* Right Side (Login & Checkout) */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Sign In
          </Link>
          <Link
            to="/checkout"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition duration-300"
          >
            Checkout
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[70%] h-full bg-white shadow-lg transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose size={30} className="text-gray-700" onClick={handleNav} />
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-8 text-lg font-medium text-gray-700">
          <li>
            <Link to="/about" onClick={handleNav} className="hover:text-teal-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={handleNav} className="hover:text-teal-600 transition duration-300">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNav} className="hover:text-teal-600 transition duration-300">
              Contact
            </Link>
          </li>
          <li className="bg-black">
            <Link
              to="/login"
              className="text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300"
              onClick={handleNav}
            >
              Sign In
            </Link>
          </li>
          <li className="bg-black">
            <Link
              to="/checkout"
              className="text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition duration-300"
              onClick={handleNav}
            >
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
