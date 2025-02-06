import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import Medications from '../assets/Medications.jpg';
import NavBar from '../components/Navbar';

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full h-screen flex flex-col">
            <NavBar />
            <div className="relative flex-1 flex items-center justify-center">

                {/* SignUp Form Container */}
                <div className="bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl rounded-xl p-10 w-full max-w-md animate-fade-in">
                    <BiArrowBack onClick={() => navigate(-1)} className="cursor-pointer text-2xl mb-4 hover:scale-110 transition" />
                    
                    <h2 className="text-3xl font-bold text-center mb-6">Create an Account</h2>

                    {/* Sign Up Form */}
                    <form className="space-y-5">
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold">Email</label>
                            <input 
                                className="bg-white/20 border border-gray-300/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>
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
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold">Confirm Password</label>
                            <input 
                                className="bg-white/20 border border-gray-300/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                                type="password"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Sign Up Button */}
                        <button className="w-full py-3 mt-4 bg-black text-white font-semibold rounded-md shadow-md hover:from-teal-500 hover:to-blue-600 transition duration-300">
                            Sign Up
                        </button>

                        {/* Already Have an Account */}
                        <p className="mt-6 text-center">
                            Already have an account? <Link to="/login" className="hover:underline">Log in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
