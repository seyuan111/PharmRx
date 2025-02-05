import React from 'react';
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';

const SignUp = () => {
    const back = useNavigate();
    return (
        <div className="w-full h-screen flex flex-col">
            <NavBar />
            <div className="p-12 relative flex-1 flex items-center justify-center bg-zinc-900/80">
                <img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay -z-10" src={Medications} alt="Medications" />
                <div className="mt-20 border-2 shadow-lg rounded-lg p-8 w-full max-w-md">
                    <BiArrowBack onClick={() => back(-1)} className="text-white cursor-pointer text-2xl mb-4" />
                    <h2 className="md:text-3xl text-2xl font-bold text-center text-white">PharmRx Sign Up</h2>
                    <form className="mt-6">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 text-white">Email:</label>
                            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 text-white">Username:</label>
                            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500" type="text" placeholder="Enter your username" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 text-white">Password:</label>
                            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500" type="password" placeholder="Enter your password" />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 text-white">Confirm Password:</label>
                            <input className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-teal-500" type="password" placeholder="Confirm your password" />
                        </div>
                        <button className="w-full py-3 mt-6 hover:bg-black text-white font-semibold rounded-md transition duration-300">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;