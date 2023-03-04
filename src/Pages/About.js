import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const About = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
<div className="w-full h-[75px] bg-gray-200">
    <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div className="text-[teal] cursor-pointer">
            <h1><Link to='/'>PharmRx</Link></h1>
        </div>
        <div className="hidden md:flex">
            <ul className="flex text-white items-center">
                <li className="ml-4 cursor-pointer"><Link to="/About">About</Link></li>
                <li className="ml-4 cursor-pointer"><Link to="/refill">Refill</Link></li>
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
            <li className="mb-4 text-xl"><Link to="/refill">Refill</Link></li>
            <li className="mb-4 text-xl"><Link to="/shop">Shop</Link></li>
            <li className="mb-4 text-xl"><Link to="/contact">Contact</Link></li>
            <button className="m-8"><Link to="/login">Sign in</Link></button>
        </ul>
        </div>
    </div>

    <div className="w-full h-[90vh] top-[90px]">
    <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
    <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-black px-4">
      <h1 className="text-[40px]">Welcome to PharmRx</h1>
      <p className="mt-5 text-black text-[20px] text-bold">We have been opening for very long. We serve patients with medications and Over the Counter. We also give flu shot and Shingle shots. Patients can also schedule their appointment on when to get vaccinated. We professionals work our best to serve our patients and satisfy them with their needs.</p>
    </div>
    </div>

</div>
  )
}

export default About