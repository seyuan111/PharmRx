import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Medications from '../assets/Medications.jpg'
import {BiArrowBack} from 'react-icons/bi'
import { useParams, useNavigate } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const SignUp = () => {
    const back = useNavigate()
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

    <div className="relative w-full h-screen bg-zinc-900/80">
        <img className="absolute w-full h-full object-cover mix-blend-overlay" src={Medications} alt="" />
        <div className="flex justify-center items-center h-full">
            <form className="max-w-[400px] w-full mx-auto bg-white p-8">
            <BiArrowBack onClick={() => back(-1)} className="cursor-pointer text-[20px]" />
                <h2 className="text-4xl font-bold text-center py-8 relative">PharmRx Sign Up</h2>
                <div className="flex flex-col mb-4">
                    <label className="relative mb-2">Email:</label>
                    <input className="border relative bg-gray-100 p-2" type="text" placeholder="email"></input>
                </div>
                <div className="flex flex-col mb-4">
                    <label className="relative mb-2">Username:</label>
                    <input className="border relative bg-gray-100 p-2" type="text" placeholder="username"></input>
                </div>
                <div className="flex flex-col">
                    <label className="relative mb-2">Password:</label>
                    <input className="border relative bg-gray-100 p-2" type="password" placeholder="password"></input>
                </div>
                <div className="flex flex-col">
                    <label className="relative mb-2">Confirm Password:</label>
                    <input className="border relative bg-gray-100 p-2" type="password" placeholder="confirm password"></input>
                </div>
                <button className="w-full py-3 mt-8 bg-blue-400 hover:bg-blue-800 relative text-black hover:text-white cursor-pointer">Sign Up</button> 
            </form>
        </div>        
    </div>
</div>
  )
}

export default SignUp