import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black bg-gray-300">
        <h1 className="w-full text-3xl font-bold">PharmRx</h1>
        <p className="py-4">PharmRx has been the most trusted website for patients to get and receive their medications and book their vaccination appointment.</p>
        <div className="flex justify-between md:w-[75%] my-6">
            <FaTwitter className="text-blue-500" size={30}/>
            <FaInstagram size={30}/>
            <FaFacebook className="text-blue-800" size={30}/>
            <FaYoutube className="text-red-500" size={30}/>
            <FaLinkedin className="text-blue-800" size={30}/>
        </div>
    </div>
  )
}

export default Footer