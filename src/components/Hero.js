import React from 'react'
import Medications from '../assets/Medications.jpg'

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <img src={Medications} className="w-full h-full object-cover absolute -z-10" />
      <div className="w-full h-[90%] text-center flex flex-col justify-center items-center text-rose-800 px-4">
        <h1 className="text-[40px]">PharmRx</h1>
        <h1 className="text-[30px] mt-5 text-white">Get your medications here</h1>
        <p className="text-[25px] my-5 font-bold">Get started with getting your medications here. We offer delivery of medications and vaccinations. Schedule your vaccination appointment now.</p>
        <p className="mb-5 font-bold underline">Schedule your vaccination appointment now</p>
        <div className="text-white">
          <button>Schedule Vaccination</button>
          <button className="ml-6">FAQ</button>
        </div>
      </div>
    </div>
  )
}

export default Hero