import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-neutral-700">
        <div className="text-white w-full h-[80px] px-4 flex justify-center items-center gap-8">
            <FaTwitter className="hover:text-black cursor-pointer" size={30}/>
            <FaInstagram className="hover:text-black cursor-pointer" size={30}/>
            <FaFacebook className="hover:text-black cursor-pointer" size={30}/>
            <FaYoutube className="hover:text-black cursor-pointer" size={30}/>
            <FaLinkedin className="hover:text-black cursor-pointer" size={30}/>
        </div>
        <p className="text-center text-neutral-400">All rights with <span className="text-white cursor-pointer">Sean&Shah</span></p>
    </div>
  )
}

export default Footer