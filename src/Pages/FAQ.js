import React, {useState} from 'react'
import Medications from '../assets/Medications.jpg'
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import NavBar from '../components/Navbar'

const FAQ = () => {
  return (
    <div>

    <NavBar />

    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
    <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
    <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-[40px]">PharmRx</h1>
      <h1 className="text-[30px] mt-5 text-white">We offer medications and we deliver medications. We also sell OTC. We accept all insurances and OTC cards.</h1>
      <p className="text-[25px] my-5 font-bold">We also do vaccinations. You can schedule your appointment and come to the pharmacy without any risks</p>
    </div>
  </div>
  </div>
  )
}

export default FAQ