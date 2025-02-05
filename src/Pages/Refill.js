import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import NavBar from '../components/Navbar'

const Refill = () => {

  return (
    <div>

    <NavBar />

    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
      <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
      <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-[40px]">Need to refill or transfer your medications?</h1>
        <div className="text-white mt-6 text-[20px] py-7">
          <button className="mx-10">Refill my medications</button>
          <button className="ml-6">Transfer my medications</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Refill