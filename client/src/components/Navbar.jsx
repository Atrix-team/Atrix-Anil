import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/ais-logo.png'
import CsButton from './CsButton'

const Navbar = () => {
    return (
        <nav className=' px-10 py-2  flex justify-between items-center absolute min-w-full z-30 '>
            <div> <Link to={"/"}> <img src={logo} alt="site-logo" className=' w-24  grayscale-[1] brightness-[50] ' /> </Link> </div>
            <div> <ul className='gap-11 hidden lg:flex '>
                <li> <NavLink to={'/'} className={({ isActive }) => `  ${isActive ? " text-white font-bold bg-gray-700 py-2 px-4 rounded" : "text-white font-semibold "}`}>Home</NavLink> </li>
                <li> <NavLink to={'/about-us'} className={({ isActive }) => ` ${isActive ? " text-white font-bold bg-gray-700 py-2 px-4 rounded" : "text-white font-semibold "}`}>About Us</NavLink> </li>
                <li> <NavLink to={'/services'} className={({ isActive }) => ` ${isActive ? " text-white font-bold bg-gray-700 py-2 px-4 rounded" : "text-white font-semibold  "}`}>Services</NavLink> </li>
                <li> <NavLink to={'/portfolio'} className={({ isActive }) => ` ${isActive ? " text-white font-bold bg-gray-700 py-2 px-4 rounded" : "text-white font-semibold  "}`}>Portfolio</NavLink> </li>
                <li> <NavLink to={'/blog'} className={({ isActive }) => ` ${isActive ? " text-white font-bold bg-gray-700 py-2 px-4 rounded" : "text-white font-semibold  "}`}>Blog</NavLink> </li>
                <li> <NavLink to={'/Contact-us'} className={({ isActive }) => ` ${isActive ? " text-white font-bold bg-gray-700 py-2 px-4 rounded" : "text-white font-semibold  "}`}>Contact Us</NavLink> </li>
            </ul>
            </div>
            <div className=' text-white' >  <CsButton mybtn={"Let's Talk"}  ></CsButton></div>
        </nav>
    )
}


export default Navbar