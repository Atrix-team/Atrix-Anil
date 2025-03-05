import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CsButton = ({ mybtn }) => {
    return (
        <>
            <button className=' bg-[#505052] hover:bg-cs_green  flex justify-center items-center gap-2 py-2 px-4  font-bold rounded-lg  transition-all duration-300 tracking-wider '> {mybtn} <FaArrowRightLong className=' -rotate-45' /></button>
        </>
    )
}

export default CsButton