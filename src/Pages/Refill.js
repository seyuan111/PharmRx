import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Refill = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div>
    <div className="w-full h-[75px] bg-gray-200">
    <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="text-[teal] cursor-pointer">
            <h1><Link to='/'>PharmRx</Link></h1>
        </div>
        <div className="hidden md:flex">
            <ul className="flex text-white items-center">
                <li className="ml-4 cursor-pointer"><Link to="/about">About</Link></li>
                <li className="ml-4 cursor-pointer">Refill</li>
                <li className="ml-4 cursor-pointer"><Link to="/shop">Shop</Link></li>
                <li className="ml-4 cursor-pointer"><Link to="/contact">Contact</Link></li>
                <button className="ml-4 cursor-pointer"><Link to="/login">Sign in</Link></button>
            </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={30} className="text-black"/> : <AiOutlineMenu size={30} className="text-black"/>}
        </div>
        <div className={nav ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
        <ul>
            <li className="mb-4 text-xl"><Link to="/About">About</Link></li>
            <li className="mb-4 text-xl">Refill</li>
            <li className="mb-4 text-xl"><Link to="/shop">Shop</Link></li>
            <li className="mb-4 text-xl"><Link to="/contact">Contact</Link></li>
            <button className="m-8"><Link to="/login">Sign in</Link></button>
        </ul>
        </div>
    </div>
    </div>

    <div className="w-full h-screen top-[90px] bg-zinc-900/50">
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