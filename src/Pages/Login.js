import React from 'react';
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg';
import NavBar from '../components/Navbar';

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar />
      <div className="p-12 relative flex-1 flex items-center justify-center bg-zinc-900/80">
        <img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-10" src={Medications} alt="Medications" />
        <div className="mt-20 border-2 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="md:text-3xl text-2xl font-bold text-center text-white">PharmRx Login</h2>
          <form className="mt-6">
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Username:</label>
              <input className="border border-gray-300 rounded-md p-2" type="text" placeholder="Enter your username" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 text-white">Password:</label>
              <input className="border border-gray-300 rounded-md p-2" type="password" placeholder="Enter your password" />
            </div>
            <button className="w-full py-3 mt-6 hover:bg-black text-white font-semibold rounded-md transition duration-300">Sign in</button>
            <div className="flex items-center justify-between mt-4">
              <input className="mr-2" type="checkbox" />
              <p className="text-white">Remember this account</p>
              <p className="text-neutral-400">Forgot password?<Link to="" className="ml-2">Change</Link></p>
            </div>
            <p className="mt-4 text-center text-neutral-400">
              Don't have an account? <Link to="/signup" className="text-white hover:underline">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;