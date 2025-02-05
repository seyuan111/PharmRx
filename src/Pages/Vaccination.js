import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import NavBar from '../components/Navbar'

const Vaccination = () => {
  return (
    <div className="w-full h-[75px] bg-gray-200">

    <NavBar />

    <div className="w-full h-screen top-[90px] bg-zinc-900/50">
    <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
    <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-white px-4">
        <h1>Schedule your appointment</h1>
        <h3 className="text-white text-[20px]">Enter appointment date below</h3>
        <div className="flex flex-col sm:flex-row items-center justify-between w-50">
        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter appointment date" />
        <button className="bg-blue-300 text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Enter</button>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Vaccination