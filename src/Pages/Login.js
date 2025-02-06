import React from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';

const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <NavBar />
      <div className="relative flex-1 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        {/* Login Form Container */}
        <div className="bg-white/20 border border-white/50 backdrop-blur-lg shadow-xl rounded-xl p-8 w-full max-w-md animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

          {/* Login Form */}
          <form className="space-y-5">
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Username</label>
              <input 
                className="bg-white/20 border border-gray-300/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-semibold">Password</label>
              <input 
                className="bg-white/20 border border-gray-300/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Sign In Button */}
            <button className="w-full py-3 mt-4 bg-black text-white font-semibold rounded-md shadow-md hover:bg-gray-900 transition duration-300">
              Sign in
            </button>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm mt-4">
              <div className="flex items-center">
                <input className="mr-2" type="checkbox" />
                <p>Remember me</p>
              </div>
              <Link to="" className="hover:underline">Forgot password?</Link>
            </div>

            {/* Sign Up Link */}
            <p className="mt-6 text-center">
              Don't have an account? <Link to="/signup" className="hover:underline">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

