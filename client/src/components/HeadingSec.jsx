import React from 'react'
import style from "./LogosMarquee.module.css"
import { assertsImages } from '../assets/assets.js'
import Testing from './Testing.jsx'



const HeadingSec = () => {
    return (
        <div className='  bg-cs_theme_black text-cs_white py-40'>
            <div className="container mx-auto"><h1>About Us</h1></div>

            <Testing></Testing>


        </div>
    )
}

export default HeadingSec