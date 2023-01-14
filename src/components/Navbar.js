import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="w-full h-[90px] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div className="text-[teal] cursor-pointer">
                <h1>PharmRx</h1>
            </div>
            <div className="hidden md:flex">
                <ul className="flex text-white items-center">
                    <li className="ml-4 cursor-pointer">About</li>
                    <li className="ml-4 cursor-pointer">Vaccination</li>
                    <li className="ml-4 cursor-pointer">NewsLetter</li>
                    <li className="ml-4 cursor-pointer">Contact</li>
                    <button className="ml-4 cursor-pointer">Go to Medication</button>
                </ul>
            </div>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-black"/> : <AiOutlineMenu size={30} className="text-black"/>}
            </div>
            <div className={nav ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
            <ul>
                <li className="mb-4 text-xl">About</li>
                <li className="mb-4 text-xl">Vaccination</li>
                <li className="mb-4 text-xl">NewsLetter</li>
                <li className="mb-4 text-xl">Contact</li>
                <button className="m-8">Go to Medication</button>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar