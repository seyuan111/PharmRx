import React from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-zinc-900/50">
      <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
      <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-[40px] text-white underline">Welcome to PharmRx</h1>
        <h1 className="text-[25px] mt-12 text-white">Get your medications here</h1>
        <p className="text-[20px] my-5 font-bold">Get started with getting your medications here. We offer delivery of medications and vaccinations. Schedule your vaccination appointment now.</p>
        <p className="mb-5 font-bold underline">Schedule your vaccination appointment now</p>
        <div className="text-white">
          <button><Link to="/vaccination">Schedule Vaccination</Link></button>
          <button className="ml-6"><Link to="faq">FAQ</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Hero