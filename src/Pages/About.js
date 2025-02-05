import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import NavBar from '../components/Navbar'

const About = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
<div className="w-full h-[75px] bg-gray-200">
    <NavBar />

    <div className="w-full h-screen top-[90px] bg-zinc-900/70">
    <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
    <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-2xl">Welcome to PharmRx</h1>
      <p className="mt-5 text-white text-[20px] text-bold">We have been opening for very long. We serve patients with medications and Over the Counter. We also give flu shot and Shingle shots. Patients can also schedule their appointment on when to get vaccinated. We professionals work our best to serve our patients and satisfy them with their needs.</p>
    </div>
    </div>

</div>
  )
}

export default About