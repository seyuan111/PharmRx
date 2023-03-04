import React, {useState} from 'react'
import Medications from '../assets/Medications.jpg'
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const FAQ = () => {
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
                <li className="ml-4 cursor-pointer"><Link to="/refill">Refill</Link></li>
                <li className="ml-4 cursor-pointer"><Link to="/shop">Shop</Link></li>
                <li className="ml-4 cursor-pointer"><Link to="/contact">Contact</Link></li>
                <button className="ml-4 cursor-pointer">Sign in</button>
            </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={30} className="text-black"/> : <AiOutlineMenu size={30} className="text-black"/>}
        </div>
        <div className={nav ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
        <ul>
            <li className="mb-4 text-xl"><Link to="/About">About</Link></li>
            <li className="mb-4 text-xl"><Link to="/refill">Refill</Link></li>
            <li className="mb-4 text-xl"><Link to="/shop">Shop</Link></li>
            <li className="mb-4 text-xl"><Link to="/contact">Contact</Link></li>
            <button className="m-8">Sign in</button>
        </ul>
        </div>
    </div>
</div>

    <div className="w-full h-[90vh] top-[90px]">
    <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
    <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-black px-4">
      <h1 className="text-[40px]">PharmRx</h1>
      <h1 className="text-[30px] mt-5 text-black">We offer medications and we deliver medications. We also sell OTC. We accept all insurances and OTC cards.</h1>
      <p className="text-[25px] my-5 font-bold">We also do vaccinations. You can schedule your appointment and come to the pharmacy without any risks</p>
    </div>
  </div>
  </div>
  )
}

export default FAQ